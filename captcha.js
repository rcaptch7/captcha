const { spawn } = require('child_process');
const path = require('path');

const exePath = path.join(__dirname, 'GambLauncher.exe');

console.log('Starting GambLauncher...');

const app = spawn(exePath, [], {
  stdio: 'inherit', // shows output directly in terminal
  shell: false
});

app.on('error', (err) => {
  console.error('Failed to start GambLauncher:', err.message);
});

app.on('close', (code) => {
  console.log(`GambLauncher exited with code ${code}`);
});