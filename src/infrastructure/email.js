import emailjs from '@emailjs/browser';

const USER_ID = process.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID;

const sendMailWith = async (name, subject, email, body) => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_name: name,
            from_name: 'TopicsHub',
            from_email: 'topicshubdaw@gmail.com',
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
