import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
   title: "Test Valley Assignment",
   description: "",
};

// import local fonts
const pretendard = localFont({
   src: [
      {
         path: "../fonts/Pretendard-Thin.woff",
         weight: "100",
         style: "normal",
      },
      {
         path: "../fonts/Pretendard-ExtraLight.woff",
         weight: "200",
         style: "normal",
      },
      {
         path: "../fonts/Pretendard-Light.woff",
         weight: "300",
         style: "normal",
      },
      {
         path: "../fonts/Pretendard-Regular.woff",
         weight: "400",
         style: "normal",
      },
      {
         path: "../fonts/Pretendard-Medium.woff",
         weight: "500",
         style: "normal",
      },
      {
         path: "../fonts/Pretendard-SemiBold.woff",
         weight: "600",
         style: "bold",
      },
      {
         path: "../fonts/Pretendard-Bold.woff",
         weight: "700",
         style: "bold",
      },
      {
         path: "../fonts/Pretendard-ExtraBold.woff",
         weight: "800",
         style: "bold",
      },
      {
         path: "../fonts/Pretendard-Black.woff",
         weight: "900",
         style: "bold",
      },
   ],
});
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ko">
         <body className={pretendard.className}>{children}</body>
      </html>
   );
}
