// Create web server
// Create a new comment
// Read all comments
// Read a single comment
// Update a comment
// Delete a comment

// 1. Create web server
const express = require('express');
const app = express();
app.use(express.json());
const comments = require('./comments.json');

// 2. Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// 3. Read all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 4. Read a single comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  res.json(comment);
});

// 5. Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  comments[id] = newComment;
  res.json(newComment);
});

// 6. Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.json({ message: 'Comment deleted' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 7. Run the server
// node comments.js
// Use Postman to test the API
// Create a new comment
// Read all comments
// Read a single comment
// Update a comment
// Delete a comment