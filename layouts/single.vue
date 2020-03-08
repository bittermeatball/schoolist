<template>
  <b-container fluid class="p-0 page-layout">
    <component v-for="section in layout" :is="section" :key="section"></component>
  </b-container>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/common/Navbar.vue'),
    Footer: () => import('~/common/Footer.vue'),
  },
  data () {
    return {
      // Why this? Well, you can store this array in database or somewhere => dynamic layout!
      layout: [
        'Navbar',
        'nuxt', // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
                // <nuxt/> will be the view for components in ~/pages
        'Footer',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-layout {
  background: url(~assets/img/paper.svg);
  background-size: cover;
}
</style>