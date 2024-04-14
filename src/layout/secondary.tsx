import { Component, JSXElement } from "solid-js";
import Base from "./index";

const App: Component<{ children?: JSXElement }> = (props) => {
  return (
    <Base>
      <div class="flex h-full">{props.children}</div>
    </Base>
  );
};

export default App;
