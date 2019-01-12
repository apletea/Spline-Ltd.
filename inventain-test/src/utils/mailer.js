const cron = require("node-cron");
let nodemailer = require("nodemailer");


// create mail transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "mr.ololoshechka@gmail.com",
        pass: "komar199708"
    }
});

let sheduler = cron.schedule("* * * * *", () => {
    console.log("---------------------");
    console.log("Running Cron Job");
    let mailOptions = {
        from: "mr.ololoshechka@gmail.com",
        to: "vitkom97@mail.ru",
        subject: `Not a GDPR update ;)`,
        text: `Hi there, this email was automatically sent by us`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw error;
        } else {
            console.log("Email successfully sent!");
        }
    });
});



module.exports = {
    sheduler : sheduler
};