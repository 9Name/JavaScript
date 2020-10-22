/*14.If we want to return the character from a specific index which
method is used, explain with example?
Ans.The charAt() method returns the character at the specified index in a string.
The index of the first character is 0, the second character is 1, and so on.*/
Example:
<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the first character of the string "HELLO WORLD".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "HELLO WORLD";
  var res = str.charAt(0) ///through this we can access character
  document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>
///OUTPUT: H 
