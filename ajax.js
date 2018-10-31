document.addEventListener("DOMContentLoaded", function() {
var root = document.body.querySelector('.root');
var ping = document.body.querySelector('.ping');
var selector = document.body.querySelector('#step3456');
var selectorCount = document.body.querySelector('#step7');
var count = document.body.querySelector('.count');
var time = document.body.querySelector('.time')
var selectorTime = document.body.querySelector('#step8')
var markup = document.body.querySelector('.markup')
var selectorMarkup = document.body.querySelector('#step9')



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
  selector.appendChild(something);
}).catch(function(error){
  console.log(error);
  var errorError = document.createElement('p')
    errorError.innerHTML = "Error";
    selector.appendChild(errorError);
}).then(function(response){
  console.log("Hey the request finished!");
});
});


count.addEventListener("click", function(){
  axios({
  url: 'http://intro-ajax-api.herokuapp.com/count',
  method: 'get',
  responseType: 'text',
}).then(function(response){
  console.log(response.data);
  var countClick = document.createElement('p');
  countClick.innerHTML = response.data
  selectorCount.appendChild(countClick);

})
});

time.addEventListener("click", function(){
  axios({
  url: 'http://intro-ajax-api.herokuapp.com/time',
  method: 'get',
  params: {timezone: 'Europe/Sofia'},
  responseType: 'text',
}).then(function(response){
  console.log(response.data);
  var timeClick = document.createElement('ul');
  timeClick.innerHTML = response.data;
  selectorTime.appendChild(timeClick);
}).catch(function(error){
  console.log(error);
  var clickError = document.createElement('p');
  clickError.innerHTML = "Error could not find clicked amount";
  selectorTime.appendChild(clickError);

})
});

markup.addEventListener("click",function(){
  axios({
  url: 'http://intro-ajax-api.herokuapp.com/a_car',
  method: 'get',
  responseType: 'html',
}).then(function(response){
  console.log(response.data);
  var markupClick = document.createElement('ul');
  markupClick.id = 'car';
  markupClick.innerHTML = response.data;
  selectorMarkup.appendChild(markupClick);

})
});



});
