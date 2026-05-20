import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Products" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <div style={{ height: "1500px" }}></div>
    </>
  );
}
