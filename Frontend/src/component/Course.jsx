import React from "react"
import Card from "../component/Card.jsx"
import list from "../../public/list.json"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container m-auto md:px-20 px-4">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl fw-bold md:text-4xl">
            We are delighted to have you
            <span className="text-pink-700"> here! :) </span>
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos
            quis quia placeat nulla rerum, vero fugit, quae blanditiis laborum
            nesciunt? Deserunt doloremque eveniet alias laudantium. Maxime
            itaque consectetur impedit.
          </p>
          <Link to={"/"}>
          <button className="btn btn-active mt-4 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">
            Back
          </button>
        </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((items) => (
            <Card items={items} key={items.id}/>
          ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
