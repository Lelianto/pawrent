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
    <header className="bg-cyan-400 w-full text-white py-4 sticky top-0 z-50 px-10">
      <nav className="flex justify-between">
        <div className="flex mr-8">
          <img className="w-10" src="/paw-white.png" alt="" />
          <div className="text-3xl ml-2">Pawrent</div>
        </div>
        <div className="flex flex-end">
          <Link className="mr-8 bg-sky-700 py-2 px-4 rounded-md" href="/forum">
            Forum
          </Link>
          <Link
            className="bg-sky-700 py-2 px-4 rounded-md mr-8"
            href="/pet-shop-list"
          >
            Pet Shop
          </Link>
          <Link className="mr-8 bg-sky-700 py-2 px-4 rounded-md" href="/login">
            Masuk
          </Link>
          <Link className="bg-sky-700 py-2 px-4 rounded-md" href="/signup">
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
