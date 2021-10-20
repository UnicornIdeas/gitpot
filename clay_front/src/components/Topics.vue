<template>
    <v-data-table
          :loading="loading"
          fill-height
          hide-default-header
          :items="topicData"
          :server-items-length="elNumber"
          :items-per-page="15"
          no-data-text="No results found"
          class="elevation-1"
          style="box-shadow: unset !important; background-color: #f3f5f7"
          :footer-props="{
            'disable-items-per-page': true,
          }"
        >
          <template id="result" v-slot:item="{ item }">
            <tr>
              <topic :result="item" />
            </tr>
          </template>
        </v-data-table>
</template>

<script>
import Topic from './Topic';

export default {
    name: 'Topics',
    components: {
      Topic,
    },
    data() {
      return {
        loading: false,
        elNumber: 27,
        topicData: [
          {
            id: 1,
            likes: 17,
            comments: 21,
            description: 'NiFTY News - a schema.org + NFT concept for news delivery and translation mgmt in ceramic #25',
            date: '10 days ago'
          },
          {
            id: 2,
            likes: 3,
            comments: 7,
            description: 'NiFTY News - a schema.org + NFT concept for news delivery and translation mgmt in ceramic #25',
            date: '11 days ago'
          }
        ]
      }
    }
}
</script>