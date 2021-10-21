<template>
  <div id="app">
    <v-app id="gitpot" app>
      <router-view name="appbar_view" />

      <v-main app>
        <router-view name="main_view" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { mapMutations } from 'vuex';

export default {
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setUser(user);
        // this.userImage = user.photoURL;
        // this.userName = user.reloadUserInfo.screenName;
      } else {
        this.setUser(null);
        // this.userImage = '';
        // this.userName = '';
      }
    });
  },
  methods: {
    ...mapMutations(['setUser']),
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
