// import MoveBtn from "@/component/moveBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-2xl font-bold">
        어서오세요 Semi-Project 프로젝트 입니다.
      </p>
      <Link
        href="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        로그인
      </Link>
    </div>
  );
}
