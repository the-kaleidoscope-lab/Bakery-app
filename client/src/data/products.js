export const categories = [
  "Cakes",
  "Breads",
  "Cookies",
  "Pastries",
  "Seasonal",
  "Gluten-Free"
];

export const products = [
  {
    id: "p1",
    name: "Honey Almond Brioche",
    description: "Buttery brioche layered with toasted almonds and wildflower honey.",
    price: 14.5,
    category: "Breads",
    stock: 18,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1543779508-0b6f1f0c5a06?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542826438-6cdbb4b2b3b8?auto=format&fit=crop&w=800&q=80"
    ],
    ingredients: ["Organic flour", "Cultured butter", "Almonds", "Honey"],
    sizes: ["Small", "Medium", "Large"],
    addOns: ["Extra glaze", "Seeded crust"]
  },
  {
    id: "p2",
    name: "Velvet Raspberry Cake",
    description: "Deep cocoa sponge with raspberry compote and vanilla bean cream.",
    price: 42.0,
    category: "Cakes",
    stock: 6,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=800&q=80"
    ],
    ingredients: ["Cocoa", "Raspberries", "Vanilla bean", "Cream cheese"],
    sizes: ["Small", "Medium", "Large"],
    addOns: ["Gold leaf", "Extra berries"]
  },
  {
    id: "p3",
    name: "Pistachio Financier",
    description: "Chewy, nutty almond cake finished with pistachio butter.",
    price: 6.5,
    category: "Pastries",
    stock: 22,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    ingredients: ["Almond flour", "Pistachio", "Brown butter"],
    sizes: ["Small", "Medium"],
    addOns: ["Rose glaze", "Extra pistachio"]
  },
  {
    id: "p4",
    name: "Salted Caramel Cookies",
    description: "Crisp edges, soft center, and molten caramel pockets.",
    price: 12.0,
    category: "Cookies",
    stock: 30,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    ],
    ingredients: ["Dark brown sugar", "Sea salt", "Caramel"],
    sizes: ["Small", "Medium", "Large"],
    addOns: ["Extra sea salt", "Chocolate drizzle"]
  }
];

export const reviews = [
  {
    id: "r1",
    name: "Leena D.",
    rating: 5,
    comment: "Absolutely decadent. The raspberry cake was moist and balanced."
  },
  {
    id: "r2",
    name: "Mark T.",
    rating: 4,
    comment: "Loved the brioche! The honey glaze was not too sweet."
  }
];

export const orderStatuses = ["Baking", "Packed", "Out for Delivery", "Delivered"];
