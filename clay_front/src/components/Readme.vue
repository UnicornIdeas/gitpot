<template>
  <span v-html="info">
    <!-- {{ info }} -->
  </span>
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
        this.info = md.render(response.data);
      });
  }
});
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
