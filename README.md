# CertCity

CertCity is a node.js API and web application for managing large amounts of AWS ACM certificates. If you have a larger than typical amount of domains/certificates, you have probably noticed that the ACM Console interface can no longer suit your needs. The API is much more reliable, but is quite verbose. You cannot search by domain name, you cannot even get a full list of certificates in one request to the console. I've asked Amazon to fix these issues for years. Until they do, CertCity aims to make management of ACM certificates via API or UI much easier by pulling all the certificates, load balancers, and listeners from your AWS account and providing a UI for managing these resources easily.

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

By default the API will run on port 5000 and uses no authentication beyond the AWS profile credentials it is running with.

#### GET /certificates

```
curl --location --request GET 'http://localhost:5000/api/certificates/?page=1&page_size=50'
```

`getAll` requests like this are paged, all accepting a `page` and a `page_size` variable.

#### GET /certificates/{id}

```
curl --location --request GET 'http://localhost:5000/api/certificates/{id}'
```

The CertCity API uses just the last GUID portion of the ARN, just after the "/" as the ID when working with certificates. The full ARN is still used in requests to AWS when required.

## Built With

* [node](https://nodejs.org/) - Node Rocks
* [blueprint](https://blueprint.onehilltech.com/) - Light-weight server framework
* [docker](https://docker.com/) - Because Containers

## Authors

* **Derrick Anderson** - *Initial work* - [GoldUniform](https://github.com/GoldUniform)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details