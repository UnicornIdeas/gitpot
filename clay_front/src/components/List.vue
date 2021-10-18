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
          :items="fsresults"
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
  props: {
    searchResults: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mdiGithubPath: mdiGithub,
      items: ['Analytics', 'Application Framework', 'Databases', 'Application Services', 'Monitoring', 'Security', 'Storage'],
      selectedFilters: [],
      fsresults: []
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
