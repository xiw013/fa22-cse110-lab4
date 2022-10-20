1. What will happen at line 12 and why? If the code causes an error, explain why.
   
   3

2. What will happen at line 13 and why? If the code causes an error, explain why.
   
   150

3. What will happen at line 14 and why? If the code causes an error, explain why.
   
   150

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   
   [ 50, 100, 150 ] The result is a list storing the prices after appling the discount. Every single price is being calculate by multipling the discount, and are pushed to the list called discounted.

5. What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   
   The code cause an error because i is a let variable and is not defined outside the block that it is being created. 

6. What will happen at line 13 and why? If the code causes an error, explain why.
   
   The code cause an error. DiscountedPrice is a let variable, and it is only reachable within the for loop.

7. What will happen at line 14 and why? If the code causes an error, explain why.
   
   150

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   
   [ 50, 100, 150 ] The result is a list storing the prices after appling the discount. Every single price is being calculate by multipling the discount, and are pushed to the list called discounted.


9.  What will happen at line 11 and why? If the code causes an error, explain why.
    
    The code cause an error because i is a let variable and is only avaliable within the block that it is being created. 

10. What will happen at line 12 and why? If the code causes an error, explain why.
    
    3

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
     
    [ 50, 100, 150 ] The result is a list storing the prices after appling the discount. Every single price is being calculate by multipling the discount, and are pushed to the list called discounted.

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    
    A. Accessing the value of the name property in the student object
       
       student.name;

    B. Accessing the value of the Grad Year property in the student object
       
       student['Grad Year'];

    C. Calling the function for the greeting property in the student object
       
       student.greeting();

    D. Accessing the name property of the object in the Favorite Teacher property in student
       
       student['Favorite Teacher'].name;

    E. Access index zero in the array of the courseLoad property of the student object
       
       student.couseload[0];

13. Arithmetic

    A. '3' + 2 = '32'
    
    B. '3' - 2 = 1
    
    C. 3 + null = 3
    
    D. '3' + null = '3null'
    
    E. true + 3 = 4
    
    F. false + null = 0
    
    G. '3' + undefined = '3undefined'
    
    H. '3' - undefined = NaN
    

14. Comparison

    A. '2' > 1  true
    
    B. '2' < '12' false
    
    C. 2 == '2' true
    
    D. 2 === '2' false
    
    E. true == 2 false
    
    F. true === Boolean(2) true
    

15. Explain the difference between the == and === operators.

    === is more strict tan ==, so it doesn't do the type conversion of the operands before comparing their values and returns false even if the data type of the operands aren't the same. == does the type 

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
    
    part2-question16.js
    
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    
    The result of the function is [ 2, 4, 6 ]. We first past the array into the modifyArray function. For each element in the array, we call the function given in the input parameter, which multiply the element by 2. Finally, the array newArr save the results returned from the function called. 

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)
    
    part2-question16.js

19. What is the output of the above code? (This should be in your part2.md)
    
    1
    
    4
    
    3
    
    2
    
    There is a delay(1 second) on printing 2 to the terminal since the setTimeout function.
    
