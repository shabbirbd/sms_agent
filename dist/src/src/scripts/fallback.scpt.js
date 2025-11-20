export const fallbackScript = (target, msg) => `
tell application "Messages" to launch
delay 0.4

tell application "System Events"
    tell application process "Messages"
        keystroke "n" using command down
        delay 0.3
        
        keystroke "${target}"
        delay 0.3
        keystroke return
        delay 0.4
        
        keystroke "${msg}"
        delay 0.2
        keystroke return
    end tell
end tell
`;
//# sourceMappingURL=fallback.scpt.js.map