#!/bin/bash
cd /home/ec2-user/finlytics/finlytics-ui || exit

echo "📥 Pulls the latest code"
git pull origin main

echo "📦 Installs any updated packages"
npm install

echo "🏗️ Builds the frontend"
npm run build

echo "🔄 Reloads the server"
sudo systemctl reload nginx

echo "✅ Deployment complete! 🎉"
