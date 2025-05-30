import ShopPageClient from "@/components/modules/shop/ShopPageClient";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopPageClient />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
