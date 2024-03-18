import React from "react";

export default function AboutBody() {
  return (
    <main className="py-12">
      <div>
        <div className="py-1.5">
          <p className="text-neutral-200 text-sm font-medium tracking-wide leading-relaxed">
            rdg-list
          </p>
        </div>
        <div className="py-1.5">
          <p className="text-neutral-400 text-sm tracking-wide font-light text-justify leading-relaxed">
            (Reading) <span>rdg-list</span> is a simple web app that serves as a
            home for all of your internet finds. Whether it's an article you
            want to finish reading later, a regex tutorial you plan on coming
            back to <span className="italic underline">one day</span>, or
            anything in between. rdg-list makes it easy to store and group your
            links in one place.
          </p>
        </div>
      </div>
    </main>
  );
}
