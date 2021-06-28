<template>
  <kinesis-container>
    <v-parallax dark class="parallax-height">
      <kinesis-element :strength="50">
        <span class="sk-icon-title">
          <v-icon class="sk-icon animate__hinge"> mdi-language-html5 </v-icon>
        </span>
      </kinesis-element>
      <v-row align="center" justify="center">
        <kinesis-element :strength="50">
          <span class="sk-icon-title">
            <v-icon class="sk-icon animate__hinge"> mdi-vuejs </v-icon>
          </span>
        </kinesis-element>
        <v-col class="text-center box-color" cols="6">
          <v-card class="sk-card">
            <v-avatar size="150">
              <v-img
                class="animate__hinge"
                height="250"
                :src="require('@/assets/' + GetUser.image)"
              ></v-img>
            </v-avatar>
            <kinesis-element :strength="30">
              <v-card-title class="sk-card-title">
                <p class="sk-title subheading animate__hinge">{{GetUser.name}}</p>
              </v-card-title>
            </kinesis-element>
            <kinesis-element :strength="50">
              <v-card-text class="animate__hinge"
                >{{GetUser.title}}</v-card-text
              >
              <v-card-actions class="sk-action animate__hinge">
                <v-btn
                  @click="linkedin"
                  class="sk-icon-btn"
                  color="blue darken-2"
                  text
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  @click="github"
                  class="sk-icon-btn"
                  color="blue darken-2"
                  text
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn
                  @click="instagram"
                  class="sk-icon-btn"
                  color="blue darken-2"
                  text
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  @click="facebook"
                  class="sk-icon-btn"
                  color="blue darken-2"
                  text
                >
                  <v-icon>mdi-facebook </v-icon>
                </v-btn>
              </v-card-actions>
            </kinesis-element>
          </v-card>
        </v-col>
      </v-row>
      <kinesis-element :strength="50">
        <span class="sk-icon-title">
          <v-icon class="sk-icon animate__hinge"> mdi-language-css3 </v-icon>
        </span>
      </kinesis-element>
    </v-parallax>
  </kinesis-container>
</template>

<script>
import { mapGetters } from "vuex";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data: () => ({}),
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["GetUser"]),
  },
  methods: {
    linkedin() {
      window.open(
        "https://www.linkedin.com/in/md-shariful-islam-khan-62432515a/",
        "_blank"
      );
    },
    github() {
      window.open("https://github.com/codersharif", "_blank");
    },
    instagram() {
      window.open("https://www.facebook.com/sharif.s24", "_blank");
    },
    facebook() {
      window.open("https://www.facebook.com/sharif.s24", "_blank");
    },
  },
};
</script>