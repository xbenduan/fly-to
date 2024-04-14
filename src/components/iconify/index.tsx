import { Component } from "solid-js";
import c from "./style.module.css";

interface IProps {
  class?: string;
  name: string;
  /** 宽高(默认1rem) */
  size?: string;
}

const Iconify: Component<IProps> = (props) => {
  const size = () => {
    return props.size ? props.size : "1rem";
  };
  return (
    <span
      class={`${props.class} ${c[props.name]}`}
      style={{ width: size(), height: size() }}
    ></span>
  );
};

export default Iconify;
