<template>
  <v-card color="#e9edf0" elevation="0">
    <v-row>
			<v-col cols=12>
        <v-list-item three-line>
          <v-list-item-avatar tile>
            <v-img :src="getPhoto(testData.author)" />
          </v-list-item-avatar>
          <v-list-item-content class="text-left align-self-start">
            <v-list-item-subtitle>
              <a>{{ testData.author }}</a> started topic
              <i>{{ fDate(testData.date) }}</i>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
		</v-row>
	</v-card>
</template>

<script>
import { formatDate, getUserPhoto, abbreviateNumber } from '@/utils/utils';

export default {
	name: 'Comment',
	props: ['comment'],
	methods: {
    fDate(d) {
      return formatDate(d);
    },
    getPhoto(uname) {
      return getUserPhoto(uname);
    },
    abbr(v) {
      return abbreviateNumber(v);
    },
  }
}
</script>