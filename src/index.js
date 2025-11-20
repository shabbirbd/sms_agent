import express from "express";
import bodyParser from "body-parser";
import { sendMessage } from "./sendMessage.js";
const app = express();
app.use(bodyParser.json());
app.post("/send-sms", async (req, res) => {
    const { phone, message } = req.body;
    if (!phone || !message) {
        return res.status(400).json({ error: "phone and message required" });
    }
    try {
        await sendMessage(phone, message);
        res.json({ success: true });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.listen(5050, () => {
    console.log("SMS agent running on http://localhost:5050");
});
//# sourceMappingURL=index.js.map