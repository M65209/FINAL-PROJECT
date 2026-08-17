
const chefSpecials = [
  {
    name: "Line-Caught Sea Bass",
    price: "23,000 FCFA",
    description: "Minted pea puree, seasonal vegetables and a delicate champagne beurre blanc.",
    image: "images/food5.jpg",
    alt: "Sea Bass"
  },
  {
    name: "Wagyu Beef Fillet",
    price: "35,000 FCFA",
    description: "Premium grass-fed tenderloin, bone marrow butter and seasonal root vegetables.",
    image: "images/steak.jpg",
    alt: "Wagyu Beef"
  },
  {
    name: "Wild Mushroom Pappardelle",
    price: "19,000 FCFA",
    description: "Fresh handmade pasta, medley of forest mushrooms, garlic, thyme and cream.",
    image: "images/pasta.jpg",
    alt: "Pasta"
  }
];

const fullMenu = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Cured Prosciutto & Fig",
        price: "11,000 FCFA",
        description: "Roasted figs, whipped chevre, candied walnuts and balsamic reduction.",
        image: "../images/food1.jpg"
      },
      {
        name: "Yellowfin Tuna Tartare",
        price: "13,000 FCFA",
        description: "Hand-cut tuna, citrus, avocado, sesame and wonton chips with ginger soy.",
        image: "../images/food2.jpg"
      },
      {
        name: "Heirloom Beet Salad",
        price: "9,500 FCFA",
        description: "Roasted beets, whipped chevre, candied walnuts and lemon-thyme vinaigrette.",
        image: "../images/food3.jpg"
      },
      {
        name: "Truffled Onion Soup",
        price: "8,500 FCFA",
        description: "Slow-caramelized onions, rich broth, melted Gruyere and black truffle oil.",
        image: "../images/food6.jpg"
      }
    ]
  },
  {
    id: "mains",
    label: "Main Course",
    items: [
      {
        name: "Lelebotte Signature Fillet",
        price: "35,000 FCFA",
        description: "Premium grass-fed tenderloin, bone marrow butter and red wine reduction.",
        image: "../images/steak.jpg"
      },
      {
        name: "Pan-Seared Sea Bass",
        price: "23,000 FCFA",
        description: "Wild-caught bass, saffron risotto, braised leeks and champagne beurre blanc.",
        image: "../images/food5.jpg"
      },
      {
        name: "Wild Mushroom Pappardelle",
        price: "19,000 FCFA",
        description: "Fresh handmade pasta, forest mushrooms, garlic, thyme cream and pecorino.",
        image: "../images/pasta.jpg"
      }
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Molten Dark Chocolate",
        price: "8,500 FCFA",
        description: "70% cacao center with warm chocolate and golden vanilla ice cream.",
        image: "../images/dessert1.jpg"
      },
      {
        name: "Deconstructed Lemon Tart",
        price: "8,000 FCFA",
        description: "Zesty lemon curd, toasted meringue and buttery shortbread crumbs.",
        image: "../images/dessert2.jpg"
      },
      {
        name: "Classic Creme Brulee",
        price: "7,500 FCFA",
        description: "Velvety vanilla bean custard with a crisp caramelized sugar crust.",
        image: "../images/food4.jpg"
      }
    ]
  }
];

window.siteData = {
  chefSpecials: chefSpecials,
  fullMenu: fullMenu
};
