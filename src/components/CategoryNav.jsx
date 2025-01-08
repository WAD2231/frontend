"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "All Category",
    href: "#",
  },
  {
    name: "Computer & Laptop",
    href: "#",
    subCategories: [
      {
        name: "Laptops",
        href: "#",
        subCategories: [
          { name: "Gaming Laptops", href: "#" },
          { name: "Business Laptops", href: "#" },
          { name: "Student Laptops", href: "#" },
        ],
      },
      {
        name: "Desktops",
        href: "#",
        subCategories: [
          { name: "Gaming PCs", href: "#" },
          { name: "Workstations", href: "#" },
        ],
      },
    ],
  },
  {
    name: "SmartPhone",
    href: "#",
    subCategories: [
      {
        name: "Android",
        href: "#",
        subCategories: [
          {
            name: "Samsung",
            href: "#",
            subCategories: [
              { name: "Galaxy S Series", href: "#" },
              { name: "Galaxy A Series", href: "#" },
            ],
          },
          { name: "Xiaomi", href: "#" },
          { name: "Oppo", href: "#" },
        ],
      },
      {
        name: "iOS",
        href: "#",
        subCategories: [
          { name: "iPhone 15 Series", href: "#" },
          { name: "iPhone 14 Series", href: "#" },
        ],
      },
    ],
  },
];

function CategoryItem({ category, level = 0, activePath, onHover }) {
  const isActive = activePath[level] === category.name;
  const showSubCategories = isActive && category.subCategories;

  return (
    <li className="relative">
      <div
        className={cn(
          "flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded-md",
          isActive && "bg-orange-500 text-white hover:bg-orange-600"
        )}
        onMouseEnter={() =>
          onHover([...activePath.slice(0, level), category.name])
        }
      >
        <Link to={category.href} className="flex-1">
          {category.name}
        </Link>
        {category.subCategories && <ChevronRight className="h-4 w-4" />}
      </div>

      {showSubCategories && (
        <ul
          className={cn(
            "absolute left-full top-0 bg-white shadow-lg rounded-md space-y-1 p-2 z-10"
          )}
        >
          {category.subCategories.map((subCategory) => (
            <CategoryItem
              key={subCategory.name}
              category={subCategory}
              level={level + 1}
              activePath={activePath}
              onHover={onHover}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CategoriesNav() {
  const [activePath, setActivePath] = useState([]);

  return (
    <nav
      className="relative w-64 bg-white shadow-lg"
      onMouseLeave={() => setActivePath([])}
    >
      <ul className="space-y-1 p-2">
        {categories.map((category) => (
          <CategoryItem
            key={category.name}
            category={category}
            level={0}
            activePath={activePath}
            onHover={setActivePath}
          />
        ))}
      </ul>
    </nav>
  );
}
