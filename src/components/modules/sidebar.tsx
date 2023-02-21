import Link from "next/link";
import { Logo } from "./navbar";
import * as Icon from "react-feather";
import Line from "../atoms/line";
import useSidebar from "~/lib/hooks/use-sidebar";

export default function Sidebar() {
  const { sidebar, closeSidebar } = useSidebar();

  return (
    <>
      <div
        onClick={closeSidebar}
        className={`fixed top-0 left-0 z-10 h-screen w-screen ${
          sidebar ? "visible" : "invisible"
        }`}
      ></div>
      <div
        className={`fixed top-0 z-30 h-full w-64 bg-secondary p-5 shadow-md duration-300 md:-right-full lg:-right-full xl:-right-full ${
          sidebar ? "right-0" : "-right-full"
        }`}
      >
        <Logo />
        <Line className="my-2" />
        <ul>
          <SidebarItem href="/" title="صفحه اصلی" icon={Icon.Home} />
          <SidebarItem href="/" title="جستجو" icon={Icon.Search} />
          <SidebarItem
            href="/products"
            title="محصولات"
            icon={Icon.ShoppingBag}
          />
          <SidebarItem href="/users" title="کاربران" icon={Icon.Users} />
          <SidebarItem href="/about" title="درباره ما" icon={Icon.Facebook} />
          <SidebarItem href="/faq" title="سوالات متداول" icon={Icon.Feather} />
          <SidebarItem
            href="/auth/login"
            title="ورود / ثبت نام"
            icon={Icon.LogIn}
          />
        </ul>
      </div>
    </>
  );
}

function SidebarItem({ href, title, icon }: any) {
  const SidebarIcon = icon;
  const { closeSidebar } = useSidebar();
  return (
    <Link href={href}>
      <li
        onClick={closeSidebar}
        className="flex items-center gap-4 rounded-full py-2 px-4 leading-8 duration-200 ease-in-out hover:pr-6 hover:text-indigo-500"
      >
        <SidebarIcon size={20} />
        {title}
      </li>
    </Link>
  );
}
