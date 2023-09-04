app.get('/user', (req, res) => {
    if (req.session.user) {
      res.json(req.session.user); // if session exists, return user info
    } else {
      res.status(401).send('Not logged in');
    }
  });
  