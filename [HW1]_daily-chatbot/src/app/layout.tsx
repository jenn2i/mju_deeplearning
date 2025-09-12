
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마음 일기",
  description: "하루에 하나씩, 당신의 마음에 질문을 던져요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
