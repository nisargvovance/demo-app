import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

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
    <>
    
<h1>
  hellow vercel i m here

</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta id est aliquid earum animi ipsa vero placeat ex. Maiores, vel.</p>
</>
  );
}
