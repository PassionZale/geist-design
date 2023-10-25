<script setup lang="ts">
  defineOptions({ name: 'ex-typography-list' })

  const text = 'Geitst design typographt list'
</script>

<template>
  <div>
    <ul>
      <li>Static websites and static generators (React, Vue, Angular, etc)</li>
      <li>Code that renders HTML on the server-side</li>
      <li>{{ text }}</li>
    </ul>

    <ol>
      <li>Static websites and static generators (React, Vue, Angular, etc)</li>
      <li>Code that renders HTML on the server-side</li>
      <li>{{ text }}</li>
    </ol>
  </div>
</template>
