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
                    Successfully completed a rigorous 6-month bootcamp training program, where I honed my skills in various technologies including:
                    Databases, HTML, CSS, JavaScript, Git, SQL.
                </span>
            </div>

            <div class="q-card-skill">
                <span>
                    <span class="small-icon icon-[mdi--tick-circle-outline]"></span>
                </span>
                <span class="q-card-skill-text">
                    Became proficient in these technologies and ready to contribute effectively to projects requiring expertise in web development.
                </span>
            </div>
        </div>
    </div>
</template>