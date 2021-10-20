<template>
  <v-container fluid>
    <v-row
      style="margin-left: 10vw; margin-right: 10vw; margin-top: 10px"
      no-gutters
    >
      <v-col cols="10" style="background-color: #f3f5f7" align="start">
        <v-col cols="12" style="font-weight: bold">
          {{ testData.name }}
        </v-col>
        <v-col cols="12">
          {{ testData.version }}
          &#9679; Published by
          {{ testData.publisher }}
          &#9679;
          {{ testData.date }}
        </v-col>
        <v-row>
          <v-col cols="12">
            <v-btn
              v-for="tag in testData.tags"
              :key="tag"
              small
              style="color: black"
              color="#aed0ff"
              class="mx-1"
              depressed
            >
              {{ tag }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2" style="background-color: #f3f5f7">
        <v-row align="center">
          <v-col cols="6" align="end">
            <v-icon large> mdi-thumb-up </v-icon>
          </v-col>
          <v-col cols="6" align="start">
            <v-row>{{ testData.likes }}</v-row>
            <v-row>Likes</v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="margin-left: 10vw; margin-right: 10vw; margin-top: 10px">
      <v-col cols="8">
        <v-tabs v-model="currentTab" grow centered style="color: white">
          <v-tabs-slider color="transparent" />

          <v-tab
            href="#readme"
            style="background-color: #ffd180; color: #f4511e"
          >
            <v-icon color="#F4511E"> mdi-book-open-blank-variant </v-icon>
            Readme
          </v-tab>

          <v-tab
            href="#proposals"
            style="background-color: #c5cae9; color: #304ffe"
          >
            <v-icon color="#304FFE"> mdi-forum </v-icon>
            Proposals
          </v-tab>

          <v-tab
            href="#example"
            style="background-color: #c8e6c9; color: #2e7d32"
          >
            <v-icon color="#2E7D32"> mdi-widgets </v-icon>
            Example Apps
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="currentTab">
          <v-tab-item :value="currentTab">
            <readme v-if="currentTab === 'readme'" :src="testData.readme" />
            <topics v-if="currentTab === 'proposals'" :src="testData.proposals" />
            <thread v-if="currentTab === 'example'" />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="4">
        <v-col cols="12" align="start">
          <v-col cols="12" style="font-style: italic">
            Install
            <v-text-field
              :value="'> ' + testData.install"
              full-width
              flat
              outlined
              dense
              readonly
              hint="Text copied to clipboard"
              @click="copyText(testData.install)"
            />
          </v-col>

          <v-col cols="12">
            Repository
            <v-text-field
              style="font-weight: bold"
              :value="testData.repository"
              full-width
              flat
              dense
              readonly
              prepend-inner-icon="mdi-home"
              hint="Text copied to clipboard"
              @click="copyText(testData.repository)"
            />
          </v-col>

          <v-col cols="12">
            Homepage
            <v-text-field
              style="font-weight: bold"
              :value="testData.homepage"
              full-width
              flat
              dense
              readonly
              prepend-inner-icon="mdi-link-variant"
              hint="Text copied to clipboard"
              @click="copyText(testData.homepage)"
            />
          </v-col>

          <v-row>
            <v-col cols="12"> <v-icon>mdi-download</v-icon>Downloads </v-col>
            <v-col cols="12" style="font-weight: bold">
              {{ testData.downloads }}
              <v-divider />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              Version
              <v-col cols="12" style="font-weight: bold">
                {{ testData.version }}
              </v-col>
              <v-divider />
            </v-col>
            <v-col cols="6">
              License
              <v-col cols="12" style="font-weight: bold">
                {{ testData.license }}
              </v-col>
              <v-divider />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              Unpacked Size
              <v-col cols="12" style="font-weight: bold">
                {{ testData.unpacked_size }}
              </v-col>
              <v-divider />
            </v-col>
            <v-col cols="6">
              Total files
              <v-col cols="12" style="font-weight: bold">
                {{ testData.total_files }}
              </v-col>
              <v-divider />
            </v-col>
          </v-row>

          <v-col cols="12">
            Last publish
            <v-col cols="12" style="font-weight: bold">
              {{ testData.last_publish }}
            </v-col>
            <v-divider />
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Readme from './Readme.vue';
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
      testData: {
        name: 'Influxdb',
        version: '4.0.1',
        install: 'npm i vuejs-snackbar',
        repository: 'https://github.com/pulamea',
        homepage: 'https://pulamea.io/vue/vuejs-etc',
        readme: 'https://raw.githubusercontent.com/vuejs/vue/dev/README.md',
        downloads: '500M+',
        license: 'MIT',
        unpacked_size: '20.6 kB',
        total_files: 6,
        last_publish: '2 years ago',
        publisher: 'paul_lecam',
        date: 'August 19, 2021',
        tags: ['DART', 'NATIVE', 'JS'],
        likes: '1,4K',
      },
    };
  },
  created() {
    console.log('params:', this.$route.params.pachet);
    console.log(this.$store.getters.getModel(this.$route.params.pachet));
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text);
    },
  },
};
</script>
