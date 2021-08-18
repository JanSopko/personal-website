import type {NextApiRequest, NextApiResponse} from "next";
import {SendMailResponseDto} from "./DTO/SendMailResponse";

const nodemailer = require('nodemailer');

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<SendMailResponseDto>
) {
    const {email, textMessage} = req.body;
    const mySenderEmailAddress = 'jansopko.dev@gmail.com';
    const myReceiverEmailAddress = mySenderEmailAddress;

    const fullMessage = `${email} Vám posiela správu: ${textMessage}`;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mySenderEmailAddress,
            pass: process.env.SMTP_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: mySenderEmailAddress,
        to: myReceiverEmailAddress,
        subject: 'Email from personal website',
        text: fullMessage
    };

    transporter.sendMail(mailOptions, function(error: any, info: any){
        if (error) {
            console.log(error);
            res.status(500);
            res.end();
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({success: true, errors: []});
        }
    });

    res.status(200).json({success: true, errors: []});
}