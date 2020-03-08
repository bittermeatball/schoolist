<template>
    <div>
        Hello
    </div>
</template>

<script>
export default {
    mounted () {
        // Change the url
        document.title = this.$store.state.university.name; // Make sure title changes (Not recommended for SEO)
        window.history.pushState({}, this.$store.state.university.name, 'scholarship/' + this.$store.state.university.slug); // Title changes (But not work in a few browsers)
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