import { JSXElement, type Component } from "solid-js";
import Navbar from "@/layout/components/navbar";
import { useLogin } from "@/hooks/useLogin";
import Menus from "./components/menus";
import { useNavigate } from "@solidjs/router";

const Base: Component<{ children: JSXElement }> = (props) => {
  const { menus, userInfo } = useLogin();
  const to = useNavigate();

  return (
    <div class="w-full flex flex-col" style={{ height: "100vh" }}>
      <Navbar login={userInfo}>
        <Menus
          active="/"
          list={menus}
          class="menu-horizontal"
          onClick={({ label }) => to(label)}
        />
      </Navbar>
      <div class="flex-1 overflow-auto m-2">{props.children}</div>
    </div>
  );
};

export default Base;
