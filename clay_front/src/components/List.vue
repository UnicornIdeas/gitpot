<template>
  <v-container align-start fill-height fluid style="background-color: #f3f5f7">
    <v-row style="margin-left: 10vw; margin-right: 10vw">
      <v-col cols="12">
        <v-row justify="end">
          <v-col cols="2">
            <v-select
              v-model="sortv"
              dense
              outlined
              :items="sortItems"
              filled
              label="Sort by"
              @change="sortList"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" style="background-color: #f3f5f7">
        <v-list style="background-color: #f3f5f7">
          <v-list-item>
            <v-list-item-content
              style="
                text-align: left;
                font-family: Poppins;
                font-weight: bold;
                font-size: 40px;
              "
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
            <v-list-item v-for="item in tags" :key="item">
              <v-list-item-action>
                <v-checkbox v-model="filters" :value="item" />
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
          :loading="loading"
          fill-height
          hide-default-header
          :items="pageResults"
          :items-per-page="elPerPage"
          :server-items-length="elNumber"
          :options.sync="pag"
          no-data-text="No results found"
          class="elevation-1"
          style="box-shadow: unset !important; background-color: #f3f5f7"
          :footer-props="{
            'disable-items-per-page': true,
            itemsPerPageOptions: [elPerPage],
          }"
        >
          <template id="result" v-slot:item="{ item }">
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

import { mapState, mapActions, mapMutations } from 'vuex';
import Result from './Result';

export default {
  name: 'List',
  components: {
    Result
  },
  data() {
    return {
      sortItems: [
        'likes ascending',
        'likes descending',
        'downloads ascending',
        'downloads descending'],
    };
  },
  computed: {
    ...mapState([
      'elNumber',
      'pageResults',
      'loading',
      'tags',
      'selectedFilters',
      'sorttype',
      'elPerPage',
      'pagination',
      'keyword']),
    filters: {
      get() {
        return this.selectedFilters;
      },
      set(newval) {
        this.setFilters(newval);
      }
    },
    sortv: {
      get() {
        return this.sorttype;
      },
      set(newSort) {
        this.setSortType(newSort);
      }
    },
    pag: {
      get() {
        return this.pagination;
      },
      set(newPagination) {
        this.setPagination(newPagination);
      }
    },
  },
  watch: {
    filters() {
      this.setPage(1);
      this.queryFs();
    },
    pagination: {
      handler() {
        this.queryFs();
      },
      deep: true,
    },
    keyword() {
      this.setPage(1);
      this.queryFs();
    }
  },
  mounted() {
    console.log(this.pageResults);
    this.gettags();
  },
  methods: {
    ...mapActions(['gettags', 'queryFs']),
    ...mapMutations([
      'setFilters',
      'setSortType',
      'setPagination',
      'setPage']),
    sortList() {
      this.setPage(1);
      this.queryFs();
    }
  },
};
</script>

<style>
.v-data-table table {
  border-spacing: 10px !important;
}
</style>
