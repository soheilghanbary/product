"use client";
import { useTheme } from "next-themes";
import { Logo } from "./navbar";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  function toggle_theme(e: any) {
    setTheme(e.target.value);
  }

  return (
    <footer className="rounded-t-lg bg-secondary p-8 shadow-md">
      <section className="mx-auto grid max-w-screen-lg xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div>
          <Logo />
          <p className="mt-6 text-justify text-sm leading-6">
            راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن
            برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-heading">سایت مپ</h3>
          <ul className="mt-6 grid list-disc grid-cols-2 gap-1 marker:text-amber-500">
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              صفحه اصلی
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              جستجو
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              فروشگاه
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              بلاگ
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              درباره ما
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              سوالات متداول
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              صفحه اصلی
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              جستجو
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              فروشگاه
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              بلاگ
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              درباره ما
            </li>
            <li className="cursor-pointer text-sm leading-7 duration-200 hover:text-indigo-600 dark:hover:text-heading">
              سوالات متداول
            </li>
          </ul>
        </div>
        <div>
          <Logo />
          <p className="my-6 text-justify text-sm leading-6">
            راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن
            برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
          </p>
          <select
            onChange={toggle_theme}
            className="rounded-lg border bg-primary px-4 py-2 leading-5 cursor-pointer"
          >
            <option value={"system"}>سیستم</option>
            <option value={"dark"}>تاریک</option>
            <option value={"light"}>روشن</option>
          </select>
        </div>
      </section>
      <hr className="my-6" />
      <p className="text-center text-xs">
        کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه کپی
        برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
      </p>
    </footer>
  );
}
