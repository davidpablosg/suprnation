## SuprNation Coding Test

My goal with this test has been create a fully functional code, implementing Server and Client Side in a clean and easy-to-read way.

My assumptions has been related to the structure of the code, and decided to follow the standard. 
Make as simple as possible, doing a lot but not reinvent the wheel, using well-rated libraries. 

I assume the code in a production environment should be splitted, moving the ServerSide to a microService architecture/cloud.
For this, the API declaration inside the App has been configured inside a ENV file.

It uses [NextJS](https://docs.nestjs.com/) library for the API as it comes with SwaggerUI support, making documentation really easy to read and use.

For validating expressions, I decided to go with a library called [Super-Expressive](https://github.com/francisrstokes/super-expressive) and generate a regexp.
Easy to maintain and to add new operations, and more important it simplifies the task of reading regexp.

For executing the expression, [MathJS](https://mathjs.org/) has been used without destructing the methods.
In case a new method is needed, the change will be done ONLY at the validator.

At browser level, [ReactJS](https://reactjs.org/) has been used, motivated on the simplicity and the Community behind it.
It is easily-embeddable into a larger codebase.

