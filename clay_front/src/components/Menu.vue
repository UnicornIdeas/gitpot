<template>
  <v-app id="gitpot" app>
    <v-app-bar flat color="white">
      <v-spacer />
      <v-app-bar-nav-icon disabled>
        <v-img
          src="https://assets.website-files.com/609ab8eae6dd417c085cc925/609b2ba76d637745d781160e_logo-ceramic.png"
          height="50px"
          width="50px"
        />
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-row>
        <v-col cols="3">
          <v-btn plain> Learn </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn plain> Build </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn plain> Explore </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn plain> Participate </v-btn>
        </v-col>
      </v-row>
      <v-spacer />
      <v-btn plain color="transparent" style="color: #ff5722 !important" class="mr-5">
        Join the community
      </v-btn>
      <v-btn rounded style="color: white" color="deep-orange" @click="login"> Get Started </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main app class="backgroundimage">
      <v-container fill-height>
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
                  outlined
                  rounded
                  label="Search models"
                  background-color="white"
                  flat
                  solo
                >
                  <template #append>
                    <v-btn icon @click="search()">
                      <v-icon large color="deep-orange"> mdi-magnify </v-icon>
                    </v-btn>
                  </template>
                  <template #prepend-inner>
                    <v-menu offset-y>
                      <template #activator="{ on, attrs }">
                        <v-btn rounded color="#ff5722" text dense small v-bind="attrs" v-on="on">
                          Filters
                          <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                        <v-divider vertical class="mr-3" />
                      </template>
                      <v-list>
                        <v-list-item v-for="item in items" :key="item">
                          <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
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
              <v-col cols="4" />
              <v-col cols="1">
                <v-btn block rounded style="color: white" color="deep-orange"> Popular </v-btn>
              </v-col>
              <!-- <v-col cols="1" /> -->
              <v-col cols="1">
                <v-btn block rounded outlined style="color: #ff5722" color="deep-orange">
                  Recent
                </v-btn>
              </v-col>
              <v-col cols="4" />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="js">
// import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";


export default {
  name: 'Gitpot',
  data() {
    return {
      items: ['one', 'two', 'three'],
    };
  },
  methods:{
    login(){
      const provider = new GithubAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log(result);
      console.log(credential);
      console.log(result.user);
      // const token = credential.accessToken;

      // // The signed-in user info.
      // const user = result.user;
      // // ...
    }).catch((error) => {
      console.log(error)
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
      },
    },
};
</script>

<style scoped>
.backgroundimage {
  background-image: url("../assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
