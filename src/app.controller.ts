import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('http://localhost:3000/graphql', 301)
  basicRedirect() {
    return;
  }
}
