"use client";

import CategoryCheckbox from "../checkbox/category-checkbox";

export default function CategorySection({ categorys, setCategorys }: CategoryProps) {
    return (
        <div className="bg-orange-300 w-[40%] min-h-9 text-center content-center rounded-xl">
          <CategoryCheckbox categorys={categorys} setCategorys={setCategorys} />
        </div>
      );
}
