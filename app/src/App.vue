<template>
  <v-app>
    <div>


      <v-app-bar color="purple darken-4" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>THUID</v-toolbar-title>
      </v-app-bar>
      
      <v-navigation-drawer
        v-model="drawer" 
        fixed
        temporary
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
            <v-list-item-title>e-OUV</v-list-item-title>
          </v-list-item>

          <v-list-item link href="http://www.ouvidorias.ms.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>e-OUV</v-list-item-title>
          </v-list-item>

          <v-list-item link href="https://falabr.cgu.gov.br" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Fala.BR</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-content>
        <template>
          <v-container fluid>
            <v-layout align-center justify-center>
              <v-flex lg8 sm10 xs12>
                <v-card
                  class="mx-auto"
                  max-width="600"
                >
                  <v-img
                    :src="img"
                  >
                    <v-layout link align-start justify-end style="padding : 7%" >
                      <v-btn text icon color="white" :href="img" target="_blank">
                        <v-icon large>mdi-share</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-img>

                  <v-card-text>
                    <span class="text--primary">
                      <span>Ficou com duvida quer perguntar diretamente para o governo ?! o e-sic te possibilita isto. </span><br>
                      <span>E se você quiser criticar ou elogiar, no e-ouv existe essa possibilidade.</span>
                    </span>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      text
                      color="purple"
                      link href="http://www.esic.ms.gov.br/" target="_blank"
                    >
                      e-SIC
                    </v-btn>
                    <v-btn
                      text
                      color="purple"
                      link href="http://www.ouvidorias.ms.gov.br/" target="_blank"
                    >
                      e-OUV
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
    src: "http://api-lads.herokuapp.com/",
    img: "",
    paths: [],
    drawer: false,
    dialog: true
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
