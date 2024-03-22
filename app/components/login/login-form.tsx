import { Link } from "@remix-run/react";

export default function LoginForm() {
  return (
    <main className="py-20 items-center justify-center flex flex-col">
      <div className="max-w-96 w-full">
        <p className="text-lg text-neutral-200 leading-relaxed">Login</p>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Don't have an account?{" "}
          <Link to={"/register"} className="underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
