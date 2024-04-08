import { useEffect, useMemo, useState } from "react";
import Label from "./Label";
import SpecialInput from "./SpecialInput";

const ItemList = ({
  items,
  setItems,
}: {
  items: any[];
  setItems: (a: any) => void;
}) => {
  const handleClick = () => {
    setItems([
      ...items,
      {
        name: "",
        count: "",
        price: "",
      },
    ]);
  };
  return (
    <div className="mt-[69px] w-full">
      <h1 className="text-secondary text-[18px] font-bold mb-5">Item List</h1>
      <div className={"hidden md:grid grid-cols-[7fr_2fr_3fr_4fr] gap-3 "}>
        <Label>Item Name</Label>
        <Label>Qty.</Label>
        <Label>Price</Label>
        <Label>Total</Label>
      </div>
      <div
        className={
          "grid gap-12 md:gap-[18px] " + (!items.length ? "mb-3" : "mb-12 ")
        }
      >
        {items.length > 0 &&
          items.map(
            (
              e: {
                name: string;
                count: string;
                price: string;
              },
              i: number
            ) => (
              <div key={i} className="grid gap-6 md:grid-cols-[2fr_3fr]">
                <div className="grid gap-2">
                  <Label hidden>Item Name</Label>
                  <SpecialInput
                    setData={setItems}
                    id={i}
                    name="name"
                    array={items}
                    type="name"
                  />
                </div>
                <div className="grid grid-cols-[3fr_4fr_6fr] gap-4">
                  <div className="grid gap-2">
                    <Label hidden>Qty.</Label>
                    <SpecialInput
                      id={i}
                      setData={setItems}
                      type="number"
                      array={items}
                      name="count"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label hidden>Price</Label>
                    <SpecialInput
                      setData={setItems}
                      id={i}
                      type="number"
                      array={items}
                      name="price"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label hidden>Total</Label>
                    <div className="py-4 flex justify-between">
                      <span className="font-bold text-sm text-secondary">
                        {+e.price * +e.count}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (items.length > 1) {
                            setItems([...items.filter((_, z) => z !== i)]);
                          }
                        }}
                        className="cursor-pointer lg:hover:text-orange text-gray transition-all"
                      >
                        <svg
                          width="20"
                          viewBox="0 0 13 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.44442 0L9.33333 0.888875H12.4444V2.66667H0V0.888875H3.11108L4 0H8.44442ZM2.66667 16C1.68442 16 0.888875 15.2045 0.888875 14.2222V3.55554H11.5555V14.2222C11.5555 15.2045 10.76 16 9.77779 16H2.66667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="w-full py-[18px] bg-calc dark:bg-lightBlue rounded-3xl lg:hover:opacity-75  transition-all font-bold text-blue dark:text-lightGray"
      >
        + Add Item
      </button>
    </div>
  );
};

export default ItemList;
