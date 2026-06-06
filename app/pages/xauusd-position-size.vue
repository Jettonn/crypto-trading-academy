<script setup lang="ts">
// XAUUSD (spot gold) position size calculator
// 1 standard lot = 100 oz. A $1.00 move = $100 per standard lot.

type StopMode = 'price' | 'distance' | 'pips'

const accountSize = ref<number>(10000)
const riskPercent = ref<number>(1)

const stopMode = ref<StopMode>('price')
const entryPrice = ref<number>(2350)
const stopPrice = ref<number>(2345)
const stopDistance = ref<number>(5)
const stopPips = ref<number>(50)

// Broker pip definition for gold: 0.10 (most common) or 0.01 (a "point")
const pipSize = ref<number>(0.1)

const OZ_PER_LOT = 100

const stopModeOptions = [
  { value: 'price', label: 'Entry & Stop price' },
  { value: 'distance', label: 'Stop distance ($)' },
  { value: 'pips', label: 'Stop in pips' }
]

const pipSizeOptions = [
  { value: 0.1, label: '1 pip = 0.10 ($10 / lot)' },
  { value: 0.01, label: '1 pip = 0.01 ($1 / lot)' }
]

// Stop distance expressed in dollars of price movement, regardless of input mode
const stopDistanceUsd = computed(() => {
  if (stopMode.value === 'price') {
    return Math.abs((entryPrice.value || 0) - (stopPrice.value || 0))
  }
  if (stopMode.value === 'distance') {
    return Math.abs(stopDistance.value || 0)
  }
  // pips
  return Math.abs((stopPips.value || 0) * (pipSize.value || 0))
})

const riskAmount = computed(() => (accountSize.value || 0) * ((riskPercent.value || 0) / 100))

// Loss for a full standard lot if the stop is hit
const lossPerLot = computed(() => stopDistanceUsd.value * OZ_PER_LOT)

const lotSize = computed(() => {
  if (lossPerLot.value <= 0) return 0
  return riskAmount.value / lossPerLot.value
})

const ounces = computed(() => lotSize.value * OZ_PER_LOT)

// Value of one pip at the calculated position size
const pipValuePerLot = computed(() => (pipSize.value || 0) * OZ_PER_LOT)
const pipValueAtSize = computed(() => lotSize.value * pipValuePerLot.value)

// Stop distance expressed in pips (useful when entered via price)
const stopInPips = computed(() => {
  if (!pipSize.value) return 0
  return stopDistanceUsd.value / pipSize.value
})

const isValid = computed(() => riskAmount.value > 0 && stopDistanceUsd.value > 0)

function fmt(n: number, dp = 2) {
  if (!isFinite(n)) return '0'
  return n.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp })
}

