import { FashionStoreProvider } from "@/contexts/FashionStoreContext";

export default function Fashion1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FashionStoreProvider>{children}</FashionStoreProvider>;
}
