<script setup lang="ts">
  defineOptions({ name: 'ex-tooltip-basic' })
</script>

<template>
  <div class="examples">
    <div>
      <g-tooltip content="tooltip content" placement="top">
        <span>Top</span>
      </g-tooltip>
    </div>

    <div>
      <g-tooltip content="tooltip content" placement="left">
        <span>Left</span>
      </g-tooltip>
    </div>

    <div>
      <g-tooltip content="tooltip content" placement="right">
        <span>Right</span>
      </g-tooltip>
    </div>

    <div>
      <g-tooltip content="tooltip content" placement="bottom">
        <span>Bottom</span>
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
