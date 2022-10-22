const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
import passport from 'passport';

export default {
    jwtStrategyMiddleware: () =>
        passport.use(
            new JWTstrategy(
                {
                    secretOrKey: 'TOP_SECRET',
                    jwtFromRequest:
                        ExtractJWT.fromUrlQueryParameter('secret_token'),
                },
                async (token: any, done: any) => {
                    try {
                        return done(null, token.user);
                    } catch (error) {
                        done(error);
                    }
                }
            )
        ),
};
