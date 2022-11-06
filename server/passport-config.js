
import passportJWT from "passport-jwt";
import User from "./models/User.js";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const configureJwtStrategy = (passport) => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: (req) => req.cookies["jwt"],
        secretOrKey: process.env.SECRET,
      },
      (jwtPayload, done) => {
        return User.findById(jwtPayload.sub)
          .select("_id firstname lastname email")
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
};

export default configureJwtStrategy;
