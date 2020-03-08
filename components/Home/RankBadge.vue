<template>
    <span class="score-badge">
        <b-badge variant="success" size="lg" class="score-badge-normal" v-if="!is_top_3">#{{ formatRank }}</b-badge>
        <div class="score-badge-exclusive" :style="medal_url_style" v-if="is_top_3"></div>
    </span>
</template>

<script>
export default {
    props: ['ranking'],
    data() {
        return {
            is_top_3: false,
            medal_url_style: '',
        }
    },
    filters: {
        format_rank: (val) => {
            if (val !== null) {
                return val
            } else {
                return 'Na'
            }
        }
    },
    methods: {
        attachMedal (rank) {
            if (rank > 3 || rank == null) {
                this.is_top_3 = false;
                this.medal_url_style = '';
            } else {
                this.is_top_3 = true;
                this.medal_url_style = 'background: url(/_nuxt/assets/img/ranking/' + rank + '-place.svg); background-size: cover;';
            }
        }
    },
    computed: {
        formatRank () {
            if (this.ranking.rank != null) {
                return this.ranking.rank;
            } else {
                return "Na";
            }
        }
    },
    mounted () {
        this.attachMedal(this.ranking.rank);
    }
}
</script>

<style lang="scss" scoped>

.score-badge {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    transform: scale(1.5);
    transition-duration: 0.5s;
}
.score-badge-exclusive {
    display: block;
    height: 50px;
    width: 50px;
    background: url(~assets/img/ranking/1-place.svg);
    background: url(~assets/img/ranking/2-place.svg);
    background: url(~assets/img/ranking/3-place.svg);
    transform: rotate(-15deg) translate(-10px,-10px) scale(0.8);
    position: absolute;
    top: 0;
    left: 0;
}
</style>