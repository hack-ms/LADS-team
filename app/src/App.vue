<template>
  <v-app>
    <div>

      <v-navigation-drawer
        v-model="drawer" 
        absolute
        cliped
        class="purple darken-4"
        dark
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="purple darken-4" fixed>
        <v-icon color="white" @click="drawer = !drawer">mdi-play</v-icon>
        <v-toolbar-title class="title white--text ml-2">Pão de Batata</v-toolbar-title>
      </v-toolbar>
      
      <v-content>
        <template>

        <v-container fluid>
          <v-layout justify-center>
          <v-flex lg8 sm10 xs12>
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              :src="img"
            >
              <v-layout align-start justify-end>
                  <v-icon color="white">mdi-share</v-icon>
              </v-layout>
            </v-img>

            <v-card-text>
              <span>Number 10</span><br>
              <span class="text--primary">
                <span>Whitehaven Beach</span><br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="orange"
              >
                Share
              </v-btn>
              <v-btn
                text
                color="orange"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-flex>
          </v-layout>
        </v-container>
        
        </template>
      </v-content>
    </div>

  </v-app>
</template>


<script>
import find from "@/service/service";

export default {
  name: 'App',
  data: () => ({
    src: "http://172.50.4.210:3333/",
    img: "",
    paths: [],
    drawer: false
    //
  }),
  computed: {
    randImg() {
      var i = parseInt(Math.random()*this.paths.length);
      console.log(i)
      return (i);
    }
  },
  methods: {

    async getPaths() {
      try {
        let response = await find("images");
        console.log(response.data);
        this.paths = response.data;
      } catch {
        console.log(e);
      }
      this.img = this.src + this.paths[this.randImg];
    }
  },
  created() {
    this.getPaths();
  }
};
</script>
