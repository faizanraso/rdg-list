import { MetaFunction } from "@remix-run/node";

import RegistrationForm from "~/components/auth/register/registration-from";
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
      <RegistrationForm />
    </div>
  );
}
