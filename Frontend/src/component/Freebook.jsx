import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import Card from "../component/Card.jsx";

function Freebook() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // const filterData = list.filter((data) => data.category === "Free");
  const [freeBookList, setFreeBookList] = useState([])
  useEffect(() => {
    const freeBook = async () => {
      try {

        const freeBookListData = await axios.get("http://localhost:7000/bookstore/book/getbook")
        const listOfFreeBook = freeBookListData.data.data.filter((data) => data.category === "Free")
        console.log("list of freebook", listOfFreeBook);
        setFreeBookList(listOfFreeBook)

      } catch (error) {
        console.log("Error>>", error);
      }
    }
    freeBook()
  }, [])
  return (
    <>
      <div className="max-w-screen-2xl container m-auto mt-20 md:px-20">
        <h1 className="font-semibold text-xl pb-2">
          Free book is available here.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est
          dolor natus possimus optio minus iure temporibus, dolorum vero, aut
          sequi ducimus quasi accusamus ratione, suscipit veniam quisquam. In,
          aliquam!
        </p>
        <div>
        <div className="slider-container">
          <Slider {...settings}>
            {freeBookList.map((item) => (
              <Card items={item} key={item.id}/>
            ))}
          </Slider>
        </div>
        </div>
      </div>
    </>
  );
}
export default Freebook;
