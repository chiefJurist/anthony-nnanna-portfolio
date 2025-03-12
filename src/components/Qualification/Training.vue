<script>
    export default{
        methods: {
            toggle(){
                this.$emit("change")
            }
        }
    }
</script>

<template>
    <div class="q-card-backdrop">
        <div class="q-card">
            <div class="q-card-header">
                <span class="q-card-header-text">Course Summary:</span>
                <span class="icon icon-[quill--escape]" @click="toggle"></span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Developed and maintained internal tools using a versatile stack (PHP, Node.js, Python, Vue.js, Tailwind CSS, TypeScript).
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Implemented role-based authentication, API integrations, and design systems for secure, user-friendly applications.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Strengthened full-stack expertise through practical, real-world project experience.
                </span>
            </div>
        </div>
    </div>
</template>