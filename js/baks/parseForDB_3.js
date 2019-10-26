var request = require('request');
var cheerio = require('cheerio');

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

      var nameOlymp = $(olympTables[i]).find('span.headline').text();
      var olympDesc = $(olympTables[i]).find('a.olymp_desc').text();
      var subjects = $(olympTables[i]).find('span.subject_tag').text();
      var schoolClasses = $(olympTables[i]).find('span.classes_dop').text();
      console.log('************************************************');
      var olymp = {
        name: nameOlymp,
        description: olympDesc,
        subjects: subjects,
        classes: schoolClasses
      };
      console.log(olymp);
    }  
  }
});



//console.log($('.subject_tag').text());