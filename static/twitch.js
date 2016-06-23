$(document).ready(init);

function init() {
  $('#fetch').click(fetch);
}

function fetch() {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      const games = rsp.top;
      games.forEach(g => {
        const name = g.game.name;
        const art = g.game.box.medium;
        $('#games').append(`<div><p>${name}</p><img src="${art}"></div>`);
      })
    }
  });
}
