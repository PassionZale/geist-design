<script setup lang="ts">
  defineOptions({ name: 'ex-footer' })

  defineProps({ title: { type: String, default: 'Attributes' } })
</script>

<template>
  <div class="ex-attributes">
    <h3 class="title">{{ title }}</h3>

    <g-card>
      <slot />
    </g-card>
  </div>
</template>

<style lang="scss" scoped>
  .ex-attributes {
    margin-top: rem(70);
    margin-bottom: rem(60);
  }
  .title {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1;
    margin-bottom: rem(22);
  }

  @include layout;
</style>

<style lang="scss">
  @include layout(xs) {
    .ex-attributes .g-card {
      overflow: scroll;

      table {
        display: block;
        overflow-x: scroll;
      }
    }
  }
</style>
