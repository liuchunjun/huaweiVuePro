<template>
    <div>
        <app-header @hideCom="hideCom"/>
        <news-section v-if="comShow"/>
        <app-footer v-if="comShow"/>
    </div>
</template>

<script>

import header from "../commonCom/header"
import newsSection from "./newsSection"
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
        'news-section':newsSection,
        'app-footer':footer,
    },
    methods:{
        hideCom:function () {
            this.comShow=!this.comShow
        }
    },
    mounted() {
        document.documentElement.scrollTop=0
    }
}
</script>

<style scoped>
    

</style>

