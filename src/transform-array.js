const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) 
{
  if (Object.prototype.toString.call(arr) !== '[object Array]') 
  {
    throw new Error('Error');
  }
  else if (arr.length === 0)  return [];
  
  let result = [];
  let i = 0;
  while (i < arr.length)
  { 
    switch (arr[i]) 
    {
       case '--double-next' : if (i < (arr.length-1)) result.push(arr[i+1]); break;
       case '--double-prev' : if (result.length > 0) result.push(result[result.length-1]);  break;
       case '--discard-next': result.push('del'); i++; break;
       case '--discard-prev' : if (result.length>0) {result.pop()};  break;
       default : result.push(arr[i]);
    }
    i++;
  };
   return result.filter(word => word !== 'del');
  throw new CustomError('Not implemented');
  
};
