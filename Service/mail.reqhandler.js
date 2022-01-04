const sendEmail = require("./nodeMailer").sendEmail;

function sendEmailHandler (req, res) {
    const requestObject = req.body;
    try {
        sendEmail(requestObject)
        return {mailDeliveryStatus: "success"}
    } catch (err) {
        console.log("sendEmail Handler recieved error.. ");
        return {mailDeliveryStatus: "failed"}
    }
}

module.exports = {
    sendEmailHandler
}