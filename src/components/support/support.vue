<template>
    <div>
        <app-header @hideCom="hideCom"/>
        <support-section v-if="comShow"/>
        <app-footer v-if="comShow"/>
    </div>
</template>

<script>

import header from "../commonCom/header"
import supportSection from "./supportSection"
import footer from "../commonCom/footer"


export default {
    name:'support',
    data(){
        return{
            comShow:true
        }
    },
    components:{
        'app-header':header,
        'support-section':supportSection,
        'app-footer':footer
    },
    methods:{
        hideCom:function () {
            this.comShow=!this.comShow
        }
    },
    mounted() {
        document.documentElement.scrollTop=0
    },
}
</script>

<style scoped>
    
</style>

