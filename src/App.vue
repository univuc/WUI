<template>
  <v-app :dark="isDark">

    <v-navigation-drawer v-model="drawer" app clipped>
      <DrawerList/>
      <v-container fluid>
        <v-switch v-model="this.$vuetify.theme.dark" v-on:change="setDark" label="dark mode"></v-switch>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Univ UC</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import DrawerList from './components/home/DrawerList';

export default {
  name: 'App',
  components: {DrawerList},

  data: () => ({
    drawer: null,
    isDark: true,
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },

  methods: {
    setDark(dark) {
      this.$vuetify.theme.dark = dark;
    }
  },
};
</script>
