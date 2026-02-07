<script setup lang="ts">
const { formulas, inputLabels } = useTradingTerms()

const selectedFormula = ref(0)
const calcValues = ref<Record<string, number>>({})

const currentFormula = computed(() => formulas[selectedFormula.value])
const calculatedResult = computed(() => currentFormula.value.calculate(calcValues.value))

function selectFormula(idx: number) {
  selectedFormula.value = idx
  calcValues.value = {}
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Trading Calculators</h1>
        <p class="text-gray-400">Essential calculations for risk management and position sizing.</p>
      </div>

      <!-- Formula Tabs -->
      <div class="flex flex-wrap gap-2 mb-8">
        <UButton
          v-for="(formula, idx) in formulas"
          :key="idx"
          @click="selectFormula(idx)"
          :color="selectedFormula === idx ? 'primary' : 'gray'"
          :variant="selectedFormula === idx ? 'solid' : 'soft'"
          size="sm"
        >
          {{ formula.name }}
        </UButton>
      </div>

      <UCard>
        <template #header>
          <div>
            <h2 class="text-xl font-semibold text-white">{{ currentFormula.name }}</h2>
            <p class="text-sm text-gray-400 mt-1">{{ currentFormula.description }}</p>
          </div>
        </template>

        <!-- Formula Display -->
        <div class="p-4 bg-gray-900 rounded-xl mb-6 font-mono text-center text-primary-400">
          {{ currentFormula.formula }}
        </div>

        <!-- Inputs -->
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <UFormGroup
            v-for="input in currentFormula.inputs"
            :key="input"
            :label="inputLabels[input]"
          >
            <UInput
              v-model.number="calcValues[input]"
              type="number"
              placeholder="0"
              size="lg"
            />
          </UFormGroup>
        </div>

        <!-- Result -->
        <div class="p-6 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl text-center border border-primary-500/30">
          <p class="text-sm text-primary-300 mb-1">Result</p>
          <p class="text-4xl font-bold text-white">{{ calculatedResult }}</p>
        </div>
      </UCard>

      <!-- Tips -->
      <UCard class="mt-6">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
            <h3 class="font-semibold text-amber-400">Risk Management Tips</h3>
          </div>
        </template>

        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Never risk more than <strong class="text-white">1-2%</strong> of your account on a single trade</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Always calculate position size <strong class="text-white">before</strong> entering a trade</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Aim for minimum <strong class="text-white">2:1 R:R</strong> (Risk to Reward ratio)</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Use leverage <strong class="text-white">cautiously</strong> - higher leverage = higher liquidation risk</span>
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>
