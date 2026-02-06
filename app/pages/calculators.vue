<script setup>
// Position Size Calculator
const positionCalc = reactive({ accountSize: 10000, riskPercent: 1, entryPrice: 50000, stopLoss: 49000 })
const positionSize = computed(() => {
  const riskAmount = positionCalc.accountSize * (positionCalc.riskPercent / 100)
  const priceDiff = Math.abs(positionCalc.entryPrice - positionCalc.stopLoss)
  return priceDiff > 0 ? (riskAmount / priceDiff).toFixed(4) : '0'
})
const riskAmount = computed(() => (positionCalc.accountSize * (positionCalc.riskPercent / 100)).toFixed(2))

// Risk:Reward Calculator  
const rrCalc = reactive({ entryPrice: 50000, targetPrice: 52000, stopLoss: 49000 })
const rrRatio = computed(() => {
  const risk = Math.abs(rrCalc.entryPrice - rrCalc.stopLoss)
  const reward = Math.abs(rrCalc.targetPrice - rrCalc.entryPrice)
  return risk > 0 ? (reward / risk).toFixed(2) : '0'
})

// P/L Calculator
const plCalc = reactive({ positionSize: 0.1, entryPrice: 50000, exitPrice: 51000 })
const profitLoss = computed(() => {
  const pl = plCalc.positionSize * (plCalc.exitPrice - plCalc.entryPrice)
  return pl.toFixed(2)
})

// Leverage Calculator
const levCalc = reactive({ positionValue: 10000, marginUsed: 1000 })
const leverage = computed(() => levCalc.marginUsed > 0 ? (levCalc.positionValue / levCalc.marginUsed).toFixed(1) : '0')
</script>

<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Trading Calculators</h1>
      <p class="text-gray-400">Essential tools for risk management</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Position Size Calculator -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-calculator" class="text-primary-400" />
            <h3 class="font-semibold text-white">Position Size Calculator</h3>
          </div>
        </template>
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Account Size ($)</label>
            <UInput v-model.number="positionCalc.accountSize" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Risk Per Trade (%)</label>
            <UInput v-model.number="positionCalc.riskPercent" type="number" step="0.1" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Entry Price ($)</label>
            <UInput v-model.number="positionCalc.entryPrice" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Stop Loss ($)</label>
            <UInput v-model.number="positionCalc.stopLoss" type="number" />
          </div>
          <div class="pt-4 border-t border-gray-700">
            <p class="text-sm text-gray-400">Risk Amount: <span class="text-white">${{ riskAmount }}</span></p>
            <p class="text-lg font-semibold text-primary-400">Position Size: {{ positionSize }} units</p>
          </div>
          <UAlert icon="i-heroicons-light-bulb" color="primary" variant="soft" title="Formula">
            Position Size = (Account × Risk%) ÷ |Entry - Stop Loss|
          </UAlert>
        </div>
      </UCard>

      <!-- Risk:Reward Calculator -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-scale" class="text-green-400" />
            <h3 class="font-semibold text-white">Risk:Reward Calculator</h3>
          </div>
        </template>
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Entry Price ($)</label>
            <UInput v-model.number="rrCalc.entryPrice" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Target Price ($)</label>
            <UInput v-model.number="rrCalc.targetPrice" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Stop Loss ($)</label>
            <UInput v-model.number="rrCalc.stopLoss" type="number" />
          </div>
          <div class="pt-4 border-t border-gray-700">
            <p class="text-lg font-semibold" :class="parseFloat(rrRatio) >= 2 ? 'text-green-400' : 'text-yellow-400'">
              R:R Ratio: {{ rrRatio }}:1 {{ parseFloat(rrRatio) >= 2 ? '✓ Good' : '⚠ Consider higher target' }}
            </p>
          </div>
          <UAlert icon="i-heroicons-light-bulb" color="green" variant="soft" title="Tip">
            Aim for at least 2:1 R:R ratio. This means potential profit is 2x potential loss.
          </UAlert>
        </div>
      </UCard>

      <!-- P/L Calculator -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-banknotes" class="text-amber-400" />
            <h3 class="font-semibold text-white">Profit/Loss Calculator</h3>
          </div>
        </template>
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Position Size</label>
            <UInput v-model.number="plCalc.positionSize" type="number" step="0.01" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Entry Price ($)</label>
            <UInput v-model.number="plCalc.entryPrice" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Exit Price ($)</label>
            <UInput v-model.number="plCalc.exitPrice" type="number" />
          </div>
          <div class="pt-4 border-t border-gray-700">
            <p class="text-lg font-semibold" :class="parseFloat(profitLoss) >= 0 ? 'text-green-400' : 'text-red-400'">
              {{ parseFloat(profitLoss) >= 0 ? '+' : '' }}${{ profitLoss }}
            </p>
          </div>
        </div>
      </UCard>

      <!-- Leverage Calculator -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-arrows-pointing-out" class="text-red-400" />
            <h3 class="font-semibold text-white">Leverage Calculator</h3>
          </div>
        </template>
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Position Value ($)</label>
            <UInput v-model.number="levCalc.positionValue" type="number" />
          </div>
          <div>
            <label class="text-sm text-gray-400 mb-1 block">Margin Used ($)</label>
            <UInput v-model.number="levCalc.marginUsed" type="number" />
          </div>
          <div class="pt-4 border-t border-gray-700">
            <p class="text-lg font-semibold" :class="parseFloat(leverage) <= 5 ? 'text-green-400' : parseFloat(leverage) <= 10 ? 'text-yellow-400' : 'text-red-400'">
              {{ leverage }}x Leverage
            </p>
          </div>
          <UAlert icon="i-heroicons-exclamation-triangle" color="red" variant="soft" title="Warning">
            High leverage increases both potential gains AND losses. Start with low leverage (2-5x).
          </UAlert>
        </div>
      </UCard>
    </div>
  </div>
</template>
