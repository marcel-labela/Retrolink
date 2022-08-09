# Todo list of general things that need to be done

- [ ] create env files for when api is in production and when api is in development.
- [ ] search into if pgadmin really is an added value to the project.
- [ ] how to incorporate Joi validation during a sprint.
- [ ] refactor email sending to seperate function, so you can reach it from every endpoint.
- [ ] create a general error handling with a proper message response.
- [ ] express attunator (or something like that) to add health checkups to your api.
- [ ] make a deploy pipeline in which you can deploy everything from one folder.
- [ ] check out what you have to add to the index.js file. In terms of cors, security and logging.

# Admin rights
add a boolean to a user model called 'isAdmin'. That can be set to true or false.
add the isAdmin prop to the signed token
write middleware that checks if a user is admin. Add that middleware to every endpoint that it needs.