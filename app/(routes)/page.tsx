import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

async function HomePage() {
  const billboard = await getBillboard("befb458f-8d37-49fd-9a36-1cc3b84b3240");
  const featuredProducts = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
