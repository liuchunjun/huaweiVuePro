<template>
    <div class="hideCnt02">
        <div class="hide_part hide_person">
            <span>个人用户</span>
            <p>手机，PC和平板，穿戴设备等个人及家用产品</p>
        </div>
        <div class="hide_part hide_group">
            <a href="javascript:;">
                <span>个人用户<i></i></span>
                <p>手机，PC和平板，穿戴设备等个人及家用产品</p>
            </a>
        </div>
        <div class="hide_part hide_company">
            <a href="javascript:;">
                <span>个人用户<i></i></span>
                <p>手机，PC和平板，穿戴设备等个人及家用产品</p>
            </a>
        </div>
        <div class="hide_part hide_operator">
            <a href="javascript:;">
                <span>个人用户<i></i></span>
                <p>手机，PC和平板，穿戴设备等个人及家用产品</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"hideCnt02",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .hideCnt02 {
        position: absolute;
        top: 0px;
        background: #fff; }
    .hideCnt02 .hide_part {
        border-bottom: 1px solid #d4d4d4;
        line-height: .3rem;
        padding: .06rem .2rem .06rem .23rem; }
    .hideCnt02 .hide_part:first-child {
            margin-top: .54rem; }
    .hideCnt02 .hide_part:first-child span {
            color: #282828; }
    .hideCnt02 .hide_part span {
            font-weight: 600;
            color: #f66f6a; }
    .hideCnt02 .hide_part span i {
            display: inline-block;
            width: .15rem;
            height: .19rem;
            margin-left: 2.6rem;
            vertical-align: middle;
            background: url("../../assets//img/arrow.png") no-repeat center; }
</style>
