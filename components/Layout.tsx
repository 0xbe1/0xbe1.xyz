import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Head>
        <title>0xbe1.xyz</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github-dark.min.css"
        ></link>
      </Head>

      <div className="flex items-center space-x-4 py-4">
        <Link href="/">
          <a className="font-bold">0xbe1</a>
        </Link>
        {/* <Link href="/writing">
          <a>Writing</a>
        </Link> */}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
