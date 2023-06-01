### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
        JWT is JSON web token and are an open standard and are implemented across technology stacks, making it simple to share tokens across different services. JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session).

        The JWT token itself is a string comprising three parts: header, payload and signature.



- What is the signature portion of the JWT?  What does it do?
        Signature: version of header & payload, signed with secret key.
        Uses algorithm specified in header



- If a JWT is intercepted, can the attacker see what's inside the payload?
    Payload: data to be stored in token (typically an object)
    Often, this will store things like the user ID
    This is encoded, not encrypted — don’t put secret info here!



- How can you implement authentication with a JWT?  Describe how it works at a high level.
    To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to your backend API. API Gateway validates the token on behalf of your API, so you don't have to add any code in your API to process the authentication. 




- Compare and contrast unit, integration and end-to-end tests.
    continuous integration tests small code changes frequently instead of the entire application flow from start to end like end-to-end testing. 



- What is a mock? What are some things you would mock?
    Mocking is primarily used in unit testing and is useful if the real objects are impractical to incorporate into the unit testing. An object under testing may have dependencies on other objects and to isolate the behavior, you replace other objects by mocks that stimulate their behavior.  

    you can mock ajax rejects, reading/writing to files and impure functions such as Math.random.



- What is continuous integration?
    Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

    The goal is to build better software by developing and testing in smaller increments.



- What is an environment variable and what are they used for?
Environment variables are predetermined values that are typically used to provide the ability to configure a value in your code from outside of your application.Probably the most common use case for environment variables is being able to set up different configuration options for different environments. Often when developing against third party services, you want to have a development version or sandbox available to make test requests against, that way it doesn't impact real production data.


- What is TDD? What are some benefits and drawbacks?
TDD is test driven development. advantages include: you only write code that needed, more modular design, easier to maintain and refactor. disadvantages are slow process, all the members of a team have to do it and tests have to be maintained when requirments change. 



- What is the value of using JSONSchema for validation?
There are three main reasons for using a schema validation system: 1) So user data can fail fast, before bad data gets to your db. 2)To reduce amount of code for processing and validating data. 3) To get a validation system that is easy to setup and maintain



- What are some ways to decide which code to test?
Test the common case of everything you can. This will tell you when that code breaks after you make some change (which is, in my opinion, the single greatest benefit of automated unit testing).
Test the edge cases of a few unusually complex code that you think will probably have errors.



- What does `RETURNING` do in SQL? When would you use it?
The RETURN statement is used to unconditionally and immediately end an SQL procedure by returning the flow of control to the caller of the stored procedure. 
In SQL, for INSERT/UPDATE/DELETE, you can have a RETURNING clause.
This is to return data that was inserted, updated, or deleted.It’s typically a bad idea to use SELECT * or RETURNING * in the SQL used in applications. That returns all columns and, if new sensitive columns were added after the code was written, it would risk returning that sensitive data. It’s far better to explicitly list the columns that should be selected or returned.



- What are some differences between Web Sockets and HTTP?
Both HTTP and web sockets are communication protocols that work with the intention of enabling the client to server communication. Their differences include the type of duplex communication,  transmission mode, and use cases. In HTTP protocol, the server responds after the client’s requests and the connection terminates after one request and response. In the case of web sockets, however, the server keeps sending information until either of them stops.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
