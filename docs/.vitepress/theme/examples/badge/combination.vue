<script setup lang="ts">
  defineOptions({ name: 'ex-badge-combination' })
</script>

<template>
  <g-badge count="5" style="margin-right: 20px;">
    <g-avatar text="G" shape="square" />
  </g-badge>

  <g-badge count="10" status="success">
    <g-avatar text="G" shape="square" />
  </g-badge>

  <br />

  <p>
    你有&nbsp;
    <g-badge count="10+" status="error" dot>
      <a href="https://www.lovchun.com" target="_blank">未读消息</a>
    </g-badge>
  </p>
</template>
