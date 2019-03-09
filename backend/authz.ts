import { apiconfig } from './api-config';

import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const handleAuthorization = (req: Request, resp: Response, next) => {
    const token = extractToken(req)
    if (!token) {
        resp.setHeader('WWW-Autenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autenticar!', tok: token});
    } else {
        jwt.verify(token, apiconfig.secret, (error, decoted) => {
            if (decoted) {
                next();
            } else {
                resp.status(403).json({ message: 'Não autorizado' });
            }
        })
    }
}

function extractToken(req: Request): string {
    let token = undefined;
    if (req.headers && req.headers.authorization) {
        const parts: string[] = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    return token;
}
