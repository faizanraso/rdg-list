import { Link } from "@remix-run/react";

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
        <div>
          
        </div>
      </div>
    </main>
  );
}
