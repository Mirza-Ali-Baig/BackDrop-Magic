import {Webhook} from 'svix'
import userModal from "../models/userModal.js";

// API Controller Function to Manage Clerk User with database
// API End Point: http://localhost:4000/api/user/webhooks
const clerkWebhook = async (req, res) => {
    try {
        const wHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await wHook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature']
        });
        const {data, type} = req.body;
        switch (type) {
            case 'user.created': {
                // Insert user data into your database
                // Example: const user=new User(data); await user.save();
                let userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                }
                // Insert user data into your database
                await userModal.create(userData);
                console.log('User created:', data);
                res.json({
                    status: true,
                    message: 'User created successfully'
                })
                break;
            }
            case 'user.updated': {

                let userData = {
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                }
                // Update user data in your database
                await userModal.findOneAndUpdate({clerkId: data.id}, userData);
                console.log('User updated:', data);
                res.json({
                    status: true,
                    message: 'User updated successfully'
                })
                break;
            }
            case 'user.deleted':
                // Delete user data from your database
                await userModal.findOneAndDelete({clerkId: data.id});
                console.log('User deleted:', data);
                res.json({
                    status: true,
                    message: 'User deleted successfully'
                })
                break;
            default:
                console.log('Unhandled webhook type:', type);
        }
    } catch (e) {
        console.log(e)
        res.json({status: false, message: e.message});
    }
}


// API Controller to get the user credit data
// API End Point: http://localhost:4000/api/user/credit
const getUserCredit = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await userModal.findOne({clerkId: userId});
        if (!user) {
            return res.json({status: false, message: 'User not found'});
        }
        res.json({status: true, data: user.credit});
    } catch (e) {
        res.json({status: false, message: e.message});
    }
}

// API Controller to update the user credit data
// API End Point: http://localhost:4000/api/user/credit
const updateUserCredit = async (req, res) => {
    try {
        const {userId, credit} = req.body;
        const user = await userModal.findOne({clerkId: userId});
        if (!user) {
            return res.json({status: false, message: 'User not found'});
        }
        user.credit = credit;
        await user.save();
        res.json({status: true, message: 'Credit updated successfully'});
    } catch (e) {
        res.json({status: false, message: e.message});
    }
}


export {
    clerkWebhook,
    getUserCredit,
    updateUserCredit
};