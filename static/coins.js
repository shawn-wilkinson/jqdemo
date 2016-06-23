$(document).ready(init);

function init() {
  $('#new').click(newgame);
  $('#flip').click(flip);
}

function newgame() {
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);
    }
  });
}

function flip() {
  const id = $('#id').text;
  const num = Math.random();
  $.ajax({
    url: '/games/flip',
    method: 'post',
    dataType: 'json',
    data: { id, num },
    success: function(rsp){
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);
    }
  });
}
