"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Image from "next/image";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const chatList = [
    {
      name: "홍길동",
      time: "오후 3:30",
      messageCount: 2,
      lastMessage: "안녕하세요!",
    },
    {
      name: "김영희",
      time: "오전 10:15",
      messageCount: 5,
      lastMessage: "오늘 약속 어때?",
    },
    {
      name: "이철수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "김민수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "황익욱",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "김민수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "황익욱",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
  ];

  return (
    <>
      {/* 플로팅 버튼 */}
      <div
        className="z-50 fixed bottom-7 right-7 w-16 h-16 bg-white text-center text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        메시지
      </div>
      {open && (
        <div className="fixed bottom-28 right-7 w-96 h-[600px] bg-[#ffffff] z-50 shadow-lg rounded-[32px] p-6">
          <div className="text-[#000000] pb-2 text-[20px] font-bold">
            메세지
          </div>
          <Input
            height="h-[48px]"
            width="w-full"
            placeholder="메시지를 검색해보세요"
          />
          {/* 채팅 리스트 */}
          <div className="mt-4 space-y-3 h-[450px] w-[100%] overflow-auto">
            {chatList.map((chat, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b w-full"
              >
                <Image
                  src={"/layout/profile.svg"}
                  width={70}
                  height={70}
                  alt="프로필"
                />
                <div className="w-[100%] items-center ml-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="font-bold items-center text-black">
                        {chat.name}
                      </div>
                      <div className="text-sm text-gray-400 ml-2">
                        {chat.time}
                      </div>
                    </div>

                    {chat.messageCount > 0 && (
                      <div className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">
                        {chat.messageCount}
                      </div>
                    )}
                  </div>

                  <div className="text-sm text-gray-500">
                    {chat.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
