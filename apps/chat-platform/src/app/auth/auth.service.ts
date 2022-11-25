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
      realm: 'chat-app',
      clientId: 'Nest-backend-app',
      secret: 'yJNgeXSvg2tm3Fx5k9ryrdpur7se6QzQ',
      cookieKey: 'KEYCLOAK_JWT',
      logLevels: ['verbose'],
      useNestLogger: false,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    };
  }
}
