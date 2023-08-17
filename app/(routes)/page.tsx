import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

async function HomePage() {
  const billboard = await getBillboard("71078916-9737-4d4c-b77c-7f89ff458ecc");
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
