import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.naver.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.NODEMAILER_USER, // 보내는 메일의 주소
            pass: process.env.NODEMAILER_PASS, // 보내는 메일의 2차 비밀번호
          },
        },
        defaults: {
          from: '"No Reply"',
        },
      }),
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
