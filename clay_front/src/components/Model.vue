<template>
  <v-container fluid align-start fill-height style="background-color: #f3f5f7">
    <v-row
      style="
        margin-left: 10vw;
        margin-right: 10vw;
        margin-top: 10px;
        background-color: #f3f5f7;
      "
      justify="space-between"
    >
      <v-col cols="12">
        <v-card color="#e9edf0" elevation="0">
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="9">
                <v-list-item three-line>
                  <v-list-item-content class="text-left align-self-start">
                    <v-list-item-title class="text-h6 mb-1">
                      {{ testData.name.raw }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ testData.version.raw }}
                      &#9679; Published by
                      {{ testData.publisher.raw.username }}
                      &#9679;
                      {{ frmt(testData.date.raw) }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ testData.description.raw }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="3">
                <v-row class="justify-end align-top">
                  <v-col md="auto">
                    <v-row no-gutters>
                      <v-col>
                        <v-icon large> mdi-thumb-up </v-icon>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col>
                        <b> {{ abbr(testData.likes.raw) }}</b>
                      </v-col>
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
                  v-for="tag in testData.tags.raw"
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
      </v-col>

      <v-col cols="8">
        <v-tabs v-model="currentTab" grow centered style="color: white">
          <v-tabs-slider color="transparent" />

          <v-tab href="#readme" :style="style0">
            <v-icon color="#F4511E"> mdi-book-open-blank-variant </v-icon>
            Readme
          </v-tab>

          <v-tab href="#proposals" :style="style1">
            <v-icon color="#304FFE"> mdi-forum </v-icon>
            Proposals
          </v-tab>

          <!-- <v-tab href="#example" :style="style2">
            <v-icon color="#2E7D32"> mdi-widgets </v-icon>
            Example Apps
          </v-tab> -->
        </v-tabs>

        <v-tabs-items v-model="currentTab" style="background-color: #f3f5f7">
          <v-tab-item :value="currentTab">
            <readme v-if="currentTab === 'readme'" :src="readmeURL" />
            <topics
              v-if="currentTab === 'proposals'"
              :src="testData.proposals"
            />
            <thread v-if="currentTab === 'example'" />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="3">
        <v-row no-gutters>
          <v-col cols="12">
            <v-row no-gutters>
              <v-col align="start"> Install </v-col>
              <v-col align="start" cols="12">
                <v-text-field
                  style="font-style: italic"
                  :value="`> npm i @datamodels/${testData.name.raw}`"
                  full-width
                  flat
                  outlined
                  dense
                  readonly
                  hint="Text copied to clipboard"
                  @click="copyText(`npm i @datamodels/${testData.name.raw}`)"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row no-gutters>
              <v-col align="start"> Repository </v-col>
              <v-col align="start" cols="12">
                <v-text-field
                  style="font-weight: bold"
                  :value="getlink('repository')"
                  full-width
                  flat
                  dense
                  readonly
                  prepend-inner-icon="mdi-home"
                  hint="Text copied to clipboard"
                  @click="copyText(getlink('repository'))"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row no-gutters>
              <v-col align="start"> Homepage </v-col>
              <v-col align="start" cols="12">
                <v-text-field
                  style="font-weight: bold"
                  :value="getlink('homepage')"
                  full-width
                  flat
                  dense
                  readonly
                  prepend-inner-icon="mdi-link-variant"
                  hint="Text copied to clipboard"
                  @click="copyText(getlink('homepage'))"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6">
            <v-row no-gutters>
              <v-col align="start">
                <v-icon>mdi-download</v-icon>Downloads
              </v-col>
              <v-col align="start" cols="12" style="font-weight: bold">
                {{ testData.downloads.raw }}
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6">
            <v-row no-gutters>
              <v-col align="start"> Version </v-col>
              <v-col align="start" cols="12" style="font-weight: bold">
                {{ testData.version.raw }}
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-divider />
          </v-col>

          <v-col cols="12">
            <v-row no-gutters>
              <v-col align="start"> Last publish </v-col>
              <v-col align="start" cols="12" style="font-weight: bold">
                {{ frmt(testData.date.raw) }}
                <v-divider />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <v-row no-gutters>
              <v-col cols="12" align="start"> Author </v-col>
              <v-col cols="12" align="start" style="font-weight: bold">
                {{ testData.author.raw }}
                <v-divider />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Readme from './Readme.vue';
import { abbreviateNumber, formatDate } from '@/utils/utils';
import { likedbyme } from '@/utils/firestore';
import Topics from './Topics.vue';
import Thread from './Thread.vue';

export default {
  components: {
    readme: Readme,
    topics: Topics,
    thread: Thread,
  },
  data() {
    return {
      currentTab: null,
      testData: {},
    };
  },

  computed: {
    ...mapGetters(['getModel']),
    readmeURL() {
      return `https://raw.githubusercontent.com/ceramicstudio/datamodels/main/packages/${this.testData.name.raw}/README.md`;
    },
    style0() {
      if (this.currentTab === 'readme') {
        return {
          'border-top': '4px solid orange',
          color: '#f4511e',
          'background-color': '#ffd180',
        };
      }

      return {
        'border-top': '4px solid orange',
        color: '#f4511e',
        'background-color': '#f3f5f7',
      };
    },
    style1() {
      if (this.currentTab === 'proposals') {
        return {
          'background-color': '#c5cae9',
          color: '#304ffe',
          'border-top': '4px solid blue',
        };
      }

      return {
        'border-top': '4px solid blue',
        color: '#304ffe',
        'background-color': '#f3f5f7',
      };
    },
    style2() {
      if (this.currentTab === 'example') {
        return {
          'background-color': '#c8e6c9',
          'border-top': '4px solid green',
        };
      }

      return {
        'border-top': '4px solid green',
        color: 'green',
        'background-color': '#f3f5f7',
      };
    },
  },
  mounted() {
    this.testData = this.getModel(this.$route.params.packet);

    if (this.user !== null) {
      const modelid = this.$route.params.packet;

      likedbyme(modelid, this.user.uid).then((resp) => {
        this.ilikedmodel = resp;
      });
    }
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text);
    },
    abbr(v) {
      return abbreviateNumber(v);
    },
    frmt(v) {
      return formatDate(v);
    },
    getlink(link) {
      return JSON.parse(this.testData.links.raw)[link];
    },
  },
};
</script>
