<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { Icon } from '@iconify/vue'
import './styles.css'

const checkboxOne = ref(true)
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center' }">
    <label>
      <CheckboxRoot
        v-model="checkboxOne"
        class="CheckboxRoot"
      >
        <CheckboxIndicator class="CheckboxIndicator">
          <Icon icon="radix-icons:check" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="Label">Accept terms and conditions.</span>
    </label>
  </div>
</template>
