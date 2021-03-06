import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Head>
        <title>0xbe1.xyz</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github-dark.min.css"
        ></link>
      </Head>

      <div className="flow-root flex-row">
        <div className="float-left space-x-4">
          <Link href="/">
            <a className="font-bold">0xbe1</a>
          </Link>
          {/* <Link href="/writing">
            <a>Writing</a>
          </Link> */}
        </div>
        <div className="float-right space-x-4">
          <a href="https://github.com/0xbe1" target="_blank">
            GitHub
          </a>
          <a href="https://twitter.com/_0xbe1" target="_blank">
            Twitter
          </a>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
