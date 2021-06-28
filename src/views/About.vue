<template>
  <v-parallax dark class="parallax-height">
    <v-row align="center" justify="center">
      <v-col class="text-center box-color" cols="12">
        <v-card class="sk-card">
          <v-avatar size="150">
            <v-img
              class="animate__hinge"
              height="250"
              :src="require('@/assets/' + GetUser.image)"
            ></v-img>
          </v-avatar>

          <v-card-title class="sk-card-title">
            <p class="sk-title subheading animate__hinge">{{ GetUser.name }}</p>
          </v-card-title>
          <v-card-text class="animate__hinge">{{ GetUser.title }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["GetUser"]),
  },
  methods: {},
};
</script>