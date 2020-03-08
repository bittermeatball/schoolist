export default {
    async initUniversities ({ commit }) {
        // const { universities }  = await import('~/data/fake/universities.js');
        const { data }  = await this.$axios.get('http://172.16.1.53:3000/public/universities?page=1&per=16')
        await commit('INIT_UNIVERSITIES', data)
    },
    async loadUniversity ({ state, commit }) {
        // Firstly, pass the overview university to state
        // Next, call this action, call the API from the old university's slug
        // Finally get the new university data with more detail and mutate it to state
        const { data }  = await this.$axios.get(`http://172.16.1.53:3000/public/universities/${state.slug}`)
        await commit('SET_UNIVERSITY', data.data)
    }
}