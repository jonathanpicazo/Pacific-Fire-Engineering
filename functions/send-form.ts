import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  try {
    if (!event.body) throw new Error('No body');
    const data = JSON.parse(event.body);

    // Create the email body with inline CSS and an example image
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
          <div style="background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px;">
              <h2 style="color: #333333; margin-top: 20px;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
              <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
              <p><strong>Inquiry:</strong> ${data.inquiry}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: process.env.SENDGRID_TO_EMAIL,
              },
            ],
          },
        ],
        subject: 'Website Contact Form Submission',
        content: [
          {
            type: 'text/html',
            value: emailBody,
          },
        ],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL,
          name: process.env.SENDGRID_FROM_NAME,
        },
      }),
    });

    if (!res.ok) throw new Error('Failed to send email');

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully!',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};

export { handler };
