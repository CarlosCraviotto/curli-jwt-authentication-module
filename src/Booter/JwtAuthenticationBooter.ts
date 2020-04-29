import {DependencyInjection, Booter, CurliApplication} from "curli-types";
import {SERVICE_NAME} from "../Service";

const ERROR_HTTP_CODE = 401;

export class JwtAuthenticationBooter implements Booter {

    public constructor (protected app: CurliApplication) {
    }

    public async boot(): Promise<void> {
        const container = this.app.getContainer();
        this.registerMiddleware(container);
    }

    private registerMiddleware(container: DependencyInjection){
        this.app.setMiddleware((req, res, next) => {
            //set the user in the request if we found a one
            try {
                container.get(SERVICE_NAME.VALIDATE_TOKEN_REQUEST).validate(req);
                next();
            } catch (e) {
                res.status(ERROR_HTTP_CODE).set({}).send(e.message);
            }
        });
    }
};


