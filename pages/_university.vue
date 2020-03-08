<template>
    <b-container class="p-0 single-page-container mt-3">
        <b-row>
            <b-col cols="6">
                <b-img style="width: 100%" :src="university.background_url"  class="image-note-thumbnail box-shadow rounded"
                    :alt="'Image of ' + university.name" top />
                <h1>{{university.name}}</h1>
                <h3>{{university.address}}</h3>
                <p>{{university.description}}</p>
            </b-col>
            <b-col>
                <div class="mt-3">
                    <div class="my-3" style="font-weight: bold; color: gray">
                        #1 university in Technology
                    </div>
                    <StatusBar :barLabel="'Overall'" :barValue="university.score_rating.overall"/>
                    <StatusBar :barLabel="'Academic'" :barValue="university.score_rating.academic"/>
                    <StatusBar :barLabel="'Safety'" :barValue="university.score_rating.safety"/>
                    <StatusBar :barLabel="'Professors'" :barValue="university.score_rating.professor"/>
                    <StatusBar :barLabel="'Student life'" :barValue="university.score_rating.student_life"/>
                    <StatusBar :barLabel="'Diversity'" :barValue="university.score_rating.diversity"/>
                    <StatusBar :barLabel="'Athletic'" :barValue="university.score_rating.athletic"/>
                    <StatusBar :barLabel="'Location'" :barValue="university.score_rating.location"/>
                    <StatusBar :barLabel="'Dorm'" :barValue="university.score_rating.dorm"/>
                    <StatusBar :barLabel="'Campus'" :barValue="university.score_rating.campus"/>
                    <StatusBar :barLabel="'Campus food'" :barValue="university.score_rating.campus_food"/>
                    <StatusBar :barLabel="'Party scene'" :barValue="university.score_rating.party_scene"/>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    layout: 'single',
    name: 'Single',
    head () {
        return {
        title: this.university.name,
        description: 'A short dummy description'
        }
    },
    async fetch ({ store, params }) {
        await store.commit('SET_SLUG', params.university)
        await store.dispatch('loadUniversity')
    },
    computed: {
        ...mapState([
            'university'
        ])
    },
    components: {
        StatusBar: () => import('~/components/Home/StatusBar.vue'),
    }
}
</script>

<style lang="scss" scoped>
// .single-page-container {

// }
.image-note-bg {
    margin-top: 1.5rem;
    background: url(~assets/img/paper.svg);
    background-size: cover;
    transition-duration: 0.5s;
}
.image-note-thumbnail {
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
</style>