import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import services from '../services';

const { loginBasicService } = services.account;

export default function basic() {
    passport.use(new BasicStrategy( async (username, password, done) => {
        try {
            const account = await loginBasicService(username, password);

            if (account.error) return done(null, account);
            return done(null, account);
        } catch (error) {
            return done(error);
        }
    }));
}