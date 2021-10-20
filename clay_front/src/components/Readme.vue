<template>
  <span class="a" v-html="info" />
</template>

<script lang="js">
import axios from 'axios';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
});

export default ({
  name: 'Readme',
  props: ['src'],
  data() {
    return {
      info: ''
    };
  },
  created() {
    axios
      .get(this.src)
      .then((response) => {
<<<<<<< HEAD
        this.info = md.render(response.data);
=======
        if (response.data !== null && response.status === 200) {
          this.info = md.render(response.data);
        }
>>>>>>> 1d9f1f0dbf4a665128a9424d7c45cfa5b72d396e
      });
  }
});
</script>

<style scoped>
.a >>> table,
.a >>> th,
.a >>> td,
.a >>> tr {
  border: 1px solid black !important;
  border-collapse: collapse;
}

.a >>> td {
  padding-right: 2px;
  padding-left: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
