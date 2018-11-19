var myResponse;

// Different ways to clone an object
function (response, status) {
  // Shallow copy
  myResponse = response;
  myResponse = JSON.parse(JSON.stringify(response));
  myResponse = Object.assign({}, response);
  myResponse = $.extend({}, response); // jQuery
  // Deep copy
  myResponse = Object.freeze(Object.assign({}, response));
  myResponse = $.extend(true, {}, response); // jQuery
  ...
}
