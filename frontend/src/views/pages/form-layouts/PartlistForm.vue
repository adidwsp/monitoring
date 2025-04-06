<template>
  <v-card title="Add Data">
    <v-card-text>
      <v-row dense>
        <v-col cols="12" md="6" sm="6">
          <v-text-field label="Part No. *" v-model="newItem.part_no" required></v-text-field>
        </v-col>

        <v-col cols="12" md="6" sm="6">
          <v-text-field
            label="Job No. *" v-model="newItem.job_no" required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12" sm="6">
          <v-text-field
            label="Part Name" v-model="newItem.part_name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" sm="6">
          <v-text-field label="Routing Process" v-model="newItem.routing_process">
          </v-text-field>
        </v-col>

        <v-col cols="12" md="6" sm="6">
          <v-text-field label="Customer" v-model="newItem.customer">
          </v-text-field>
        </v-col>

      </v-row>

      <v-empty-state></v-empty-state>
      <v-divider></v-divider>
      <small class="text-caption text-medium-emphasis"
        >*indicates required field</small
      >
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text="Close" variant="plain" @click="$emit('close')"></v-btn>

      <v-btn color="primary" text="Save" variant="tonal" @click="addData"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const showAddForm = ref(false);
const newItem = ref({
  part_no: '',
  job_no: '',
  part_name: '',
  routing_process: '',
  customer: ''
});

const addData = () => {
  console.log("Data added:", newItem.value);
  showAddForm.value = false;
};

defineEmits(['close', 'save']);
</script>