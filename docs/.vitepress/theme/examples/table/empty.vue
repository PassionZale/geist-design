<script setup lang="ts">
  import type { TableColumn, TableSourceData } from 'geist-design'

  defineOptions({ name: 'ex-table-empty' })

  const dataSource: TableSourceData = []

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
    }
  ]
</script>

<template>
  <g-table :data-source="dataSource" :columns="columns"></g-table>

  <g-spacer />

  <g-table :data-source="dataSource" :columns="columns" empty-text="No Data"></g-table>
</template>
