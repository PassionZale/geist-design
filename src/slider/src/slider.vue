<script setup lang="ts">
  import { computed, ref, reactive, watch, onMounted, onBeforeUnmount } from 'vue'
  import { Props } from './props'
  import type { SliderEmits } from './emits'

  defineOptions({ name: 'GSlider' })

  const props = defineProps(Props)

  const emit = defineEmits<SliderEmits>()

  const state = reactive({
    currentX: 0,
    startX: 0,
    startDrag: false,
    isClick: false,
    railWidth: 0
  })

  const sliderRailRef = ref<HTMLDivElement | null>(null)

  const dots = computed(() => {
    if (props.step !== 1) {
      const totalPercent = props.max - props.min
      const divideDots = Math.floor(totalPercent / props.step) - 1
      const remainderDots = Math.ceil(totalPercent / props.step) - 1
      const dotsNum = !(totalPercent % props.step) ? divideDots : remainderDots
      const coordinates = []
      for (let i = 1; i <= dotsNum; i++)
        coordinates.push((props.step * i * 100) / totalPercent)
      return coordinates
    }
    return []
  })

  const privateValue = computed(() => {
    if (props.modelValue >= props.max) return props.max
    if (props.modelValue <= props.min) return props.min
    return Number.isInteger(props.modelValue)
      ? props.modelValue
      : props.modelValue.toFixed(1)
  })

  const setPrivateValue = (): void => {
    if (props.max - props.min < 1) {
      console.error('[Slider Error]max is at least 1 larger than min')
      return
    }
    // step divide the rail into n pieces, count per step's distance
    const stepDistance = (state.railWidth / (props.max - props.min)) * props.step
    // Calculate the currentX - startX has how many stepDistance, then * step can get the percent of the rail
    const slideDistance =
      Math.round((state.currentX - state.startX) / stepDistance) * props.step + props.min
    let value = Number.isInteger(slideDistance)
      ? slideDistance
      : Number.parseFloat(slideDistance.toFixed(1))
    if (state.currentX - state.startX <= 0) value = props.min
    if (state.currentX - state.startX >= state.railWidth) value = props.max

    emit('update:modelValue', value)
  }

  const sliderMoveStyle = computed(() => {
    return ((+privateValue.value - props.min) * 100) / (props.max - props.min)
  })

  const onSliderClick = (event: MouseEvent): void => {
    if (props.disabled) return

    state.isClick = true
    resetSize()
    state.startX = sliderRailRef.value?.getBoundingClientRect().x || 0
    state.currentX = event.clientX

    setPrivateValue()
  }

  const handleMouseDown = (): void => {
    if (props.disabled) return
    state.isClick = false
    state.startDrag = true
    state.startX = sliderRailRef.value?.getBoundingClientRect().x || 0
    window.addEventListener('mousemove', onDragging)
    window.addEventListener('touchmove', onDragging)
    window.addEventListener('mouseup', onDragEnd)
    window.addEventListener('touchend', onDragEnd)
  }

  const onDragging = (event: MouseEvent | TouchEvent): void => {
    if (!state.startDrag) return

    if (event.type === 'mousemove') {
      state.currentX = (event as MouseEvent).clientX
    }

    if (event.type === 'touchmove') {
      state.currentX = (event as TouchEvent).changedTouches[0].clientX
    }

    resetSize()
    setPrivateValue()
  }

  const onDragEnd = (): void => {
    state.startDrag = false
    window.removeEventListener('mousemove', onDragging)
    window.removeEventListener('mouseup', onDragEnd)
    window.removeEventListener('touchmove', onDragging)
    window.removeEventListener('touchend', onDragEnd)
  }

  const resetSize = (): void => {
    if (sliderRailRef.value) state.railWidth = sliderRailRef.value.clientWidth
  }

  watch([(): number => props.max, (): number => props.min], () => {
    setPrivateValue()
  })

  onMounted(() => {
    resetSize()
    window.addEventListener('resize', resetSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resetSize)
  })
</script>

<template>
  <div class="g-slider" :class="disabled ? 'disabled' : ''">
    <div ref="sliderRailRef" class="g-slider-rail" @click="onSliderClick">
      <div
        class="g-slider-handler"
        :class="state.isClick ? 'click_animation' : ''"
        :style="{ left: `${sliderMoveStyle}%` }"
        @mousedown.stop="handleMouseDown"
        @mouseup="onDragEnd"
        @touchstart.stop="handleMouseDown"
        @touchend="onDragEnd"
      >
        {{ privateValue }}
      </div>
      <template v-if="showDots">
        <div
          v-for="dot in dots"
          :key="dot"
          class="g-slider-dot"
          :style="{ left: `${dot}%` }"
        ></div>
      </template>
    </div>
  </div>
</template>
