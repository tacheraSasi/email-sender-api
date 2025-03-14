import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Email } from './email.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {}

  async sendEmail(to: string, subject: string, message: string) {
    try {
      const response = await axios.post(process.env.EKILIRELAY_API, {
        apikey: process.env.EKILIRELAY_API_KEY,
        to,
        subject,
        message,
        headers: `From: nestJsEmailSender <tachera@ekilie.com>`,
      });

      const email = this.emailRepository.create({ to, subject, message });
      await this.emailRepository.save(email);

      console.log("Data",response.data)
      return { success: true, response: response.data };
    } catch (error) {
      console.log("ERR",error)
      return { success: false, error: error.response?.data || error.message };
    }
  }
}
