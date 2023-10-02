import EmailTemplate from '@/ui/email/Email'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_API)

export async function POST(request: Request) {
  const {name, email, subject, message} = await request.json();

  try {
    await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'exstu1@yandex.ru',
      subject: subject,
      react: EmailTemplate({name: name, email: email, subject: subject, message: message}),
    });
    return NextResponse.json({
      status: 'OK'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if(e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error'
    }, {
      status: 500
    })
  }
}