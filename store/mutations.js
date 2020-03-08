export default { // Communicate with Devtools
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  INIT_UNIVERSITIES (state, universities) {
    state.universities = universities.data;
  },
  SET_UNIVERSITY (state, university) {
    state.university = university;
  },
  SET_SLUG (state, slug) {
    state.slug = slug
  }
}