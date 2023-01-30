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
