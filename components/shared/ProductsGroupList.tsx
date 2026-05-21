import type React from "react";
import { ProductCard, Title } from "@/components/shared";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  listClassName?: string;
  categoryId: number;
  items: any[];
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  return (
    <div className={cn(className)}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
