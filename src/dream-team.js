const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = "";
  if (arguments === null || arguments === undefined  || arguments.length < 1) {
    return false;
  }
  else
  {
    if (members.length === 1)
    {
      if(typeof members[0] !=="string")  return false;
    } 
    else
    {
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
          let pos = 0;
          let cont = true;
          do {
            if (members[i].charAt(pos) !== " ") cont = false;
            else pos++;
          } while (cont);
          res += members[i].charAt(pos).toUpperCase();
        }
      }
      if (res === "") return false;
      else return res.split("").sort().join("");
    }
  }

};
