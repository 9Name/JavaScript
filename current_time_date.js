
var today = new Date(); //here  is object of date method
var dd = today.getDate();

var mm = today.getMonth()+1; //here getting month
var yyyy = today.getFullYear(); /// here getting year
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
