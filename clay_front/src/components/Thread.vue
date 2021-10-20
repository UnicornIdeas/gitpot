<template>
  <v-container
    fluid
    fill-height
    align-start
  >
    <v-row>
      <v-col cols=12 justify="start" align="start" style="background-color: pink">
        <v-col cols=12 style="font-weight: bold">
          {{ testData.title }}
        </v-col>
        <v-col cols=12>
          {{ testData.author }} created {{ testData.date }}
        </v-col>
        <v-col cols=12>
          {{ testData.thread }}
        </v-col>
        <v-col cols=12 v-if="testData.commentsNumber === 1">
          {{ testData.commentsNumber }} Comment
        </v-col>
        <v-col cols=12 v-else-if="testData.commentsNumber !== 1">
          {{ testData.commentsNumber }} Comments
        </v-col>
      </v-col>
      <v-col cols=12 style="background-color: cyan" align="start" justify="start">
        <v-col cols=12 v-for="comment in testData.comments" :key="comment">
          {{ comment.author }}
          {{ comment.date }}
          {{ comment.comment}}
        </v-col>
      </v-col>
      <v-col cols=12 style="background-color: teal">
        {WRITE COMMNET TEXT INPUT}
      </v-col>
      <v-col cols=2 offset=9 justify="end" align="end">
        <v-btn>COMMENT</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Thread',
  props: ['topicId'],
  data() {
    return {
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
  }
};
</script>
