<template>
  <v-app>
    <div>

      <v-navigation-drawer
        expand-on-hover
        permanent
      >
        <v-list
          nav
          dense
        >
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
      
      <template>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="white--text"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-icon class="align-end fill-height">share</v-icon>
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
      </template>

    </div>
  </v-app>
</template>


<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
