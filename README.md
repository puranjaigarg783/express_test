# Render Demo Web Service

A simple Express.js web service ready to deploy on Render.

## Endpoints

- GET /health - Health check endpoint
- GET /quote - Returns a random inspirational quote
- POST /echo - Echoes back the request body

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment on Render

1. Push this code to a GitHub repository
2. Go to [dashboard.render.com](https://dashboard.render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: render-demo (or your preferred name)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Click "Create Web Service"

Your service will be deployed and accessible at a Render-provided URL.
