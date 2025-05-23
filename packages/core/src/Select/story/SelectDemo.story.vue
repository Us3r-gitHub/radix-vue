<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '..'
import SelectItemWrapper from './_SelectItem.vue'

const fruit = ref(['Apple'])

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']

const POSITION = ['item-aligned', 'popper'] as const
</script>

<template>
  <Story
    title="Select/Demo"
    :layout="{ type: 'single', iframe: false }"
  >
    <Variant title="default">
      <div class="flex gap-4">
        <SelectRoot
          v-for="position in POSITION"
          :key="position"
          v-model="fruit"
          multiple
        >
          <SelectTrigger
            class="min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
            aria-label="Customise options"
          >
            <SelectValue placeholder="Please select a fruit" />
            <Icon
              icon="radix-icons:chevron-down"
              class="h-4 w-4"
            />
          </SelectTrigger>

          <SelectPortal>
            <Transition>
              <SelectContent
                class="min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                :side-offset="5"
                :position="position"
              >
                <SelectScrollUpButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-up" />
                </SelectScrollUpButton>

                <SelectViewport class="p-[5px]">
                  <SelectLabel
                    class="px-[25px] text-xs leading-[25px] text-mauve11"
                  >
                    Fruits
                  </SelectLabel>
                  <SelectGroup>
                    <SelectItemWrapper :options="options" />
                  </SelectGroup>
                  <SelectSeparator class="h-[1px] bg-violet6 m-[5px]" />
                  <SelectLabel
                    class="px-[25px] text-xs leading-[25px] text-mauve11"
                  >
                    Vegetables
                  </SelectLabel>
                  <SelectGroup>
                    <SelectItem
                      v-for="(option, index) in vegetables"
                      :key="index"
                      class="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                      :value="option"
                      :disabled="option === 'Courgette'"
                    >
                      <SelectItemIndicator
                        class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                      >
                        <Icon icon="radix-icons:check" />
                      </SelectItemIndicator>
                      <SelectItemText>
                        {{ option }}
                      </SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-down" />
                </SelectScrollDownButton>
              </SelectContent>
            </Transition>
          </SelectPortal>
        </SelectRoot>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
