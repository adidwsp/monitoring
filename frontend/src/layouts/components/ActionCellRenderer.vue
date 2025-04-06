<template>
  <div>
    <button @click="onEditClicked">Edit</button>
    <button @click="onDeleteClicked">Hapus</button>
  </div>
</template>

<script>
export default {
  name: "ActionCellRenderer",
  props: ["params"], // AG Grid akan mengoper 'params'
  setup(props) {
    // Data baris ada di props.params.data
    const rowData = props.params.data;

    // Callback dari parent (dikirim lewat cellRendererParams)
    // misalnya props.params.onEditClicked, props.params.onDeleteClicked
    function onEditClicked() {
      // Panggil fungsi parent, oper data baris
      props.params.onEditClicked(rowData);
    }

    function onDeleteClicked() {
      props.params.onDeleteClicked(rowData);
    }

    return {
      onEditClicked,
      onDeleteClicked,
    };
  },
};
</script>

<style scoped>
button {
  margin-right: 5px;
  padding: 5px;
  background-color: aquamarine;
  cursor: pointer;
}
</style>
