const menuItems = [
  {
    id: 1,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish1.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 129,
    totalDelivered: 230,
    mealType: 'lunch',
    reviews: [
      {
        reviewerName: 'John Doe',
        rating: 4.5,
        reviewDate: '2024-07-18',
        reviewText: 'Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.'
      },
      {
        reviewerName: 'Emma Watson',
        rating: 5,
        reviewDate: '2024-07-17',
        reviewText: 'Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.'
      }
    ]
  },
  {
    id: 2,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish2.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 109,
    totalDelivered: 180,
    mealType: 'dinner',
    reviews: [
      {
        reviewerName: 'Jane Smith',
        rating: 5,
        reviewDate: '2024-07-17',
        reviewText: 'Absolutely delicious! Would order again.'
      },
      {
        reviewerName: 'Michael Johnson',
        rating: 4,
        reviewDate: '2024-07-16',
        reviewText: 'Very tasty, enjoyed every bite.'
      }
    ]
  },
  {
    id: 3,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish3.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 140,
    totalDelivered: 150,
    mealType: 'dinner',
    reviews: [
      {
        reviewerName: 'Sarah Brown',
        rating: 4.5,
        reviewDate: '2024-07-18',
        reviewText: 'Excellent dish, loved the flavors!'
      }
    ]
  },
  {
    id: 4,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish4.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 89,
    totalDelivered: 280,
    mealType: 'breakfast',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 5,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish1.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 165,
    totalDelivered: 120,
    mealType: 'dinner',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 6,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish2.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 69,
    totalDelivered: 200,
    mealType: 'deserts',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 7,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish3.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 40,
    totalDelivered: 300,
    mealType: 'drinks',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 8,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish4.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 95,
    totalDelivered: 210,
    mealType: 'lunch',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 9,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish1.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 119,
    totalDelivered: 160,
    mealType: 'breakfast',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.'
      }
    ]
  },
  {
    id: 10,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish2.svg',
    itemDescription: 'Idiyappam pearls embrace vibrant veggie stew, ready for a textural tango.',
    price: 75,
    totalDelivered: 180,
    mealType: 'drinks',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 11,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish2.svg',
    itemDescription: 'Beef patty, cheddar cheese, lettuce, tomato, and mayo in a sesame seed bun.',
    price: 130,
    totalDelivered: 190,
    mealType: 'lunch',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Good breakfast option, filling and tasty.'
      }
    ]
  },
  {
    id: 12,
    itemName: 'Idiyappam with Vegetable Stew',
    itemImage: '/images/menu/dish4.svg',
    itemDescription: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    price: 79,
    totalDelivered: 220,
    mealType: 'desserts',
    reviews: [
      {
        reviewerName: 'David Lee',
        rating: 4,
        reviewDate: '2024-07-15',
        reviewText: 'Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.Lorem ipsum dolor sit amet consectetur. Id velit turpis convallis vestibulum metus tortor. Nunc id nunc scelerisque amet massa bibendum eu imperdiet. Posuere tincidunt placerat neque urna. Eu quis lorem tristique felis.'
      }
    ]
  },
];

export default menuItems;
