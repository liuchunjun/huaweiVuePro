<template>
    <div>
        <app-header @hideCom="hideCom"/>
        <phone-section v-if="comShow"/>
        <app-footer v-if="comShow"/>
    </div>
</template>

<script>

import header from "../commonCom/header"
import phoneSection from "./phoneSection"
import footer from "../commonCom/footer"

export default {
    name:'phone',
    data(){
        return{
            comShow:true
        }
    },
    components:{
        'app-header':header,
        'phone-section':phoneSection,
        'app-footer':footer,
    },
    methods:{
        hideCom:function () {
            this.comShow=!this.comShow
        }
    },
    mounted:function(){
        document.documentElement.scrollTop=0
    }
}
</script>

<style scoped>


</style>

