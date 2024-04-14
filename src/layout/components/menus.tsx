import { Component, For, createSignal } from "solid-js";
import Iconify from "@com/iconify";
import { useLocation } from "@solidjs/router";
type Item = { label: string; name: any; icon?: any };

interface IProps {
  class: string;
  active: string | number | any;
  list: Item[];
  key?: string;
  onClick?: (v: Item) => void;
}

const Menus: Component<IProps> = (props) => {
  const location = useLocation();

  const index = (label) => location.pathname.includes(label);

  return (
    <ul class={"menu " + props.class}>
      <For each={props.list} fallback={<></>}>
        {(v) => (
          <li>
            <a
              onClick={() => props?.onClick && props?.onClick(v)}
              class={index(v.label) ? "active text-center" : "text-center"}
            >
              {v?.icon ? <Iconify size="1.25rem" name={v.icon} /> : null}
              {v?.name ? <span>{v?.name}</span> : null}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};
export default Menus;
