<template>
    <section id="apis" class="body-con">
        <div class="rebrand-wrap-one">
            <!-- Title -->
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">APIs & Integrations</h2>
                <p class="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I build API-first systems that are secure, versioned, and resilient, enabling safe evolution and predictable integrations.
                </p>
            </div>

            <!-- Summary grid -->
            <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
                <div class="rebrand-wrap-thirty-two">
                    <h3 class="font-semibold mb-2">REST & GraphQL</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Design RESTful endpoints for CRUD flows; use GraphQL for complex, client-driven queries to reduce payloads.
                    </p>
                </div>

                <div class="rebrand-wrap-thirty-two">
                    <h3 class="font-semibold mb-2">Versioning & Gateway</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Version endpoints (e.g., /v1/) behind a gateway to enable safe upgrades and backward compatibility.
                    </p>
                </div>

                <div class="rebrand-wrap-thirty-two">
                    <h3 class="font-semibold mb-2">Auth & Rate Limits</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        Use JWT & OAuth2 for auth and apply per-client rate-limiting to protect services.
                    </p>
                </div>
            </div>

            <!-- Code examples -->
            <div class="mt-12 grid gap-8 md:grid-cols-2">
                <div class="rebrand-wrap-thirty-three">
                    <h4 class="font-semibold mb-3">Laravel: Payout Endpoint (Queued)</h4>
                    <pre class="text-sm overflow-x-auto rounded-md bg-gray-900 text-gray-200 p-4">
                        <code>
        // app/Http/Controllers/Api/V1/PaymentController.php

        public function payout(Request $request)
        {
            $validated = $request->validate([
                'user_id' => 'required|exists:users,id',
                'amount' => 'required|numeric|min:1',
                'currency' => 'required|string|max:3',
                'idempotency_key' => 'nullable|string|max:255',
            ]);

            if ($validated['idempotency_key'] && cache()->has('payout:' . $validated['idempotency_key'])) {
                return response()->json(['status' => 'duplicate'], 202);
            }

            if (!empty($validated['idempotency_key'])) {
                cache()->put('payout:' . $validated['idempotency_key'], true, now()->addMinutes(10));
            }

            dispatch(new ProcessPayout($validated));
            return response()->json(['status' => 'processing'], 202);
        }
                        </code>
                    </pre>
                </div>

                <div class="rebrand-wrap-thirty-three">
                    <h4 class="font-semibold mb-3">Vue: API Client + Payout Call</h4>
                    <pre class="text-sm overflow-x-auto rounded-md bg-gray-900 text-gray-100 p-4">
                        <code>
        // src/utils/apiClient.js (axios instance)
        const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL + '/v1',
        timeout: 8000,
        headers: { 'Content-Type': 'application/json' },
        });

        export default api;

        // usage
        await api.post('/payout', { user_id, amount, currency, idempotency_key }, { retry: 2 });
                        </code>
                    </pre>
                </div>

                <div class="rebrand-wrap-thirty-three md:col-span-2">
                    <h4 class="font-semibold mb-3">Realtime: WebSocket Client</h4>
                    <pre class="text-sm overflow-x-auto rounded-md bg-gray-900 text-gray-200 p-4">
                        <code>
        // src/services/socket.js
        import { io } from 'socket.io-client';
        const socket = io(import.meta.env.VITE_WS_URL, {
        transports: ['websocket'],
        auth: { token: localStorage.getItem('auth_token') },
        });
        export default socket;
                        </code>
                    </pre>
                </div>
            </div>

            <!-- Integrations list -->
            <div class="rebrand-wrap-thirty-four">
                <h4 class="font-semibold mb-3">Third-Party Integrations</h4>
                <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                    <li>
                        <strong>Payments : </strong> Paystack / Flutterwave for server-side signed requests, idempotency keys, webhook validation.
                    </li>
                    <li>
                        <strong>Email : </strong> Mailgun / SendGrid to send via queued jobs with retry and fallback logging.
                    </li>
                    <li>
                        <strong>Storage : </strong> S3-compatible storage for presigned uploads and server-side validation.
                    </li>
                    <li>
                        <strong>OAuth : </strong> Google / GitHub for server-side token storage and refresh handling.
                    </li>
                </ul>
            </div>

            <!-- Best practices -->
            <div class="rebrand-wrap-thirty-four">
                <h4 class="font-semibold mb-2">Best Practices</h4>
                <ul class="list-disc pl-5">
                <li>Version public APIs and guarantee backward compatibility.</li>
                <li>Use idempotency keys for external calls and webhook processing.</li>
                <li>Apply per-client rate limits and protect endpoints with throttling strategies.</li>
                <li>Store secrets in a secrets manager (Vault, AWS Secrets Manager) and never in repo.</li>
                <li>Test integrations against sandbox/testnet environments and include automated contract tests where relevant.</li>
                </ul>
            </div>

            <!-- CTA -->
            <div class="mt-8 text-center">
                <a href="/api-specs/rekorr" class="inline-flex items-center px-6 py-3 bg-indigo-600 text-gray-300 font-semibold rounded-lg hover:bg-indigo-700 transition">
                Request full API specification →
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
/* static component – no runtime logic required here */
</script>

<style scoped>
pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace; font-size: 0.875rem; }
</style>
