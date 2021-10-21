<template>
  <v-container fluid fill-height align-start>
    <v-row style="background-color: #f3f5f7">
      <v-col cols="12" justify="start" align="start">
        <v-col cols="12" style="font-weight: bold; font-size: 25px">
          {{ testData.title }}
        </v-col>
        <v-col cols="12">
          <v-list-item three-line>
            <v-list-item-avatar tile>
              <v-img :src="getPhoto(testData.author)" />
            </v-list-item-avatar>
            <v-list-item-content class="text-left align-self-start">
              <v-list-item-subtitle>
                <a>{{ testData.author }}</a> started topic
                <i>{{ ago(testData.date) }}</i>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12">
          {{ testData.thread }}
        </v-col>
        <v-col
          v-if="testData.commentsNumber === 1"
          cols="12"
          style="font-weight: bold; color: blue"
        >
          {{ testData.commentsNumber }}
          Comment
        </v-col>
        <v-col
          v-else-if="testData.commentsNumber !== 1"
          cols="12"
          style="font-weight: bold; color: blue"
        >
          {{ testData.commentsNumber }} Comments
        </v-col>
      </v-col>
      <v-col cols="12">
        <v-data-table
          fill-height
          hide-default-header
          hide-default-footer
          :items="testData.comments"
          style="width: 100%, box-shadow: unset !important; background-color: #f3f5f7"
        >
          <template v-slot:item="{ item }">
            <tr>
              <v-col cols="12">
                <comment :comment="item" />
              </v-col>
            </tr>
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="inputComment"
          label="Write a comment"
          height="300"
          filled
          full-width
          hide-details
          no-resize
          outlined
          rounded
          color="grey"
          background-color="#e9edf0"
        />
      </v-col>
      <v-col cols="2" offset="10">
        <v-btn rounded color="green" style="color: white"> POST COMMENT </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';
import { formatDate, getUserPhoto, abbreviateNumber } from '@/utils/utils';
import Comment from './Comment.vue';

export default {
  name: 'Thread',
  components: {
    Comment,
  },
  props: ['topicId'],
  data() {
    return {
      inputComment: '',
      newComment: { author: '', comment: '', date: '' },
      testData: {
        title:
          'NiFTY News - a schema.org + NFT concept for news delivery and translation mgmt in ceramic #25',
        author: 'alibama',
        date: '2021-08-18T13:53:59.390Z',
        thread:
          'Property Description Value Max Size Required Example ceramic stream for nft reference to another stream build in???',
        commentsNumber: 1,
        comments: [
          {
            author: 'a1',
            date: '2021-08-19T13:53:59.390Z',
            comment: 'dummy comment',
          },
          {
            author: 'a2',
            date: '2021-08-20T13:53:59.390Z',
            comment: 'dummy 2',
          },
        ],
      },
    };
  },
  methods: {
    pressedEnter() {
      console.log('yaya');
      this.inputComment += '\r\n';
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
    ago(d) {
      return moment(d).fromNow();
    },
  },
};
</script>

<style scoped>
.v-data-table tbody tr:hover {
  background-color: transparent !important;
}
</style>
