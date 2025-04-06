<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          text="Add Data"
          variant="tonal"
          v-bind="activatorProps"
        ><span class="mdi mdi-book-edit-outline"> Add Data</span></v-btn>
      </template>

      <Form @close="dialog = false" @save="dialog = false" />
    </v-dialog>
  </div>
  <div>
    <!-- Tombol Tambah Data -->
    <button @click="showAddForm = true">Tambah Data</button>

    <!-- Form Tambah Data (sederhana) -->
    <div v-if="showAddForm" class="form-container">
      <h3>Tambah Data</h3>
      <form @submit.prevent="addData">
        <label>Part No:</label>
        <input v-model="newItem.part_no" required />

        <label>Job No:</label>
        <input v-model="newItem.job_no" required />

        <label>Part Name:</label>
        <input v-model="newItem.part_name" required />

        <label>Routing Process:</label>
        <input v-model="newItem.routing_process" required />

        <label>Customer:</label>
        <input v-model="newItem.customer" required />

        <button type="submit">Simpan</button>
        <button type="button" @click="showAddForm = false">Batal</button>
      </form>
    </div>

    <!-- AG Grid -->
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px; width: 100%;"
      :columnDefs="colDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :pagination="true"
      :frameworkComponents="frameworkComponents"
      rowSelection="multiple"
      :animateRows="true"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import axios from "@/plugins/axios";
import { shallowRef } from 'vue'
import Form from "@/views/pages/form-layouts/PartlistForm.vue" // Import komponen Form

const dialog = shallowRef(false)

// Import cell renderer
import ActionCellRenderer from "@/layouts/components/ActionCellRenderer.vue";


export default {
  name: "PartList",
  components: {
    AgGridVue,
    ActionCellRenderer,
    Form,
  },
  setup() {
    // State reaktif
    const defaultColDef = ref({ filter: true });
    const rowData = ref([]);
    const showAddForm = ref(false);

    // Data baru untuk "Tambah Data"
    const newItem = ref({
      part_no: "",
      job_no: "",
      part_name: "",
      routing_process: "",
      customer: "",
    });

    // Daftarkan cell renderer ke AG Grid
    const frameworkComponents = {
      ActionCellRenderer,
    };

    // Column definitions
    const colDefs = ref([
      { field: "part_no", headerName: "Part Number" },
      { field: "job_no", headerName: "Job Number" },
      { field: "part_name", headerName: "Part Name" },
      { field: "routing_process", headerName: "Routing Process" },
      { field: "customer", headerName: "Customer" },
      {
        field: "action",
        cellRenderer: "ActionCellRenderer",
        // cellRendererParams -> berisi callback
        cellRendererParams: {
          onEditClicked: (row) => editData(row),
          onDeleteClicked: (row) => deleteData(row),
        },
      },
    ]);

    // Ambil data awal
    onMounted(async () => {
      await getData();
    });

    // Fungsi ambil data
    async function getData() {
      try {
        const response = await axios.get("/partlists");
        rowData.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }

    // Fungsi tambah data
    async function addData() {
      try {
        await axios.post("/partlists", newItem.value);
        // Bersihkan form
        newItem.value = {
          part_no: "",
          job_no: "",
          part_name: "",
          routing_process: "",
          customer: "",
        };
        showAddForm.value = false;
        // Refresh data
        await getData();
      } catch (error) {
        console.error(error);
      }
    }

    // Fungsi edit data
    // Misal: tampilkan modal, atau langsung panggil endpoint update
    async function editData(row) {
      // Contoh minimal: menampilkan alert
      alert(`Edit data untuk Part No: ${row.part_no}`);

      showAddForm = true;
      // -- Opsi 1: Buka form modal di sini (showEditForm = true, dsb.)
      // -- Opsi 2: Langsung update ke server
      //    await axios.put(`/partlists/${row.id}`, row);

      // -- Kemudian refresh data
      //    await getData();
    }

    // Fungsi hapus data
    async function deleteData(row) {
      // Contoh minimal: konfirmasi sebelum hapus
      const konfirmasi = confirm(
        `Yakin ingin menghapus Part No: ${row.part_no}?`
      );
      if (!konfirmasi) return;

      try {
        // Misal: endpoint DELETE
        // Pastikan endpoint sesuai, mis. /partlists/:id
        await axios.delete(`/partlists/${row.id}`);
        await getData();
      } catch (error) {
        console.error(error);
      }
    }

    return {
      defaultColDef,
      rowData,
      colDefs,
      frameworkComponents,
      showAddForm,
      newItem,
      getData,
      addData,
      editData,
      deleteData,
      Form,
      dialog,
    };
  },
};
</script>

<style scoped>
.ag-theme-alpine {
  font-size: 12px;
}

/* Contoh styling form sederhana */
.form-container {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  width: 300px;
}

form label {
  display: block;
  margin-top: 8px;
}

form input {
  width: 100%;
  padding: 4px;
  margin-top: 4px;
  box-sizing: border-box;
}
</style>
