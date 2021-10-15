<template>
  <v-container
    align-start
    fill-height
    fluid
    style="background-color:#f3f5f7;"
  >
    <v-row
      class="fill-height"
      style="margin-left:10vw;margin-right:10vw;margin-top:10px;"
    >
      <v-col
        cols="3"
        style="background-color:#f3f5f7"
      >
        <v-list style="background-color:#f3f5f7">
          <v-list-item>
            <v-list-item-content
              style="text-align: left; font-family: Poppins; font-weight: bold; font-size: 40px"
            >
              <v-list-item-title>Filters</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content style="text-align: left">
              <v-list-item-title>Categories</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item-group>
            <v-list-item
              v-for="item in items"
              :key="item"
            >
              <v-list-item-action>
                <v-checkbox
                  v-model="selectedFilters"
                  :value="item"
                />
              </v-list-item-action>
              <v-list-item-content style="text-align: left">
                <v-list-item-title v-text="item" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="9">
        <v-data-table
          fill-height
          hide-default-header
          :items="testResults"
          :items-per-page="5"
          no-data-text="No results found"
          class="elevation-1"
          style="box-shadow:unset !important; background-color:#f3f5f7;"
        >
          <template
            id="result"
            v-slot:item="{ item }"
          >
            <tr>
              <result :result="item" />
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">

import { mdiGithub } from '@mdi/js';
import Result from './Result';

export default {
  name: 'List',
  components: {
    Result
  },
  data() {
    return {
      testResults: [
        {
          name: '3id-keychain',
          date: 'Updated: Mar 5, 2021',
          description: ' data for 3ID Key data for 3ID Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '500M+',
          likes: '1.4K',
          urlpath: './packages/3id-keychain'
        },
        {
          name: '3id-keychain1',
          date: 'Updated: Mar 6, 2021',
          description: 'Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '2500M+',
          likes: '21.4K',
          urlpath: './packages/3id-keychain'
        },
        {
          name: '3id-keychain3',
          date: 'Updated: Mar 7, 2021',
          description: 'Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '5M+',
          likes: '14K',
          urlpath: './packages/3id-keychain'
        },
        {
          name: '3id-keychain4',
          date: 'Updated: Mar 8, 2021',
          description: 'Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '5100M+',
          likes: '5.5K',
          urlpath: './packages/3id-keychain'
        },
        {
          name: '3id-keychain5',
          date: 'Updated: Mar 9, 2021',
          description: 'Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '50M+',
          likes: '2.1K',
          urlpath: './packages/3id-keychain'
        },
        {
          name: '3id-keychain6',
          date: 'Updated: Mar 10, 2021',
          description: 'Key data for 3ID',
          tags: ['DART', 'NATIVE', 'JS'],
          downloads: '1500M+',
          likes: '3.4K',
          urlpath: './packages/3id-keychain'
        }
      ],
      mdiGithubPath: mdiGithub,
      items: ['Analytics', 'Application Framework', 'Databases', 'Application Services', 'Monitoring', 'Security', 'Storage'],
      selectedFilters: []
    };
  },
  watch: {
    selectedFilters(val) {
      console.log(val);
    }
  },
  created() {

  },
  methods: {

  }
};
</script>

<style>
.v-data-table table {
  border-spacing: 10px !important;
}
</style>
