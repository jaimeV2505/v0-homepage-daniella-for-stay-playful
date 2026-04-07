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
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}${interest ? `\nInterés: ${interest}` : ''}\n\nMensaje:\n${message}`,
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
