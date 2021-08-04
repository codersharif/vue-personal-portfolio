<template>
  <v-parallax dark class="parallax-height">
    <v-row>
      <v-col class="box-color" sm="12" md="12">
        <h2 class="sk-about">
          <v-img
            class="sk-a-img"
            width="30"
            src="../assets/dots-bg.svg"
          ></v-img>
          <span class="sk-a-title">About Me</span>
        </h2>
        <v-spacer class="sk-space"></v-spacer>
        <v-row>
          <v-col cols="12" md="3" sm="12">
            <div class="text-md-left text-center">
              <v-avatar size="130">
                <v-img
                  height="150"
                  :src="require('@/assets/' + GetUser.image)"
                ></v-img>
              </v-avatar>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="9">
            <v-timeline :reverse="false" dense>
              <v-timeline-item>
                <template v-slot:icon>
                  <v-avatar>
                    <img :src="require('@/assets/' + GetUser.image)" />
                  </v-avatar>
                </template>
                <v-card class="elevation-3">
                  <v-card-title class="text-h5"> Lorem ipsum </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
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