var cheerio = require('cheerio');
var fsJSON = require('fs');
var fsHTML = require('fs');


fsJSON.readFile('olympiads.json', 'utf8', function readFileCallback(err, json){
    if (err)
    {
      console.log(err);
    } 
    else 
    {
	  
	  fsHTML.readFile('../index.html', 'utf8', function readFileCallback(err, html){
        if (err)
	    {
	      console.log(err);
	    } 
	    else 
	    {
          var $ = cheerio.load(html);
          var headTable = $('thead tr');
          
          var jsonObj = JSON.parse(json);
          /*for (let [key, value] of Object.entries(jsonObj)) 
          {
            console.log(`${key}: ${value}`);
          }
          */
          var oneRecord = jsonObj[0];
          var keys = Object.keys(oneRecord);
          //console.log(keys);
          for (var i = 0; i <= keys.length - 1; i++) 
          {
          	var frontIndex = i + 1;
          	headTable.append('<th class="cell100 column' + frontIndex + '">' + keys[i]  + '</th>');
          }
          
          
          var records = jsonObj;
          var bodyTable = $('tbody');
          for (var i = 0; i <= records.length - 1; i++) 
          {
          	var rowStr = '<tr>';
          	var colIndex = 0;
          	for (var prop in records[i]) 
            {
              colIndex++;
              //row.append('<td class="cell100 column' + colIndex + '">' + records[i][prop] + '</td>');
              rowStr += '<td class="cell100 column' + colIndex + '">' + records[i][prop] + '</td>';  
            }
            rowStr += '</tr>';
            bodyTable.append(rowStr);         	
          }
          // bodyTable.append('<tr> </tr>');
          // var row = $('tr');

          var newHTML = $.html();
          fsHTML.writeFile('../index_new.html', newHTML, 'utf8');
	    }  
	  });		
	}
});