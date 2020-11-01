const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {
    throw new CustomError('Not implemented');
      let that = this;
      return 1 + (arr instanceof Array ? arr.reduce(function (max, item) 
      {
        return Math.max(max, that.calculateDepth(item));
      }, 0) : -1);
}  
};
