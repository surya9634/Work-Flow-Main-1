# WorkFlow - Social Media Automation Platform

WorkFlow is a comprehensive social media automation platform that helps businesses manage their Instagram, Facebook Messenger, and WhatsApp interactions through AI-powered automation.

## Features

- **Instagram Automation**: Automate comments and DMs based on keywords
- **Facebook Messenger Management**: View and respond to Facebook messages
- **WhatsApp AI Automation**: AI-powered customer support automation
- **Analytics Dashboard**: Real-time analytics and insights
- **Campaign Management**: Create and manage marketing campaigns
- **AI Fine-Tuning**: Customize AI responses for your business

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account (for production)

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd workflow-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   GEMINI_API_KEY=your_gemini_api_key
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   FACEBOOK_CALLBACK=http://localhost:5000/auth/facebook/callback
   INSTAGRAM_APP_ID=your_instagram_app_id
   INSTAGRAM_APP_SECRET=your_instagram_app_secret
   REDIRECT_URI=http://localhost:5000/auth/instagram/callback
   WHATSAPP_PHONE_NUMBER_ID=your_whatsapp_phone_number_id
   WHATSAPP_VERIFY_TOKEN=your_whatsapp_verify_token
   WEBHOOK_VERIFY_TOKEN=your_webhook_verify_token
   SESSION_SECRET=your_session_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd work-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variable:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Configuration Guide

### Facebook Configuration

To configure Facebook integration, you need to:

1. Create a Facebook App at https://developers.facebook.com/
2. Add the Facebook Login product to your app
3. In the Facebook App settings:
   - Set "App Domains" to your domain (e.g., https://work-flow-main.onrender.com)
   - In "Facebook Login" settings, set "Valid OAuth Redirect URIs" to:
     - For development: http://localhost:5000/auth/facebook/callback
     - For production: https://work-flow-main.onrender.com/auth/facebook/callback
4. Update your .env file with:
   - FACEBOOK_APP_ID: Your Facebook App ID
   - FACEBOOK_APP_SECRET: Your Facebook App Secret
   - FACEBOOK_CALLBACK: The callback URL (as configured above)

### Instagram Configuration

To configure Instagram integration, you need to:

1. Use the same Facebook App (Instagram is managed through Facebook)
2. In the Facebook App settings, ensure Instagram Login is enabled
3. Set "Valid OAuth Redirect URIs" to include:
   - For development: http://localhost:5000/auth/instagram/callback
   - For production: https://work-flow-main.onrender.com/auth/instagram/callback
4. Update your .env file with:
   - INSTAGRAM_APP_ID: Your Instagram App ID (same as Facebook App ID)
   - INSTAGRAM_APP_SECRET: Your Instagram App Secret (same as Facebook App Secret)
   - REDIRECT_URI: The redirect URL (as configured above)

### WhatsApp Configuration

To configure WhatsApp integration, you need to:

1. Set up a WhatsApp Business account
2. Get access to the WhatsApp Business API through a provider like Twilio or directly from Meta
3. Update your .env file with:
   - WHATSAPP_PHONE_NUMBER_ID: Your WhatsApp phone number ID from the provider
   - WHATSAPP_VERIFY_TOKEN: A custom verification token for webhook verification
   - WEBHOOK_VERIFY_TOKEN: Same as WHATSAPP_VERIFY_TOKEN (used for webhook verification)

## Pushing to GitHub

To push this project to GitHub, follow these steps:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Give your repository a name (e.g., "workflow-social-media-automation")
   - Choose if it should be Public or Private
   - Do NOT initialize the repository with a README, .gitignore, or license

2. Initialize the local repository and push to GitHub:
   ```bash
   # Navigate to the project root directory
   cd /path/to/your/project

   # Initialize git repository
   git init

   # Add all files to git
   git add .

   # Commit the changes
   git commit -m "Initial commit: Social Media Automation Platform"

   # Add the remote origin (replace with your actual GitHub repository URL)
   git remote add origin https://github.com/your-username/your-repository-name.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. If you have sensitive files that shouldn't be committed to GitHub:
   - Create a `.gitignore` file in the project root with the following content:
     ```
     # Environment files
     .env

     # Database files
     workflow-backend/db/

     # Node modules
     node_modules/

     # Logs
     *.log

     # Runtime data
     pids
     *.pid
     *.seed
     *.pid.lock

     # Coverage directory used by tools like istanbul
     coverage/

     # Dependency directory
     .pnp/
     .pnp.js

     # Build outputs
     build/
     dist/

     # IDE files
     .vscode/
     .idea/
     *.swp
     *.swo
     ```

4. After creating the .gitignore file, remove sensitive files from git tracking:
   ```bash
   git rm --cached .env
   git rm --cached workflow-backend/.env
   git rm --cached -r workflow-backend/db/
   git commit -m "Remove sensitive files from tracking"
   git push
   ```

## Usage

1. Visit the application at `http://localhost:5173` (frontend) or `http://localhost:5000` (backend)
2. Sign up for a new account or sign in with existing credentials
3. Complete the onboarding process
4. Connect your social media accounts
5. Start automating your social media interactions

## Deployment

### Render Deployment

This project has been fixed to work properly with Render deployment. The following changes were made:

1. Fixed syntax errors in `workflow-backend/server.js`
2. Added missing imports for database functions
3. Added missing authentication middleware
4. Ensured proper database initialization
5. Configured backend to serve built React frontend in production

To deploy to Render:

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Fix Render deployment issues"
   git push origin main
   ```

2. Connect your repository to Render:
   - Go to https://dashboard.render.com/
   - Click "New" and select "Web Service"
   - Connect your GitHub account and select your repository
   - Set the following configuration:
     - Name: Your choice
     - Region: Your choice
     - Branch: main
     - Root Directory: Leave empty (root)
     - Environment: Node
     - Build Command: `npm install && cd work-flow && npm install && npm run build`
     - Start Command: `cd workflow-backend && npm run start-production`
     - Auto Deploy: Yes

3. Add environment variables in the Render dashboard:
   - PORT: 10000 (Render's default port)
   - NODE_ENV: production
   - All other required environment variables as specified in the .env files

4. Click "Create Web Service" and wait for deployment to complete.

## Local Development

To run the application locally with both frontend and backend:

1. Install dependencies for both frontend and backend:
   ```bash
   npm install
   cd work-flow && npm install
   cd ../workflow-backend && npm install
   ```

2. Start the development servers:
   ```bash
   # In one terminal, start the backend
   cd workflow-backend
   npm run dev
   
   # In another terminal, start the frontend
   cd work-flow
   npm run dev
   ```

3. Visit `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend

## Production Build

To build and run the production version locally:

1. Build the frontend:
   ```bash
   cd work-flow
   npm run build
   ```

2. Start the backend with production settings:
   ```bash
   cd ../workflow-backend
   npm run start-production
   ```

3. Visit `http://localhost:5000` to see the full application

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Sign up a new user
- `POST /api/auth/signin` - Sign in an existing user
- `GET /api/auth/me` - Get current user information

### Social Media Integration
- `GET /auth/instagram` - Connect Instagram account
- `GET /auth/facebook` - Connect Facebook account

### Analytics
- `GET /api/analytics/dashboard` - Get analytics dashboard data

### Chats
- `GET /api/conversations` - Get conversations
- `GET /api/conversations/:conversationId/messages` - Get messages for a conversation
- `POST /api/conversations/:conversationId/messages` - Send a message

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on the GitHub repository or contact the maintainers.