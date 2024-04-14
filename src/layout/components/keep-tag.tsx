import { Component, JSXElement } from "solid-js";

const App: Component<{ children?: JSXElement }> = (props) => {
  return (
    <div class="w-56 overflow-y-auto flex mb-2">
      <button class="btn btn-xs ml-1">Tiny</button>
      <button class="btn btn-xs ml-1">Tiny</button>
      <button class="btn btn-xs ml-1">Tiny</button>
    </div>
  );
};

export default App;
