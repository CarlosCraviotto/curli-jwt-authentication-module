import {JwtAuthenticationBooter} from "./Booter/JwtAuthenticationBooter";

import {Module, BooterRegister} from "curli-types";
import {JwtService, ValidateTokenInRequestService, SERVICE_NAME} from "./Service";


export class JwtAuthenticationModule implements Module {

    public getName(): string {
        return 'JwtAuthenticationModule'
    }

    public registerServices (container: {registerService: any}) {

        container.registerService(
            SERVICE_NAME.TOKEN,
            ['@JWT_SECRET', '@JWT_ALGORITHM', '@JWT_TOKEN_EXPIRES_IN'],
            JwtService
        );

        container.registerService(
            SERVICE_NAME.VALIDATE_TOKEN_REQUEST,
            [SERVICE_NAME.TOKEN],
            ValidateTokenInRequestService
        );
    }

    public registerBooters(booterRegisterer: BooterRegister) {
        booterRegisterer.registerBooter(JwtAuthenticationBooter);
    }
}