#!/bin/bash
cd /home/ec2-user/finlytics/finlytics-ui || exit

echo "ðŸ”„ Pulling latest code..."
git pull origin main

echo "ðŸ”¨ installing npm..."
npm install

echo "ðŸ›‘ building with npm..."
npm run build

echo "ðŸš€ Starting new app..."
sudo systemctl reload nginx

echo "âœ… Deployment complete!"
