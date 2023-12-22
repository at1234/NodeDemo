const express = require('express');
const app = express();
const port = 3000;

// Set up middleware to parse POST request data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a simple array of users (for demo purposes)
const users = [
  { id: 1, username: 'test', password: 'test123$' },
  { id: 2, username: 'dummy', password: 'test1234$' },
];

// Define routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple authentication (replace with a proper authentication mechanism)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send(`Welcome, ${user.username}!`);
  } else {
    res.send('Invalid username or password.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});