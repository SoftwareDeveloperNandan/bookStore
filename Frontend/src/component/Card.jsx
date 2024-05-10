import React from "react";

function Card({ items }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-95 bg-base-100 shadow-xl dark:bg-slate-100 dark:text-slate-950 dark:border hover:scale-105 duration-300">
          <figure>
            <img src={items.image} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {items.name}
              <div className="badge badge-secondary">{items.category}</div>
            </h2>
            <p className="text-balance">{items.title}</p>
            <div className="card-actions flex justify-between">
              <div className="px-2 py-1 rounded-lg bg-transparent shadow-2xl cursor-pointer border">
                ${items.price}
              </div>
              <div className="p-1 rounded-lg bg-transparent shadow-2xl border hover:bg-pink-600 hover:text-white hover:duration-200 hover:cursor-pointer">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