// Round lot size down to broker-friendly micro-lot precision (0.01)
const lotSizeRounded = computed(() => Math.floor(lotSize.value * 100) / 100)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-2">
          <UBadge color="amber" variant="soft" size="xs">XAUUSD</UBadge>
          <UBadge color="primary" variant="soft" size="xs">Gold</UBadge>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">XAUUSD Position Size Calculator</h1>
        <p class="text-gray-400">
          Risk-based lot sizing for spot gold. Enter your account, risk, and stop —
          by price, distance, or pips — and get the exact lot size to trade.
        </p>
      </div>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trade inputs</h2>
        </template>

        <!-- Account & risk -->
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <UFormGroup label="Account Size ($)">
            <UInput v-model.number="accountSize" type="number" placeholder="10000" size="lg" />
          </UFormGroup>
          <UFormGroup label="Risk %">
            <UInput v-model.number="riskPercent" type="number" step="0.1" placeholder="1" size="lg" />
          </UFormGroup>
        </div>

        <!-- Stop mode selector -->
        <UFormGroup label="How do you want to enter your stop loss?" class="mb-4">
          <div class="flex flex-wrap gap-2">
            <UButton
              v-for="opt in stopModeOptions"
              :key="opt.value"
              size="sm"
              :color="stopMode === opt.value ? 'primary' : 'gray'"
              :variant="stopMode === opt.value ? 'solid' : 'soft'"
              @click="stopMode = opt.value as StopMode"
            >
              {{ opt.label }}
            </UButton>
          </div>
        </UFormGroup>

        <!-- Stop inputs (mode dependent) -->
        <div v-if="stopMode === 'price'" class="grid sm:grid-cols-2 gap-4 mb-6">
          <UFormGroup label="Entry Price ($)">
            <UInput v-model.number="entryPrice" type="number" step="0.01" placeholder="2350.00" size="lg" />
          </UFormGroup>
          <UFormGroup label="Stop Loss Price ($)">
            <UInput v-model.number="stopPrice" type="number" step="0.01" placeholder="2345.00" size="lg" />
          </UFormGroup>
        </div>

        <div v-else-if="stopMode === 'distance'" class="mb-6">
          <UFormGroup label="Stop Distance ($ of price movement)">
            <UInput v-model.number="stopDistance" type="number" step="0.01" placeholder="5.00" size="lg" />
          </UFormGroup>
        </div>

        <div v-else class="grid sm:grid-cols-2 gap-4 mb-6">
          <UFormGroup label="Stop Loss (pips)">
            <UInput v-model.number="stopPips" type="number" step="1" placeholder="50" size="lg" />
          </UFormGroup>
          <UFormGroup label="Pip Definition (broker)">
            <USelectMenu
              v-model="pipSize"
              :options="pipSizeOptions"
              value-attribute="value"
              option-attribute="label"
              size="lg"
            />
          </UFormGroup>
        </div>

        <!-- Result -->
        <div class="p-6 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl text-center border border-primary-500/30 mb-4">
          <p class="text-sm text-primary-300 mb-1">Position Size</p>
          <p v-if="isValid" class="text-4xl font-bold text-white">{{ fmt(lotSizeRounded, 2) }} <span class="text-2xl text-primary-300">lots</span></p>
          <p v-else class="text-2xl font-bold text-gray-500">—</p>
          <p v-if="isValid" class="text-sm text-gray-400 mt-1">≈ {{ fmt(ounces, 1) }} oz of gold</p>
        </div>

        <!-- Breakdown -->
        <div v-if="isValid" class="grid sm:grid-cols-2 gap-3">
          <div class="p-4 bg-gray-900 rounded-xl">
            <p class="text-xs text-gray-400 mb-1">Risk amount</p>
            <p class="text-lg font-semibold text-white">${{ fmt(riskAmount) }}</p>
          </div>
          <div class="p-4 bg-gray-900 rounded-xl">
            <p class="text-xs text-gray-400 mb-1">Stop distance</p>
            <p class="text-lg font-semibold text-white">${{ fmt(stopDistanceUsd) }} <span class="text-sm text-gray-500">/ {{ fmt(stopInPips, 0) }} pips</span></p>
          </div>
          <div class="p-4 bg-gray-900 rounded-xl">
            <p class="text-xs text-gray-400 mb-1">Loss if stop hit (this size)</p>
            <p class="text-lg font-semibold text-red-400">−${{ fmt(stopDistanceUsd * ounces) }}</p>
          </div>
          <div class="p-4 bg-gray-900 rounded-xl">
            <p class="text-xs text-gray-400 mb-1">Value per pip (this size)</p>
            <p class="text-lg font-semibold text-white">${{ fmt(pipValueAtSize) }}</p>
          </div>
        </div>
      </UCard>

      <!-- Formula reference -->
      <UCard class="mt-6">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-variable" class="w-5 h-5 text-primary-400" />
            <h3 class="font-semibold text-white">The formula</h3>
          </div>
        </template>
        <div class="p-4 bg-gray-900 rounded-xl font-mono text-center text-primary-400 text-sm mb-4">
          Lots = (Account × Risk%) ÷ (Stop&nbsp;Distance&nbsp;$ × 100)
        </div>
        <p class="text-sm text-gray-400">
          1 standard lot of XAUUSD = <strong class="text-white">100 oz</strong>, so a
          <strong class="text-white">$1.00</strong> move = <strong class="text-white">$100</strong> per lot.
          When entering a stop in pips, the distance in dollars is
          <strong class="text-white">pips × pip size</strong> (0.10 or 0.01 depending on your broker).
        </p>
      </UCard>

      <!-- Tips -->
      <UCard class="mt-6">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
            <h3 class="font-semibold text-amber-400">Gold-specific tips</h3>
          </div>
        </template>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Confirm your broker's <strong class="text-white">pip definition</strong> for gold — mixing up 0.10 and 0.01 changes risk by 10×.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Gold is volatile ($20–40 daily swings) — set the stop from <strong class="text-white">structure</strong>, then size to it. Never the reverse.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">Keep risk at <strong class="text-white">1–2%</strong> per trade. The lot size is rounded <strong class="text-white">down</strong> to stay within risk.</span>
          </li>
          <li class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
            <span class="text-gray-300">This assumes a <strong class="text-white">USD-denominated</strong> account. Convert risk at the current FX rate otherwise.</span>
          </li>
        </ul>
      </UCard>
    </div>
  </div>
</template>
