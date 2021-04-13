### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
**creating a map of routes with http verbs like get,post,patch,put and delete to determine crud actions. restful routing uses the verbs and routes to direct people to the correct pages**

- What is a resource?
 **An object with a type, associated data, relationships to other resources. a representation of whats returned by the url**

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
**the api passes information via POST to the json dictionary from the route so we don't need a route to render a form/**

- What does idempotent mean? Which HTTP verbs are idempotent?
**the result is the same no matter how many times it is requested. verbs that are idempotent are get,put,patch,delete**

- What is the difference between PUT and PATCH?
**put updates the entire server and patch updates just a small part**

- What is one way encryption?
**when only the user who created their account has access to the password. the server has access to a salt + hashed password so neither party has access to both**

- What is the purpose of a `salt` when hashing a password?
**to help give a user a unique starting sequence to their hashed output.**

- What is the purpose of the Bcrypt module?
**to cryptographically has a password. the idea is to be slow to prevent the likelyhood of being hacked**

- What is the difference between authorization and authentication?
**authentication checks for verification and authorization checks to see if there is access or powers granted**