import { Inter, Merriweather } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather"
});
