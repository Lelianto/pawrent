import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import FooterSection from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="bg-cyan-400 w-full text-white py-2 sticky top-0 z-50 px-10">
      <nav className="flex justify-between py-4">
        <Link href={"/"}>
          <div className="flex mr-8 cursor-pointer bg-sky-700 py-2 px-4 rounded-md">
            <div className="flex flex-col justify-center">
              <img className="w-6" src="/paw-white.png" alt="" />
            </div>
            <div className="text-xl ml-2">Pawrent</div>
          </div>
        </Link>
        <div className="flex flex-end">
          <Link
            className="mr-8 bg-sky-700 py-2 px-4 rounded-md flex flex-col justify-center"
            href="/manage-pet-shop"
          >
            Pet Shop Dashboard
          </Link>
          <Link
            className="mr-8 bg-sky-700 py-2 px-4 rounded-md flex flex-col justify-center"
            href="/forum"
          >
            Forum
          </Link>
          <Link
            className="bg-sky-700 py-2 px-4 rounded-md mr-8 flex flex-col justify-center"
            href="/pet-shop-list"
          >
            Pet Shop
          </Link>
          <Link
            className="mr-8 bg-sky-700 py-2 px-4 rounded-md flex flex-col justify-center"
            href="/login"
          >
            Masuk
          </Link>
          <Link
            className="bg-sky-700 py-2 px-4 rounded-md flex flex-col justify-center"
            href="/signup"
          >
            Daftar
          </Link>
        </div>
      </nav>
    </header>
    {children}

    <FooterSection />
  </div>
);

export default Layout;
