const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
const Employer = require('../models/Employer');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          if (!user) {
            Employer.findById(jwt_payload.id).then(employer => {
              if (employer) {
                return done(null, employer);
              }
            });
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
