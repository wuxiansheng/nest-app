import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) { }
  async signIn(): Promise<string> {
    return null;
  }
}
