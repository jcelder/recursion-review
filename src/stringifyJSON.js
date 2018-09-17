// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here



  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var stringifiedArray = '[';
    if (obj.length === 0) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        stringifiedArray = stringifiedArray + stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          stringifiedArray = stringifiedArray + ',';
        }
      }
    }
    return stringifiedArray + ']';
  } else {
    return String(obj);
  }
};
