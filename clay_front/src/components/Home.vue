<template>
  <v-container fill-height fluid class="backgroundimage">
    <v-row justify="center" align="center" flat no-gutters>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12">
            <div class="title">Clay bricks</div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <div class="subtitle">The building blocks for the new web</div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              v-model="searchValue"
              outlined
              rounded
              label="Search models"
              background-color="white"
              flat
              solo
              @keyup.enter="search()"
            >
              <template #append>
                <v-btn icon @click="search()">
                  <v-icon large color="deep-orange"> mdi-magnify </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row style="margin-top: -40px">
          <v-col cols="12">
            <div style="color: white">Top searches and other shit</div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="1">
            <v-btn block rounded style="color: white" color="deep-orange">
              Popular
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn
              block
              rounded
              outlined
              style="border: 2px solid #ff5722 !important"
              color="white"
            >
              Recent
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import { mapActions, mapMutations } from 'vuex';
import { getComments } from '@/utils/firestore.js';

export default {
  name: 'Home',
  data() {
    return {
      searchValue: '',
    };
  },
  created() {
    getComments('4GmpXF9uGoJu8lKuNJPO').then((res) => {
      console.log(res);
    });
  },
  methods: {
    ...mapActions(['searchFs']),
    ...mapMutations(['updateKeyword']),
    search() {
      this.updateKeyword(this.searchValue);
      this.searchFs();
      this.$router.push('/list');
    }
  },
};
</script>

<style scoped>
.backgroundimage {
  background-image: url('../assets/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.title {
  font-size: 4rem !important;
  color: white;
  font-weight: bold !important;
}

.subtitle {
  font-size: 1.5rem !important;
  color: white;
}

.searchbar {
  background-color: white;
}
</style>
