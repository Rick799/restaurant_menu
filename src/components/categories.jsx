/* eslint react/prop-types: 0 */

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center mb-20">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="text-xl font-semibold text-orange-400 py-2 px-3 cursor-pointer tracking-wider capitalize mx-2 rounded-lg ease-linear duration-300 hover:bg-orange-400 hover:text-white"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
