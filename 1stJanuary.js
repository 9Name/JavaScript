
for (var year = 2014; year <= 2050; year++) // loop from 2014 to 2050
    {
    var d = new Date(year, 0, 1); //creating date object
    if ( d.getDay() === 0 ) //if day code is 0 then print year
        console.log("1st January is being a Sunday  "+year);
    }
