<script setup lang="ts">
  import type { TableProps } from 'geist-design'

  defineOptions({ name: 'ex-table-empty' })

  interface DataItem {
    name: string
    usage: string
    point: string
    taste: string
  }

  const dataSource: TableProps<DataItem>['dataSource'] = []

  const columns: TableProps<DataItem>['columns'] = [
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
