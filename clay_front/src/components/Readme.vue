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
  //   props: {
  //     src: {
  //       type: String,
  //     },
  //   },
  data() {
    return {
      info: null
    };
  },
  mounted() {
    console.log(this.src);
    const url = this.src;
    axios
      .get(url)
      .then((response) => {
        this.info = response;
      });
  },
  created() {
    console.log(this.src);
  },
  components: {
    VueMarkdown
  }
});
</script>
