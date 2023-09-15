// 모달 여는 로직
"use client";
import ModalBtn from "@/components/button";
import Modal from "@/components/modal";
import { useState } from "react";

export default function Portal() {
  const [isOpen, setIsOpen] = useState(false);

  /** 모달 활성화 */
  const handleOpenModal = () => {
    console.log("나와라 모달");
    setIsOpen(true);
  };
  /** 모달 비활성화 */
  const handleCloseModal = () => {
    console.log("닫혀라 모달");
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleOpenModal}>
        <h1>나와라 모달!</h1>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <h2>(children임) 여기에 넣고싶은 내용 넣기</h2>
          <button onClick={handleCloseModal}>Close modal</button>
        </Modal>
      )}
    </>
  );
}
