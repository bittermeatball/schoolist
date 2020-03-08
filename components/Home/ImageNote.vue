<template>
    <b-col lg="3" md="6" sm="12" class="image-note-container">
        <b-card no-body class="image-note-bg box-shadow" 
            width="100" :style="random_tilt"
            @click="triggerBigNote">
            <template v-slot:header>
                <div class="image-note-thumbnail box-shadow" :style="random_tilt" >
                    <b-card-img :src="university.background_url" 
                        :alt="'Image of ' + university.name" top />
                </div>
                <b-card-title>{{university.name}}</b-card-title>
                <b-card-sub-title class="mb-2"><small>{{university.address}}</small></b-card-sub-title>
            </template>
            <div class="image-note-hidden">
                <StatusBar :barLabel="'Overall'" :barValue="university.score_rating.overall"/>
                <StatusBar :barLabel="'Academic'" :barValue="university.score_rating.academic"/>
                <StatusBar :barLabel="'Student life'" :barValue="university.score_rating.student_life"/>
                <StatusBar :barLabel="'Overall'" :barValue="university.score_rating.overall"/>
                <StatusBar :barLabel="'Overall'" :barValue="university.score_rating.overall"/>
                <div class="mt-2" style="font-weight: bold; color: gray">
                    #1 university in Technology
                </div>
            </div>
        </b-card>
        <RankBadge :ranking="university.ranking" class="score-rank"/>
    </b-col>
</template>

<script>
export default {
    components: {
        StatusBar: () => import('~/components/Home/StatusBar.vue'),
        RankBadge: () => import('~/components/Home/RankBadge.vue')
    },
    props: ['university'],
    data () {
        return {
            random_tilt: '',
        }
    },
    methods: {
        async triggerBigNote () {
            await this.$store.commit('SET_UNIVERSITY',this.university);
            this.$root.$emit('bv::show::modal', 'big-note');
        }
    },
    mounted () {
        this.random_tilt = 'transform: rotate(' + (Math.random()*3 - 2) +'deg);'
        // this.random_background = 'background: url(~assets/img/paper.svg)'
    }
}
</script>

<style lang="scss" scoped>
.image-note-container{
    cursor: pointer;
}
.image-note-bg {
    margin-top: 1.5rem;
    background: url(~assets/img/paper.svg);
    background-size: cover;
    transition-duration: 0.5s;
}
.image-note-thumbnail {
    height: 140px;
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
}
.image-note-hidden {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: block;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.1);
    border-radius: 1000px;
    transition-duration: 0.4s;
}
.image-note-bg:hover {
    transform: rotate(0)!important;
    height: 270px;
    .image-note-hidden {
        border-radius: 0;
        transform: scale(1);
        opacity: 1;
    }
}
.score-rank {
    opacity: 1;
}
.image-note-container:hover .score-rank {
    opacity: 0!important;
}
</style>
