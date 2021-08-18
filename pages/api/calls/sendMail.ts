import axios from "axios";

export const sendMail = (email: string, textMessage: string) => {
    axios.post('/api/sendMail', {email, textMessage});
}