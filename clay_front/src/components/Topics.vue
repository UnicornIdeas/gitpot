<template>
  <div>
    <v-text-field v-model="title" label="New proposal title" />
    <v-textarea
      v-model="message"
      label="Proposal message"
      height="200"
      filled
      full-width
      hide-details
      no-resize
      outlined
      rounded
      color="grey"
      background-color="#e9edf0"
    />
    <v-btn class="mt-2 mb-2" color="green" @click="createproposal">
      Add new proposal
    </v-btn>
    <v-data-table
      fill-height
      hide-default-header
      :items="topicData"
      :items-per-page="15"
      no-data-text="No results found"
      style="box-shadow: unset !important; background-color: #f3f5f7"
      :footer-props="{
        'disable-items-per-page': true,
      }"
    >
      <template id="result" v-slot:item="{ item }">
        <tr>
          <topic :topic="item" />
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Topic from './Topic';
import { newproposal } from '@/utils/firestore';

export default {
  name: 'Topics',
  components: {
    Topic,
  },
  data() {
    return {
      message: '',
      title: '',
      topicData: [],
    };
  },
  computed: {
    ...mapGetters(['getModel']),
  },
  mounted() {
    this.topicData.splice(0);
    const model = this.getModel(this.$route.params.packet);
    if (model.proposals === undefined || model.proposals.raw.length === 0) {
      return;
    }

    for (let i = 0; i < model.proposals.raw.length; i += 1) {
      const p = JSON.parse(model.proposals.raw[i]);
      this.topicData.push(p);
    }
  },
  methods: {
    createproposal() {
      if (this.message.length === 0 || this.title.length === 0) {
        return;
      }
      const model = this.$route.params.packet;
      newproposal(model, this.title, this.message);
    },
  },
};
</script>
