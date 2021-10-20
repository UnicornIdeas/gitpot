<template>
  <v-card
    color="#e9edf0"
    elevation="0"
  >
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="60"
            >
              <v-img :src="getPhoto(result.githubuser.raw)" />
            </v-list-item-avatar>
            <v-list-item-content class="text-left align-self-start">
              <v-list-item-title
                class="text-h6 mb-1"
                @click="goToModel(result.name.raw)"
              >
                {{ result.name.raw }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ result.version.raw }} - Published by
                <a>{{ publisherName }}</a> on
                <i>{{ fDate(result.date.raw) }}</i>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ result.description.raw }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col cols="6">
          <v-row class="justify-end align-top">
            <v-col md="auto">
              <v-row no-gutters>
                <v-col>
                  <b> {{ abbr(result.downloads.raw) }}</b>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col> Downloads </v-col>
              </v-row>
            </v-col>
            <v-col md="auto">
              <v-row no-gutters>
                <v-col>
                  <b> {{ abbr(result.likes.raw) }}</b>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col> Likes </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-col cols="8">
        <v-row>
          <v-btn
            v-for="tag in result.tags.raw"
            :key="tag"
            x-small
            style="color: black"
            color="#aed0ff"
            class="mx-1"
            depressed
          >
            {{ tag }}
          </v-btn>
        </v-row>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import { formatDate, getUserPhoto, abbreviateNumber } from '@/utils/utils';

export default {
  name: 'Result',
  props: {
    result: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.result);
  },
  computed: {
    publisherName() {
      return JSON.parse(this.result.publisher.raw).username;
    },
  },
  methods: {
    goToModel(packet) {
      this.$router.push(`/list/${packet}`);
    },
    fDate(d) {
      return formatDate(d);
    },
    getPhoto(uname) {
      return getUserPhoto(uname);
    },
    abbr(v) {
      return abbreviateNumber(v);
    },
  },
};
</script>
