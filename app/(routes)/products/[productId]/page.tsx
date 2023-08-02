import { getProducts } from "@/actions/get-products";
import { getSingleProduct } from "@/actions/get-single-product";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface Props {
  params: { productId: string };
}

async function ProductPage({ params }: Props) {
  const { productId } = params;
  const product = await getSingleProduct(productId);
  const suggestions = await getProducts({ categoryId: product.category.id });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              Info
            </div>
          </div>
          <hr className="my-10"/>
          <ProductList title="Related Items" items={suggestions} />
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
