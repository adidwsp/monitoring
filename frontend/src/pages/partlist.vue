<script setup>
import DemoSimpleTableFixedHeader from '@/views/pages/tables/PartListTable.vue'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Part List">
        <!-- <VCardText>
          You can fix the header of table by using the <code>fixed-header</code> prop.
        </VCardText> -->
        <DemoSimpleTableFixedHeader />
      </VCard>
    </VCol>
  </VRow>
</template>
