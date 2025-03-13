<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/plugins/axios' 
// atau import axios dari 'axios' jika tidak buat file plugin

const partlists = ref([])

onMounted(async () => {
  try {
    // Panggil endpoint CI4, misal /api/partlists
    const response = await axios.get('/partlists')
    partlists.value = response.data
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <VTable
    height="500"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Part Number
        </th>
        <th class="text-uppercase text-center">
          Job Number
        </th>
        <th class="text-uppercase text-center">
          Part Name
        </th>
        <th class="text-uppercase text-center">
          Routing Process
        </th>
        <th class="text-uppercase text-center">
          Customer
        </th>
        <th>Edit</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in partlists"
        :key="item.id"
      >
        <td>
          {{ item.part_no }}
        </td>
        <td class="text-center">
          {{ item.job_no }}
        </td>
        <td class="text-center">
          {{ item.part_name }}
        </td>
        <td class="text-center">
          {{ item.routing_process }}
        </td>
        <td class="text-center">
          {{ item.customer_id }}
        </td>
        <td>
          <VButton
            color="primary"
            @click="() => $router.push({ name: 'PartListEdit', params: { id: item.id } })"
          >
            Edit
          </VButton>
        </td>   
      </tr>
    </tbody>
  </VTable>
</template>
