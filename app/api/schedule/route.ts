import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: "mail.privateemail.com",
	port: 587,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: "info@saas.ph",
		pass: "password",
	},
});

export async function POST(request: Request) {
	const { email, company_size, company_name, name, additional_info } = await request.json()

	const info = await transporter.sendMail({
		from: '"SaaS landing" <info@saas.landing>', // sender address
		to: `${email}, inf@saas.landing`, // list of receivers
		subject: "Book Your Demo Schedule", // Subject line
		html: `
<p>
While we are processing your request, you can now proceed and choose an online meeting at your convenience here.
</p>
<a href="https://cal.com/saas/schedule-meeting-demo">Choose a schedule here</a>
<p>
Thank you for reaching out to us, we will get back to you within 24 hours.
</p>
<p>
We will create a custom personalized demo for your needs.
</p>
<br/>
<br/>
<p>John Doe</p>
<p>Founder</p>
<p>Saas Landing</p>
`, // html body
	});

	return Response.json({ message: "ok" })
}
