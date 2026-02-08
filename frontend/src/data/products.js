export const categories = [
  'Cakes',
  'Breads',
  'Cookies',
  'Pastries',
  'Seasonal'
];

export const products = [
  {
    id: 'cake-berry',
    name: 'Berry Chantilly Cake',
    category: 'Cakes',
    price: 42,
    rating: 4.8,
    stock: 12,
    popularity: 98,
    description: 'Vanilla sponge layered with mascarpone cream and fresh berries.',
    ingredients: ['Vanilla bean', 'Mascarpone', 'Strawberries', 'Blueberries'],
    sizes: ['Small', 'Medium', 'Large'],
    addOns: ['Extra cream', 'Rose petals', 'Chocolate curls'],
    images: [
      'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'bread-sourdough',
    name: 'Golden Sourdough Loaf',
    category: 'Breads',
    price: 10,
    rating: 4.7,
    stock: 30,
    popularity: 88,
    description: '48-hour fermented sourdough with a caramelized crust.',
    ingredients: ['Organic flour', 'Wild yeast', 'Sea salt'],
    sizes: ['Small', 'Medium', 'Large'],
    addOns: ['Rosemary', 'Olive tapenade'],
    images: [
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'cookie-ginger',
    name: 'Brown Butter Ginger Cookies',
    category: 'Cookies',
    price: 16,
    rating: 4.9,
    stock: 24,
    popularity: 94,
    description: 'Chewy cookies with brown butter, ginger, and warm spices.',
    ingredients: ['Brown butter', 'Molasses', 'Ginger', 'Cinnamon'],
    sizes: ['Small', 'Medium', 'Large'],
    addOns: ['White chocolate drizzle', 'Sea salt flakes'],
    images: [
      'https://images.unsplash.com/photo-1548365328-8b849e6f5f5c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'pastry-almond',
    name: 'Almond Croissant',
    category: 'Pastries',
    price: 8,
    rating: 4.6,
    stock: 18,
    popularity: 82,
    description: 'Flaky croissant filled with almond frangipane.',
    ingredients: ['Cultured butter', 'Almonds', 'Vanilla'],
    sizes: ['Small', 'Medium', 'Large'],
    addOns: ['Extra almonds', 'Vanilla glaze'],
    images: [
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'seasonal-pie',
    name: 'Honey Peach Galette',
    category: 'Seasonal',
    price: 28,
    rating: 4.5,
    stock: 8,
    popularity: 78,
    description: 'Rustic peach galette with wildflower honey glaze.',
    ingredients: ['Peaches', 'Honey', 'Butter crust'],
    sizes: ['Small', 'Medium', 'Large'],
    addOns: ['Vanilla ice cream', 'Cardamom sugar'],
    images: [
      'https://images.unsplash.com/photo-1464306076886-da185f6a7808?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const recommendations = [
  {
    id: 'rec-1',
    name: 'Lavender Honey Roll',
    note: 'Perfect with your recent berry cake order',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rec-2',
    name: 'Maple Pecan Tart',
    note: 'Trending in pastry lovers',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80'
  }
];

export const reviews = [
  {
    id: 'rev-1',
    name: 'Ava Morales',
    rating: 5,
    comment: 'The cream was airy and the berries tasted fresh-picked.',
    date: '2 days ago'
  },
  {
    id: 'rev-2',
    name: 'Ethan Lee',
    rating: 4,
    comment: 'Loved the flavor. I ordered an extra topping and it was perfect.',
    date: '1 week ago'
  }
];
