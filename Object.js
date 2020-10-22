Ans:In JavaScript, almost "everything" is an object.
    • Booleans can be objects (if defined with the new keyword)
    • Numbers can be objects (if defined with the new keyword)
    • Strings can be objects (if defined with the new keyword)
    • Dates are always objects
    • Maths are always objects
    • Regular expressions are always objects
    • Arrays are always objects
    • Functions are always objects
    • Objects are always objects
All JavaScript values, except primitives, are objects.
Example of objects:
<!DOCTYPE html>
<html>
<body>

<p>Creating a JavaScript Object.</p>

<p id="demo"></p>

<script>
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
</script>

</body>
</html>
