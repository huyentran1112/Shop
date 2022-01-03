MERN app for ecommerce

I. Getting Started

This document serves as a guide to clone the repository and run in a local machine. 

II. Prerequisites

This is the list things you need to use the app:

Npm
Git

III. Installation

On your CLI:

1. Clone the github repository:

        git clone -b feature https://github.com/huyentran1112/Shop.git

3. Install dependencies on the Shop and Frontend Directory:

        npm install package.json
        

5. Run Backend 

        cd Shop
        npm start
        
6. Run Frontend

        cd Shop/frontend
        npm start

IV. Instruction

1. View all products

        API: /api/products
        Webapp: Either go to the home route "/" or click the logo in the header

2. View product details

        API: /api/product/{id}
        Webapp: Click an image of the product


3. Add products

        Update products object inside the Shop/data.js file
        Go to route: /api/products/seed
  

4. Add users

        Add users object inside the Shop/data.js file
        Go to route: /api/users/seed
