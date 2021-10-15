<template>
  <v-card
    color="#e9edf0"
    elevation="0"
  >
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            />
            <v-list-item-content class="text-left align-self-start">
              <v-list-item-title class="text-h6 mb-1">
                {{ result.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ result.date }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ result.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col cols="6">
          <v-row class="justify-end">
            <v-col cols="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{ result.downloads }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Downloads
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="2">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{ result.likes }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Likes
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-col cols="8">
        <v-row>
          <v-btn
            v-for="tag in result.tags"
            :key="tag"
            small
            style="color: black"
            color="#ffb08a"
            class="mx-1"
            depressed
          >
            {{ tag }}
          </v-btn>
        </v-row>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Result',
  props: {
    result: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
