document.addEventListener("DOMContentLoaded", function() {
var root = document.body.querySelector('.root')
var ping = document.body.querySelector('.ping')

root.addEventListener("click", function(){
  axios({
  url: 'http://intro-ajax-api.herokuapp.com/',
  method: 'get',
  responseType: 'text',
    });
});

ping.addEventListener("click", function(){
  axios({
  url: 'http://intro-ajax-api.herokuapp.com/pong',
  method: 'get',
  responseType: 'text',
}).then(function(response){
  console.log(response.data);
  var something = document.createElement('p')
  something.innerHTML = response.data
  document.body.querySelector('#step3456').appendChild(something);
}).catch(function(error){
  console.log(error);
  var errorError = document.createElement('p')
  errorError.innerHTML = "WHY IS THIS ERRORING";
  document.body.querySelector('#step3456').appendChild(errorError);
})
});



});
