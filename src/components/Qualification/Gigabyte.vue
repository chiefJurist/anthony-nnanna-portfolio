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
                <span class="q-card-header-text">Job Summary:</span>
                <span class="icon icon-[quill--escape]" @click="toggle"></span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Contribute to the development open-source Vue libraries using JavaScript and Vue.js.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Contribute to the development of backend APIs using JavaScript.
                </span>
            </div>
        </div>
    </div>
</template>