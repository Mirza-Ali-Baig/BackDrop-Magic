import jwt from 'jsonwebtoken'


// Middleware to decode jwt token to get clerkID
export const authUser = async (req, res, next) => {
    try {
        const {token}= req.headers
        if (!token) {
            return  res.json({status:false,message:"Not Authorized Login Again"});
        }
        const decodeToken =jwt.decode(token);
        req.body.clerkId=decodeToken.clerkId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })
    }
}

export default authUser;
