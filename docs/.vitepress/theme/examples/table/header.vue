<script setup lang="ts">
  import { GIconGithub } from '@whouu/geist-design-icons'
  import type { TableColumn, TableSourceData } from 'geist-design'

  defineOptions({ name: 'ex-table-header' })

  const dataSource: TableSourceData = [
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

  const columns: TableColumn[] = [
    {
      title: (h) =>
        h('div', { style: 'display: flex; align-items: center' }, [
          h(GIconGithub),
          h('span', { style: 'margin-left: 6px;' }, 'Name')
        ]),
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
</template>
