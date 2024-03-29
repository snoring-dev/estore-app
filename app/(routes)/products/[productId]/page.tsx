import { getProducts } from "@/actions/get-products";
import { getSingleProduct } from "@/actions/get-single-product";
import { URL as postReviewUrl } from "@/actions/post-review";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";
import ProductList from "@/components/product-list";
import ProductReviews from "@/components/product-reviews";
import Container from "@/components/ui/container";

interface Props {
  params: { productId: string };
}

async function ProductPage({ params }: Props) {
  const { productId } = params;
  const product = await getSingleProduct(productId);
  const suggestions = await getProducts({
    categoryId: product.category.id,
    excludeId: productId,
    take: 4,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo data={product} />
              <ProductReviews
                postReviewUrl={postReviewUrl}
                productId={productId}
                data={product.reviews}
              />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestions} />
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
