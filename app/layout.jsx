import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Youri Janssen",
  description: "Youri Janssen Portfolio Full Stack Developer React Youri YWM Janssen Amsterdam Utrecht Custom" +
      " Website Building",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Analytics/>
    <SpeedInsights/>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
