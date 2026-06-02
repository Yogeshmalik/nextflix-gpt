import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SharedLayout from "@/components/SharedLayout";
import { createClient } from "@/utils/supabase/server";
import { AuthProvider } from "@/utils/providers/AuthProvider";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextflixGPT",
  description: "Yogesh SM",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <AuthProvider user={user}>
            <SharedLayout>{children}</SharedLayout>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
