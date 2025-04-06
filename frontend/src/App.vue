<script setup>
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
</script>

<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
