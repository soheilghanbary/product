import { useRecoilState } from "recoil";
import { sidebarContext } from "../contexts";

export default function useSidebar() {
  const [sidebar, setSidebar] = useRecoilState(sidebarContext);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return { openSidebar, closeSidebar, sidebar, toggleSidebar };
}
