<script setup lang="ts">
  defineOptions({ name: 'ex-note-filled' })
</script>

<template>
  <g-note filled>primary type note</g-note>

  <g-spacer />

  <g-note type="success" filled>success type note</g-note>

  <g-spacer />

  <g-note type="error" filled>error type note</g-note>

  <g-spacer />

  <g-note type="warning" filled>warning type note</g-note>

  <g-spacer />

  <g-note type="secondary" filled>secondary type note</g-note>

  <g-spacer />

  <g-note label="tip" type="error" filled>
    This is an error note with label.
    <a>A link to helpful information.</a>
  </g-note>
</template>
