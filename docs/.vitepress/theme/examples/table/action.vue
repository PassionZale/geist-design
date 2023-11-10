<script setup lang="ts">
  import { ref } from 'vue'
  import { GButton, GSpacer } from 'geist-design'
  import type { TableColumn, TableSourceData } from 'geist-design'

  defineOptions({ name: 'ex-table-action' })

  interface DataItem {
    name: string
    usage: string
    point: string
    taste: string
  }

  const dataSource = ref<TableSourceData<DataItem>>([
    {
      name: 'apple',
      usage: 'eat',
      point: 'red, I like it',
      taste: 'sweet'
    },
    {
      name: 'orange',
      usage: 'eat',
      point: 'orange, fire ',
      taste: 'sour'
    },
    {
      name: 'lemon',
      usage: 'picture',
      point: 'sour',
      taste: 'sour'
    },
    {
      name: 'pear',
      usage: 'eat',
      point: 'yellow, code',
      taste: 'sweet'
    }
  ])

  const columns: TableColumn[] = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Usage',
      dataIndex: 'usage'
    },
    {
      title: 'Point',
      dataIndex: 'point'
    },
    {
      title: 'Taste',
      dataIndex: 'taste'
    },
    {
      title: 'Action',
      width: 200,
      render: (h, row, index) => {
        return h('div', { style: 'display: flex;' }, [
          h(
            GButton,
            { type: 'primary', size: 'mini', onClick: () => editRow(row) },
            { default: () => '查看' }
          ),
          h(GSpacer, { x: 0.5 }),
          h(
            GButton,
            { type: 'danger', size: 'mini', onClick: () => deleteRow(index) },
            { default: () => '删除' }
          )
        ])
      }
    }
  ]

  const visible = ref(false)
  const selectedRow = ref({})

  const deleteRow = (index: number): void => {
    dataSource.value.splice(index, 1)
  }

  const editRow = (row: object): void => {
    selectedRow.value = row
    visible.value = true
  }
</script>

<template>
  <g-table :data-source="dataSource" :columns="columns"></g-table>

  <g-dialog v-model="visible" @close="selectedRow = {}">
    <pre>{{ selectedRow }}</pre>
  </g-dialog>
</template>

<style lang="scss" scoped>
  .actions {
    display: flex;
  }
</style>
