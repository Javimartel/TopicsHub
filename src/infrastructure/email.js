import emailjs from '@emailjs/browser';

const USER_ID = process.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID;
const FROM_NAME = process.env.VITE_EMAILJS_FROM_NAME;
const FROM_EMAIL = process.env.VITE_EMAILJS_FROM_EMAIL;

const sendMailWith = async (name, subject, email, body) => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_name: name,
            from_name: FROM_NAME,
            from_email: FROM_EMAIL,
            subject: subject,
            message: body,
            reply_to: email
        }, USER_ID);

        return response;
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendMailWith;
