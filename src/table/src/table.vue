<script setup lang="ts">
  import { h } from 'vue'
  import { Props } from './props'

  import type { VNode } from 'vue'
  import type {
    TableRenderH,
    TableTitleRender,
    TableDataRender
  } from './interface'

  defineOptions({ name: 'GTable' })

  defineProps(Props)

  const columnsSlotTitle = (
    slotRender: TableTitleRender,
    index: number
  ): VNode => {
    return slotRender(h as TableRenderH, index)
  }

  const columnsSlotData = (
    slotRender: TableDataRender,
    dataItem: Record<string, unknown>,
    index: number
  ): VNode => {
    return slotRender(h as TableRenderH, dataItem, index)
  }

  const isFunction = (value: unknown): value is Function => typeof value === 'function'
</script>

<template>
  <div class="g-table">
    <table>
      <colgroup>
        <col v-for="(column, index) in columns" :key="index" :width="column?.width" />
      </colgroup>

      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" :class="align && align">
            <template v-if="isFunction(column.title)">
              <component :is="columnsSlotTitle(column.title, index)" />
            </template>

            <template v-else>
              {{ column.title }}
            </template>
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-if="dataSource.length">
          <tr
            v-for="(item, dataIndex) in dataSource"
            :key="dataIndex"
            :class="hoverable ? 'table-row' : ''"
          >
            <td
              v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              :class="align && align"
            >
              <div class="table-cell">
                <template v-if="column.render">
                  <component :is="columnsSlotData(column.render, item, dataIndex)" />
                </template>

                <template v-else>
                  <template v-if="column.dataIndex">
                    {{ item[column.dataIndex] }}
                  </template>
                </template>
              </div>
            </td>
          </tr>
        </template>

        <template v-else>
          <tr>
            <td style="color: #ccc; text-align: center" :colspan="columns.length">
              {{ emptyText }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
