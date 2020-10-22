<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var person = []; //this  is empty array 
person[0] = "John"; //here we insert element through the indexing
person[1] = "Doe";
person[2] = 46; 
document.getElementById("demo").innerHTML =
person[0] + " " + person.length;
</script>

</body>
</html>
