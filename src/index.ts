import express from "express";
import type { Request, Response } from "express";
import bodyParser from "body-parser";
import { sendMessage } from "./sendMessage.js";

const app = express();
app.use(bodyParser.json());

app.post("/send-sms", async (req: Request, res: Response) => {
    const { phone, message } = req.body;

    if (!phone || !message) {
        return res.status(400).json({ error: "phone and message required" });
    }

    try {
        await sendMessage(phone, message);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: (err as any).message });
    }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));