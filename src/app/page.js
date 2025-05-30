import BestSellers from "@/components/modules/home/bestSellers/BastSellers";
import Hero from "@/components/modules/home/heo/Hero";
import TrendingProducts from "@/components/modules/home/trendingProducts/TrendingProducts";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <BestSellers />
      <TrendingProducts />
    </main>
  );
}
