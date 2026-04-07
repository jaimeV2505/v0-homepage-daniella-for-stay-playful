import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, interest } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'StayPlayful <hola@stayplayful.se>',
      to: ['daniella@stayplayful.se'],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `
Hello Daniella,

You’ve received a new inquiry from your website:

---------------------------------------

Name: ${name}
Email: ${email}
${interest ? `Interest: ${interest}` : ''}

---------------------------------------

Message:
${message}

---------------------------------------

Reply directly to this email to contact the sender.
`,
    });

    if (error) {
      return Response.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}
