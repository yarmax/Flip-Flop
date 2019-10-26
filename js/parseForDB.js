var request = require('request');
var cheerio = require('cheerio');

var olypmiads = [];

request('https://olimpiada.ru/activities', function (error, response, html) {
  if (!error && response.statusCode == 200) 
  {
    //console.log(html);
    var $ = cheerio.load(html);
    var elems = $('#megalist');
    parseOlympTables(elems);
  }
});

<<<<<<< HEAD
function parseOlympTables(tablesObj)
{
  tablesObj.each(function(i, element) {   
     var subTablesCount = this.find('.fav_olimp').length;
	 if (subTablesCount > 0) 
	 {
	    
	 } 

	 var nameOlymp = this.find('span.headline').text();
	 var olympDesc = this.find('a.olymp_desc').text();
	 var subjects = this.find('span.subject_tag').text();
	 var schoolClasses = this.find('span.classes_dop').text();
	 console.log('************************************************');
	 var olymp = {
	    name: nameOlymp,
	  	description: olympDesc,
	  	subjects: subjects,
	  	classes: schoolClasses
	 };
	 olypmiads.push(olymp);
	 console.log(olymp); 
  });
}

=======
>>>>>>> parent of 0a4115f... 1. Backup commit


//console.log($('.subject_tag').text());
    //console.log(element);
      //console.log($(this));
      //var subTablesCount = $(this).find('.fav_olimp').length;
      //console.log(subTablesCount);
