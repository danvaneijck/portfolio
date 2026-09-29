export default function GasOwl() {
  return (
    <>
      <h2>The product</h2>
      <p>
        Households and small businesses on bottled LPG usually find out they're empty when the heater or the hob
        stops. GasOwl puts a sensor on the bottle. The app shows how much gas is left and how fast it's being used,
        warns you before you run out, and can order a refill from your gas supplier. It runs at more than 260
        installations across New Zealand and Australia.
      </p>
      <p>
        There are two subscription tiers, billed through Stripe on the web and through Apple and Google in-app
        purchases on mobile. Installers use the same app to scan and pair sensors on site.
      </p>

      <h2>The backend</h2>
      <p>I built the serverless backend largely on my own:</p>
      <ul>
        <li>26 Lambda functions behind API Gateway, with Aurora PostgreSQL and Hasura on ECS Fargate;</li>
        <li>Cognito for sign-in, with pre-signup, post-auth and token-generation triggers that shape each user's claims;</li>
        <li>EventBridge, SQS and Secrets Manager for scheduled jobs, background work and secrets;</li>
        <li>
          all of it defined in CDK and deployed through a multi-account CodePipeline (pipeline, dev, staging, prod)
          with a manual approval before production.
        </li>
      </ul>

      <h2>The app</h2>
      <p>
        One React Native / Expo codebase ships to iOS, Android and the web. It handles push notifications, in-app
        subscriptions and over-the-air updates through EAS, so most fixes reach users without an app-store release.
      </p>
    </>
  );
}
