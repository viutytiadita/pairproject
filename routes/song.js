const routes = require("express").Router();
const Song = require("../models").Song;

routes.get("/", (req, res) => {
  Song.findAll()
    .then(result => {
      res.render("songAll", {
        listdata: result.map(x => x.dataValues),
        column: Song.getKeys()
      });
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

routes.get("/register", (req, res) => {
  res.render("songRegister", {
    column: Song.getKeys()
  });
});

routes.post("/register", (req, res) => {
  Song.create({
    song_name: req.body.song_name,
    genre: req.body.genre,
    price: req.body.price,
    artist: req.body.artist,
    album: req.body.album,
    rating: req.body.rating
  })
    .then(response => {
      res.redirect("/song");
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

routes.get("/edit/:id", (req, res) => {
  Song.findByPk(req.params.id).then(result => {
    res.render("songEdit", {
      data: result.dataValues
    });
  });
});

routes.post("/edit/:id", (req, res) => {
  Song.update(
    {
      song_name: req.body.song_name,
      genre: req.body.genre,
      price: req.body.price,
      artist: req.body.artist,
      album: req.body.album,
      rating: req.body.rating
    },
    {
      where: { id: req.params.id }
    }
  )
    .then(result => {
      res.redirect("/song");
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

routes.get("/delete/:id", (req, res) => {
  Song.destroy({
    where: { id: req.params.id }
  })
    .then(response => {
      res.redirect("/song");
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

routes.get("/users", (req, res) => {
  Song.findAll({include: [User]})
    .then(result => {
      res.render("songUsers", {
        listdata: result.map(x => x.dataValues),
        column: Song.getKeys()
      });
    })
    .catch(err => {
      res.render("error", { err: err });
    });
});

module.exports = routes;
