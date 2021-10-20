<template>
  <v-container
    fluid
    fill-height
    align-start
  >
    <v-row style="background-color: #f3f5f7">
      <v-col cols=12 justify="start" align="start">
        <v-col cols=12 style="font-weight: bold">
          {{ testData.title }}
        </v-col>
        <v-col cols=12>
          <v-list-item three-line>
            <v-list-item-avatar tile>
              <v-img :src="getPhoto(testData.author)" />
            </v-list-item-avatar>
            <v-list-item-content class="text-left align-self-start">
              <v-list-item-subtitle>
                <a>{{ testData.author }}</a> started topic
                <i>{{ fDate(testData.date) }}</i>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols=12>
          {{ testData.thread }}
        </v-col>
        <v-col cols=12 v-if="testData.commentsNumber === 1" style="font-weight: bold; color: blue">
          {{ testData.commentsNumber }} Comment
        </v-col>
        <v-col cols=12 v-else-if="testData.commentsNumber !== 1">
          {{ testData.commentsNumber }} Comments
        </v-col>
      </v-col>
      <v-col cols=12 align="start" justify="start">
        <v-col cols=12 v-for="comment in testData.comments" :key="comment">
          {{ comment.author }}
          {{ comment.date }}
          {{ comment.comment}}
        </v-col>
      </v-col>
      <v-col cols=12>
        <v-text-field
          v-model="inputComment"
          label="Write a comment"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=2 offset=9 justify="end" align="end">
        <v-btn>COMMENT</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { formatDate, getUserPhoto, abbreviateNumber } from '@/utils/utils';

export default {
  name: 'Thread',
  props: ['topicId'],
  data() {
    return {
      inputComment: '',
      newComment: { author: '', comment: '', date: '' },
      testData: {
        title: 'NiFTY News - a schema.org + NFT concept for news delivery and translation mgmt in ceramic #25',
        author: 'alibama',
        date: '10 days ago',
        thread: 'Property Description Value Max Size Required Example ceramic stream for nft reference to another stream build in???',
        commentsNumber: 1,
        comments: [
          {
            author: 'ciuflingaru',
            date: '9 days ago',
            comment: 'SUGI PULA FRAERE CU COMENTARIUL TAU DE CACAT'
          },
          {
            author: 'shefulabani',
            date: '8 days ago',
            comment: 'ai dreptate coae respekt:)'
          }
        ]
      }
    };
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
  }
};
</script>
