import routes from "@/routes";
import { useLocation } from "@solidjs/router";
export const useLogin = () => {
  const { pathname } = useLocation();
  // 登录通过返回首页，返回路由表
  const menus = routes
    .filter((i) => !!i.children)
    .map(({ children, ...i }) => ({
      label: i.path,
      name: i?.name,
      icon: i?.emoji,
      children,
    }));

  const userInfo = {
    name: "同月",
    token: "",
  };

  const tgMenus = () => {
    const tg = menus.find(({ label }) => label === pathname);
    return tg.children.map(({ children, ...i }) => ({
      label: `${tg.label}${i.path}`,
      name: i?.name,
      icon: i?.emoji,
    }));
  };

  return { menus, userInfo, tgMenus };
};
