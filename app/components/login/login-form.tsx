import { Link } from "@remix-run/react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginForm() {
  return (
    <main className="py-20 items-center justify-center flex flex-col">
      <div className="max-w-96 w-full">
        <div className="border-b border-neutral-800 py-4">
          <div className="py-0.5">
            <p className="text-lg text-neutral-200 leading-relaxed">Login</p>
          </div>
          <div className="pt-0.5">
            <p className="text-xs text-neutral-400 leading-relaxed">
              Don't have an account?{" "}
              <Link to={"/register"} className="underline">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-y-1.5 pb-2">
            <Label
              htmlFor="email"
              className="text-neutral-400 font-normal leading-relaxed"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className=" placeholder:text-neutral-700 text-neutral-700 focus-visible:text-neutral-400 rounded leading-relaxed focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-y-1.5 py-2">
            <Label
              htmlFor="password"
              className="text-neutral-400 font-normal leading-relaxed"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              className="placeholder:text-neutral-700 text-neutral-700 focus-visible:text-neutral-400 rounded leading-relaxed focus-visible:ring-neutral-400"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
