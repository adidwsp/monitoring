<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account"
          text="Edit Profile"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <Form @close="dialog = false" @save="dialog = false" />
    </v-dialog>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';
import Form from "@/views/pages/form-layouts/PartlistForm.vue" // Import komponen Form

const dialog = shallowRef(false);
</script>