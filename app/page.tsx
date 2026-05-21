import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Products" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          <div className="w-[480px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Pizzas"
              items={[
                {
                  id: 1,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 2,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 3,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 4,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 5,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 6,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 7,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Combos"
              items={[
                {
                  id: 1,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 2,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 3,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 4,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 5,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 6,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 7,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
              ]}
              categoryId={2}
            />
            <ProductsGroupList
              title="Sides"
              items={[
                {
                  id: 1,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 2,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 3,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 4,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 5,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 6,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
                {
                  id: 7,
                  name: "Margarita",
                  imageUrl: "/assets/images/products/pizza1.avif",
                  price: 15,
                  items: [{ price: 15 }],
                },
              ]}
              categoryId={3}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
