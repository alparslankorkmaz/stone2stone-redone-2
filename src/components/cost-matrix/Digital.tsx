"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Print() {
  const [items, setItems] = useState([
    {
      itemName: "A4 Informational Document",
      price: 395.0,
      quantity: 0,
    },
    {
      itemName: "+Each Accommodating Page",
      price: 185.0,
      quantity: 0,
    },
    {
      itemName: "Brochures (6 pages)",
      price: 1295.0,
      quantity: 0,
    },
    {
      itemName: "+Each Accommodating Page",
      price: 185.0,
      quantity: 0,
    },
    {
      itemName: "Double Sided Gatefold A4’s",
      price: 645.0,
      quantity: 0,
    },
    {
      itemName: "A4 6 Page Gatefold",
      price: 1395.0,
      quantity: 0,
    },
    {
      itemName: "Double Sided A4 folded to A5",
      price: 580.0,
      quantity: 0,
    },
    {
      itemName: "Postcard Design",
      price: 295.0,
      quantity: 0,
    },
    {
      itemName: "Personlised Posters (A1, A2, A3)",
      price: 625.0,
      quantity: 0,
    },
    {
      itemName: "Roll Up Banner Design",
      price: 330.0,
      quantity: 0,
    },
    {
      itemName: "Event Stand Design (per panel)",
      price: 425.0,
      quantity: 0,
    },
    {
      itemName: "Business Card Design",
      price: 295.0,
      quantity: 0,
    },
    {
      itemName: "General Artwork (Hourly)",
      price: 145.0,
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
      {/* SERVICES */}
      <div className="grid grid-cols-2 container max-w-7xl mx-auto my-10">
        <div className="col-span-2 lg:col-span-1 rounded-xl bg-white p-5">
          <div className="flex justify-between items-center mb-10 p-2">
            <h3 className="font-semibold text-4xl">Print</h3>
            <p>Printing to be quoted separately</p>
          </div>
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
      </div>
      <div className="flex flex-wrap font-semibold text-xl lg:gap-5 justify-center items-center sticky bottom-0 z-20 bg-s2s-purple text-white p-3 text-center">
        Total: £{totalItemCount} + VAT
      </div>
    </>
  );
}
