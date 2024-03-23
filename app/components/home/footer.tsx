import React from "react";

export default function Footer() {
  return (
    <footer className="border-neutral-800 border-t">
      <div className="py-4 flex flex-row justify-between items-center">
        <p className="italic text-neutral-400 text-xs">v 0.01</p>
        <p className="text-neutral-400 text-xs">signature</p>
      </div>
    </footer>
  );
}
