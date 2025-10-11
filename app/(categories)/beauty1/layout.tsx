import { BeautyStoreProvider } from "@/contexts/BeautyStoreContext";
import { ReactNode } from "react";

export default function Beauty1Layout({ children }: { children: ReactNode }) {
  return <BeautyStoreProvider>{children}</BeautyStoreProvider>;
}
