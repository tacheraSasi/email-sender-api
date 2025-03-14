import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  
  @Get()
  async getHello(): Promise<string> {
    return 'Hello World!';
  }
  
  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('message') message: string,
  ) {
    return this.emailService.sendEmail(to, subject, message);
  }
}
