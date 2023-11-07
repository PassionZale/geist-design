<script setup lang="ts">
  defineOptions({ name: 'ex-layout-alignment' })
</script>

<template>
  <g-row gutter="15">
    <g-col span="16"><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" justify="center" style="margin-top: 20px">
    <g-col span="16"><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" justify="end" style="margin-top: 20px">
    <g-col span="16"><div class="example"></div></g-col>
  </g-row>

  <g-row gutter="15" style="margin-top: 20px">
    <g-col span="9"><div class="example big"></div></g-col>

    <g-col span="5">
      <g-row class="full" align="top">
        <g-col><div class="example small"></div></g-col>
      </g-row>
    </g-col>

    <g-col span="5">
      <g-row class="full" align="middle">
        <g-col><div class="example small"></div></g-col>
      </g-row>
    </g-col>

    <g-col span="5">
      <g-row class="full" align="bottom">
        <g-col><div class="example small"></div></g-col>
      </g-row>
    </g-col>
  </g-row>
</template>

<style lang="scss" scoped>
  .example {
    background: var(--geist-success);
    padding: var(--geist-gap-half);
    border-radius: var(--geist-radius);
    color: var(--geist-background);
    font-size: 0.75rem;

    &.big {
      height: 60px;
    }

    &.small {
      height: 20px;
    }
  }

  .full {
    height: 100%;
  }
</style>
