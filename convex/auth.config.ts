/* eslint-disable import/no-anonymous-default-export */
export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_CLERK_JWT!,
      applicationID: 'convex',
    },
  ],
};
