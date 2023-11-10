<script setup lang="ts">
  import type { TableProps } from 'geist-design'

  defineOptions({ name: 'ex-table-align' })

  interface DataItem {
    name: string
    usage: string
    point: string
    taste: string
  }

  const dataSource: TableProps<DataItem>['dataSource'] = [
    {
      name: 'apple',
      usage: 'eat',
      point: 'red, I like it',
      taste: 'sweet'
    }
  ]

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

  <g-table :data-source="dataSource" :columns="columns" align="center"></g-table>

  <g-spacer />

  <g-table :data-source="dataSource" :columns="columns" align="right"></g-table>
</template>
