export default function BenchMarker() {
  return (
    <>
      <h2>The product</h2>
      <p>
        BenchMarker monitors buildings and the equipment in them for hotel groups, food-safety and cold-chain
        operations, and commercial property. Sensors report temperature, humidity, CO2, door cycles, HVAC state, and
        energy and water use. The platform turns that into alarms, dashboards, floor plans and compliance reports. When
        an HVAC unit or a freezer door misbehaves, the fault reaches the help desk with context before anyone has to
        phone round.
      </p>
      <p>
        Customers use it through a web dashboard, iOS and Android apps, a simplified portal for on-site staff, and an
        installer app that sets sensors up over Bluetooth. There's also a public Customer Data API.
      </p>

      <h2>Permissions the database enforces</h2>
      <p>
        Customers are organised as Organisation → Site → Zone → Asset, and different people need different slices of
        that tree. A query that leaks one customer's data to another is the worst bug this product can have.
      </p>
      <p>
        I designed and optimised the policy-based access model over that hierarchy, for about 70 customer
        organisations. Policies aren't evaluated on every request. They compile into a derived access table, built with
        Postgres materialised views and per-scope SQL functions, with advisory locks so concurrent rebuilds don't
        collide. Hasura's row-level permissions read from that table, so the database scopes every GraphQL query to the
        caller's organisation, and a new endpoint can't forget to check.
      </p>

      <h2>Web and mobile</h2>
      <p>
        I'm the main contributor to BenchMarker's React web app, and I build and ship the React Native / Expo app for
        iOS and Android, with push notifications and over-the-air updates through EAS.
      </p>
      <p>
        I also led a new React and TypeScript building-management app. It serves hotels, bank branches and offices
        from one codebase through per-customer configuration, and covers live HVAC control, occupancy and
        energy-savings reporting.
      </p>

      <h2>Ingestion and alarms</h2>
      <p>
        At SenSys I built the packet-processing pipeline: Celery on RabbitMQ with high, medium and low priority queues,
        a registry that picks the right decoder for each device type, and alarm evaluation that sends SMS, email and
        push notifications according to on-call rosters. I wrote payload decoders for new devices as they were added.
      </p>
      <p>
        I also moved legacy REST APIs to GraphQL and refactored the web app onto them, added unit tests across the
        Django codebase, and built an Elasticsearch/Kibana export for analysing refrigeration defrost cycles.
      </p>

      <h2>Security review</h2>
      <p>
        I led an OWASP ASVS Level 2 assessment of BenchMarker covering all 260 controls, turned the results into a
        tiered remediation roadmap, and wrote a security summary that enterprise customers can use in procurement. All
        customer data stays in Australian AWS regions.
      </p>
    </>
  );
}
