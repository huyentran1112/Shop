
import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Jin',
      email: 'jin@g.com',
      password: bcrypt.hash('jin', 8),
      isAdmin: true,  
    },
    {
      name: 'Jan',
      email: 'jan@g.com',
      password: bcrypt.hash('jan', 8),
      isAdmin: false,  
    }
  ],
  products: [
    {
      _id: '1',
      name: "Yema Caramel Cake",
      image: './images/c1.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      _id: '2',
      name: "Mango Sunrise Cake",
      image: './images/c2.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      _id: '3',
      name: "Ube Mousse Cake",
      image: './images/c3.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      _id: '4',
      name: "Mango Graham Cake",
      image: './images/c4.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
        {
      _id: '5',
      name: "Black Forest",
      image: './images/c5.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      _id: '6',
      name: "Rocky Road",
      image: './images/c6.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
  ]
}
export default data;