const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_EXmLqrWPUKpriWWR6DhZl8Tv'
  : 'pk_test_EXmLqrWPUKpriWWR6DhZl8Tv';

export default STRIPE_PUBLISHABLE;
