# Part 2 Questions:

1. Line 12 prints "3" as the for loop will iterate through the entire array and since there are 3 elements in the array, it will access index 0, 1, and 2, then assign i to 3 to check for a 4th index which does not exist, therefore the loop will end and print the value of i which is 3.
2. Line 13 prints "150" which is the discounted price of the last item in the array, which is 300 at 50% off resulting in 150. This is because the for loop continues to iterate through the array until it reaches the end, which is the last index in the array where it will calculate the discounted price, which is the variable printed out outside the loop by line 13.
3. Line 14 prints "150" which is the rounded price of the last item in the array to the 2nd decimal place, which is 150 due to the discounted price being assinged to 150 above. Since there is no decimal place in the number 150, it will round back to 150, which is what is printed out.
4. This function will return an array of size 3 containing 50, 100, and 150. This is because the for loop will iterate through the entire array and calculate the discounted price in each index of the array, then pushes the discounted price into the new array in the same index which is returned at the end of the function.
5. This code causes an error because i is allocated using let and is inside the for scope therefore cannot be called outside on line 12.
6. Like above, this code causes an error because discountedPrice is allocated using let and is inside the for scope therefore cannot be called outside on line 13.
7. Line 14 prints "150" as explained by problem 3. It will not cause an error because final price is in the same function scope as line 14 and not in the for loop scope.
8. This function will return an array of size 3 containing 50, 100, and 150. This is the same as problem 4, the function will have no issue using let to allocate the discounted array variable as it is in the same function scope as the return statement.
9. This code causes an error because i is allocated using let and is inside the for scope therefore cannot be called outside on line 12.
10. Line 12 prints "3" as it will print the length of the prices array passed in, which has 3 elements containing 100, 200, and 300. Constant variables can still be read so there is no issue with accessing the length of the array.
11. This function will return an array of size 3 containing 50, 100, and 150. This is the same as problem 4 and 8 as the function will have no issue pushing to a constant array as it can still be manipulated. 
12. 
    1. student.name
    2. student["Grad Year"]
    3. student.greeting()
    4. student["Favorite Teacher"].name
    5. student.courseLoad[0] 
13. 
    1. '32' because 2 is a string and 3 is a number so it will concatenate both values as strings.
    2. 1 because '3' is a string and 1 is a number so it will convert the '3' to a value 3 and subtract 3-2 to get 1.
    3. 3 because null acts as a 0 and 3 is a number so it will add 3+0 to get 3.
    4. '3null' because null acts as a string and 3 is a number so it will concatenate both values as strings.
    5. 4 because true acts as 1 and 4 is a number so it will add 1+3 to get 4.
    6. 0 because false acts as a 0 and null acts as 0 so it will add 0+0 to get 0.
    7. '3undefined' because undefined is a string and 3 is a number so it will concatenate both values as strings.
    8. NaN because 3 is a number so it will add 3 with undefined but undefined is not a valid number so it will cause an error and return an undefined value.
14. 
    1. true because '2' becomes a number 2 which is greater than 1.
    2. false because '2' is greater than '12' in lexicographical order.
    3. true because '2' is a string and 2 is a number so it will convert '2' to 2 and 2 is equal to 2.
    4. false because '2' is a string and 2 is a number and === checks for equal types, which they are both different types.
    5. false because true is a boolean representing 1 which is not equal to 2.
    6. true because true is a boolean representing 1 and Boolean(2) is a boolean representing true the value within is not 0 so since both are booleans representing true, it will be equal.
15. == checks for value equality, === checks for value and type equality.
16. Answer in part2-question16.js
17. The function will return [2, 4, 6]. Line 13 will call modifyArray which will pass in [1, 2, 3] and the function doSomething. The doSomething function will multiply a number by 2 and return it. The modifyArray function iterates through the array and calls the callback function and pushes the result into a newArr array which is returned. This will return an array which has all its elements multipled by 2 due to the doSomething function.
18. Answer in part2-question18.js
19. The output of the code is 1 4 3 2.