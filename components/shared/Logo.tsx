import Image from "next/image";
import type React from "react";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src="/logo.png" alt="Home" width={35} height={35} />
      <div>
        <h2 className="text-2xl uppercase font-bold">next pizza</h2>
        <p className="text-sm text-gray-400 leading-3">
          It couldn't be more delicious.
        </p>
      </div>
    </div>
  );
};
