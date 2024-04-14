import { Component, JSXElement } from "solid-js";
import Menus from "./components/menus";
import Base from "./index";
import KeepTag from "./components/keep-tag";

const LayoutPage: Component<{ children?: JSXElement }> = (props) => {
  return (
    <Base>
      <div class="flex h-full">
        <div class="mr-2">
          <KeepTag />
          <Menus
            active="0"
            list={[
              {
                label: "0",
                name: "items 1",
              },
              {
                label: "1",
                name: "items 2",
              },
              {
                label: "2",
                name: "items 3",
              },
            ]}
            class="bg-base-300 w-56 rounded-lg  "
          />
        </div>
        <div class="w-full h-full overflow-auto bg-base-300 rounded-md">
          {props.children}
        </div>
      </div>
    </Base>
  );
};

export default LayoutPage;
