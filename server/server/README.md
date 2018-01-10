# reactathon-server
Basic Spring Boot server to be used with the 'reactathon' training/hackathon.

## Running the JAR:

`java -jar hackathon-api-rest-0.1.0.jar`

Once the server is up and running it can be accessed on port **8080**


## Building and Running the API with Maven

`mvn spring-boot:run`

or

```
mvn clean package
java -jar target/hackathon-api-rest-0.1.0.jar
```

The application should be running on port `8080`.

## Database

The API runs against a local H2 databased and by default is stored as `reactathon_db` in the directory the jar was executed from.

Once the application is running you can access the H2 console at:

`http://localhost:8080/h2/login.jsp`

Verify the JDBC location is set to `jdbc:h2:./reactathon_db`.

The properties for the configuration can be found in `application.properties`.

Default username is `sa`, no password.


## End Points:

### Account:

#### Login:

GET `/account/login`

Login uses *Basic Authentication*

#### Account Creation:

POST `/account/create`

Request Body:

```
{
"username": "appUser",
"password": "pwd"
}
```

#### Default User:

Upon creation there should be a single crated default user with username: `jonah` and password `password`.

### Profile:

#### Load a specific profile

GET `/profile/{profileId}`

Sample Response Body:
```
{
    "id": 1,
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "Jane.Smith@jonahgroup.com"
}
```

#### Create a profile

POST `/profile`

Request Body:
```
{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "Jane.Smith@jonahgroup.com"
}
```

#### Update a profile

PUT '/profile/{profileId}'

Request Body:
```
{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "Jane.Smith@jonahgroup.com"
}
```

#### Load all profiles

GET `/profiles`