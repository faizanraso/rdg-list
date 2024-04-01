import { Form, Link } from "@remix-run/react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "../../ui/button";

export default function RegistrationForm() {
  return (
    <main className="py-20 items-center justify-center flex flex-col">
      <div className="max-w-[335px] w-full">
        <div className="border-b border-neutral-800 py-4">
          <div className="py-0.5">
            <p className="text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
              Login
            </p>
          </div>
          <div className="pt-0.5">
            <p className="text-xs text-neutral-400 leading-relaxed tracking-wide font-light">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="underline hover:text-neutral-300 duration-150 transition"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <Form className="py-4 border-b border-neutral-800">
          <div className="grid w-full max-w-sm items-center gap-y-2 pb-3">
            <Label
              htmlFor="name"
              className="text-neutral-400 font-normal leading-relaxed tracking-wide"
            >
              Name
            </Label>
            <Input
              type="name"
              id="email"
              placeholder="Name"
              className=" placeholder:text-neutral-700 border-neutral-700 text-neutral-400 focus-visible:text-neutral-400 rounded leading-relaxed tracking-wide font-light focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-y-2 py-3">
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
          <div className="grid w-full max-w-sm items-center gap-y-2 py-3">
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
              className="placeholder:text-neutral-700 border-neutral-700 text-neutral-400 focus-visible:text-neutral-400 rounded leading-relaxed tracking-wide font-light focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-y-2 py-3">
            <Label
              htmlFor="confirm-password"
              className="text-neutral-400 font-normal leading-relaxed tracking-wide"
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              className="placeholder:text-neutral-700 border-neutral-700 text-neutral-400 focus-visible:text-neutral-400 rounded leading-relaxed tracking-wide font-light focus-visible:ring-neutral-400"
            />
          </div>
          <div className="grid w-full max-w-sm items-center py-3">
            <Button className="bg-neutral-800 rounded leading-relaxed tracking-wide font-light hover:opacity-80 hover:bg-neutral-800 text-neutral-300 shadow-sm py-4 text-sm duration-150 transition border border-neutral-700">
              Register
            </Button>
          </div>
        </Form>
        <div className="py-4 flex flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs">rdg-list</p>
          <p className="italic text-neutral-400 text-xs">v 0.01</p>
        </div>
      </div>
    </main>
  );
}
