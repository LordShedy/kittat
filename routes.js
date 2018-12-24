'use strict';

/* exporting object containing all the routes */
module.exports = {
  index = (req, res) => {
    res.render('index');
  };
  r_index = (req, res) => {res.redirect('/');};
  history = (req, res) => {
    res.render('history');
  };
  r_history = (req, res) => {res.redirect('/history');};
  statistics = (req, res) => {
    res.render('stats');
  };
  r_statistics = (req, res) => {res.redirect('/statistics');};
};
