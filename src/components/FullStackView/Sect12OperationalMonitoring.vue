<template>
    <section id="monitoring" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Operational Monitoring & SLOs</h2>
                <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Reliable systems require continuous observation. I define Service Level Objectives (SLOs) and Service Level Indicators (SLIs) upfront,
                    instrument systems to expose meaningful telemetry, and automate alerts and runbooks so teams respond quickly and learn continuously.
                </p>
            </div>

            <!-- SLOs and SLIs -->
            <div class="grid md:grid-cols-2 gap-8 mb-10">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h3 class="font-semibold text-xl mb-3 text-gray-900 dark:text-white">SLO Examples</h3>
                    <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>API latency: 99th percentile latency &lt; 400 ms over a 30-day window</li>
                        <li>Availability: 99.95% successful responses in production per month</li>
                        <li>Error rate: total 5xx errors &lt; 0.1% of requests per week</li>
                    </ul>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h3 class="font-semibold text-xl mb-3 text-gray-900 dark:text-white">Key SLIs to Track</h3>
                    <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>p50, p95, p99 response latency</li>
                        <li>4xx / 5xx error rates</li>
                        <li>Queue length and job processing lag</li>
                        <li>Success rate of critical external integrations</li>
                    </ul>
                </div>
            </div>

            <!-- Tooling cards -->
            <div class="grid md:grid-cols-3 gap-6 mb-10">
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">Prometheus + Grafana</h4>
                    <p class="text-sm text-gray-700 dark:text-gray-300">Metrics collection and dashboarding for latency, throughput, and error rates.</p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">Loki + Logs</h4>
                    <p class="text-sm text-gray-700 dark:text-gray-300">Aggregated logs correlated with traces and metrics for fast root cause analysis.</p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">Tracing & Errors</h4>
                    <p class="text-sm text-gray-700 dark:text-gray-300">Sentry for exceptions; Jaeger or Honeycomb for distributed tracing.</p>
                </div>
            </div>

            <!-- Alert rule example -->
            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
                <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Prometheus Alert Rule</h3>
                <pre class="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm"><code># Prometheus alert rule: High 5xx error rate
groups:
  - name: application.rules
    rules:
      - alert: High5xxErrorRate
        expr: job:requests:rate5m{job=\"rekorr-api\", status=~\"5..\"} &gt; 0.001
        for: 5m
        labels:
          severity: page
        annotations:
          summary: \"High 5xx error rate detected for rekorr-api\"
          description: \"5xx error rate &gt; 0.1% for 5 minutes. Check recent deploys, logs, and queue worker status.\"
</code></pre>
            </div>

            <!-- Escalation & runbook -->
            <div class="grid md:grid-cols-2 gap-8 mb-10">
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">Escalation Flow</h3>
                    <ol class="list-decimal pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Pager trigger: alert fires with severity 'page' - page on-call engineer</li>
                        <li>On-call: acknowledge and triage within 5 minutes</li>
                        <li>Triage steps: check Grafana, inspect logs, verify deploys</li>
                        <li>Mitigate: throttle, reroute, or rollback as appropriate</li>
                        <li>Postmortem: document timeline and action items within 48 hours</li>
                    </ol>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h3 class="font-semibold mb-2 text-gray-900 dark:text-white">Runbook - Quick Checks</h3>
                    <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Check queue backlog and worker health</li>
                        <li>Inspect recent deploy commits and config changes</li>
                        <li>Look for correlated errors in logs and traces</li>
                        <li>Switch to degraded mode or fallback provider if needed</li>
                    </ul>
                </div>
            </div>

            <!-- Incident anecdote -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 mb-10">
                <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Incident summary</h3>
                <p class="text-gray-700 dark:text-gray-300">
                    A spike in 5xx errors occurred during a payment provider outage. Prometheus detected the spike and paged the on-call engineer.
                    Investigation showed cascading retries to the external provider. Mitigation steps included disabling retries and switching to a secondary provider.
                    The system maintained 99.9% availability during the incident window. Post-incident actions included adding a circuit breaker and automatic fallback.
                </p>
            </div>

            <!-- Checklist and CTA -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 class="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Operational checklist</h3>
                <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Publish SLOs and review with stakeholders</li>
                    <li>Instrument SLIs with meaningful cardinality</li>
                    <li>Create runbooks and validate them with game days</li>
                    <li>Aggregate logs, metrics, and traces for correlation</li>
                    <li>Automate paging and failover for critical paths</li>
                </ul>

                <div class="mt-6 text-center">
                    <a href="mailto:anthony@your-domain.com?subject=SLO%20Review%20Request&body=Hello%20Anthony,%0D%0A%0D%0AWe%20would%20like%20to%20discuss%20our%20system%20SLOs%20for%20a%20review.%20Please%20let%20us%20know%20your%20availability.%0D%0A%0D%0AThank%20you." class="inline-flex items-center px-6 py-3 bg-indigo-400 text-gray-900 font-semibold rounded-lg hover:bg-indigo-500 transition">
                        Request an SLO review →
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// static section - no runtime logic required
</script>

<style scoped>
pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace;
    font-size: 0.875rem;
}
</style>