# cypress-pg-example ![cypress version](https://img.shields.io/badge/cypress-13.3.3-brightgreen)

> Using Postgres database from your Cypress tests example

- Server using [Fastify](https://fastify.dev/)

🎓 This example is used in my course [Cypress Plugins](https://cypress.tips/courses/cypress-plugins)

- [Lesson o5: Work with Postgres database](https://cypress.tips/courses/cypress-plugins/lessons/o5)
- [Lesson o6: Write a flexible task to query the database](https://cypress.tips/courses/cypress-plugins/lessons/o6)
- [Lesson o7: Add a custom query command](https://cypress.tips/courses/cypress-plugins/lessons/o7)

## Setup

You wil need to set up the database once by creating table `messages` inside the `test_db` database running locally using Docker compose. The database is persisted to the local folder "data". Make sure the local Docker app is running.

How to start the database and create the initial table

```bash
# start the Docker container with Postgres database
# the container will be named "local-postgres"
$ docker-compose up
# connect to the running container to run Bash commands
$ docker exec -it local-postgres bash
# connect to the database inside the container
$ psql -U admin test_db
# create the table "messages" with the single text column "message"
$ CREATE TABLE messages ( message TEXT );
# exit the psql program
$ exit
# exit the database container
$ exit
```

## Run the server

Now that the `local-postgres` container is running and has the table `messages`, let's start our server from [src/server.mjs](./src/server.mjs)

```bash
$ npm start
```

## Open Cypress

You can find an example test in the `cypress/e2e/spec.cy.js` file. The test can query the database by calling the tasks defined in the [cypress.config.mjs](./cypress.config.mjs) file.

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2023

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-pg-example/issues) on Github
