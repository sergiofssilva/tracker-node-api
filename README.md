<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Execution](#execution)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Tracker Node Api

NodeJs Rest API for Tracker Information

This project is about an API to access specific tracker informations.

### Built With
It was build with NodeJS/Typescript, ExpressJS, Clean Architecture and SOLID Pattern. It have an initial unit tests coverage.
* NodeJS
* Typescript
* MySQL
* ExpressJS


<!-- GETTING STARTED -->
## Getting Started

Follow this instructions to run the application

### Prerequisites

You should have installed some tools:

- **Docker** version 19.03 or above
- **Docker-compose** version 1.25.0, or above
- **Node** version 12.18, or above
- **NPM** version 6.14.6, or above

### Installation

>You should clone this project using the command below:

```
git clone https://github.com/sergiofssilva/tracker-node-api.git
```

>Go to the project folder:

```
cd tracker-node-api
```

>Installing the dependencies:
```
npm i
```

>You should open the file `.env.prod` and edit the attributes to your credentials and infos about the db
>This file has the following params:

```
#MySQL
MYSQL_HOST=<remote-db-host>
MYSQL_DB_NAME=<remote-db-dbname>
MYSQL_USERNAME=<remote-db-user>
MYSQL_PASSWORD=<remote-db-password>
```

<!-- EXECUTION -->
## Execution

After set the information at `env.prod` inside project's folder run the command bellow:

```
npm run up
```

This command will build the dist folder with the tsc and will compose the containers application
After the container is up. The application will listen at http://localhost:5050/api

<!-- USAGE EXAMPLES -->
## Usage

There are 2 endpoints:

`GET /tracker`
```
body: {
  "ascendant": true
}
```


`GET /events`
```
body: {
	"trackerUid": 1101
}
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

[Sérgio Fernandes](https://github.com/sergiofssilva)

Project Link: [https://github.com/sergiofssilva/tracker-node-api](https://github.com/sergiofssilva/tracker-node-api)