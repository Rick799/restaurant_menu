/* eslint react/prop-types: 0 */

import { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(items.map((item) => item.category))

function Restaurant() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
      <section className="py-20 w-11/12 max-w-7xl my-0 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl my-2 capitalize tracking-widest font-bold md:text-4xl">
            our menu
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto my-auto"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Restaurant;
