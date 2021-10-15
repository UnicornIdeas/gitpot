<template>
  <v-container fill-height style="background-color: SeaShell">
    <v-row>
      <v-col cols="8">
        <v-row>
          {{ result.name }}
        </v-row>
        <v-row>
          {{ result.date }}
        </v-row>
        <v-row>
          {{ result.description }}
        </v-row>
        <v-row>
          <v-btn
            style="color: white"
            color="deep-orange"
            v-for="tag in result.tags"
            :key="tag"
            left
            class="mx-1"
          >
            {{ tag }}
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row justify="end">
          <v-col cols="2" offset="5">
            <v-row>
              {{ result.downloads }}
            </v-row>
            <v-row> Downloads </v-row>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-row>
              {{ this.result.likes }}
            </v-row>
            <v-row> Stars </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Result",
  props: {
    result: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
