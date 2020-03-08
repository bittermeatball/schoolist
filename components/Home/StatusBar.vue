<template>
    <div class="status-bar">
        <div class="status-bar-label">
            {{barLabel}}
        </div>
        <div class="status-bar-meter">
            <span class="status-bar-meter-point" v-for="n in (10 - barValue)" :key="n"></span>
            <span class="status-bar-meter-point active" v-for="n in (barValue)" :key="n + 'active'"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['barLabel', 'barValue'],
    
}
</script>

<style lang="scss" scoped>
.status-bar {
    height: 40px;
    width: 100%;
}
.status-bar-label {
    font-size: 0.9rem;
    line-height: 40px;
    font-weight: bold;
    color: grey;
    float: left;
}
.status-bar-meter {
    height: 40px;
    width: 190px;
    float: right;
}
.status-bar-meter-point {
    width: 15px;
    height: 100%;
    margin: 0 2px;
    float: right; // display: inline-block;
    background: url(~assets/img/smudge-gray.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    &.active {
        background: url(~assets/img/smudge-success.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>