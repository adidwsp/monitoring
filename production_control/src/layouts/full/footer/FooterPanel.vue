<script setup lang="ts">
import { shallowRef } from 'vue';

const footerLink = shallowRef([
  {
    title: 'Home',
    url: '#'
  },
  {
    title: 'Documentation',
    url: 'https://codedthemes.gitbook.io/berry-vuetify/'
  },
  {
    title: 'Support',
    url: 'https://codedthemes.support-hub.io/'
  }
]);
</script>
<template>
  <v-footer class="px-0 footer mt-2">
    <v-row justify="end" align="end" no-gutters>
      <v-col class="text-sm-right text-center" cols="2" sm="6">
        <a
          v-for="(item, i) in footerLink"
          :key="i"
          class="mx-2 text-body-1 text-darkText text-decoration-none"
          target="_blank"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  position: unset;
}
footer {
  a {
    &:hover {
      color: rgb(var(--v-theme-primary)) !important;
    }
  }
}
</style>
