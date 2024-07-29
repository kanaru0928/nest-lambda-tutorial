import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello World!' };
  }

  getAbout() {
    return { message: 'About page' };
  }
}
