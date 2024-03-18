import React from "react";

export default function AboutBody() {
  return (
    <main className="py-12">
      <div>
        <div className="py-1.5">
          <p className="text-neutral-200 text-sm font-medium tracking-wide">
            rdg-list
          </p>
        </div>
        <div className="py-1.5">
          <p className="text-neutral-400 text-sm tracking-wide font-light text-justify">
            (Reading) <span>rdg-list</span> is a simple web app that serves as a
            home for all your internet finds. Whether it's an article you're in
            the midst of reading, a regex tutorial you plan on coming back to
            one day, or anything in between. rdg-list makes it easy to store and
            group your links in one place.
          </p>
        </div>
      </div>
    </main>
  );
}
