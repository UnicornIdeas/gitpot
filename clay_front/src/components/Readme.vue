<template>
  <div>
    <vue-markdown :source="info" />
  </div>
</template>

<script lang="js">
import axios from 'axios';
import VueMarkdown from '@adapttive/vue-markdown';

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
  mounted() {
    axios
      .get(this.src)
      .then((response) => {
        this.info = response.data;
      });
  }
});
</script>
