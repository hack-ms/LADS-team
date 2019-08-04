<template>
  <v-app>
    <div>

      <v-app-bar color="purple darken-4" fixed clipped-left>
        <v-icon color="white" @click="drawer = !drawer">mdi-format-list-bulleted</v-icon>
        <v-toolbar-title class="title white--text ml-2">Pão de Batata</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        fixed
        v-model="drawer" 
        absolute
        clipped
        class="purple darken-4"
        dark
      >
        <v-list dense>
          <v-list-item>
            <v-list-item-title>Portais de acesso à informação</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.dados.ms.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dados Abertos MS</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.transparencia.ms.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Portal da Transparência MS</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.portaltransparencia.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Portal da Transparência Federal</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fale com o governo</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.esic.ms.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>E-sic</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.ouvidorias.ms.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>E-ouv</v-list-item-title>
          </v-list-item>

          <v-list-item link href="https://falabr.cgu.gov.br" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Fala.BR</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <!-- <v-content>
        <template>
          <v-container fluid> -->
            <v-layout align-center justify-center>
              <v-flex lg8 sm10 xs12>
                <v-card
                  class="mx-auto"
                  max-width="600"
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
          <!-- </v-container>
        </template>
      </v-content> -->
    </div>

  </v-app>
</template>


<script>
import find from "@/service/service";

export default {
  name: 'App',
  data: () => ({
    src: "https://api-lads.herokuapp.com/",
    img: "",
    paths: [],
    drawer: false
  }),
  computed: {
    randImg() {
      var i = parseInt(Math.random()*this.paths.length);
      //console.log(i);
      return (i);
    }
  },
  methods: {

    async getPaths() {
      try {
        let response = await find("images");
        //console.log(response.data);
        this.paths = response.data;
      } catch (e) {
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
