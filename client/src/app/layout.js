import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rangtuli | Premium Fashion & Style",
  description:
    "Elevate your style with Rangtuli. Discover the latest in trendy apparel, premium fabrics, and high-fashion editorial collections. Shop now for a sophisticated look.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
