Example 1: This example uses call() method to call a function.
<!DOCTYPE html>   
<html> 
    <head> 
        <title>call() method</title> 
    </head> 
      
    <body style = "text-align:center;"> 
        <h1 style = "color:green;" >   
            GeeksForGeeks   
        </h1> 
  
        <button onClick="fun()"> 
            click 
        </button> 
          
        <p id="GFG"></p> 
          
        <!-- Script to use call() method to call 
            function -->
        <script> 
            function fun() { 
              let p = { 
                fullName: function(addr1, addr2) { 
                  return this.fName + " " + this.lName  
                        + ", " + addr1 + ", " + addr2; 
                } 
              } 
                
              let p1 = { 
                fName:"GFGfName", 
                lName: "GFGlName", 
              } 
                
              let x = p.fullName.call(p1, "India", "USA");  
              document.getElementById("GFG").innerHTML = x; 
              } 
        </script>  
    </body> 
</html> 

Example 2: This example does the same work by using apply() method.
<!DOCTYPE html>   
<html>   
    <head>  
        <title>JavaScript apply() method</title> 
    </head>  
         
    <body style = "text-align:center;">   
     
        <h1 style = "color:green;" >   
            GeeksForGeeks   
        </h1>  
  
        <button onClick="fun()"> 
            click 
        </button> 
          
        <p id="GFG"></p>  
         
        <script> 
            function fun() { 
                let p = { 
                fullName: function(addr1, addr2) { 
                    return this.fName + " " + this.lName 
                            + ", " + addr1 + ", " + addr2; 
                } 
            } 
            let p1 = { 
                fName:"GFGfName", 
                lName: "GFGlName", 
            } 
                let x = p.fullName.apply(p1, ["India", "USA"]);  
                document.getElementById("GFG").innerHTML = x; 
            } 
        </script>  
    </body>   
</html> 
      

