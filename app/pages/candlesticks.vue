<script setup>
const patterns = [
  {
    name: "Bullish Engulfing",
    type: "bullish",
    description: "A large green candle completely engulfs the previous red candle. Strong reversal signal at market bottoms.",
    meaning: "Buyers have overwhelmed sellers - expect upward movement",
    image: "https://www.investopedia.com/thmb/6Q1QN_qd7Y9k0XPp2bKNqDqA3P8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BullsihEngulfing-d1b7b7d47a5a47e58eb5e5a5f2f80c2a.png"
  },
  {
    name: "Bearish Engulfing",
    type: "bearish",
    description: "A large red candle completely engulfs the previous green candle. Strong reversal signal at market tops.",
    meaning: "Sellers have overwhelmed buyers - expect downward movement",
    image: "https://www.investopedia.com/thmb/mEsHnKYR_D5cE_8oaGHNqKp6h0g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bearishengulfingpattern-5c6a1c5146e0fb0001d52e1e.png"
  },
  {
    name: "Doji",
    type: "neutral",
    description: "Open and close are virtually equal, forming a cross or plus sign. Shows market indecision.",
    meaning: "Neither buyers nor sellers won - potential reversal point",
    image: "https://www.investopedia.com/thmb/qcMR8qpBwQQQw8qRvV_6Rqd0fek=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/doji-5c7524a3c9e77c00010a2a11.png"
  },
  {
    name: "Hammer",
    type: "bullish",
    description: "Small body at top with long lower wick (2-3x body). Found at bottom of downtrends.",
    meaning: "Sellers pushed price down but buyers fought back strongly",
    image: "https://www.investopedia.com/thmb/YdRwGqxNh9BH0_Y3RIjGSqE2xzE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hammer-5c7529cfc9e77c0001d6c2f4.png"
  },
  {
    name: "Shooting Star",
    type: "bearish",
    description: "Small body at bottom with long upper wick. Found at top of uptrends.",
    meaning: "Buyers pushed price up but sellers rejected it - reversal coming",
    image: "https://www.investopedia.com/thmb/rONDw4GE4PO5u4EYqGlmM9B4Xkc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shootingstar-5c7527f646e0fb0001e2f9ef.png"
  }
]

const typeColors = { bullish: 'green', bearish: 'red', neutral: 'gray' }
</script>

<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Candlestick Patterns</h1>
      <p class="text-gray-400">Learn to read price action through candlestick analysis</p>
    </div>

    <!-- Candlestick Anatomy -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-white">Understanding Candlestick Anatomy</h2>
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <img src="https://www.investopedia.com/thmb/8gSKvXqW8jfBhZQFQMJP_0Jg6gA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Candlestick.asp_final-c5c98538f8194ed3b0b8e6e11b0cca04.png" 
               alt="Candlestick Anatomy" class="rounded-lg w-full" />
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <UBadge color="green" class="mt-1">Body</UBadge>
            <p class="text-gray-300">The thick part showing the range between open and close. Green = close > open (bullish). Red = close < open (bearish).</p>
          </div>
          <div class="flex items-start gap-3">
            <UBadge color="gray" class="mt-1">Upper Wick</UBadge>
            <p class="text-gray-300">The line above the body showing the highest price reached. Long upper wick = selling pressure.</p>
          </div>
          <div class="flex items-start gap-3">
            <UBadge color="gray" class="mt-1">Lower Wick</UBadge>
            <p class="text-gray-300">The line below the body showing the lowest price. Long lower wick = buying pressure.</p>
          </div>
          <UAlert icon="i-heroicons-light-bulb" color="primary" variant="soft" title="Key Insight">
            Wicks show rejection. Upper wick = sellers won. Lower wick = buyers won.
          </UAlert>
        </div>
      </div>
    </UCard>

    <!-- Patterns -->
    <h2 class="text-xl font-semibold text-white mb-4">Key Patterns to Know</h2>
    <div class="grid gap-6">
      <UCard v-for="pattern in patterns" :key="pattern.name">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-center justify-center bg-gray-800 rounded-lg p-4">
            <img :src="pattern.image" :alt="pattern.name" class="max-h-48 object-contain rounded" 
                 onerror="this.src='https://via.placeholder.com/200x150?text=' + encodeURIComponent(this.alt)" />
          </div>
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-lg font-semibold text-white">{{ pattern.name }}</h3>
              <UBadge :color="typeColors[pattern.type]" variant="soft">{{ pattern.type }}</UBadge>
            </div>
            <p class="text-gray-300 mb-4">{{ pattern.description }}</p>
            <div class="p-3 rounded-lg bg-gray-800 border-l-4" :class="'border-' + typeColors[pattern.type] + '-500'">
              <p class="text-sm"><span class="font-semibold text-white">What it means:</span> {{ pattern.meaning }}</p>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Quick Reference -->
    <UCard class="mt-8">
      <template #header>
        <h2 class="text-xl font-semibold text-white">Quick Reference Guide</h2>
      </template>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <h4 class="font-semibold text-green-400 mb-2">Bullish Signals</h4>
          <ul class="text-sm text-gray-300 space-y-1">
            <li>• Long lower wicks (buying pressure)</li>
            <li>• Bullish engulfing at support</li>
            <li>• Hammer at bottom of downtrend</li>
            <li>• Doji after prolonged downtrend</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <h4 class="font-semibold text-red-400 mb-2">Bearish Signals</h4>
          <ul class="text-sm text-gray-300 space-y-1">
            <li>• Long upper wicks (selling pressure)</li>
            <li>• Bearish engulfing at resistance</li>
            <li>• Shooting star at top of uptrend</li>
            <li>• Doji after prolonged uptrend</li>
          </ul>
        </div>
      </div>
    </UCard>
  </div>
</template>
