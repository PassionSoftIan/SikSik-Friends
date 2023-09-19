import "@/styles/globals.css";
import "@/styles/colors.css";
import "@/styles/levels.scss";
import "@/styles/homeNav.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elefante",
  description: "Generated by create Elefante",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="body-container">{children}</div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
