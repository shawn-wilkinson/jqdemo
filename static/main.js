$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn3').click(clear);
  $('#alpha').addClass('cool');
  $('#btn4').click(numbers);
}

let id;

function numbers() {
  for(let i = 0; i < 20; i++){
    let r = Math.random();
    $('#numbers').append(`<li>${r}</li>`);
  }

}

function clear() {
  clearInterval(id);
  $('ul').empty();
}

function timer() {
  id = setInterval(function(){
    $('body').css('background-color', randomColor());
  }, 750)
}

function doStuff() {
  $('h1').css('color', 'red');
  $('h2').css('background-color', 'blue');
  $('h3').text('new text');
  $('h3').toggleClass('awesome');
  $('#alpha').toggleClass('cool');
  let txt = $('#txt1').val();
  console.log('txt:', txt);
  $('h1').css('background-color', txt);
  $('body').css('background-color', randomColor());
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
