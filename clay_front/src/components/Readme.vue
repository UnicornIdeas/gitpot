<template>
  <vue-markdown :source="info" />
</template>

<script lang="js">
import VueMarkdown from '@adapttive/vue-markdown';
import axios from 'axios';

export default ({
  name: 'Readme',
  components: {
    VueMarkdown
  },
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
        this.info = response.data;
      });
  }
});
</script>
