# Chat-Platform - ASE - WS 2022

## Starten des Prototypen

### Dependencies installieren
 - npm install
 
### Docker für Keycloak starten

- In cmd ausführen: docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.2 start-dev

### Backend starten

- npx nx serve chat-platform


### Frontend starten

- npx nx serve chat-platform-frontend

___________________________________________________________________________________
## first installation guide 
## Keycloak Docker Container Installation and Configuration
### Introduction
This guide explains how to install Keycloak in a Docker container and import a realm configuration file to set up the authorization and authentication for a student chat platform.
### Prerequisites
- Docker must be installed on the host machine.
- A realm configuration file in JSON format.
#### Step 1: Install Keycloak Docker Container
Run the following command to download and start a Keycloak Docker container:

```bash
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=password jboss/keycloak
```

### Step 2: Import Realm Configuration
- Open Keycloak Administration Console in your browser at http://localhost:8080.
- Login using the credentials admin and password.
- Go to Realm Settings and click on Import from the left-side menu.
- Choose the realm configuration file in JSON format and click Import.
### Step 3: Clone Github Repository
Clone the student chat platform Github repository using the following command:

```bash
git clone https://github.com/Hamed-kshiem/student-chat-platform.git
```
### Step 4: Install NPM Packages
Change to the project directory and run the following command to install the required npm packages:
```bash
cd student-chat-platform
npm install
```
### Step 5: Run NestJS Nx App (Backend)
To run the NestJS app, use the following command:
```bash
npx nx serve chat-platform

```

Step 6: Run ReactJS Nx App
To run the ReactJS app, use the following command:
```bash
npx nx serve chat-platform-frontend
```

### Step 7: Check MongoDB IP Security Configuration !!!!
If necessary, check the MongoDB IP security configuration to ensure that the app can connect to the database.

### Step 8: Create Keycloak Account
Open the student chat platform in your browser at http://localhost:4200.
Click on Sign up to create a new Keycloak account.

### Step 9: Login
Use the credentials created in Step 8 to login to the student chat platform.

### Step 10: Chat with a Person
Choose a person from the list of available users to start a chat.

### Final
The installation and configuration process is now complete, and you can start using the student chat platform with Keycloak for authorization and authentication.
