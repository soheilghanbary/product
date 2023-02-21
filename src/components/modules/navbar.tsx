"use client";
import styles from "~/lib/sass/navbar.module.scss";
import { UserPlus , Menu as MenuIcon } from "react-feather";
import Link from "next/link";
import useSidebar from "~/lib/hooks/use-sidebar";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Menu />
      <div className="flex items-center gap-3">
        <NavButton />
        <NavMenuButton />
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href={"/"} className={styles.logo}>
      <img src="/logo.svg" />
      <h3>پروداکت</h3>
    </Link>
  );
}

function Menu() {
  return (
    <ul className={styles.menu}>
      <MenuItem title={"جستجو"} href="/" />
      <MenuItem title={"کاربران"} href="/users" />
      <MenuItem title={"فروشگاه"} href="/products" />
      <MenuItem title={"درباره ما"} href="/about" />
      <MenuItem title={"سوالات متداول"} href="/faq" />
    </ul>
  );
}

function MenuItem({ title, href }: any) {
  return (
    <Link href={href}>
      <li>{title}</li>
    </Link>
  );
}

function NavButton() {
  return (
    <Link href={"/auth/login"} className={styles.btn}>
      <UserPlus size="20" color="#fff" />
      <span>ایجاد حساب</span>
    </Link>
  );
}

function NavMenuButton() {
  const { openSidebar } = useSidebar();

  return (
    <button className={styles['menu-btn']} onClick={openSidebar}>
      <MenuIcon size="20" />
    </button>
  );
}
