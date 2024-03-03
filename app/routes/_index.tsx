import type { MetaFunction } from "@remix-run/node";
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
    <div className="px-96 py-40 bg-neutral-900 h-screen">
      <Navbar />
      <main>test</main>
    </div>
  );
}
