<template>
  <b-container fluid>
    <b-row>
      <ImageNote v-for="university in universities" 
        :key="university.slug"
        :university="university"/>
    </b-row>
    <b-button>Loadmore</b-button>
    <BigNote/>
  </b-container>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
  layout: 'home',
  name: 'Home',
  head () {
    return {
      title: 'Home page',
      description: 'A short dummy description'
    }
  },
  components: {
    ImageNote: ()=> import('~/components/Home/ImageNote.vue'),
    BigNote: ()=> import('~/components/Home/BigNote.vue'),
  },
  methods: {
    ...mapActions([
      'initUniversities'
    ]),
  },
  computed: {
    ...mapGetters([
      'universities'
    ])
  },
  created () {
    this.initUniversities();
  },
  mounted() {

  }
}
</script>