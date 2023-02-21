import Button from "~/components/atoms/button";
import Line from "~/components/atoms/line";
import TextField from "~/components/atoms/text-field";

export default function LoginPage() {
  return (
    <div className="my-20 mx-auto flex max-w-sm flex-col gap-4 rounded-xl bg-secondary p-8 shadow-md">
      <h1 className="text-center text-2xl font-extrabold text-heading">
        سلام رفیق!
      </h1>
      <h6 className="text-center text-xs font-medium">
        به خونه خوش اومدی! اگه عضو راکت هستی، وارد شو
      </h6>
      <TextField type={"text"} placeholder="ایمیل / نام کاربری" />
      <TextField type={"password"} placeholder="رمز عبور" />
      <Button variant="primary" text="ورود به حساب" />
      <Line className="my-2" />
      <div className="grid grid-cols-2 gap-4">
        <Button text="گوگولی" variant="default">
          <img className="h-6 w-6" src="/icons/google.svg" />
        </Button>
        <Button text="گیت هاب" variant="default">
          <img className="h-6 w-6" src="/icons/github.svg" />
        </Button>
      </div>
    </div>
  );
}
