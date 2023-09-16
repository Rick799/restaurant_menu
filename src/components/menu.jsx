/* eslint react/prop-types: 0 */

const Menu = ({ items }) => {
  return (
    <div className="w-11/12 max-w-6xl my-0 mx-auto grid justify-center gap-y-12 gap-x-8 xl:grid-cols-2">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article
            key={id}
            className="grid gap-y-4 gap-x-8 max-w-md md:max-w-2xl md:grid-cols-2 gap-y-0 gap-x-5"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-52 mb-4 block object-cover border-4 border-orange-400 rounded-lg md:h-44 xl:h-40 hover:scale-105 hover:cursor-pointer"
            />
            <div className="item-info">
              <header className="flex justify-between border-b-2 border-slate-400">
                <h4 className="text-xl font-semibold capitalize tracking-widest mb-2">
                  {title}
                </h4>
                <h4 className="text-orange-400 mb-2 font-semibold">Rs. {price}</h4>
              </header>
              <p className="text-slate-600 pt-4 mb-5">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
