"use client";

import React from "react";

import {
  type FilterChecboxProps,
  FilterCheckbox,
} from "@/components/shared/FilterCheckbox";
import { Input } from "@/components/ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue = [],
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const [selected, setSelected] = React.useState<string[]>(defaultValue);

  const onCheckedChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const onChangeRef = React.useRef(onChange);
  React.useEffect(() => {
    onChangeRef.current = onChange;
  });

  // Синхронизация с родителем
  React.useEffect(() => {
    onChangeRef.current?.(selected);
  }, [selected]);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {(showAll ? items : defaultItems || items).map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            value={item.value}
            text={item.text}
            checked={selected.includes(item.value)}
            onCheckedChange={() => onCheckedChange(item.value)}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 cursor-pointer select-none text-sm font-medium"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
