import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer } from "react-toastify";
import { LayoutProps } from "@/.next/types/app/[locale]/layout";
export const metadata: Metadata = {
  title: "Oumarou Sanda Souley - Web & Mobile Developer",
  description:
    "Self-taught web and mobile developer with a strong focus on JavaScript, dedicated to crafting innovative and user-friendly digital solutions.",
};

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className="w-full bg-gradient-to-b from-gray-950 to-black overflow-x-hidden">
        <Provider locale={locale}>
          <ThemeProvider>
            <ToastContainer />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout