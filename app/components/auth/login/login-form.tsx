import { Form, Link } from "@remix-run/react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "../../ui/button";

export default function LoginForm() {
  return (
    <main className="py-20 items-center justify-center flex flex-col">
      <div className="max-w-[335px] w-full">
        <div className="border-b border-neutral-800 py-2">
          <div className="py-0.5">
            <p className="text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
              Login
            </p>
          </div>
          <div className="pt-0.5">
            <p className="text-xs text-neutral-400 leading-relaxed tracking-wide font-light">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="underline hover:text-neutral-300 duration-150 transition"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <Form className="py-2 border-b border-neutral-800">
          <div className="grid w-full max-w-sm items-center gap-y-2 pb-2">
            <Label
              htmlFor="email"
              className="text-neutral-400 font-normal leading-relaxed tracking-wide"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className=" placeholder:text-neutral-700 border-neutral-700 text-neutral-400 focus-visible:text-neutral-400 rounded leading-relaxed tracking-wide font-light focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-y-2 py-2">
            <Label
              htmlFor="password"
              className="text-neutral-400 font-normal leading-relaxed tracking-wide"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              className=" placeholder:text-neutral-700 border-neutral-700 text-neutral-400 focus-visible:text-neutral-400 rounded leading-relaxed tracking-wide font-light focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center py-2">
            <Button className="bg-neutral-800 rounded leading-relaxed tracking-wide font-light hover:opacity-80 hover:bg-neutral-800 text-neutral-300 shadow-sm py-4 text-sm duration-150 transition border border-neutral-700">
              Login
            </Button>
          </div>
        </Form>
        <div className="grid w-full max-w-sm items-center gap-y-2 py-2">
          <p className="leading-relaxed font-light tracking-wide text-neutral-400 text-xs">
            Forgot your password? Click{" "}
            <Link
              to="/forgot"
              className="underline hover:text-neutral-300 duration-150 transition"
            >
              here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
