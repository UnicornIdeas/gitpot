<template>
  <v-app-bar app align-center justify-center color="#f3f5f7">
    <v-app-bar-nav-icon disabled>
      <v-img :src="require('@/assets/icon.png')" height="50px" width="50px" />
    </v-app-bar-nav-icon>
    <v-col cols="6" align-self="center" offset="3">
      <v-text-field
        single-line
        outlined
        rounded
        class="mt-7"
        color="deep-orange"
        label="Search"
        dense
        clearable
      >
        <template v-slot:append>
          <v-btn icon small>
            <v-icon color="deep-orange" dense size="30px" @click="search()">
              mdi-magnify
            </v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="2" offset="1">
      <v-btn rounded outlined large style="color: #ff5722">
        <svg-icon type="mdi" :path="mdiGithubPath" :size="30" /> Sign In
      </v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  components: {
    SvgIcon,
  },
};
</script>
