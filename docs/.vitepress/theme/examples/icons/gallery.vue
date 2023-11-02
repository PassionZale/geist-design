<script lang="ts">
  import * as GeistIcons from '@whouu/geist-design-icons'
  import { GToast } from 'geist-design'
  import * as clipboard from '../../uitls/clipboard'

  export default {
    name: 'ex-icons-gallery',

    components: { ...GeistIcons },

    data() {
      return {
        icons: Object.keys(GeistIcons),
        keyword: ''
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
        clipboard.copy(`<${icon} />`)

        GToast.success('Code copied successfully!')
      }
    }
  }
</script>

<template>
  <div class="wrapper">
    <div class="search">
      <!-- TODO 替换为 <g-input /> -->
      <input
        class="input"
        type="text"
        v-model="keyword"
        :placeholder="`在 ${icons.length} 个图标中搜索...`"
      />
    </div>

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
  .input {
    padding: 10px;
    outline: none;
    width: 100%;
    font-size: 1rem;
    border: 1px solid #e2e2e2;
    border-radius: 3px;

    &:focus {
      border-color: #ccc;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

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
