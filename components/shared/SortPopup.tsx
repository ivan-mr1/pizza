"use client";

import { ArrowUpDown } from "lucide-react";
import type React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const sortOptions = [
  { id: "popular", label: "Most popular" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rated", label: "Top rated" },
] as const;

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
            className,
          )}
        >
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort by:</span>
          <span className="text-primary">popularity</span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[240px] p-1">
        <ul className="flex flex-col gap-0.5">
          {sortOptions.map((item) => (
            <li
              key={item.id}
              className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
