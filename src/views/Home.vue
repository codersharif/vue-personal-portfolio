<template>
  <v-parallax dark class="parallax-height">
    <v-row align="center" justify="center">
      <v-col class="text-center box-color" cols="12">
        <kinesis-container :active="true" :duration="1000">
          Here, you can put
          <kinesis-element :strength="10"> whatever </kinesis-element>
          <kinesis-element :strength="20"> content! </kinesis-element>
        </kinesis-container>
        <h1 class="text-h4 font-weight-thin mb-4 animate__hinge">Vuetify</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
<style>
.parallax-height {
  height: 100vh;
  min-height: 100vh;
  background: #f9f9ff !important;
}
.box-color {
  color: #666;
}
</style>