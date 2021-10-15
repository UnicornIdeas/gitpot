<template>
    <v-app app id="gitpot">
        <v-app-bar app align-center justify-center color="white">
            <v-app-bar-nav-icon disabled>
                <v-img :src="require('@/assets/icon.png')" height="50px" width="50px"></v-img>
            </v-app-bar-nav-icon>
            <v-col cols=6 align-self=center offset=3>
                <v-text-field
                single-line
                outlined
                rounded
                class="mt-7"
                color="deep-orange"
                label="Search"
                dense
                clearable
                >
                    <template v-slot:append>
                        <v-btn
                        icon
                        small
                        >
                            <v-icon
                            color="deep-orange"
                            dense
                            size=30px
                            @click="search()"
                            >mdi-magnify</v-icon> 
                        </v-btn>
                    </template>
                </v-text-field>
            </v-col>
            <v-col cols=2 offset=1>
                <v-btn 
                rounded 
                outlined 
                large
                style="color:#ff5722;">
                    <svg-icon type="mdi" :path="mdiGithubPath" :size="30"></svg-icon> Sign In
                </v-btn>
            </v-col>
        </v-app-bar>
        <v-main app>
            <v-container align-start fill-height fluid>
                <v-row class="fill-height">
                    <v-col cols=3>
                       <v-list>
                           <v-list-item>
                               <v-list-item-content style="text-align: left; font-family: Poppins; font-weight: bold; font-size: 40px">
                                    <v-list-item-title>Filters</v-list-item-title>
                                </v-list-item-content>
                           </v-list-item>
                           <v-list-item>
                                <v-list-item-content style="text-align: left">
                                    <v-list-item-title>Categories</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item-group>
                                <v-list-item
                                v-for="item in items"
                                :key="item"
                                >
                                <v-list-item-action>
                                    <v-checkbox v-model="selectedFilters" :value=item />
                                </v-list-item-action>
                                <v-list-item-content style="text-align: left">
                                    <v-list-item-title v-text="item"></v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols=9>
                        <v-data-table
                            fill-height
                            hide-default-header
                            :items="testResults"
                            :items-per-page=5
                            no-data-text="No results found"
                            class="elevation-1"
                        >
                            <template id="result" v-slot:item="{ item }">
                                <tr>
                                    <Result :result="item"/>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>


<script lang="js">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub } from '@mdi/js'
// eslint-disable-next-line no-unused-vars
import Result from './Result'

export default {
    name: "List",
    components: {
		SvgIcon,
        Result
	},
    data() {
        return {
            testResults: [
                            {
                                "name": "3id-keychain",
                                "date": "Updated: Mar 5, 2021",
                                "description": " data for 3ID Key data for 3ID Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "500M+",
                                "likes": "1.4K",
                                "urlpath":"./packages/3id-keychain"
                            },
                            {
                                "name": "3id-keychain1",
                                "date": "Updated: Mar 6, 2021",
                                "description": "Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "2500M+",
                                "likes": "21.4K",
                                "urlpath":"./packages/3id-keychain"
                            },
                            {
                                "name": "3id-keychain3",
                                "date": "Updated: Mar 7, 2021",
                                "description": "Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "5M+",
                                "likes": "14K",
                                "urlpath":"./packages/3id-keychain"
                            },
                            {
                                "name": "3id-keychain4",
                                "date": "Updated: Mar 8, 2021",
                                "description": "Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "5100M+",
                                "likes": "5.5K",
                                "urlpath":"./packages/3id-keychain"
                            },
                            {
                                "name": "3id-keychain5",
                                "date": "Updated: Mar 9, 2021",
                                "description": "Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "50M+",
                                "likes": "2.1K",
                                "urlpath":"./packages/3id-keychain"
                            },
                            {
                                "name": "3id-keychain6",
                                "date": "Updated: Mar 10, 2021",
                                "description": "Key data for 3ID",
                                "tags": ["DART", "NATIVE", "JS"],
                                "downloads": "1500M+",
                                "likes": "3.4K",
                                "urlpath":"./packages/3id-keychain"
                            }
            ],
            mdiGithubPath: mdiGithub,
            items : ["Analytics", "Application Framework", "Databases", "Application Services", "Monitoring", "Security","Storage"],
            selectedFilters: []
        }
    },
    created: function() {

    },
    methods: {

    },
    watch: {
        selectedFilters: function(val){
            console.log(val)
        }
    }
}
</script>

<style>
    .v-data-table table {
        border-spacing: 10px !important;
    }
</style>