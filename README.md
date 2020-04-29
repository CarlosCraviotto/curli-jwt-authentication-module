# curli-jwt-authentication-module

[Node Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) (Jwt Authentication) implementation  for  the [Curli framework](https://github.com/CarlosCraviotto/curli-core/).


[![Build Status](https://travis-ci.org/CarlosCraviotto/curli-jwt-authentication-module.svg?branch=master)](https://travis-ci.com/github/CarlosCraviotto/curli-jwt-authentication-module)


### Installation

Install by `npm`

```sh
npm install --save curli-jwt-authentication-module
```
#### Basic Usage

**1 - In the configurations file, declare  de followings properties:**

**@JWT_SECRET**: (string) The secret.
**@JWT_ALGORITHM** (boolean) An algorithm supported, chcke jsonwebtoken documentation.
**@JWT_TOKEN_EXPIRES_IN**  (number|string) expressed in seconds or a string describing a time span zeit/ms

> Eg: `60`, `"2 days"`, `"10h"`, `"7d"`. A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default (`"120"` is equal to `"120ms"`).

**2 - Attach the module to the app:**

```typescript
import {JwtAuthenticationModule} from "curli-jwt-authentication-module";

  app.addModule(new JwtAuthenticationModule());

```

**3 - Create a token with the user information and send it back to the front:**

```typescript
const user = {name: 'John', id: 'q345nlkdfh4'};
const token = this.tokenService.sign(user);

```

**4 - In each request, send the token into the authorization header:  **

```html
Authorization: <token>
```

**5 - Get the user into the request:**

```typescript
public async processRequest(request: Request): Promise<JsonResponse> {
    const user = request.getUser();
}
```



### Commands

 - `npm run build`: Build the project (Jwt authentication module).
 - `npm run build:clean`: Delete first the dist folder and build it.
 - `npm run clean`: Delete the dist folder.
 - `npm run test`: Execute the tests.
 - `npm run test:coverage`:  Execute the tests and calculate the coverage.
 - `npm run lint`: Check the code using the rules in .eslintre.js
 - `npm run lint:fix`: Check the code and try to fix it.



### License

MIT