const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Enquiry = require('./models/Submission');
const User = require('./models/User');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const secretKey = 'mysecretkey';

const app = express();
const server = http.createServer(app);

const io = socketIO(server);

const fs = require('fs');

// Saving the token to a file
fs.writeFileSync('token.txt', 'my-secret-token');
// Reading the token from a file
const token = fs.readFileSync('token.txt').toString();
console.log(token); // Output: 'my-secret-token'


app.use(cors({
origin: 'http://localhost:3000', 
credentials: true
}));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });
mongoose.connection.on('error', err =>console.error(err));
mongoose.connection.on("connected", () => console.log("MongoDB Connected Successfully"));

//Routes

app.post('/contact', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    io.emit('submission_updated', newEnquiry);
    res.json({message: "Enquiry submission succefully"})
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message});
  }
});


app.post('/api/login', async (req, res) => {
const { username, password } = req.body;
try {
const user = await User.findOne({ username, password });
if (!user) {
throw new Error('Invalid credentials');
}
// Sign the token with the secret key
const token = jwt.sign({ userId: user._id }, secretKey);
res.send({ token });
} catch (err) {
res.status(422).send({ error: err.message });
}
});

app.get(async (req, res, next) => {
  // Get the authorization token from the request headers
  const token = req.headers.authorization;
// If no token is present in the request headers, return a 401 status code
if (!token) {
    return res.status(401).send({ error: 'Not authorized' });
}
try {
    // Verify the token with the secret key
    const decoded = jwt.verify(token, secretKey, { ignoreExpiration: false });
    req.userId = decoded.userId;
    next();
} catch (err) {
    // check if the error is due to token expired
    if (err.name === 'TokenExpiredError') {
        return res.status(401).send({ error: 'Token expired' });
    }
    // check if the error is due to invalid token
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).send({ error: 'Invalid token' });
    }
    return res.status(401).send({ error: 'Not authorized' });
}
});


app.get('/contact', async (req, res) => {
  try {
      const submissions = await Enquiry.find().sort({ submission_date: -1 });
      res.send(submissions);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});



io.on('connection', socket => {
  console.log('User connected');

  socket.on('update_submission', async data => {
      try {
          const { id, name, number, email, message } = data;
          const updatedSubmission = await Enquiry.findByIdAndUpdate(id, { name, number, email, message }, { new: true });
          io.sockets.emit('submission_updated', updatedSubmission);
      } catch (error) {
          console.log(error);
          socket.emit("submission_update_error", error.message);
      }
  });

  socket.on('disconnect', () => {
      console.log('Client disconnected');
  });
});

/////////////////////////////////////////
app.delete('/contact/:id', async (req, res) => {
  try {
    // Find the submission by id and delete it
    const deletedSubmission = await Enquiry.findByIdAndDelete(req.params.id);
    // Emit the "submission_deleted" event with the deleted submission data
    socket.emit('submission_deleted', deletedSubmission);
    res.send(deletedSubmission);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.put('/contact/:id', async (req, res) => {
  try {
    // Find the submission by id and update it
    const updatedSubmission = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Emit the "submission_updated" event with the updated submission data
    socket.emit('submission_updated', updatedSubmission);
    res.send({ message: "Submission updated successfully", data: updatedSubmission });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


///////////////////////////////////////////////////////

const newUser = new User({
  username: 'admin',
  password: 'password123'
});

newUser.save()
  .then(() => console.log('User created'))
  .catch(err => console.error(err));

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});