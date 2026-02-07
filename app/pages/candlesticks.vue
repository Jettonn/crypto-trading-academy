<script setup lang="ts">
const { candlestickPatterns } = useTradingTerms()

const anatomy = [
  {
    type: 'bullish',
    title: 'Bullish Candle',
    icon: '📈',
    color: 'green',
    points: [
      'Close > Open (price went up)',
      'Body shows buying pressure',
      'Upper wick = rejection from highs',
      'Lower wick = buyers defended lows'
    ]
  },
  {
    type: 'bearish',
    title: 'Bearish Candle',
    icon: '📉',
    color: 'red',
    points: [
      'Close < Open (price went down)',
      'Body shows selling pressure',
      'Upper wick = sellers defended highs',
      'Lower wick = rejection from lows'
    ]
  }
]

const svgPatterns: Record<string, string> = {
  'bullish-engulfing': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="20" x2="40" y2="80" stroke="#888" stroke-width="2"/>
    <rect x="30" y="35" width="20" height="30" fill="#ef4444" rx="2"/>
    <line x1="80" y1="15" x2="80" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="65" y="25" width="30" height="45" fill="#22c55e" rx="2"/>
  </svg>`,
  'bearish-engulfing': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="40" y1="20" x2="40" y2="80" stroke="#888" stroke-width="2"/>
    <rect x="30" y="35" width="20" height="30" fill="#22c55e" rx="2"/>
    <line x1="80" y1="15" x2="80" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="65" y="25" width="30" height="45" fill="#ef4444" rx="2"/>
  </svg>`,
  'doji': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="15" x2="60" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="45" y="48" width="30" height="4" fill="#a3a3a3" rx="1"/>
  </svg>`,
  'hammer': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="20" x2="60" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="48" y="20" width="24" height="15" fill="#22c55e" rx="2"/>
  </svg>`,
  'shooting-star': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="60" y1="15" x2="60" y2="80" stroke="#888" stroke-width="2"/>
    <rect x="48" y="65" width="24" height="15" fill="#ef4444" rx="2"/>
  </svg>`,
  'morning-star': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="25" y1="15" x2="25" y2="75" stroke="#888" stroke-width="2"/>
    <rect x="17" y="20" width="16" height="40" fill="#ef4444" rx="2"/>
    <line x1="60" y1="55" x2="60" y2="80" stroke="#888" stroke-width="2"/>
    <rect x="53" y="62" width="14" height="8" fill="#a3a3a3" rx="1"/>
    <line x1="95" y1="25" x2="95" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="87" y="35" width="16" height="40" fill="#22c55e" rx="2"/>
  </svg>`,
  'evening-star': `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="25" y1="25" x2="25" y2="85" stroke="#888" stroke-width="2"/>
    <rect x="17" y="40" width="16" height="40" fill="#22c55e" rx="2"/>
    <line x1="60" y1="20" x2="60" y2="45" stroke="#888" stroke-width="2"/>
    <rect x="53" y="28" width="14" height="8" fill="#a3a3a3" rx="1"/>
    <line x1="95" y1="15" x2="95" y2="75" stroke="#888" stroke-width="2"/>
    <rect x="87" y="20" width="16" height="40" fill="#ef4444" rx="2"/>
  </svg>`,
  'three-white-soldiers': `<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="45" x2="30" y2="90" stroke="#888" stroke-width="2"/>
    <rect x="22" y="55" width="16" height="30" fill="#22c55e" rx="2"/>
    <line x1="70" y1="30" x2="70" y2="75" stroke="#888" stroke-width="2"/>
    <rect x="62" y="38" width="16" height="30" fill="#22c55e" rx="2"/>
    <line x1="110" y1="12" x2="110" y2="60" stroke="#888" stroke-width="2"/>
    <rect x="102" y="20" width="16" height="30" fill="#22c55e" rx="2"/>
  </svg>`
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Candlestick Patterns</h1>
      <p class="text-gray-400">Understanding candle anatomy and common reversal patterns.</p>
    </div>

    <!-- Anatomy Section -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-white">Candlestick Anatomy</h2>
      </template>

      <!-- Visual Anatomy Diagram -->
      <div class="flex justify-center mb-6">
        <div class="grid grid-cols-2 gap-8 max-w-md w-full">
          <div class="text-center">
            <svg viewBox="0 0 80 160" class="w-20 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="5" x2="40" y2="155" stroke="#888" stroke-width="2"/>
              <rect x="20" y="40" width="40" height="70" fill="#22c55e" rx="3"/>
              <text x="76" y="10" fill="#9ca3af" font-size="8" text-anchor="end">High</text>
              <text x="76" y="45" fill="#22c55e" font-size="8" text-anchor="end">Close</text>
              <text x="76" y="115" fill="#22c55e" font-size="8" text-anchor="end">Open</text>
              <text x="76" y="158" fill="#9ca3af" font-size="8" text-anchor="end">Low</text>
              <line x1="62" y1="8" x2="42" y2="8" stroke="#9ca3af" stroke-width="0.5" stroke-dasharray="2"/>
              <line x1="62" y1="43" x2="62" y2="43" stroke="#22c55e" stroke-width="0.5" stroke-dasharray="2"/>
              <line x1="62" y1="155" x2="42" y2="155" stroke="#9ca3af" stroke-width="0.5" stroke-dasharray="2"/>
            </svg>
            <span class="text-green-400 font-semibold text-sm">Bullish</span>
          </div>
          <div class="text-center">
            <svg viewBox="0 0 80 160" class="w-20 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="5" x2="40" y2="155" stroke="#888" stroke-width="2"/>
              <rect x="20" y="40" width="40" height="70" fill="#ef4444" rx="3"/>
              <text x="76" y="10" fill="#9ca3af" font-size="8" text-anchor="end">High</text>
              <text x="76" y="45" fill="#ef4444" font-size="8" text-anchor="end">Open</text>
              <text x="76" y="115" fill="#ef4444" font-size="8" text-anchor="end">Close</text>
              <text x="76" y="158" fill="#9ca3af" font-size="8" text-anchor="end">Low</text>
            </svg>
            <span class="text-red-400 font-semibold text-sm">Bearish</span>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="candle in anatomy"
          :key="candle.type"
          :class="[
            'p-5 rounded-xl border',
            candle.color === 'green' ? 'bg-green-500/5 border-green-500/30' : 'bg-red-500/5 border-red-500/30'
          ]"
        >
          <h3 :class="['font-bold text-center text-lg mb-4', candle.color === 'green' ? 'text-green-400' : 'text-red-400']">
            {{ candle.title }}
          </h3>
          <ul class="space-y-2">
            <li v-for="point in candle.points" :key="point" class="flex items-start gap-2 text-sm text-gray-300">
              <UIcon name="i-heroicons-check" :class="['w-4 h-4 mt-0.5 shrink-0', candle.color === 'green' ? 'text-green-400' : 'text-red-400']" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </UCard>

    <!-- Patterns -->
    <h2 class="text-xl font-semibold text-white mb-4">Common Patterns</h2>

    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <UCard
        v-for="pattern in candlestickPatterns"
        :key="pattern.name"
        :class="[
          pattern.type === 'bullish' ? 'ring-1 ring-green-500/20' :
          pattern.type === 'bearish' ? 'ring-1 ring-red-500/20' : ''
        ]"
      >
        <div class="flex items-center gap-3 mb-3">
          <h3 class="font-semibold text-white">{{ pattern.name }}</h3>
          <UBadge
            :color="pattern.type === 'bullish' ? 'green' : pattern.type === 'bearish' ? 'red' : 'gray'"
            variant="soft"
            size="xs"
          >
            {{ pattern.type }}
          </UBadge>
        </div>
        <p class="text-sm text-gray-400 mb-4">{{ pattern.description }}</p>
        <div class="bg-gray-900 rounded-lg p-4 flex items-center justify-center min-h-[120px]">
          <div v-if="svgPatterns[pattern.svg]" class="w-28 h-24" v-html="svgPatterns[pattern.svg]" />
          <span v-else class="text-gray-500 text-sm">Pattern illustration</span>
        </div>
      </UCard>
    </div>

    <!-- Key Takeaway -->
    <UCard :ui="{ background: 'bg-amber-500/5', ring: 'ring-1 ring-amber-500/20' }">
      <div class="flex items-start gap-4">
        <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
          <UIcon name="i-heroicons-key" class="w-5 h-5" />
        </div>
        <div>
          <h3 class="font-semibold text-amber-400 mb-2">Key Takeaway</h3>
          <p class="text-gray-300 leading-relaxed">
            Don't memorize candle names - understand the <strong class="text-white">LOGIC</strong>.
            Long wicks show rejection. Large bodies show momentum.
            <strong class="text-amber-400">Context matters:</strong> patterns at support/resistance
            or trend tops/bottoms are much more significant than those in the middle of a range.
          </p>
        </div>
      </div>
    </UCard>
  </div>
</template>
