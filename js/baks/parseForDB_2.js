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
      var nameOlymp = $(this).find('span.headline').text();
      var olympDesc = $(this).find('a.olymp_desc').text();
      var subjects = $(this).find('span.subject_tag').text();
      var schoolClasses = $(this).find('span.classes_dop').text();
      console.log('************************************************');
      var olymp = {
      	name: nameOlymp,
      	description: olympDesc,
      	subjects: subjects,
      	classes: schoolClasses
      };
      console.log(olymp);
    });
  }
});



//console.log($('.subject_tag').text());