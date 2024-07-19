import passport from 'passport';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        console.log('Google profile:', profile); // log the profile object

        const email =
          profile.emails && profile.emails[0] && profile.emails[0].value;
        if (!email) {
          return done(new Error('No email found in Google profile'), null);
        }

        let user = await User.findOne({ email });

        if (user) {
          return done(null, user);
        } else {
          const newUser = new User({
            name: profile.displayName,
            email,
            role: 'normal',
          });
          await newUser.save();
          return done(null, newUser);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// store user in session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
