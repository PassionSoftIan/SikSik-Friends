import { atom } from "jotai";
import type { User } from "@/types";

export const userAtom = atom<User | null>({
  id: 1,
  email: "temp",
  nickname: "temp",
  profile: "/images/character/rabbit.png",
});
