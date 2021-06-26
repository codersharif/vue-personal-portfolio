<template>
  <!-- App.vue -->
  <v-app>
    <!-- <v-navigation-drawer app> -->
    <Navigation />
    <!-- </v-navigation-drawer> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="main-padding-0 ">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.main-padding-0 {
  padding: 0!important;
}
</style>
