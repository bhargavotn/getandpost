const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());

const differentFeatures = [
  {
    id: 2,
    title: 'Samsung Galaxy S22',
    description: 'The latest Samsung smartphone with advanced features',
    price: 699,
    discountPercentage: 8.5,
    rating: 4.85,
    stock: 120,
    brand: 'Samsung',
    category: 'smartphones',
  },
  // ... (more differentFeatures)
];

// POST method for adding new features
app.post('/add-feature', (req, res) => {
  const newFeature = req.body;
  differentFeatures.push(newFeature);
  res.status(201).json(newFeature);
});

app.listen(port, () => {
  console.log(`POST Server is running on port ${port}`);
});
