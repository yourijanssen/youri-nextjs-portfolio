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
      " Website Building .online .nl",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={metadata.description}/>
        <title>{metadata.title}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yourijanssen.online"/>
        <meta property="og:image" content="assets/profilePic.png"/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="assets/profilePic.png"/>
        <meta name="twitter:title" content={metadata.title}/>
        <meta name="twitter:description" content={metadata.description}/>
        <meta name="twitter:image" content="assets/profilePic.png"/>

        <link rel="canonical" href="https://yourijanssen.online"/>
        <link rel="icon" href="/favicon.ico"/>
      </head>
        <Analytics/>
        <SpeedInsights/>
        <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
        </body>
      </html>
);
}
