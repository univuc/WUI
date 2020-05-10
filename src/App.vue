<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <DrawerList/>
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
  }),

  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
