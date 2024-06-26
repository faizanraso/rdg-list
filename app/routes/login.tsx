import { MetaFunction } from "@remix-run/node";

import LoginForm from "~/components/auth/login/login-form";
import NavBar from "~/components/auth/shared/navbar";

export const meta: MetaFunction = () => {
  return [
    {
      title: "rdg-list - login",
    },
    { name: "Login Page", content: "Login to rdg-list." },
  ];
};

export default function LoginPage() {
  return (
    <div className="p-6">
      <NavBar />
      <LoginForm />
    </div>
  );
}
