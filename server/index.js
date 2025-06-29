// Step 1: Import the tools we need
const express = require('express');  // Express is the web framework
const cors = require('cors');        // CORS allows frontend to talk to backend
require('dotenv').config();
const mongoose = require('mongoose');
const Vote = require('./Models/Vote');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');

// Step 2: Create an Express application
// Think of this as creating your "restaurant" that will serve requests
const app = express();

// Step 3: Set up middleware (think of these as restaurant rules)
// Middleware runs BEFORE your routes handle requests

// This allows your React app (localhost:5173) to make requests to this server
app.use(cors());

// This tells Express to understand JSON data in requests
// When frontend sends {name: "Messi"}, Express can read it
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');    
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Step 4: Create your first route (like a menu item)
// When someone visits http://localhost:5000/, send back a message
app.get('/api/votes', async (req,res)=>{
    try {
        const counts = await Vote.aggregate([
            {$group: {_id: '$playerId', count: {$sum: 1}}},
        ]);
        const tally= {
            messi: 0,
            ronaldo: 0,
        };
        counts.forEach(c => {
            tally[c._id] = c.count;
        });
        res.json(tally);
    }
    catch(err){
        res.status(500).json({error: 'Error fetching votes'});
    }
});
// app.get('/api/votes', (req, res) => {
//     // req = request (what the customer ordered)
//     // res = response (what we send back)
//     res.json({
//         messi: voteCount.messi,
//         ronaldo: voteCount.ronaldo,
//         total: voteCount.messi + voteCount.ronaldo
//     });
// });

// Step 5: Create a test route for votes
app.post('/api/vote/', async (req,res)=>{
    try {
        const {playerId} = req.body;
        if(!playerId || !['messi','ronaldo'].includes(playerId)){
            return res.status(400).json({error: 'Invalid player ID'});
        }
        const vote = new Vote({playerId});
        await vote.save();
        res.json({message: 'Vote recorded successfully'});
    } catch (error) {
        res.status(500).json({error: 'Error recording vote'});
    }
});
// app.post('/api/vote', (req, res) => {
//     // This will eventually get real data from database
//     // For now, let's send fake data
//     const { playerId } = req.body;
//     if (playerId !== 'messi' && playerId !== 'ronaldo') {
//         return res.status(400).json({
//             error: 'Invalid player ID. Must be "messi" or "ronaldo"'
//         });
//     }
    
//     voteCount[playerId] += 1;
//     res.json({
//         messi: voteCount.messi,
//         ronaldo: voteCount.ronaldo,
//         total: voteCount.messi + voteCount.ronaldo
//     });
// });

// Step 6: Create a route for user registration
app.post('/api/signup/', async (req, res)=>{
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({error: 'All fields are required'});
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: 'User already exists'});
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({username, email, passwordHash});
        await user.save();
        res.json({ message:'Signup success' });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: 'Email already registered' });
        }
        throw err;            // other errors bubble to generic handler
    }
});

// Step 6: Start the server (open the restaurant for business)
const PORT = 5000;  // Port is like the restaurant's address number
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 Test votes API: http://localhost:${PORT}/api/votes`);
});
