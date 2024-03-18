import type { MetaFunction } from "@remix-run/node";
import AboutBody from "~/components/about-body";
import Navbar from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Reading List - A place to store the things you want to check out later.",
    },
    { name: "Welcome Page", content: "Welcome to rdg-list!" },
  ];
};

export default function Index() {
  return (
    <div className=" px-[380px] py-[160px] bg-neutral-900 h-screen">
      <Navbar />
      <AboutBody />
    </div>
  );
}
