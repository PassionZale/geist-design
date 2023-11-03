<script setup lang="ts">
  defineOptions({ name: 'ex-note-type' })
</script>

<template>
  <g-note>primary type note</g-note>

  <g-spacer />

  <g-note type="success">success type note</g-note>
  
  <g-spacer />

  <g-note type="error">error type note</g-note>

  <g-spacer />

  <g-note type="warning">warning type note</g-note>

  <g-spacer />

  <g-note type="secondary">secondary type note</g-note>

  <g-spacer />

  <g-note label="tip" type="error">
    This is an error note with label.
    <a>A link to helpful information.</a>
  </g-note>
</template>
