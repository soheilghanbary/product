import { useRecoilState } from "recoil";
import { sidebarContext } from "../contexts";

export default function useSidebar() {
  const [sidebar, setSidebar] = useRecoilState(sidebarContext);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  return { openSidebar, closeSidebar, sidebar };
}
