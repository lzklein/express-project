const express = require('express');
const router = express.Router();

router.post('/checkuser', (req, res) => {
  const sessionUser = req.body.sessionUser;
    if (!!sessionUser) {
      req.session.user =  sessionUser 
      res.json({sessionUser: req.session.user}); // if session exists, return user info
    } else {
      res.json({ message: 'Not logged in' }); }
  });
  
module.exports = router;
