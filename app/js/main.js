
// jQuery Code
var input1 = $('#value-one');
var input2 = $('#value-two');

var button = $('#calculate-button');

var answerField = $('#answer');

// on == addEventListener , add callback
button.on('click', function (event){
  event.preventDefault();

  var val1 = input1.val();
  var val2 = input2.val();

  var sum = Number(val1) + Number(val2);

  answerField.html(sum);
});

var box = $('.box');
var boxButton = $('#boxChange');

boxButton.on('click', function( event ){
  event.preventDefault();

  box.toggleClass('green');

});


// same as
// function something (){
//   // stuff goes here
// };
//
// button.on('click', something)

// my charCode
// $('h3').html('Title from Code').addClass('orange').css('margin-left', 25);

// // my library
// var books = {};
//
// books.alertClick = function ( selector ){
//   var element = document.querySelector( selector );
//   element.addEventListener('click', books.alertMe);
//   };
//
// books.alertMe = function () {
//     alert('i was clicked');
// };
//
// //using my library
// books.alertClick('h3');
