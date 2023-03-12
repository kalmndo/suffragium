import Header from "./Header";
import { PropsWithChildren } from "react";
import Navbar from "../navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col w-full min-h-screen items-center">
        <div className="max-w-3xl	w-full">{children}</div>
      </div>
    </div>
  );
}
