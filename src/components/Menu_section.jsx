import React from "react";
import { useState, useEffect } from "react";
import appitizers_img from "../assets/appetizers.svg";
import drinks_img from "../assets/drinks.svg";
import desserts_img from "../assets/desserts.svg";
import Button_component from "./Button_component";

const Menu_section = () => {
  const [category, setCategory] = useState("appetizer");
  const menuData = [
    {
      name: "appetizer",
      url: `${appitizers_img}`,
      items: [
        {
          name: "Paneer / Chiken Chilli",
          description:
            "Stir-fried crispy chicken or paneer, bell pepper and red onion tossed in garlic chili sauce.",

          price: "$ 13",
        },

        {
          name: "Chicken 65",
          description: "Sautéed boneless chicken rubbed with house spices",
          price: "$ 12",
        },

        {
          name: "Vegetable Samosa",
          description:
            "Crispy pastry filled with potatoes and peas served with cilantro and tamarind sauce. (2 pcs)",
          price: "$ 7",
        },

        {
          name: "Vegetable Pokoda",
          description: "Mix vegetable fritters banded with chickpea flour",
          price: "$ 7",
        },

        {
          name: "Gobi Manchurian",
          description:
            "Fried cauliflower florets sautéed with green onions, garlic, soy, and chili.",
          price: "$ 10",
        },

        {
          name: "Mustang Aloo",
          description: "Fried potatoes lightly tossed with house spices",
          price: "$ 7",
        },

        {
          name: "Tandoori Wings",
          description:
            "Marinated in house spices and tossed in our tikka sauce. Served w/ minty yogurt chutney. (6 pcs)",
          price: "$ 12",
        },

        {
          name: "Okra Fried",
          description: "Served w/ homemade tomato cilantro sauce.",
          price: "$ 8",
        },
      ],
    },

    {
      name: "beverages",
      url: `${drinks_img}`,
      items: [
        {
          name: "Mango Lassi",
          description: "Yogurt Drink",
          price: "$ 5",
        },

        {
          name: "Summer in Nepal",
          description: "Green mango, cumin, black salt, mint, black pepper",
          price: "$ 4",
        },

        {
          name: "RANJANA GALLI Lemon Soda",
          description: "Lemon infused refreshing soda",
          price: "$ 4",
        },

        {
          name: "Soda",
          description: "(Coke, Fanta, Sprite)",
          price: "$ 3",
        },

        {
          name: "Nepalese Chiya (Hot Tea)",
          description:
            "Nepal's national drink. Spiced black tea brewed in hot milk.",
          price: "$ 3",
        },
      ],
    },

    {
      name: "desserts",
      url: `${desserts_img}`,
      items: [
        {
          name: "Rasbari",
          description:
            "Solid milk balls served in a sweet creamy cardamom syrup.",
          price: "$ 4",
        },

        {
          name: "Rabri",
          description:
            "Milk reduced to a thick pudding-like consistency, flavored with cardamoms, saffron, and nuts.",
          price: "$ 6",
        },

        {
          name: "Nepalese style Kheer",
          description: "Slow cooked rice pudding with nuts and raisins.",
          price: "$ 6",
        },

        {
          name: "Ice-Cream",
          description: "",
          price: "$ 4",
        },
      ],
    },
  ];

  const items_data = menuData.find((d) => d.name == category);

  const changeCategory = (name) => {
    setCategory(name);
  };

  const addClass = (a_category) => {
    if (a_category == category) {
      return "opacity-100";
    }
    return "opacity-50";
  };

  useEffect(() => {
    const element = document.getElementById("menu_list");
    element.classList.add("opacity-10");

    const timeout = setTimeout(() => {
      element.classList.remove("opacity-10");
    }, 100); // Adjust the duration based on your animation time

    return () => {
      clearTimeout(timeout);
    };
  }, [category]);

  return (
    <>
      <h1 className="text-3xl text-center text-prime py-6">Menu</h1>
      <div className="w-full bg-prime py-6 flex items-center justify-center">
        <div className="max-w-5xl w-full flex justify-center gap-24 text-white">
          {menuData.map((type, index) => (
            <div
              key={index}
              onClick={() => changeCategory(type.name)}
              className={`text-center cursor-pointer ${addClass(
                type.name
              )} ease-in duration-150`}
            >
              <img className="m-auto" src={type.url} alt={type.name} />
              <p className="text-white text-lg uppercase">{type.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-wrap gap-x-16 gap-y-8 w-full max-w-5xl mx-auto px-4 lg:px-0 mt-8 transition-opacity duration-400"
        id="menu_list"
      >
        {items_data.items.map((item, index) => (
          <div
            key={index}
            className="w-full basis-full px-1 md:basis-[calc(50%-32px)] md:px-0 md:w-1/2"
          >
            <div className="flex pb-3 justify-between">
              <div>
                <h5 className="text-lg uppercase font-bold text-prime">
                  {item.name}
                </h5>
                <p className="text-prime text-xs">{item.description}</p>
              </div>

              <p className="font-bold text-sm w-24 text-end">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="flex justify-center my-12">
        <Button_component
          btn_text="view pdf menu"
          href="https://firebasestorage.googleapis.com/v0/b/gorkhalikitchentampa.appspot.com/o/menu%2Fmenu.pdf?alt=media&token=4cfaff22-8f0f-483d-a8ca-c8300e905e62"
          text_color="text-prime"
          target="_blank"
        />
      </span>
    </>
  );
};

export default Menu_section;
