/* eslint react/prop-types: 0 */

import { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(items.map((item) => item.category))

function Restaurant() {
  // Initialize menu items with the full list
  const [menuItems, setMenuItems] = useState(items);
  // Initialize categories with all unique categories
  const [categories, setCategories] = useState(allCategories);

  // Filter menu items based on the selected category
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="py-10 w-11/12 max-w-7xl my-0 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl capitalize italic tracking-wide font-bold font-serif text-orange-950">
            Royal Bengal
          </h1>
          <h2 className="text-2xl mt-20 capitalize tracking-widest font-semibold md:text-3xl">
            menu
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto my-3"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Restaurant;
