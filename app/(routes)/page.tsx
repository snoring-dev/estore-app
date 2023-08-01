import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

async function HomePage() {
  const billboard = await getBillboard("befb458f-8d37-49fd-9a36-1cc3b84b3240");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}

export default HomePage;
