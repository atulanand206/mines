# Minesweeper

The famous game since the early days of Microsoft where you have to flag the cells with mine while opening the cells with value and get the highest score possible.

## Learning outcomes
- Familiarity with the twins javascript and typescript.
- Storing state in the overarching components.
- Manipulate state of nested components using props.
- Pure functions to maintain immutability of state variables.
- Mixins to share styling behaviour across components.
- Promise to handle network responses.

## Microservices Ecosystem
This repository is part of a larger ecosystem of microservices each serving it's purpose in bring Minesweeper to life.

- [Web Services](https://github.com/atulanand206/minesweeper)
- [Authorization](https://github.com/atulanand206/users)
- [Update Database](https://github.com/atulanand206/ms-db-publisher)
- [Web Interface](https://github.com/atulanand206/mines)

You can use the `docker-compose.yml` file to start all the services in separate docker containers in one go. This file is available in a different repository. Please let me know if you'd like to experiment with that.

### About
This repository contains the Web implementation for the game based on react. 

#### Environment Variables

- `REACT_APP_HOSTNAME` - Hostname on which the app is running.

#### Run the service

The service can be run either directly as a react project or use a Docker container to build and run.

Install & Run the application using yarn.

### Author

- Atul Anand
