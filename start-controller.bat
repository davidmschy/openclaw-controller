@echo off
cd /d "C:\Users\Administrator\openclaw-controller"
set PORT=3001
echo Starting OpenClaw Controller...
:restart
node index.js
echo Controller crashed, restarting in 5 seconds...
timeout /t 5 /nobreak > nul
goto restart
