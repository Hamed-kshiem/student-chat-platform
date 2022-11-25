import { Injectable } from '@nestjs/common';
import {
  KeycloakConnectOptionsFactory,
  KeycloakConnectOptions,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

@Injectable()
export class AuthService implements KeycloakConnectOptionsFactory {
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: 'http://localhost:8180/auth',
      realm: 'nest-example',
      clientId: 'nest-api',
      secret: '05c1ff5e-f9ba-4622-98e3-c4c9d280546e',
      cookieKey: 'KEYCLOAK_JWT',
      logLevels: ['verbose'],
      useNestLogger: false,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    };
  }
}
