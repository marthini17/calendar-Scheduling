

// router.js

const express = require('express');
const router = express.Router();
const schemas= require('../modules/schemas')
// Middleware to parse JSON requests
router.use(express.json());

// Define the POST route for adding an event
router.post('/app',async (req, res) => {
  const { email, password } = req.body;
  const newEvent=new schemas.users({email:email,password:password})
  const save= await newContact.save()
  if(save){
    res.json({ status: 'success', message: 'Event added successfully' });
  }

  // Process the data (e.g., save it to a database)
  console.log('Received data:', { email, password });

  // Send a response
 res.end()
});

module.exports = router;

