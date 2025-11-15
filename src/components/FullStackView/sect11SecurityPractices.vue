<template>
    <section id="security" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Header -->
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Security Practices</h2>
                <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Security is a first-class concern in every system I build. I design services to be secure by default —
                    from input validation and secure auth flows to secrets management, dependency scans, and robust webhook handling.
                </p>
            </div>

            <!-- Principles Grid -->
            <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Input Validation & Sanitization</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Validate early and often. Use Laravel's validation layer as the source of truth and sanitize user content before rendering.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Authentication & Authorization</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Enforce least-privilege via policies and role checks. Use strong password hashing and rotate tokens regularly.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">CSRF & XSS Defenses</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Use framework CSRF protection, content escaping, and CSP headers to reduce attack surface.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Secrets & Configuration</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Never store secrets in repo. Use a secrets manager and inject secrets at runtime via CI/CD.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Dependency Security</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Run automated dependency scans (Composer audit, npm audit, Snyk) and block critical vulnerabilities in CI.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Rate Limiting & Throttling</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Throttle suspicious clients, apply tenant-specific limits, and degrade gracefully under load.
                    </p>
                </div>

                <div class="rebrand-wrap-forty">
                    <h3 class="font-semibold text-lg mb-2">Signed Webhooks & Idempotency</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Validate webhook signatures, use idempotency keys for payments, and log receipts for audit.
                    </p>
                </div>
            </div>

            <!-- Code Examples -->
            <div class="mt-10 grid gap-8 md:grid-cols-2">
                <!-- Laravel validation + idempotency -->
                <div class="rebrand-wrap-forty-one">
                    <h4 class="font-semibold text-lg mb-3">Laravel: Validation + Idempotency</h4>
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                        <code>
// app/Http/Controllers/Api/V1/PaymentController.php
&lt;?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\ProcessPayout;

class PaymentController extends Controller
{
    public function payout(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric|min:1',
            'currency' => 'required|string|max:3',
            'idempotency_key' => 'nullable|string|max:255',
        ]);

        if (!empty($validated['idempotency_key']) && cache()->has('payout:' . $validated['idempotency_key'])) {
            return response()->json(['status' => 'duplicate'], 202);
        }

        if (!empty($validated['idempotency_key'])) {
            cache()->put('payout:' . $validated['idempotency_key'], true, now()->addMinutes(10));
        }

        dispatch(new ProcessPayout($validated));
        return response()->json(['status' => 'processing'], 202);
    }
}
                        </code>
                    </pre>
                </div>

                <!-- Middleware for security headers / CSP -->
                <div class="rebrand-wrap-forty-one">
                    <h4 class="font-semibold text-lg mb-3">Laravel: Security Headers Middleware</h4>
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                        <code>
// app/Http/Middleware/SecurityHeaders.php
&lt;?php

namespace App\Http\Middleware;

use Closure;

class SecurityHeaders
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $csp = \"default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none';\";

        $response->headers->set('Content-Security-Policy', $csp);
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('X-XSS-Protection', '1; mode=block');

        return $response;
    }
}
                        </code>
                    </pre>
                </div>

                <!-- Signed webhook verification -->
                <div class="rebrand-wrap-forty-one md:col-span-2">
                    <h4 class="font-semibold text-lg mb-3">Webhook: Signature Verification (example)</h4>
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                        <code>
// app/Http/Controllers/Api/V1/WebhookController.php
<&lt;?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function receive(Request $request)
    {
        $payload = $request->getContent();
        $signature = $request->header('X-Signature'); // HMAC-SHA256

        $secret = config('services.payments.webhook_secret');

        $hash = hash_hmac('sha256', $payload, $secret);

        if (!hash_equals($hash, $signature)) {
            return response()->json(['error' => 'Invalid signature'], 400);
        }

        // process webhook (idempotent)
        // ...
        return response()->json(['status' => 'ok']);
    }
}
                        </code>
                    </pre>
                </div>
            </div>

            <!-- Operational practices -->
            <div class="mt-10 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h4 class="font-semibold text-lg mb-3">Operational Practices</h4>
                <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>
                        Enforce secrets in a manager and rotate keys on schedule.
                    </li>
                    <li>
                        Include dependency checks in CI and fail builds on critical findings (Composer audit, npm audit, Snyk).
                    </li>
                    <li>
                        Centralize audit logs (application + webhooks + auth events) for post-incident analysis.
                    </li>
                    <li>
                        Automated alerts for anomalous auth or spike in error rates (monitor + pager duty).
                    </li>
                    <li>
                        Periodic threat modeling and external security reviews before major releases.
                    </li>
                </ul>
            </div>

            <!-- CTA -->
            <div class="mt-8 text-center">
                <a href="/security-checklist" class="inline-flex items-center px-6 py-3 bg-indigo-950 text-gray-200 font-semibold rounded-lg hover:bg-indigo-700 transition">
                    Request my security checklist →
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
// Static section — no reactive code required
</script>

<style scoped>
    pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace;
        font-size: 0.875rem;
    }
</style>