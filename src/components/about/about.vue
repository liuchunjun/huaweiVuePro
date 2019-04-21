<template>
    <div>
        <app-header />
        <about-section />
        <app-footer />
    </div>
</template>

<script>

import header from "../commonCom/header"
import aboutSection from "./aboutSection"
import footer from "../commonCom/footer"


export default {
    name:'about',
    data(){
        return{
            
        }
    },
    components:{
        'app-header':header,
        'about-section':aboutSection,
        'app-footer':footer
    },
    methods:{
        
    },
    mounted() {
        document.documentElement.scrollTop=0
    },
}
</script>

<style scoped>

</style>

