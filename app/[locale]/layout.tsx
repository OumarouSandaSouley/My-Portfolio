import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className="w-full bg-white overflow-x-hidden">
        <Provider locale={locale}>
          <ThemeProvider>
            <ToastContainer />
            {children}
          </ThemeProvider>
        </Provider>
        <Script
          src="https://feedyourback.com/tunnel.js"
          data-id="cm5rwe8ie018j12lv220jd6e7"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
};

export default RootLayout