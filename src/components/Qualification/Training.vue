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
                    I completed a six-month intensive industrial training at Decagon Institute, specializing in software engineering.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    I gained proficiency in System architecture design, Algorithm development, Software testing methodologies, Performance optimization, Software development life cycle management and Security principles.
                </span>
            </div>
        </div>
    </div>
</template>