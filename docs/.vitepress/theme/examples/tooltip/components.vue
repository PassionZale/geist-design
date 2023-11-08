<script setup lang="ts">
  defineOptions({ name: 'ex-tooltip-components' })
</script>

<template>
  <div class="examples">
    <div>
      <g-tooltip content="hello, @whouu/geist-design">
        <g-button size="small" auto>button</g-button>
      </g-tooltip>
    </div>

    <div>
      <g-tooltip content="hello, @whouu/geist-design">
        <g-spinner />
      </g-tooltip>
    </div>

    <div>
      <g-tooltip content="hello, @whouu/geist-design">
        <g-code>npm i @whouu/geist-design</g-code>
      </g-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.examples {
  display: flex;

  & > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
