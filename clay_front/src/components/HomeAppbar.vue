<template>
  <v-app-bar
    app
    flat
    color="white"
  >
    <v-row
      align="center"
      justify="space-around"
    >
      <v-col cols="1">
        <v-app-bar-nav-icon disabled>
          <v-img
            src="https://assets.website-files.com/609ab8eae6dd417c085cc925/609b2ba76d637745d781160e_logo-ceramic.png"
            height="50px"
            width="50px"
          />
        </v-app-bar-nav-icon>
      </v-col>
      <v-col cols="6">
        <v-btn plain>
          Learn
        </v-btn>
        <v-btn plain>
          Build
        </v-btn>
        <v-btn plain>
          Explore
        </v-btn>
        <v-btn plain>
          Participate
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          plain
          color="transparent"
          style="color: #ff5722 !important"
          class="mr-5"
        >
          Join the community
        </v-btn>
        <v-btn
          rounded
          style="color: white"
          color="deep-orange"
          @click="githubLogin"
        >
          Get Started
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { login } from '@/utils/firebase.js';

export default {
  name: 'HomeAppbar',
  data() {
    return {

    };
  },
  methods: {
    githubLogin() {
      login();
    }
  }
};
</script>
