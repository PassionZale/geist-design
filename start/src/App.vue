<script setup lang="ts">
  import image from './assets/vue.svg'
  import { GIconAirplay, GIconGithub } from '@whouu/geist-design-icons'
</script>

<template>
  <g-avatar :src="image" size="small" />
  <g-avatar :src="image" />
  <g-avatar :src="image" size="big" />
  <g-avatar :src="image" size="huge" />
  <br />
  <g-avatar text="Ohqu" size="small" />
  <g-avatar text="Ohqu" />
  <g-avatar text="Ohqu" size="big" />
  <g-avatar text="Ohqu" size="huge" />
  <br />

  <g-button :icon="GIconAirplay">Geist Design</g-button>
  <g-button :icon="GIconAirplay" loading>Geist Design</g-button>

  <br />
  <g-button size="mini">Geist Design</g-button>
  <g-button size="small">Geist Design</g-button>
  <g-button size="medium">Geist Design</g-button>
  <g-button size="small" auto>auto width auto width auto width</g-button>
  <br />

  <g-button :icon="GIconAirplay" :icon-right="GIconGithub" type="primary" ghost>Geist Design</g-button>
  <br />
  
  <g-button :icon="GIconAirplay" :icon-right="GIconGithub" type="success" ghost>Geist Design</g-button>
  <br />
  
  <g-button :icon="GIconAirplay" :icon-right="GIconGithub" type="danger" ghost>Geist Design</g-button>
  <br />
  
  <g-button :icon="GIconAirplay" :icon-right="GIconGithub" type="warning" ghost>Geist Design</g-button>
  
  <br />
  <g-button disabled>Geist Design</g-button>
  <g-button shadow>Geist Design</g-button>
  <g-button shadow type="success">Geist Design</g-button>
  <g-button circular>Geist Design</g-button>
</template>
