# CertCity

CertCity is a node.js API and web application for managing large amounts of AWS ACM certificates. If you manage a large amount of ACM certificates, you have probably noticed that the ACM Console interface can no longer suit your needs. Until it can, CertCity aims to make management of ACM certificates via API or UI much easier and more functional.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

CertCity comes with a docker-compose.yml file for launching the API and Web UI.

### Installing

CertCity is meant to run in Docker unless you are developing it.

You shouldn't need to install any dependencies this way, if you have Docker and Docker Compose, you should be able to run CertCity.

```
>docker-compose up
```

If you'd rather run it in Node locally, you will need to have Node and NPM installed, but it's still easy to launch.

```
>cd server && node ./app/index.js
```

### Authentication and Authorization with AWS

Currently, the docker-compose.yml is going to map your ~/.aws directory into the container, so whatever default profile you have locally when you run the compose, that's who the service will authenticate as.

```
volumes:
      - ~/.aws/:/root/.aws:ro
```

This utility is meant to run on your workstation, if run on a server then a different authentication mechanism would need to be used.

### Using the API

By default the API will run on port 5000 and uses no authentication beyond the AWS profile credentials it is running with. Example request to get the first page of ACM certificates, 50 at a time.

```
curl --location --request GET 'http://localhost:5000/api/certificates/?page=1&page_size=50'
```


## Built With

* [node](https://nodejs.org/) - The server software used
* [blueprint](https://blueprint.onehilltech.com/) - The server framework

## Authors

* **Derrick Anderson** - *Initial work* - [GoldUniform](https://github.com/GoldUniform)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details