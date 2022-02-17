//jshint esversion:6



exports.getDate = function () {

  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const today = new Date();
  return today.toLocaleDateString("en-US", options);
};



exports.getYear = function () {

  let options = {
    year: 'numeric',
};

  const year = new Date();
  return year.toLocaleDateString("en-US", options);

};
