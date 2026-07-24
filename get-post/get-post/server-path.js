//Name: Lansangan, Justine O.
//Section: WD-301
const path = require('path');
const express = require('express');

app = express();
const PORT = 3006;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/process-get', (req, res) => {
  const { first_name, last_name } = req.query;

  if (!first_name || !last_name) {
    return res.status(400).json({
      error: 'Both first_name and last_name are required.'
    });
  }

  res.json({
    first_name,
    last_name
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Process POST request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/process-post', (req, res) => {
  const { first_name, last_name } = req.body;

  if (!first_name || !last_name) {
    return res.status(400).json({
      error: 'Both first_name and last_name are required.'
    });
  }

  res.status(200).json({
    message: 'Form submitted successfully.',
    first_name,
    last_name
  });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});