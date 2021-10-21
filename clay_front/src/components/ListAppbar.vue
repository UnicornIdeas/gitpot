<template>
  <v-app-bar app align-center justify-center color="#f3f5f7">
    <v-row align="center" justify="space-around">
      <v-col cols="1">
        <v-app-bar-nav-icon @click="gohome">
          <v-img
            src="https://assets.website-files.com/609ab8eae6dd417c085cc925/609b2ba76d637745d781160e_logo-ceramic.png"
            height="50px"
            width="50px"
          />
        </v-app-bar-nav-icon>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="searchValue"
          single-line
          outlined
          rounded
          class="mt-7"
          color="deep-orange"
          label="Search"
          dense
          clearable
          @keyup.enter="search()"
        >
          <template v-slot:append>
            <v-btn icon small @click="search">
              <v-icon color="deep-orange" dense size="30px" @click="search()">
                mdi-magnify
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col md="auto">
        <v-btn
          v-if="user === null"
          rounded
          outlined
          style="color: #ff5722"
          @click="signin"
        >
          <v-icon left> mdi-github </v-icon>
          Sign In
        </v-btn>
        <v-list-item v-else>
          <v-list-item-avatar>
            <img :src="user.photoURL" alt="usericon" />
          </v-list-item-avatar>
          <v-list-item-content style="text-align: left">
            <v-list-item-title>
              {{ user.reloadUserInfo.screenName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { login, getUser } from '@/utils/firebase';

export default {
  data() {
    return {
      userName: '',
      searchValue: '',
    };
  },
  methods: {
    ...mapMutations(['updateKeyword']),
    search() {
      this.updateKeyword(this.searchValue);
    },
    signin() {
      const user = getUser();
      if (user === null) {
        login();
      }
    },
    gohome() {
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>
