"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import type { Frame } from "stompjs";
import type { Quiz, Room, SoketUser } from "@/types";
import { userAtom } from "@/store/userAtom";
import { useWebSocket } from "./WebSocketProvider";

// type SubscriptionQuizProps = {
//   children: ReactNode;
// };

export const TotalInfoContext = createContext<{
  quiz: Quiz | undefined | null;
  quizResult: SoketUser[];
  end: string;
  roomInfoPlay: Room | undefined;
}>({ quiz: undefined, quizResult: [], end: "", roomInfoPlay: undefined });

export default function SubscriptionQuiz({ roomId, children }: { roomId: number; children: React.ReactNode }) {
  const stompClient = useWebSocket();
  const router = useRouter();
  // const params = useParams();
  // const roomId = Number(params.id);
  // eslint-disable-next-line no-null/no-null
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [quizResult, setQuizResult] = useState<SoketUser[]>([]);
  const [end, setEnd] = useState<string>("");
  const [roomInfoPlay, setRoomInfoPlay] = useState<Room | undefined>(undefined);
  const [user] = useAtom(userAtom);
  const [soketUser] = useState<SoketUser>({
    userId: user.user_id,
    userName: user.nickname,
    userScore: user.score,
    userRanking: user.rank,
    ready: false,
    leader: false,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (stompClient) {
      // 게임 퀴즈 구독
      const subscription = stompClient.subscribe(
        `/sub/game/quiz/${roomId}`,
        function handleRoomInfo(frame: Frame) {
          const roomQuiz = frame.body;
          console.log(frame.body);
          // eslint-disable-next-line no-empty
          if (roomQuiz === "start!") {
            router.push(`/game/start/play/${roomId}`);
          } else {
            setQuiz(JSON.parse(roomQuiz));
          }
        },
        {}
      );
      // 게임 결과 구독
      const subscription1 = stompClient.subscribe(
        `/sub/game/result/${roomId}`,
        function handleRoomInfo(frame: Frame) {
          const resultUsers = JSON.parse(frame.body);
          setQuizResult(resultUsers);
          console.log(resultUsers, "게임 결과");
        },
        {}
      );

      // 게임 end 구독
      const subscription2 = stompClient.subscribe(
        `/sub/game/end/${roomId}`,
        function handleRoomInfo(frame: Frame) {
          const gameEnd = frame.body;
          console.log(gameEnd, "게임 end 구독");
          setEnd(gameEnd);
        },
        {}
      );

      // room info 구독
      const subscription3 = stompClient.subscribe(
        `/sub/room/info/${roomId}`,
        function handleRoomInfo(frame: Frame) {
          const gameEnd = JSON.parse(frame.body);
          setRoomInfoPlay(gameEnd);
          console.log(gameEnd, "gameinfo");
        },
        {}
      );
      stompClient.send(`/pub/room/entrance/${roomId}`, {}, JSON.stringify(soketUser));

      return () => {
        stompClient.send(`/pub/room/exit/${roomId}`, {}, JSON.stringify(soketUser));
        console.log("URL 접근했을때 ");

        subscription.unsubscribe();
        subscription1.unsubscribe();
        subscription2.unsubscribe();
        subscription3.unsubscribe();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stompClient]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TotalInfoContext.Provider value={{ quiz, quizResult, end, roomInfoPlay }}>
      {/* 자식 컴포넌트 렌더링 */}
      {children}
    </TotalInfoContext.Provider>
  );
}
