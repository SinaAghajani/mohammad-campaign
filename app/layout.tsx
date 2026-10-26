import type { Metadata, Viewport } from "next";
// @ts-expect-error CSS imports are handled by Next.js.
import "./global.css";

export const metadata: Metadata = {
  title: "محمد نبی‌زاده | صدای تو، آینده‌ی ما",
  description:
    "صفحه معرفی محمد نبی‌زاده، نامزد شورای دانش‌آموزی پایه هشتم C مدرسه شاهد شهدای میناب.",
  applicationName: "کمپین محمد نبی‌زاده",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a1b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
