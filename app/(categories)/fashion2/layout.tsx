import { FashionStoreProvider } from "@/contexts/FashionStoreContext";

export default function Fashion2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FashionStoreProvider>{children}</FashionStoreProvider>;
}
