import IngestDiagram from "../../components/IngestDiagram";

export default function DeviceManager() {
  return (
    <>
      <h2>The product</h2>
      <p>
        Our sensors reach the internet through several networks: LoRaWAN through commercial and self-hosted network
        servers, AWS IoT, and direct CoAP. Each has its own payload format, auth scheme and quirks. Device Manager is
        the internal hub that hides all of that from the products.
      </p>

      <h2>One interface, five providers</h2>
      <p>
        Device Manager puts one provider interface in front of ThingPark, ChirpStack v3 and v4, TTN, AWS IoT and
        CoAP/CBOR. Each adapter turns uplinks into one normalised shape. For AWS IoT I wrote the SigV4 request signing
        by hand. Downlinks go back out through the same interface with retries and status callbacks, so a product can
        tell whether a command reached the device. Support staff can move devices between networks in bulk, and the
        data is routed on to each product.
      </p>

      <h2>Ingest that survives an outage</h2>
      <p>
        Providers used to post straight to Device Manager, so if it was down or slow, readings could be lost. I put a
        small serverless layer in front of it, defined in CDK.
      </p>
      <figure className="my-6 border border-rule bg-sheet p-3">
        <IngestDiagram animate={false} />
      </figure>
      <ul>
        <li>Providers post to an API Gateway HTTP API. An inbound Lambda proxies each request with a 5-second timeout.</li>
        <li>
          On a 5xx or a timeout, it writes the whole request to SQS and still returns 204, so the provider doesn't pile
          on retries.
        </li>
        <li>
          AWS IoT subscription confirmations are the exception. Their tokens expire, so they're always proxied
          synchronously and return 502 on failure, which makes the provider retry.
        </li>
        <li>
          A retry Lambda health-checks Device Manager, then replays messages in batches, reporting partial-batch
          failures so only failed messages stay queued.
        </li>
        <li>After five failures a message moves to a dead-letter queue. Messages are kept for 14 days.</li>
      </ul>
      <p>
        Reserved concurrency and API Gateway throttling cap the blast radius. CloudWatch alarms on queue depth, DLQ
        contents, errors and throttles go to Slack, and a runbook covers redriving the DLQ once the root cause is fixed.
        A Device Manager outage now delays customer data instead of losing it.
      </p>

      <h2>The network underneath</h2>
      <p>
        I also run the self-hosted LoRaWAN network server and MQTT broker, and a gateway manager on EC2 with
        zero-touch provisioning and remote-access tunnels for hardware in the field.
      </p>
    </>
  );
}
