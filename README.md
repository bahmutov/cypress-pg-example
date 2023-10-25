# cypress-pg-example [![ci](https://github.com/bahmutov/cypress-pg-example/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/cypress-pg-example/actions/workflows/ci.yml) ![cypress version](https://img.shields.io/badge/cypress-13.3.3-brightgreen)

> Using Postgres database from your Cypress tests example

- Server using [Fastify](https://fastify.dev/)

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
