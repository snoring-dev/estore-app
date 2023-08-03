import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSingleCategory } from "@/actions/get-single-category";
import { getSizes } from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import MobileFilters from "@/components/mobile-filters";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

async function CategoryPage({ params, searchParams }: Props) {
  const { categoryId } = params;
  const { sizeId, colorId } = searchParams;
  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getSingleCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* @TODO: Add mobile filters */}
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              {products.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((p) => (
                    <ProductCard data={p} key={p.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
