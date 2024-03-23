import { Link } from "@remix-run/react";
import React from "react";

export default function AboutBody() {
  return (
    <main className="pt-12 pb-4">
      <div className="text-justify py-2.5">
        <div className="py-1.5">
          <p className="leading-relaxed text-neutral-200 text-sm">
            (Reading List) rdg-list
          </p>
        </div>
        <div className="py-1.5">
          <p className="leading-relaxed text-neutral-400 text-sm">
            A simple web app that serves as a home for all of your internet
            finds. Whether it's an article you want to finish reading later, a
            regex tutorial you plan on coming back to one day, or anything in
            between. rdg-list makes it easy to store and group your links in one
            place.
          </p>
        </div>
      </div>
      <div className="text-justify py-2.5">
        <div className="py-1.5">
          <p className="leading-relaxed text-neutral-200 text-sm">
            Inspiration
          </p>
        </div>
        <div className="py-1.5.5">
          <p className="leading-relaxed text-neutral-400 text-sm">
            This app is heavily inspired by{" "}
            <a href={"https://bmrks.com/"} className="underline italic">
              bmrks.com
            </a>
            . I've pretty much borrowed the whole concept and style from it. But
            hey, I'm not just copying - I'm throwing in some extra features that
            I find useful.
          </p>
        </div>
      </div>
      <div className="text-justify py-2.5">
        <div className="py-1.5">
          <p className="leading-relaxed text-neutral-200 text-sm">Usage</p>
        </div>
        <div className="py-1.5.5">
          <p className="leading-relaxed text-neutral-400 text-sm">
            This app is free to use. To get started, create an account using the
            "login" link above. Additionally, rdg-list is{" "}
            <a
              href="https://github.com/faizanraso/rdg-list"
              className="underline"
            >
              open source
            </a>
            .
          </p>
        </div>
      </div>
      <div className="text-justify py-2.5">
        <div className="py-1.5">
          <p className="leading-relaxed text-neutral-200 text-sm">Credits</p>
        </div>
        <div className="flex flex-row py-1.5 justify-between text-neutral-400 text-sm">
          <div>
            <Link
              to="https://lucide.dev/license"
              className="underline leading-relaxed"
            >
              Lucide License (Icons)
            </Link>
          </div>
          <div>
            {" "}
            <Link
              to="https://github.com/iconoir-icons/iconoir/blob/main/LICENSE"
              className="underline leading-relaxed"
            >
              Iconair License (Icons)
            </Link>
          </div>
          <div>
            <Link to="https://bmrks.com/" className="underline leading-relaxed">
              bmrks (Inspiration)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
