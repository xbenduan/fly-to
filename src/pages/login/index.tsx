import Navbar from "@/layout/components/navbar";
import type { Component } from "solid-js";

const Login: Component = () => {
  return (
    <div class="w-full flex flex-col" style={{ height: "100vh" }}>
      <Navbar />
      <div class="flex-1 overflow-auto m-2">
        <div class="w-full max-w-xs m-auto mt-20 ">
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="用户名"
          />
          <input
            type="password"
            class="input input-bordered w-full mt-4"
            placeholder="密码"
          />
          <div class="mt-4 ">
            <button class="btn btn-primary w-full">登录</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
