import {sign, verify, Secret, Algorithm} from 'jsonwebtoken';

export class JwtService {

    constructor(
        private privateKey: Secret,
        private algorithm: string,
        private expiresIn: number | string
    ) {

    }

    sign(data: object): string {
        return sign(data, this.privateKey, this.buildOptionsForSign());
    }

    verify(token: string): string | object | never {
        return verify(token, this.privateKey);
    }

    private buildOptionsForSign(): object {
        return {algorithm: (this.algorithm as Algorithm), expiresIn: this.expiresIn}
    }
}