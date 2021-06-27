import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      '5e2fcc593bf4441c8beb7f34a3431a07'
    ) as IPayload;
    request.user_id = sub;
    console.log(request.user_id);

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
