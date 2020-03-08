<template>
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
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    components: {
        StatusBar: () => import('~/components/Home/StatusBar.vue'),
    },
    computed: {
        ...mapGetters([
            'university'
        ])
    },
    mounted () {
        // Change the url
        document.title = this.university.name; // Make sure title changes (Not recommended for SEO)
        window.history.pushState({}, this.university.name, '/' + this.university.slug); // Title changes (But not work in a few browsers)
    },
    destroyed() {
        // Change the url back 
        document.title = 'Schoolist';
        window.history.pushState("", 'Schoolist', '/');
    }
}
</script>

<style lang="scss" scoped>

</style>