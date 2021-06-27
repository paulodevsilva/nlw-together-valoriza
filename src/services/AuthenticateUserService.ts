import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error('Email/Password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect!');
    }

    const token = sign(
      { email: user.email },
      '5e2fcc593bf4441c8beb7f34a3431a07',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
