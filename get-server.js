const express = require('express');
const app = express();
const port = 3000;

const features = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
  },
  // ... (more features)
];

// GET method for retrieving features
app.get('/get-features', (req, res) => {
  res.json(features);
});

app.listen(port, () => {
  console.log(`GET Server is running on port ${port}`);
});
