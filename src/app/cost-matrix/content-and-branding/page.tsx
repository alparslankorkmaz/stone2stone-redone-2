"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Page() {
  const [items, setItems] = useState([
    {
      itemName: "Copywriting (Hourly)",
      price: 185.0,
      quantity: 0,
    },
    {
      itemName: "Stock Imagery (Per Image)",
      price: 25,
      quantity: 0,
    },
    {
      itemName: "Filming and Editing (Half a Day)",
      price: 950.0,
      quantity: 0,
    },
    {
      itemName: "Filming and Editing (Full Day)",
      price: 1750.0,
      quantity: 0,
    },
    {
      itemName: "Photography (Daily rate)",
      price: 750.0,
      quantity: 0,
    },
    {
      itemName: "Logo and Brand Environment",
      price: 3250.0,
      quantity: 0,
    },
    {
      itemName: "Logo Reveal Video",
      price: 525.0,
      quantity: 0,
    },
    {
      itemName: "E-Signature",
      price: 245.0,
      quantity: 0,
    },
    {
      itemName: "Brand Guidelines (6 Pages)",
      price: 1295.0,
      quantity: 0,
    },
    {
      itemName: "Website Copy (Core Content)",
      price: 2000.0,
      quantity: 0,
    },
    {
      itemName: "Website Optimisation/SEO",
      price: 3250.0,
      quantity: 0,
    },
    {
      itemName: "Website Design (8 Pages)",
      price: 5250.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Pages",
      price: 550.0,
      quantity: 0,
    },
    {
      itemName: "Website Build (8 Pages)",
      price: 8800.0,
      quantity: 0,
    },
    {
      itemName: "+ Additional Pages",
      price: 850.0,
      quantity: 0,
    },
    {
      itemName: "Branded Document Templates",
      price: 1395.0,
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
      <div className="flex items-center justify-center bg-hero_bg bg-cover bg-bottom bg-no-repeat">
        <div className="mx-auto mt-16 grid w-full grid-cols-2 items-center justify-center gap-5 p-5 lg:mt-20 lg:max-w-7xl lg:gap-20 lg:px-0 lg:py-16">
          {/* TEXT */}
          <div className="col-span-2 text-center text-white md:mt-2 lg:col-span-1 lg:mt-0 lg:text-start">
            <h1 className="mb-5 text-4xl font-semibold lg:text-6xl">
              Content & Branding
            </h1>
            {/* <p className="lg:text-2xl">Printing to be quoted separately</p> */}
          </div>
          {/* IMAGE */}
          <div className="col-span-2 flex items-center justify-end lg:col-span-1">
            <div className="h-48 w-full lg:h-[30rem] lg:w-[30rem]">
              <img
                src="/img/cost-of-matrix/cost-of-matrix.webp"
                alt="meeting table"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 grid max-w-7xl grid-cols-2 gap-10">
        <div className="col-span-2">
          <Link
            href="/cost-matrix"
            className="flex w-fit items-center justify-center gap-5 rounded-xl bg-s2s-purple px-10 py-2 text-center font-bold text-white duration-200 hover:bg-s2s-orange"
          >
            <FaArrowLeft /> Go back
          </Link>
        </div>

        <div className="col-span-2 rounded-xl bg-white p-5 lg:col-span-1">
          {items.map((item, index) => (
            <div key={index} className="flex border-b-2 border-s2s-purple py-5">
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
              <div className="mx-5 text-lg text-s2s-gray">{item.itemName}</div>
              <div className="ms-auto font-semibold">£{item.price}</div>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex h-fit flex-col items-center justify-center gap-10 rounded-xl bg-white p-16 text-center lg:col-span-1">
          <h3 className="text-4xl font-bold">Something missing?</h3>
          <p className="text-4xl">
            For anything that is not included in this list, please contact us
            below.
          </p>
          <Link
            href="contact-us"
            className="w-fit rounded-xl bg-s2s-purple px-10 py-2 text-center font-bold text-white duration-200 hover:bg-s2s-orange"
          >
            Enquire
          </Link>
        </div>
      </div>
      <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-center bg-s2s-purple p-3 text-center text-xl font-semibold text-white lg:gap-5">
        Total: £{totalItemCount} + VAT
      </div>
    </>
  );
}
