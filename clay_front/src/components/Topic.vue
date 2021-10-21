<template>
  <v-card color="#e9edf0" elevation="0">
    <v-card-text>
      <v-row align="center">
        <v-col cols="1">
          <v-btn
            :height="50"
            :width="50"
            rounded
            block
            style="background-color: #c5cae9; color: #304ffe"
          >
            <v-icon x-large rounded color="#304FFE"> mdi-forum </v-icon>
          </v-btn>
          <!-- <v-btn
            v-if="topic.type === 'thread'"
            :height="50"
            :width="50"
            rounded
            block
            style="background-color: #c5cae9; color: #304ffe"
          >
            <v-icon x-large rounded color="yellow">
              mdi-lightbulb-outline
            </v-icon>
          </v-btn> -->
        </v-col>
        <v-col cols="8" align="start">
          <v-col
            style="cursor: pointer; font-weight: bold"
            cols="12"
            @click="goToTopic"
          >
            {{ topic.title }}
          </v-col>
          <v-col cols="12"> Posted by {{ topic.author }} </v-col>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col cols="12">
              <v-btn outlined rounded>
                <v-icon>mdi-arrow-up</v-icon>{{ topic.likes }}
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn outlined rounded>
                <v-icon outlined color="gray"> mdi-comment </v-icon
                >{{ topic.comments }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Topic',
  props: ['topic'],
  created() {},
  methods: {
    goToTopic() {
      this.$router.push(`/list/${this.$route.params.packet}/${this.topic.id}`);
    },
  },
};
</script>

<style scoped>
</style>
