import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next)=>{
    // 1. Read the token.
    const token = req.headers['authorization'];

    // 2. if no token, return the error.
    if(!token){
        return res.status(401).send('Unauthorized user');
    }
    // 3. check if token is valid.
    try{
        const payload = jwt.verify(
            token,
            'ABClkajf454jh5jjjkj43jklda'
        );
        req.userEmail = payload.email;
    } catch(err){
        // 4. return error.
        console.log('catch error');
        return res.status(401).send('Unauthorized');
    }

    // 5. call next middleware.
    next();
};

export default jwtAuth;