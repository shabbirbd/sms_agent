import { exec } from "child_process";
import { backgroundScript } from "./scripts/background.scpt.js";
import { fallbackScript } from "./scripts/fallback.scpt.js";

export const sendMessage = (phone: string, message: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = backgroundScript(phone, message);

        exec(`osascript -e '${script}'`, (err) => {
            if (!err) return resolve();

            console.log("Background mode failed. Using fallback...");

            const fallback = fallbackScript(phone, message);
            exec(`osascript -e '${fallback}'`, (err2) => {
                if (err2) return reject(err2);
                resolve();
            });
        });
    });
};
