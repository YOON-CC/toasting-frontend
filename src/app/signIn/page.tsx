"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [nickname, setNickname] = useState("");
  const [tistoryId, setTistoryId] = useState("");
  const [velogId, setVelogId] = useState("");

  const handleCheckNickname = () => {
    // 닉네임 중복 확인 로직 추가
    console.log("닉네임 중복 확인:", nickname);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-50">
        {/* 왼쪽 요소: 로고와 input */}
        <div className="flex items-center gap-4 flex-1 basis-1/2 pr-4">
          <Image src={"/logo/logo.svg"} width={105} height={48} alt="로고" />
        </div>

        {/* 오른쪽 요소 */}
        <div className="flex justify-end items-center flex-1 basis-1/2 space-x-8 text-[#76787F] relative">
          <div className="rounded-full w-[90px] h-[40px] flex justify-center items-center font-medium text-[#44361D] ml-4 cursor-pointer border border-[#44361D]">
            로그인
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto p-6 mt-16">
        <h2 className="text-[30px] font-bold text-[#44361D]">
          Toasting 가입이 코 앞이에요!
        </h2>
        <p className="text-gray-600 mt-4">
          가입을 위해 아래 정보를 입력해주세요
        </p>

        {/* 닉네임 입력 */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-[#44361D]">
            * 닉네임을 입력해주세요.
          </label>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="w-[65%] p-2 border rounded-xl text-black text-[14px]"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              style={{ outline: "none" }}
            />
            <button
              onClick={handleCheckNickname}
              className="w-[20%] ml-2  py-2 bg-[#44361D] text-white rounded-xl text-[14px]"
            >
              중복 확인
            </button>
          </div>
        </div>

        <hr className="mt-8" />

        {/* Tistory & Velog ID 입력 (선택 사항) */}
        <div className="mt-8">
          <div className="flex">
            <p className="text-[#c2c2c2] text-sm font-medium">(선택)</p>
            <p className="text-[#44361D] text-sm font-medium ml-1">
              {" "}
              기존 글 연동을 위한 Tistory, Velog 아이디를 입력해주세요
            </p>
          </div>
          {/* Tistory ID */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              • Tistory ID가 있다면 입력해주세요
            </label>
            <div className="flex items-center mt-4">
              <span className="text-[#9D9FA4]">https://</span>
              <input
                type="text"
                placeholder="ID를 입력해주세요"
                className="flex-1 outline-none ml-1 border rounded-xl p-2 text-[#44361D]"
                value={tistoryId}
                onChange={(e) => setTistoryId(e.target.value)}
              />
              <span className="text-[#9D9FA4]">.tistory.com/rss</span>
            </div>
          </div>

          {/* Velog ID */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-600">
              • Velog ID가 있다면 입력해주세요
            </label>
            <div className="flex items-center mt-4">
              <span className="text-[#9D9FA4]">https://v2.velog.io/rss/</span>
              <input
                type="text"
                placeholder="ID를 입력해주세요"
                className="flex-1 outline-none ml-1 border rounded-xl p-2 text-[#44361D]"
                value={velogId}
                onChange={(e) => setVelogId(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex justify-between mt-8">
          <button className="bg-[white] px-6 py-2 border rounded-xl text-[#44361D] w-[48%]">
            취소
          </button>
          <button
            className="bg-[#ECEBE8] px-6 py-2 text-white rounded-xl w-[48%]"
            disabled
          >
            완료
          </button>
        </div>
      </div>
    </>
  );
}
