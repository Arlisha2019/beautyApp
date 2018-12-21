const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_1Cs0K3y3d0L4fLjntNrZipNr'
    : 'sk_test_1Cs0K3y3d0L4fLjntNrZipNr';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
