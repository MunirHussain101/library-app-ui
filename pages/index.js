import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import AppLayout from "@/components/app-layout/AppLayout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return <>Home Page</>;
}

Home.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
