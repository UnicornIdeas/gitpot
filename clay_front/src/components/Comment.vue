<template>
  <v-card color="#e9edf0" elevation="0">
    <v-row>
			<v-col cols=12>
        <v-list-item three-line>
          <v-list-item-avatar tile>
            <v-img :src="getPhoto(comment.author)" />
          </v-list-item-avatar>
          <v-list-item-content class="text-left align-self-start">
            <v-list-item-subtitle>
              <a>{{ comment.author }}</a> -
							<i>{{ ago(comment.date) }}</i>
            </v-list-item-subtitle>
						{{ comment.comment }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
		</v-row>
	</v-card>
</template>

<script>
import moment from 'moment';
import { getUserPhoto } from '@/utils/utils';

export default {
  name: 'Comment',
  props: ['comment'],
  components: {
	},
  data() {
    return {
		};
	},
  methods: {
		ago(d) {
			return moment(d).fromNow();
		},
    getPhoto(uname) {
      return getUserPhoto(uname);
    },
  }
};
</script>
