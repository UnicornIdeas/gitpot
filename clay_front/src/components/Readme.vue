<template>
  <div>
    <vue-markdown :source="info" />
  </div>
</template>

<script lang="js">
import VueMarkdown from '@adapttive/vue-markdown';
import axios from 'axios';

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
        this.info = response.data;
      });
  },
  components: {
    VueMarkdown
  }
});
</script>
