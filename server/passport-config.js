//passport acts a s a middleware - the generated jwt is attached to req and authenticate with passport

import passportJWT from 'passport-jwt';
import User from './model/user.js';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const configureJwtStrategy = (passport) => {
    passport.use("jwt", new JWTStrategy({
        //where is the token located in the request
        jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
        //which secret was used to sign it?
        secretOrKey:process.env.SECRET
    }, 
    (jwtPayload, done) => {
        return (
            User.findById(jwtPayload.sub)
                .select("_id firstName, lastName, email")
                .then((user) => {
                    //attach a user object to the request object. 
                    return done(null,user)
                })
                .catch((err) => {
                    return done(err)
                })
        )
    }))
}

export default configureJwtStrategy;

