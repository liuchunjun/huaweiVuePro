<template>
    <div class="indexWrap">
        <app-header @hideCom="hideCom"/>
        <section-index v-if="comShow"/>
        <app-footer v-if="comShow"/>
    </div>
</template>

<script>

import header from "../commonCom/header"
import section_index from "./section_index"
import footer from "../commonCom/footer"


export default {
    name:'index',
    data(){
        return{
            comShow:true
        }
    },
    components:{
        'app-header':header,
        'section-index':section_index,
        'app-footer':footer
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

