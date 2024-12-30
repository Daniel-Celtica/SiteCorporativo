import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { subject, text } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: 'daniel.lucas2299@gmail.com',//email destinatário
                subject, //título
                text,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Erro ao enviar e-mail', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método não permitido' });

    }
}