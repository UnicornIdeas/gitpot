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
              <v-img :src="getPhoto(result.githubuser)" />
            </v-list-item-avatar>
            <v-list-item-content class="text-left align-self-start">
              <v-list-item-title class="text-h6 mb-1">
                {{ result.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                Published by <a>{{ result.publisher.username }}</a> on
                <i>{{ fDate(result.date) }}</i>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ result.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col cols="6">
          <v-row class="justify-end align-top">
            <v-col md="auto">
              <v-row no-gutters>
                <v-col>
                  <b> {{ abbr(result.downloads) }}</b>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col> Downloads </v-col>
              </v-row>
            </v-col>
            <v-col md="auto">
              <v-row no-gutters>
                <v-col>
                  <b> {{ abbr(result.likes) }}</b>
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
            v-for="tag in result.tags"
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
  methods: {
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
