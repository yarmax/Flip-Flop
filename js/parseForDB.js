var request = require('request');
var cheerio = require('cheerio');

request('https://olimpiada.ru/activities', function (error, response, html) {
  if (!error && response.statusCode == 200) 
  {
    //console.log(html);
    var $ = cheerio.load(html);
    var elems = $('#megalist');
    //console.log(elems);
    $('.fav_olimp').each(function(i, element){
      var nameOlymp = $('span.headline').text()
      
    });
  }
});



//console.log($('.subject_tag').text());