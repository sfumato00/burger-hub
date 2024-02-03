import Catalog from "@/app/_components/organisms/catalog";
import GlobalNavBar from "@/app/_components/molecules/NavBar/global-nav-bar";

export const revalidate = 300;
export const dynamic = "force-static";
export default function Home() {
  return (
    <main>
      <GlobalNavBar />
      <Catalog />
    </main>
  );
}
