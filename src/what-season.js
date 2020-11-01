const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) return "Unable to determine the time of year!";
  else {
    try {
      if (Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');
      if (date.constructor.name === "Date") {
        let month = date.getMonth();
        if (month === 0 || month === 1 || month === 11) return "winter";
        else if (month === 2 || month === 3 || month === 4) return "spring";
        else if (month === 5 || month === 6 || month === 7) return "summer";
        else if (month === 8 || month === 9 || month === 10) return "fall";
      } else throw new Error("Error");
    } catch {
      alert(error.name);
    }
  }
};
