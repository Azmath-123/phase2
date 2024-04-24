import jwt from 'jsonwebtoken';


async function authMiddleware(req,res,next){
    try {
        console.log('Inside middleware : authMiddleware method' );
        let authToken = req.headers['auth-token'];
        let userData = await jwt.verify(authToken, 'CFI_A24');
        req.userData = userData;
        next();
    } catch (error) {
        console.log('Inside middleware : authMiddleware method' );
        return res.status(401).json({error : "Invalid authorisation token"});
    }
}

export default authMiddleware;