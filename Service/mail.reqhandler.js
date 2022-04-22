const sendEmail = require("./nodeMailer").sendEmail;

async function sendEmailHandler (req, res) {
    const requestObject = req.body;
    try {
        const result = await sendEmail(requestObject);
        return result;
    } catch (err) {
        console.log("sendEmail Handler recieved error.. ");
        return {mailDeliveryStatus: "failed"}
    }
}

module.exports = {
    sendEmailHandler
}