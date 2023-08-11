import Image from 'next/image'
import {
  Body,
  // Button,
  Container,
  Head,
  // Hr,
  Html,
  Img,
  // Preview,
  // Section,
  Text,
} from '@react-email/components';
import { FC } from 'react'

interface IEmail {
  name: string
  email: string
  subject: string
  message: string
}

const EmailTemplate = ({
  name,
  email,
  subject,
  message
}: IEmail) => {
  return (
    // <div>
    //   <Image src='/images/dick.png' alt='dick pic' width={250} height={250}/>
    //   <h1>Hey from, {name}</h1>
    //   <p>Subject is, {subject}</p>
    //   <p>{`${name}'s`}, {email}</p>
    //   <p>{`${name}'s`}, {message}</p>
    // </div>
    <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src='https://i.etsystatic.com/25272370/r/il/39882c/2632894407/il_fullxfull.2632894407_1omt.jpg'
          // C:\Users\wizkh\GitHub\Jdmpower-shop\jdm-front-end\public\images\dick.png
          width="170"
          height="170"
          alt="Dick"
          // style={logo}
        />
        <Text style={paragraph}>Hi from {name},</Text>
        <Text style={paragraph}>
          Subject is - {subject}
        </Text>
        <Text style={paragraph}>
          {name}'s email - {email}
        </Text>
        <Text style={paragraph}>
          {name}'s message - {message}
        </Text>
      </Container>
    </Body>
  </Html>
  )
}

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};