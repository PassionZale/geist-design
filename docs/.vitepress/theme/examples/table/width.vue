<script setup lang="ts">
  import type { TableProps } from 'geist-design'

  defineOptions({ name: 'ex-table-width' })

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
  ]

  const columns: TableProps<DataItem>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '100px'
    },
    {
      title: 'Usage',
      dataIndex: 'usage',
      width: '200px'
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
</template>
