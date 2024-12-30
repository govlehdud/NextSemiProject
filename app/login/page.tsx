"use client";

import InputType from "@/component/Input-type";
import MoveBtn from "@/component/moveBtn";
import { useActionState } from "react";
import { login } from "./action";

export default function Login() {
  const [state, dispatch] = useActionState(login, null);
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold">Login Page입니다!!</h1>
      <form
        className="flex flex-col items-center justify-center"
        action={dispatch}
      >
        <div className="flex flex-col items-center justify-center gap-2 ">
          <InputType name="id" type="text" placeholder="아이디" />
          <InputType name="password" type="password" placeholder="비밀번호" />
        </div>
        <MoveBtn text="로그인" />
      </form>
    </div>
  );
}
