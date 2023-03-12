import Header from "./Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
        <div className="bg-white flex flex-col w-full min-h-screen items-center">
          <div className="max-w-3xl	w-full">{children}</div>
        </div>
    </div>
  );
}
