const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  throw new CustomError('Not implemented');
  let hanoi = {
    turns: 0,
    seconds: 0
  }
  hanoi.turns = Math.pow(2, disksNumber) - 1;
  hanoi.seconds = Math.floor((hanoi.turns * 3600) / turnsSpeed);
  console.log(hanoi);
  return hanoi;

};
