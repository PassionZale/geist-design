<script lang="ts">
  import { shallowRef } from 'vue'
  import * as GeistIcons from '@whouu/geist-design-icons'
  import { GToast } from 'geist-design'
  import * as clipboard from '../../uitls/clipboard'

  export default {
    name: 'ex-icons-gallery',

    components: { ...GeistIcons },

    data() {
      return {
        icons: Object.keys(GeistIcons),
        keyword: '',
        searchIcon: shallowRef(GeistIcons.GIconSearch)
      }
    },

    computed: {
      filterIcons() {
        const search = this.keyword.trim().toLowerCase()

        if (!search) return this.icons

        return this.icons.filter(name => name.toLowerCase().indexOf(search) > -1)
      }
    },

    methods: {
      copy(icon: string) {
        clipboard.copy(`${icon}`)

        GToast.success('Code copied successfully!')
      }
    }
  }
</script>

<template>
  <div class="wrapper">
    <g-input
      v-model="keyword"
      class="input"
      :prefix-icon="searchIcon"
      :placeholder="`在 ${icons.length} 个图标中搜索...`"
    >
    </g-input>

    <div class="icons">
      <g-card
        class="icon"
        v-for="icon in filterIcons"
        :key="icon"
        hoverable
        @click="copy(icon)"
      >
        <component :is="icon" />
        <small>{{ icon.replace('GIcon', '') }}</small>
      </g-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .input {
    margin: 0 5px;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      flex-grow: 0;
      flex-basis: 125px;
      min-width: 0px;
      height: 95px;
      margin: 12px 5px;
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;

      small {
        margin-top: 10px;
      }
    }
  }
</style>
