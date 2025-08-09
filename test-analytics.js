const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Read users from the database
const usersFile = path.join(__dirname, 'workflow-backend/db/users.json');
const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

// Use the first user to generate a token
const user = users[0];
console.log('Using user:', user.email);

// Generate JWT token (same as in server.js)
const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );
};

const token = generateToken(user.id);
console.log('Generated token:', token);

// Test the analytics endpoint
async function testAnalytics() {
  try {
    const response = await axios.get('http://localhost:5000/api/analytics/dashboard', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    console.log('Analytics response status:', response.status);
    console.log('Analytics data:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error fetching analytics:', error.response?.data || error.message);
  }
}

testAnalytics();