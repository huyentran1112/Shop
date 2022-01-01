
import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Jin',
      email: 'jin@g.com',
      password: bcrypt.hashSync('jin', 8),
      isAdmin: true,  
    },
    {
      name: 'Jan',
      email: 'jan@g.com',
      password: bcrypt.hashSync('jan', 8),
      isAdmin: false,  
    }
  ],
  products: [
    {
      name: "Yema Caramel Cake",
      image: './images/c1.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      name: "Mango Sunrise Cake",
      image: './images/c2.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      name: "Ube Mousse Cake",
      image: './images/c3.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
      name: "Mango Graham Cake",
      image: './images/c4.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
        {
      name: "Black Forest",
      image: './images/c5.png',
      price: 60,
      ratings: 4,
      numReviews: 2,
      description: ""
    },
    {
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