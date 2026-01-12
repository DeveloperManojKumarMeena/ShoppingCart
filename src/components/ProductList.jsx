import React from "react";
import Card from "../components/Card"

function ProductList() {
  const procucts = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 799,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 2499,
    },
    {
      id: 3,
      name: "Bluetooth Headphones",
      price: 1999,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 3500,
    },
    {
      id: 5,
      name: "Gaming Monitor",
      price: 12000,
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 1250,
    },
    {
      id: 7,
      name: "External Hard Drive (1TB)",
      price: 4200,
    },
    {
      id: 8,
      name: "Laptop Stand",
      price: 850,
    },
    {
      id: 9,
      name: "Webcam HD",
      price: 2100,
    },
    {
      id: 10,
      name: "Power Bank 20000mAh",
      price: 1600,
    },
  ];

  return <div className="w-full flex gap-2.5 flex-wrap mt-2.5 justify-center">
  {procucts.map((e)=>(
    
    <div key={e.id} >
        <Card procuct={e}/>
    </div>
  ))}
  </div>
}

export default ProductList;
