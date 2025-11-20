export const backgroundScript = (target: string, msg: string) => `
tell application "Messages"
    set targetService to 1st service whose service type = iMessage
    set targetBuddy to buddy "${target}" of targetService
    send "${msg}" to targetBuddy
end tell
`;