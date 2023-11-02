<script setup lang="ts">
  import { reactive, onMounted } from 'vue'
  import { GToast } from 'geist-design'
  import * as clipboard from '../uitls/clipboard'
  import { data as examples } from '../data/examples.data'

  defineOptions({ name: 'ex-code' })

  const props = defineProps({
    name: {
      type: String,
      required: true
    },

    hiddenCode: Boolean
  })

  const state = reactive<{ codeName: string; codeTemplate: string }>({
    codeName: '',
    codeTemplate: ''
  })

  onMounted(() => initState())

  async function initState() {
    const arrs = props.name.split('-')

    state.codeName = arrs[arrs.length - 1]

    state.codeTemplate = examples.find(
      ({ sfcName }) => props.name === sfcName
    )!.sfcRawData
  }

  function copy() {
    clipboard.copy(state.codeTemplate)

    GToast.success('Code copied successfully!')
  }
</script>

<template>
  <client-only>
    <div class="vp-raw ex-code">
      <h3 class="g-subheading code-name">{{ state.codeName }}</h3>

      <p class="desc" v-if="$slots.default">
        <slot></slot>
      </p>

      <g-card class="ex-code-box" :class="{ 'box-hidden-code': hiddenCode }">
        <component :is="name" />
      </g-card>

      <details class="details" v-if="!hiddenCode">
        <summary>
          <div class="summary-row">
            <span class="preview">
              <ex-icon-arrow class="down" />
              预览代码
            </span>

            <ex-icon-copy class="copy" @click.stop.prevent="copy" />
          </div>
        </summary>

        <ex-prism class="ex-source-code" :code="state.codeTemplate" />
      </details>
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
  pre {
    overflow-y: auto;
  }

  .ex-code {
    margin-top: 4.5rem;
  }
  .code-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    margin: 1rem 0 !important;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  .desc {
    margin-top: 0;
    color: var(--accents-5);
    font-size: 0.8rem;
  }
  .ex-source-code {
    margin-top: 10px;
  }
  .ex-code-box {
    margin-top: 1.25rem;
    position: relative;
    padding-top: var(--geist-page-margin);
    padding-bottom: var(--geist-page-margin);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .box-hidden-code {
    border-bottom-left-radius: var(--geist-radius);
    border-bottom-right-radius: var(--geist-radius);
  }
  .details {
    border-bottom-left-radius: var(--geist-radius);
    border-bottom-right-radius: var(--geist-radius);
    width: 100%;

    summary {
      margin: 0;
    }

    .summary-row {
      padding: var(--geist-gap-half) var(--geist-gap);
      border-left: 1px solid var(--accents-2);
      border-bottom: 1px solid var(--accents-2);
      border-right: 1px solid var(--accents-2);
      border-bottom-left-radius: var(--geist-radius);
      border-bottom-right-radius: var(--geist-radius);
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      span {
        display: flex;
        align-items: center;
      }
    }
    pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin: 0;
      background-color: var(--geist-background);
      overflow-x: auto;
    }
  }
  .details[open] {
    .summary-row {
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .down {
      transform: rotateZ(0deg);
    }
    .copy {
      opacity: 1;
      visibility: visible;
    }
  }
  .down {
    width: rem(10);
    height: rem(10);
    margin-right: 5px;
    transform: rotateZ(-90deg);
    transition: all 0.1s ease;
  }
  .copy {
    transition: all 0.1s ease-in;
    color: var(--accents-5);
    opacity: 0;
    visibility: hidden;
    width: rem(14);
  }
  .preview {
    font-size: rem(13);
  }
</style>
