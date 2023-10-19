<script setup lang="ts">
  import Prism from 'prismjs'
  import { computed } from 'vue'

  defineOptions({ name: 'ex-prism' })

  const props = defineProps({
    code: {
      type: String,
      required: true
    },

    inline: Boolean,

    language: {
      type: String,
      default: 'html'
    }
  })

  const prismGrammar = Prism.languages[props.language]

  if (!prismGrammar) {
    throw new Error(
      `"${props.language}" 不存在, 可用的 language 列表: https://prismjs.com/#supported-languages`
    )
  }

  const className = computed(() => `language-${props.language}`)

  const innerHTML = computed(() =>
    Prism.highlight(props.code, prismGrammar, props.language)
  )
</script>

<template>
  <code v-if="inline" :class="className" v-bind="$attrs" v-html="innerHTML" />

  <pre v-else :class="className" v-bind="$attrs" v-html="innerHTML" />
</template>
