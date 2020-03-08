<template>
  <b-navbar toggleable="lg" type="dark" class="custom-nav-bg">
    <nuxt-link to="/" class="navbar-brand text-dark" style="font-weight: bold">{{$t('home.navbar')}}</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" style="border-radius: 2rem" 
        variant="danger" @click="$i18n.locale = 'vi'" 
        v-if="$i18n.locale == 'en'">
          {{$t('home.lang')}}
        </b-button>
        <b-button size="sm" style="border-radius: 2rem" 
        variant="danger" @click="$i18n.locale = 'en'" 
        v-if="$i18n.locale == 'vi'">
          {{$t('home.lang')}}
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>