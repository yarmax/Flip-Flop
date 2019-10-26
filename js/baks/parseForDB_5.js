var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var olymps = [];

request('https://olimpiada.ru/activities', function (error, response, html) {
  if (!error && response.statusCode == 200) 
  {
    //console.log(html);
    var $ = cheerio.load(html);
    var elems = $('#megalist');
    //console.log(elems);
    var olympTables = $('.fav_olimp');
    for (var i = olympTables.length - 1; i >= 0; i--) 
    {
      var subTablesCount = $(olympTables[i]).find('.fav_olimp').length;
      if (subTablesCount > 0) 
      {
        continue;
      } 

      var nameOlympOrig = $(olympTables[i]).find('span.headline').text();
      var dateOfEvent = $(olympTables[i]).find('span.headline.red').text();
      var nameOlymp = nameOlympOrig.slice(0, nameOlympOrig.indexOf(dateOfEvent));
      var olympDesc = $(olympTables[i]).find('a.olimp_desc').text();
      var subjects = $(olympTables[i]).find('span.subject_tag').text();
      var schoolClasses = $(olympTables[i]).find('span.classes_dop').text();
      var ratingOlymp = $(olympTables[i]).find('span.pl_rating').text();
      //console.log('************************************************');
      var olymp = {
        name: nameOlymp,
        date: dateOfEvent,
        description: olympDesc,
        subjects: subjects,
        classes: schoolClasses,
        rating: ratingOlymp
      };
      olymps.push(olymp);

      //console.log(olymp);
    }
    
    var json = JSON.stringify(olymps);
    fs.writeFile('./olympiads.json', json, 'utf8');
    //console.log(json);

  }
});



//console.log($('.subject_tag').text());