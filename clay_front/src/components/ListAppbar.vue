<template>
  <v-app-bar
    app
    align-center
    justify-center
    color="#f3f5f7"
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
            <v-btn
              icon
              small
            >
              <v-icon
                color="deep-orange"
                dense
                size="30px"
                @click="search()"
              >
                mdi-magnify
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col md="auto">
        <v-btn
          v-if="isSignedIn === false"
          rounded
          outlined
          style="color: #ff5722"
          @click="signin"
        >
          <v-icon left>
            mdi-github
          </v-icon>
          Sign In
        </v-btn>
        <div v-else>
          <v-avatar size="36px">
            <img :src="userImage" alt="usericon" />
          </v-avatar>
          {{ userName }}
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login, getUser } from '@/utils/firebase';

export default {
  data() {
    return {
      isSignedIn: false,
      userImage: '',
      userName: '',
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isSignedIn = true;
        this.userImage = user.photoURL;
        this.userName = user.reloadUserInfo.screenName;
      } else {
        this.isSignedIn = false;
        this.userImage = '';
        this.userName = '';
      }
    });
  },
  methods: {
    signin() {
      const user = getUser();
      if (user === null) {
        login();
      } else {
        // console.log(user);
      }
    },
  },
};
</script>
