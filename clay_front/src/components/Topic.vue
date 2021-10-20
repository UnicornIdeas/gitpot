<template>
  <v-card color="#e9edf0" elevation="0">
    <v-card-text>
      <v-row align="center">
        <v-col cols="1">
          <v-btn
            v-if="topic.type === 'discussion'"
            :height="50"
            :width="50"
            rounded
            block
            style="background-color: #c5cae9; color: #304ffe"
          >
            <v-icon x-large rounded color="#304FFE"> mdi-forum </v-icon>
          </v-btn>
          <v-btn
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
          </v-btn>
        </v-col>
        <v-col cols="8" align="start">
          <v-col cols="12">
            {{ topic.description }}
          </v-col>
          <v-col cols="12">
            {{ topic.date }}
          </v-col>
        </v-col>
        <v-col cols="3">
          <v-btn outlined rounded>
            <v-icon>mdi-arrow-up</v-icon>{{ topic.likes }}
          </v-btn>
          <v-btn outlined rounded>
            <v-icon outlined color="gray"> mdi-comment </v-icon
            >{{ topic.comments }}
          </v-btn>
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
};
</script>

<style scoped>
</style>
