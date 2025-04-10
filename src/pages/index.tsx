import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from "next/dist/server/api-utils";
import next from "next";
import NaveMenu from "./components/navmenu";
import Layout from "./components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
    >
      <Layout/>
    </div>
  );
}
