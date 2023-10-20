"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Page() {
  const [items, setItems] = useState([
    {
      itemName: "Email Design",
      price: 220.0,
      quantity: 0,
    },
    {
      itemName: "Email Build",
      price: 275.0,
      quantity: 0,
    },
    {
      itemName: "30 Second Animation",
      price: 3750.0,
      quantity: 0,
    },
    {
      itemName: "60 Second Animation",
      price: 4500.0,
      quantity: 0,
    },
    {
      itemName: "90 Second Animation",
      price: 5250.0,
      quantity: 0,
    },
    {
      itemName: "Voiceover",
      price: 500.0,
      quantity: 0,
    },
    {
      itemName: "+ Background Music",
      price: 245.0,
      quantity: 0,
    },
    {
      itemName: "+ Script Writing",
      price: 300.0,
      quantity: 0,
    },
    {
      itemName: "Interactive PDF",
      price: 450.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Page",
      price: 135.0,
      quantity: 0,
    },
    {
      itemName: "Social Media Banner",
      price: 295.0,
      quantity: 0,
    },
    {
      itemName: "Social Media Company Banner",
      price: 295.0,
      quantity: 0,
    },
    {
      itemName: "Social Media Personal Banner",
      price: 295.0,
      quantity: 0,
    },
    {
      itemName: "Animated Banner (GIF)",
      price: 425.0,
      quantity: 0,
    },
    {
      itemName: "Website Header Images",
      price: 245.0,
      quantity: 0,
    },
    {
      itemName: "Website Thumbnails",
      price: 225.0,
      quantity: 0,
    },
    {
      itemName: "Powerpoint Template (6 Slides)",
      price: 850.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Slides",
      price: 185.0,
      quantity: 0,
    },
    {
      itemName: "Infographic",
      price: 625.0,
      quantity: 0,
    },
    {
      itemName: "Landing Page Design",
      price: 650.0,
      quantity: 0,
    },
    {
      itemName: "Landing Page Build",
      price: 750.0,
      quantity: 0,
    },
    {
      itemName: "Microsite Design (3 pages)",
      price: 1650.0,
      quantity: 0,
    },
    {
      itemName: "Microsite Build (3 pages)",
      price: 1950.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Page Design",
      price: 500.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Page Build",
      price: 650.0,
      quantity: 0,
    },
  ]);
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleQuantityIncrease = (index: any) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index: any) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <>
      {/* HERO */}
      <div className="flex justify-center items-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mt-16 w-full lg:mt-20 grid grid-cols-2 gap-5 lg:gap-20 justify-center items-center p-5 lg:px-0 lg:py-16 lg:max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="md:mt-2 lg:mt-0 col-span-2 lg:col-span-1 text-white text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl mb-5 font-semibold">Digital</h1>
            <p className="lg:text-2xl">Cost of matrix</p>
          </div>
          {/* IMAGE */}
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/cost-of-matrix/cost-of-matrix.webp"
                alt="meeting table"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-10 grid-cols-2 container max-w-7xl mx-auto my-10">
        <div className="col-span-2">
          <Link
            href="/cost-matrix"
            className="flex justify-center items-center gap-5 w-fit font-bold text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
          >
            <FaArrowLeft /> Go back
          </Link>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-xl bg-white p-5">
          {items.map((item, index) => (
            <div key={index} className="flex py-5 border-s2s-purple border-b-2">
              <div className="flex items-center">
                <button>
                  <FaChevronLeft
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span className="mx-1"> {item.quantity} </span>
                <button>
                  <FaChevronRight
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
              <div className="mx-5">{item.itemName}</div>
              <div className="font-semibold ms-auto">£{item.price}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 text-center items-center justify-center col-span-2 lg:col-span-1 rounded-xl bg-white p-16 h-fit">
          <h3 className="font-bold text-4xl">Something missing?</h3>
          <p className="text-4xl">
            For anything that is not included in this list, please contact us
            below.
          </p>
          <Link
            href="contact-us"
            className="w-fit font-bold text-white text-center bg-s2s-purple px-10 py-2 rounded-xl hover:bg-s2s-orange duration-200"
          >
            Enquire
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap font-semibold text-xl lg:gap-5 justify-center items-center sticky bottom-0 z-20 bg-s2s-purple text-white p-3 text-center">
        Total: £{totalItemCount} + VAT
      </div>
    </>
  );
}
