import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { Analytics } from "@vercel/analytics/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "~/tailwind.css";
import { cn } from "./lib/utils";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en" className={cn("dark")}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900 tracking-wide font-light">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
