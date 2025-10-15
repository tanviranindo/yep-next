"use client";

import { GadgetStoreProvider } from "@/contexts/GadgetStoreContext";

export default function Gadget1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GadgetStoreProvider>{children}</GadgetStoreProvider>;
}
