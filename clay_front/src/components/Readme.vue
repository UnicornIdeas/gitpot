<template>
  <div>
    <vue-markdown :source="info" />
  </div>
</template>

<script lang="js">
import VueMarkdown from 'vue-markdown-render';
import axios from 'axios';

export default ({
  name: 'Readme',
  props: ['src'],
  data() {
    return {
      info: ''
    };
  },
  beforeCreated() {
    axios
      .get(this.src)
      .then((response) => {
        console.log(response.data);
        this.info = response.data;
      });
  },
  components: {
    VueMarkdown
  }
});
</script>
