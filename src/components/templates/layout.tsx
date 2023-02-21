"use client";
import { ReactNode } from "react";
import Footer from "../modules/footer";
import Navbar from "../modules/navbar";
import { ThemeProvider } from "next-themes";
import Sidebar from "../modules/sidebar";
import { RecoilRoot } from "recoil";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <RecoilRoot>
        <div className="mx-auto max-w-screen-xl p-2">
          <Navbar />
          <main className="my-4">{children}</main>
          <Sidebar />
        </div>
        <Footer />
      </RecoilRoot>
    </ThemeProvider>
  );
}
