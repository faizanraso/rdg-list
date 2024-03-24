import type { MetaFunction } from "@remix-run/node";
import AboutBody from "~/components/home/about-body";
import Footer from "~/components/home/footer";
import NavBar from "~/components/home/navbar";

export const meta: MetaFunction = () => {
  return [
    {
      title: "rdg-list - welcome",
    },
    { name: "Welcome Page", content: "Welcome to rdg-list!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col mx-auto w-[514px] py-20 bg-neutral-900 h-screen">
      <NavBar />
      <AboutBody />
      <Footer />
    </div>
  );
}
