import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./main-nav";
import { getCategories } from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { getStoreData } from "@/actions/get-store-data";

async function Navbar() {
  const store = await getStoreData();
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm-px-6 lg-px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <div className="flex flex-rox font-semibold text-xl items-center justify-center">
              <Image
                src={store.logoUrl}
                alt={store.name}
                width={30}
                height={30}
              />
              <div className="w-[1px] h-4 bg-gray-300 ml-2" />
              <span className="pl-2">{store.name}</span>
            </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
