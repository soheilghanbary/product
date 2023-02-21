export default function HomePage() {
  return (
    <div className="my-20 p-10 flex flex-col items-center justify-between gap-10 md:flex-row lg:flex-row xl:flex-row">
      <img
        src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_skiing_flying_red"
        className="xl:w-2/4 lg:w-2/4 md:w-2/4 w-full"
      />
      <div className="flex flex-col gap-4 xl:w-2/4 lg:w-2/4 md:w-2/4 w-full">
        <h1 className="text-4xl font-extralight text-heading leading-tight">
          به دنیای محصولات خوش آمدید
        </h1>
        <p className="text-sm leading-7 text-justify">
          من همچنین از علاقه مندان به ورزش های شدید هستم. وقتی با خانواده ام یا
          پشت کامپیوتر نیستم، می توانید مرا در حال گشت و گذار با تک سیکلت خود
          بیابید یا وقتی هوا سرد است، با اسنوبرد به دامنه ها برخورد می کنم.
        </p>
      </div>
    </div>
  );
}
