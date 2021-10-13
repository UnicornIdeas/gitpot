<template>
    <v-app app id="gitpot">
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon disabled>
                <v-img :src="require('@/assets/icon.png')" height="50px" width="50px"></v-img>
            </v-app-bar-nav-icon>
            <v-col>
                <v-btn plain>Learn</v-btn>
                <v-btn plain>Build</v-btn>
                <v-btn plain>Explore</v-btn>
                <v-btn plain>Participate</v-btn>
            </v-col>
            <v-btn rounded color="transparent" style="color:#ff5722;">Join the community</v-btn>
            <v-btn rounded style="color:white;" color="deep-orange">Get Started</v-btn>
        </v-app-bar>
        <v-main app>
            <v-container fill-height>
                <v-row align-center justify-center flat no-gutters>
                    <v-col cols=12>
                        <div style="font-size:50px; bold">Ala bala suck it </div>
                    </v-col>
                    <v-col cols=12>
                    <div style="font-size:30px">Ala bala suck it again </div>
                    </v-col>
                    <v-col cols=12>
                    <v-text-field
                        outlined
                        rounded
                        label="Search"
                        flat
                        dense
                    >
                        <template v-slot:append>
                            <v-btn
                            icon
                            small
                            ></v-btn>
                            <v-icon
                                color="deep-orange"
                                dense
                                large
                                flat
                                @click="search()"
                            >
                                mdi-magnify
                            </v-icon> 
                        </template>
                        <template v-slot:prepend-inner>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        rounded
                                        color="#ff5722"
                                        style="color:white"
                                        flat
                                        dense
                                        small
                                        v-bind="attrs"
                                        v-on="on"
                                        >Filters<v-icon>mdi-menu-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                        v-for="item in items"
                                        :key="item"
                                        >
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                        </template>
                    </v-text-field>
                    </v-col>
                    <v-col cols=12>
                        <div> Top searches and other shit </div>
                    </v-col>
                   <v-col cols=12>
                        <v-btn rounded style="color:white;" color="deep-orange">Popular</v-btn>
                        <v-btn rounded outlined style="color:#ff5722;">Recent</v-btn>
                   </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="js">


export default {
    name: "Gitpot",
    data() {
        return {
            items : ["one", "two", "three"]
        }
    },
    created: function() {

    },
    methods: {

    },
    watch: {

    }
}
</script>

<style>

</style>