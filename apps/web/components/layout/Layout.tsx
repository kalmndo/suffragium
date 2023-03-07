import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div>

      {children}
      </div>
    </div>
  )
}