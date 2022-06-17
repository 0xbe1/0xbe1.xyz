import Link from "next/link";
import { ReactElement } from "react";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center space-x-4 py-4">
        <Link href="/">
          <p className="font-bold">0xbe1</p>
        </Link>
        <Link href="/writing">Writing</Link>
      </div>
      <main>{children}</main>
      <footer className="flex h-12 items-center justify-center border-t">
        footer
      </footer>
    </div>
  );
};
export default Layout;
