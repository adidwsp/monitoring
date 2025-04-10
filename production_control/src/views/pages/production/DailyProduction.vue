<script setup lang="ts">
import { ref, shallowRef } from 'vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Production Welding' });
const breadcrumbs = shallowRef([
  {
    title: 'Production',
    disabled: false,
    href: '#'
  },
  {
    title: 'Production Welding',
    disabled: true,
    href: '#'
  }
]);

const edit = () => {
  alert('Edit button clicked!');
};
const view = () => {
  alert('View button clicked!');
};
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Welding Line Sub Assy ADM">

        <v-row class="d-flex justify-space-between"
        >
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">SUB ASSY ROBOT</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>
            
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">SUB ASSY MANUAL</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">S/A CO ROBOT</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

        </v-row>
        
      </UiParentCard>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Welding Line WSS ADM">

        <v-row class="d-flex justify-space-between"
        >
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">WSS LINE A</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>
            
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">WSS LINE B</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">SWSS LINE C</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

        </v-row>
        <br>
        <br>

        <v-row class="d-flex justify-space-between"
        >
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">WSS LINE D</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>
            
            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">WSS LINE E</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

            <v-card
                max-width="350"
                color="darkprimary"
            >
            <v-card-text class="d-flex justify-space-between align-center">
                <h4 class="me-3">WSS LINE F</h4>
                <v-chip
                    prepend-icon="$eye"
                    @click="view"
                >VIEW
                </v-chip>
                <v-chip
                    prepend-icon="$edit"
                    @click="edit"
                    color="darksuccess"
                    variant="flat"
                >EDIT
                </v-chip>
            </v-card-text>
            </v-card>

        </v-row>
        
      </UiParentCard>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
