<template>
	<!-- Modal -->
	<b-modal id="big-note" scrollable >
        <template v-slot:modal-header>
            <span></span>
        </template>
        <b-tabs small class="p-3">
            <b-tab title="Overview">
                <BigNoteOverview/>
            </b-tab>
            <b-tab title="Scholarship" lazy>
                <BigNoteScholarship/>
            </b-tab>
        </b-tabs>
        <template v-slot:modal-footer>
            <span></span>
        </template>
    </b-modal>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    components: {
        BigNoteOverview: () => import('~/components/Home/BigNoteOverview.vue'),
        BigNoteScholarship: () => import('~/components/Home/BigNoteScholarship.vue')
    },
    methods: {
        // updateUrlPath () {
        //     if (this.tabIndex == 1) {
        //         // Change the url
        //         document.title = this.university.name; // Make sure title changes (Not recommended for SEO)
        //         window.history.pushState({}, this.university.name, '/' + this.university.slug); // Title changes (But not work in a few browsers)
        //     } else if (this.tabIndex == 2) {

        //     }
        // }
    },
    computed: {
        ...mapGetters([
            'university'
        ])
    },
    updated() {
        // this.updateUrlPath();
    },
    mounted () {

    }
}
</script>