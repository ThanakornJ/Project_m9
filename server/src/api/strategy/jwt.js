import passport from "passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import path from 'path';
import fs from 'fs';
import util from 'util';
import services from "../services";

const { loginJWTService } = services.account;
const readFile = util.promisify(fs.readFile);

export default async function jwt() {
    const primaryKey = await readFile(path.resolve('./') + '\\src\\config\\key\\primaryKeyUser.key');

    passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: primaryKey,
        algorithms: ['RS256']
    }, async (payload, done) => {
        try {
            const account = await loginJWTService(payload);

            return done(null, account);
        } catch (error) {
            return done(error);
        }
    }));
}