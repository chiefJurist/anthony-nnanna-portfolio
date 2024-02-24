<script>
    export default{
        data(){
            return{
                program: false,
                frameworks: false,
                Infrastructure: false,
                development: false,
                testing: false,
                design: false,
                deployment: false
            }
        }
    }
</script>
<template>
    <div class="body-con">
        <div class="body-subcon text-black dark:text-white">
            <!--Title-->
            <div class="text-center mb-10">
                <div class=" text-4xl font-extrabold">Skills</div>
                <div class=" font-semibold text-gray-600 dark:text-white">My Technical Level</div>
            </div>

            <!--Details-->
            <div class="block sm:grid grid-cols-2 gap-10 mx-auto w-fit">
                <!--Programming Languages-->
                <div class="skills">
                    <!--Programming Languages Header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m109.46 244.04l134.58-134.56l-44.12-44.12l-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68l-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01l113.2 113.2zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9zm186.63 285.43l-33.64-33.64l-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68l-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86"/></svg>
                        </div>
                        <div class="skills-text">Programming Languages</div>
                        <div class="skills-display">
                            <div v-if="!program">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="program">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Programming Languages Body-->
                    <div>
                        
                    </div>
                </div>
                <!--Frameworks-->
                <div class="skills">
                    <!--Frameworks Header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"/></svg>
                        </div>
                        <div class="skills-text">Frameworks</div>
                        <div class="skills-display">
                            <div v-if="!frameworks">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="frameworks">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Frameworks Body-->
                    <div>
                        
                    </div>
                </div>
                <!--Infrastructural Tools-->
                <div class="skills">
                    <!--Infrastructural Tools header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M7.207.478a.5.5 0 0 0-.414 0L4.17 1.672L6.998 2.96l2.83-1.289zM3.7 5.61V2.556l2.8 1.275v3.375L3.991 6.065a.5.5 0 0 1-.293-.455Zm3.8 6.712v-3.34l2.652 1.208v3.375l-2.506-1.141a.5.5 0 0 1-.147-.102Zm3.652 1.245V10.19l2.803-1.276v3.055a.5.5 0 0 1-.293.455zM6.498 8.982v3.344a.5.5 0 0 1-.143.098l-2.51 1.143V10.19zM2.845 10.19v3.375L.34 12.424a.5.5 0 0 1-.293-.455V8.915l2.8 1.275Zm4.653-2.982V3.83l2.803-1.276V5.61a.5.5 0 0 1-.293.455zm2.948-.37a.5.5 0 0 1 .414 0l2.62 1.192l-2.83 1.289L7.825 8.03l2.622-1.194Zm-7.306 0a.5.5 0 0 1 .414 0l2.62 1.192l-2.829 1.29L.518 8.03L3.14 6.837Z" clip-rule="evenodd"/></svg>
                        </div>
                        <div class="skills-text">Infrastructural Tools</div>
                        <div class="skills-display">
                            <div v-if="!Infrastructure">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="Infrastructure">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Infrasructural Tools Body-->
                    <div>
                        
                    </div>
                </div>
                <!--Development Tools-->
                <div class="skills">
                    <!--Development Tools Header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h128c17.7 0 32 14.3 32 32v384c0 53-43 96-96 96S0 469 0 416zm223.6 393.9c.3-3.3.4-6.6.4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3zM182.8 512l192-192H480c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32zM128 64H64v64h64zM64 192v64h64v-64zm32 248a24 24 0 1 0 0-48a24 24 0 1 0 0 48"/></svg>
                        </div>
                        <div class="skills-text">Development Tools</div>
                        <div class="skills-display">
                            <div v-if="!development">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="development">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Development Tools Body-->
                    <div>
                        
                    </div>
                </div>
                <!--Testing Frameworks-->
                <div class="skills">
                    <!--Testing Frameworks Header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9.06L7.944 6.864V2.388L10.38.924v3.66l1.62.744l1.62-.744V.924l2.436 1.464v4.476zm-8.124 4.752L0 16.056v2.988l3.228-1.86l1.404.912l.096 1.632l-3.24 1.872l2.616 1.476l3.828-2.268l-.132-4.596zm9.732-.9V8.758l-1.37.742l-.238.129l-.238-.13l-1.37-.741v4.154l-3.613 2.09l1.282.783l.231.142l.008.27l.046 1.612L12 15.696l3.595 2.079l.045-1.59l.008-.27l.231-.142l1.301-.795zm7.164 4.272L24 19.044v-2.988L20.064 13.8l-3.924 2.4l-.132 4.596l3.888 2.244l2.616-1.44l-3.24-1.836l.096-1.668z"/></svg>
                        </div>
                        <div class="skills-text">Testing Frameworks</div>
                        <div class="skills-display">
                            <div v-if="!testing">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="testing">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Testing Frameworks Body-->
                    <div>
                        
                    </div>
                </div>
                <!--Design Tools-->
                <div class="skills">
                    <!--Design Tools header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M8 20H4.73A1.974 1.974 0 0 0 3 19a2 2 0 0 0 0 4a1.974 1.974 0 0 0 1.73-1H8zM29 9a1.974 1.974 0 0 0-1.73 1H24v2h3.27A2 2 0 1 0 29 9"/><path fill="currentColor" d="M25.414 5L21 .586L16.586 5L20 8.414V18h2V8.414zM21 3.414L22.586 5L21 6.586L19.414 5zm-9 20.172V14h-2v9.586L6.586 27L11 31.414L15.414 27zM9.414 27L11 25.414L12.586 27L11 28.586z"/><path fill="currentColor" d="M18 10H8.414L5 6.586L.586 11L5 15.414L8.414 12H18ZM5 12.586L3.414 11L5 9.414L6.586 11Z"/><path fill="currentColor" d="M13 3a2 2 0 0 0-4 0a1.973 1.973 0 0 0 1 1.73V8h2V4.73A1.973 1.973 0 0 0 13 3m9 24.27V24h-2v3.27a2 2 0 1 0 2 0"/><path fill="currentColor" d="M31.414 21L27 16.586L23.586 20H14v2h9.586L27 25.414ZM27 19.414L28.586 21L27 22.586L25.414 21Z"/></svg>
                        </div>
                        <div class="skills-text">Design Tools</div>
                        <div class="skills-display">
                            <div v-if="!design">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="design">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Design Tools Body-->
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
                <!--Deployment Platforms-->
                <div class="skills">
                    <!--Deployment Platforms Header-->
                    <div class="skills-header">
                        <div class="skills-icon">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.95 9h-.27l-4.16 6.02l-.82-.57L20.47 9h-2.34a1.25 1.25 0 1 0-2.5 0h-.43l-1.25 4l-.95-.3L14.15 9h-.9a1.25 1.25 0 0 0-2.5 0h-.9L11 12.7l-.95.3L8.8 9h-.42a1.25 1.25 0 0 0-2.5 0H3.51l3.77 5.45l-.82.57L2.3 9h-.25a10 10 0 0 1 19.9 0"/><path fill="currentColor" d="M11 15.405L9.586 14l-3.618 3.595L4.554 19l5.032 5L11 22.595L7.382 19zm2.021 7.19L14.435 24l3.618-3.595L19.467 19l-5.032-5l-1.414 1.405L16.639 19z"/></svg>
                        </div>
                        <div class="skills-text">Deployment Platforms</div>
                        <div class="skills-display">
                            <div v-if="!deployment">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42"/></svg>
                            </div>
                            <div v-if="deployment">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 13.41l-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42a1 1 0 0 0 1.41 0L12 11.29l3.54 3.54a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 .05-1.42"/></svg>
                            </div>
                        </div>
                    </div>
                    <!--Deployment Platforms Body-->
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>