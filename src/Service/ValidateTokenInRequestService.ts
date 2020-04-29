import {JwtService} from "./JwtService";
import {DTOType} from "curli-types";

type RequestType = { headers: DTOType | undefined, [key: string]: any };

const HEADER_PARAMETER: string = 'authorization';

export class ValidateTokenInRequestService {

    public constructor(private jwtService: JwtService){}

    public validate(req: RequestType): RequestType {
        const token: string | undefined = this.extractToken(req);

        if (token){
            const user: any = this.jwtService.verify(token);
            req.user = user;
        }

        return req;
    }

    private extractToken(req: RequestType): string|undefined {
        let token: string | undefined;

        if (req.headers && req.headers.hasOwnProperty(HEADER_PARAMETER)) {
            const tokenBearer: Array<string> = req.headers[HEADER_PARAMETER].split(' ');
            token = tokenBearer[1];
        }
        return token;
    }
}