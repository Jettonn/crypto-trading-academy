<script setup lang="ts">
const activeSection = ref('basics')

const sections = [
  { id: 'basics', label: 'MS Basics', icon: 'i-heroicons-chart-bar' },
  { id: 'bullish', label: 'Bullish MS', icon: 'i-heroicons-arrow-trending-up' },
  { id: 'bearish', label: 'Bearish MS', icon: 'i-heroicons-arrow-trending-down' },
  { id: 'deep-swings', label: 'Deep Swings', icon: 'i-heroicons-arrows-up-down' },
  { id: 'pullbacks', label: 'Pullbacks', icon: 'i-heroicons-arrow-uturn-down' },
  { id: 'choch', label: 'CHoCH', icon: 'i-heroicons-arrow-path' },
  { id: 'substructure', label: 'Swing vs Sub', icon: 'i-heroicons-squares-2x2' },
  { id: 'setups', label: 'Trade Setups', icon: 'i-heroicons-bolt' },
]

const vocabulary = [
  { term: 'HH', full: 'Higher High', desc: 'A swing high that is higher than the previous swing high' },
  { term: 'HL', full: 'Higher Low', desc: 'A swing low that is higher than the previous swing low' },
  { term: 'LL', full: 'Lower Low', desc: 'A swing low that is lower than the previous swing low' },
  { term: 'LH', full: 'Lower High', desc: 'A swing high that is lower than the previous swing high' },
  { term: 'BOS', full: 'Break of Structure', desc: 'When price takes out a significant high or low' },
  { term: 'MS', full: 'Market Structure', desc: 'The framework defining the current trend' },
  { term: 'CHoCH', full: 'Change of Character', desc: 'First sign of substructure switching direction' },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <UBadge color="primary" variant="soft">Week 2</UBadge>
        <UBadge color="gray" variant="soft">Market Structure</UBadge>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Market Structure</h1>
      <p class="text-gray-400">
        Market structure defines the framework the current market is trading in.
        It tells you whether the market is trending or not.
      </p>
    </div>

    <!-- Section Tabs -->
    <div class="flex flex-wrap gap-2 mb-8">
      <UButton
        v-for="section in sections"
        :key="section.id"
        @click="activeSection = section.id"
        :color="activeSection === section.id ? 'primary' : 'gray'"
        :variant="activeSection === section.id ? 'solid' : 'soft'"
        :icon="section.icon"
        size="sm"
      >
        {{ section.label }}
      </UButton>
    </div>

    <!-- BASICS -->
    <div v-if="activeSection === 'basics'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">What is Market Structure?</h2>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          Market structure defines the structure that the current market is trading in.
          It is what tells you whether the market is trending or not. Studying market structure
          is fundamental to all trading as it helps you identify the direction of the current trend.
        </p>
        <p class="text-gray-300 leading-relaxed">
          Use Higher Time Frame (HTF) market structure to guide how you form a bias
          while trading a Lower Time Frame (LTF) range.
        </p>
      </UCard>

      <!-- Vocabulary -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Key Vocabulary</h2>
        </template>
        <div class="grid sm:grid-cols-2 gap-3">
          <div
            v-for="item in vocabulary"
            :key="item.term"
            class="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
          >
            <div class="flex items-center gap-3 mb-1">
              <span class="font-mono font-bold text-primary-400">{{ item.term }}</span>
              <span class="text-sm text-gray-400">{{ item.full }}</span>
            </div>
            <p class="text-sm text-gray-300">{{ item.desc }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- BULLISH MS -->
    <div v-if="activeSection === 'bullish'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Bullish Market Structure</h2>
            <UBadge color="green" variant="soft">Uptrend</UBadge>
          </div>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          A bullish market structure is identified when the price makes a series of
          <strong class="text-green-400">higher highs (HH)</strong> and
          <strong class="text-green-400">higher lows (HL)</strong>.
          Every time the price takes out a high to form a higher high, we get a
          <strong class="text-white">Break of Structure (BOS)</strong>.
        </p>

        <!-- Bullish MS Theory Diagram -->
        <div class="bg-gray-900 rounded-xl p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Bullish MS - Theory</p>
          <svg viewBox="0 0 500 200" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Uptrend line -->
            <polyline points="30,170 80,120 130,140 200,80 260,110 340,40 400,70 460,20"
              fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- HH markers -->
            <circle cx="80" cy="120" r="4" fill="#22c55e"/>
            <text x="80" y="112" fill="#9ca3af" font-size="10" text-anchor="middle">HL</text>
            <circle cx="200" cy="80" r="4" fill="#22c55e"/>
            <text x="200" y="72" fill="#22c55e" font-size="10" text-anchor="middle">HH</text>
            <circle cx="260" cy="110" r="4" fill="#22c55e"/>
            <text x="260" y="126" fill="#9ca3af" font-size="10" text-anchor="middle">HL</text>
            <circle cx="340" cy="40" r="4" fill="#22c55e"/>
            <text x="340" y="32" fill="#22c55e" font-size="10" text-anchor="middle">HH</text>
            <circle cx="400" cy="70" r="4" fill="#22c55e"/>
            <text x="400" y="86" fill="#9ca3af" font-size="10" text-anchor="middle">HL</text>
            <!-- BOS lines -->
            <line x1="200" y1="80" x2="340" y2="80" stroke="#22c55e" stroke-width="1" stroke-dasharray="4"/>
            <text x="270" y="75" fill="#22c55e" font-size="9" text-anchor="middle">BOS</text>
          </svg>
        </div>

        <!-- Real chart image -->
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Bullish MS in reality (4H BTC chart)</p>
          <img src="/images/market-structure/ms1-page-06.png" alt="Bullish MS on 4H BTC chart" class="w-full" loading="lazy" />
        </div>
      </UCard>
    </div>

    <!-- BEARISH MS -->
    <div v-if="activeSection === 'bearish'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Bearish Market Structure</h2>
            <UBadge color="red" variant="soft">Downtrend</UBadge>
          </div>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          A bearish market structure is identified when the price makes a series of
          <strong class="text-red-400">lower lows (LL)</strong> and
          <strong class="text-red-400">lower highs (LH)</strong>.
          Every time the price takes out a low to form a lower low, we get a
          <strong class="text-white">Break of Structure (BOS)</strong>.
        </p>

        <!-- Bearish MS Theory Diagram -->
        <div class="bg-gray-900 rounded-xl p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Bearish MS - Theory</p>
          <svg viewBox="0 0 500 200" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
            <polyline points="30,30 80,80 130,60 200,120 260,90 340,160 400,130 460,180"
              fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="80" cy="80" r="4" fill="#ef4444"/>
            <text x="80" y="95" fill="#ef4444" font-size="10" text-anchor="middle">LL</text>
            <circle cx="130" cy="60" r="4" fill="#ef4444"/>
            <text x="130" y="52" fill="#9ca3af" font-size="10" text-anchor="middle">LH</text>
            <circle cx="200" cy="120" r="4" fill="#ef4444"/>
            <text x="200" y="135" fill="#ef4444" font-size="10" text-anchor="middle">LL</text>
            <circle cx="260" cy="90" r="4" fill="#ef4444"/>
            <text x="260" y="82" fill="#9ca3af" font-size="10" text-anchor="middle">LH</text>
            <circle cx="340" cy="160" r="4" fill="#ef4444"/>
            <text x="340" y="175" fill="#ef4444" font-size="10" text-anchor="middle">LL</text>
            <!-- BOS lines -->
            <line x1="80" y1="80" x2="200" y2="80" stroke="#ef4444" stroke-width="1" stroke-dasharray="4"/>
            <text x="140" y="75" fill="#ef4444" font-size="9" text-anchor="middle">BOS</text>
            <line x1="200" y1="120" x2="340" y2="120" stroke="#ef4444" stroke-width="1" stroke-dasharray="4"/>
            <text x="270" y="115" fill="#ef4444" font-size="9" text-anchor="middle">BOS</text>
          </svg>
        </div>

        <!-- Real chart image -->
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Bearish MS in reality (4H BTC chart)</p>
          <img src="/images/market-structure/ms1-page-07.png" alt="Bearish MS on 4H BTC chart" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <div class="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">
            <strong class="text-amber-400">Remember:</strong> "The trend is your friend." If you can use market structure to identify
            the trend, more often than not, the price will continue in the same direction.
          </p>
        </div>
      </div>
    </div>

    <!-- DEEP SWINGS -->
    <div v-if="activeSection === 'deep-swings'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Deep Swings</h2>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          One of the most common questions about market structure is: <strong class="text-white">which swing points should I use?</strong>
          Look for <strong class="text-primary-400">deep swing highs and lows</strong> on higher timeframes.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-semibold text-green-400 mb-2">Deep Swing High</h4>
            <p class="text-sm text-gray-300">The highest point that causes the swing low. It's the peak that leads to the subsequent pullback.</p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-semibold text-red-400 mb-2">Deep Swing Low</h4>
            <p class="text-sm text-gray-300">The lowest point that causes a swing high. It's the trough from which price reverses upward.</p>
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden mb-4">
          <p class="text-xs text-gray-500 px-4 pt-3">Deep swing high example (1D BTC chart)</p>
          <img src="/images/market-structure/ms1-page-09.png" alt="Deep swing high example" class="w-full" loading="lazy" />
        </div>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Deep swing low example (1D BTC chart)</p>
          <img src="/images/market-structure/ms1-page-10.png" alt="Deep swing low example" class="w-full" loading="lazy" />
        </div>
      </UCard>
    </div>

    <!-- PULLBACKS -->
    <div v-if="activeSection === 'pullbacks'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trading Pullbacks</h2>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          After every BOS, expect a pullback on that same timeframe. This is where market structure
          becomes actionable:
          <strong class="text-primary-400">never buy right after a BOS - wait for the pullback.</strong>
        </p>

        <!-- Theory diagram -->
        <div class="bg-gray-900 rounded-xl p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Short on a pullback - Theory</p>
          <svg viewBox="0 0 500 200" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Uptrend then reversal -->
            <polyline points="30,160 80,100 120,130 170,60 210,90 250,40 300,70"
              fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- BOS and reversal -->
            <polyline points="300,70 340,50 370,80 410,120 440,100 470,150"
              fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Labels -->
            <text x="250" y="32" fill="#22c55e" font-size="10" text-anchor="middle">HH</text>
            <text x="300" y="62" fill="#9ca3af" font-size="9" text-anchor="middle">HL</text>
            <line x1="170" y1="60" x2="340" y2="60" stroke="#ef4444" stroke-width="1" stroke-dasharray="3"/>
            <text x="290" y="55" fill="#ef4444" font-size="9" text-anchor="middle">Failure</text>
            <text x="370" y="74" fill="#ef4444" font-size="9" text-anchor="middle">BOS</text>
            <text x="440" y="94" fill="#fbbf24" font-size="9" text-anchor="middle">Entry</text>
            <!-- Arrow for pullback entry -->
            <line x1="440" y1="100" x2="440" y2="146" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
            <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24"/></marker></defs>
          </svg>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Pullback trade example (ETH 1D chart)</p>
          <img src="/images/market-structure/ms1-page-12.png" alt="Pullback trade on ETH 1D chart" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <div class="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">
            <strong class="text-amber-400">Key Rule:</strong> If a BOS occurs, look for an opportunity to
            long/short on a pullback. Never trade breakouts without context.
          </p>
        </div>
      </div>
    </div>

    <!-- CHoCH -->
    <div v-if="activeSection === 'choch'" class="space-y-6">

      <!-- 1. Simple explanation -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Change of Character (CHoCH)</h2>
            <UBadge color="yellow" variant="soft">Early Warning</UBadge>
          </div>
        </template>

        <!-- The core idea -->
        <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20 mb-6">
          <p class="text-gray-200 text-lg leading-relaxed">
            <strong class="text-primary-400">BOS</strong> tells you the trend <em>is continuing</em>.
            <strong class="text-primary-400">CHoCH</strong> is the first warning sign that the trend might be about to
            <em>pause or reverse</em>.
          </p>
        </div>

        <!-- Real-world analogy -->
        <div class="p-5 rounded-xl bg-gray-800 border border-gray-700 mb-6">
          <div class="flex items-start gap-3">
            <span class="text-2xl shrink-0">💡</span>
            <div>
              <h4 class="font-semibold text-white mb-2">Think of it like a car</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Imagine a car driving uphill. <strong class="text-green-400">BOS</strong> is the car passing each mile marker
                - it confirms the car is still going up. <strong class="text-yellow-400">Bearish CHoCH</strong> is when you
                notice the car starts tapping its brakes for the first time. It hasn't turned around yet, but it's the
                <em>first sign</em> that it might slow down. Then <strong class="text-green-400">Bullish CHoCH</strong> is
                when the car stops braking and presses the gas again - it might be about to resume going uphill.
              </p>
            </div>
          </div>
        </div>

        <!-- The two types side by side -->
        <h3 class="text-lg font-semibold text-white mb-3">The Two Types of CHoCH</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-bold text-red-400 mb-2">Bearish CHoCH</h4>
            <p class="text-sm text-gray-300 mb-3">Price was running up making small higher-highs and higher-lows (substructure). Then one of those small higher-lows <strong class="text-white">gets broken to the downside</strong>.</p>
            <div class="p-3 rounded-lg bg-gray-900/50 text-sm">
              <p class="text-red-300">= "The upswing might be over. A pullback is probably starting."</p>
            </div>
          </div>
          <div class="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">Bullish CHoCH</h4>
            <p class="text-sm text-gray-300 mb-3">Price was pulling back making small lower-highs and lower-lows (substructure). Then one of those small lower-highs <strong class="text-white">gets broken to the upside</strong>.</p>
            <div class="p-3 rounded-lg bg-gray-900/50 text-sm">
              <p class="text-green-300">= "The pullback might be over. A new run could be starting."</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 2. Visual step-by-step: WHERE to find CHoCH -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Where Exactly Do You Find CHoCH?</h2>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          The #1 confusion with CHoCH is knowing <strong class="text-white">where to look for it</strong>.
          Here's the key: CHoCH lives in the <strong class="text-primary-400">substructure</strong> (the small
          moves), NOT the swing structure (the big moves). Follow these steps:
        </p>

        <!-- Steps -->
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 font-bold text-sm shrink-0">1</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Start with the big picture</h4>
              <p class="text-sm text-gray-300">On a higher timeframe (4H or 1D), mark your deep swing HH, HL, LL, LH and your BOS levels. This is your <strong class="text-primary-400">swing structure</strong>.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 font-bold text-sm shrink-0">2</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Zoom into the moves between swings</h4>
              <p class="text-sm text-gray-300">Look at the minor price action happening between your deep swing high and the next deep swing low. These small ups and downs are the <strong class="text-primary-400">substructure</strong>.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 font-bold text-sm shrink-0">3</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Find the FIRST flip</h4>
              <p class="text-sm text-gray-300">
                After a <strong class="text-green-400">HH</strong>: look for the first time a minor low gets broken downward
                = <strong class="text-red-400">Bearish CHoCH</strong>.<br>
                After a pullback/<strong class="text-green-400">HL</strong>: look for the first time a minor high gets broken upward
                = <strong class="text-green-400">Bullish CHoCH</strong>.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm shrink-0">!</span>
            <div>
              <h4 class="font-semibold text-yellow-400 mb-1">Only mark the FIRST one</h4>
              <p class="text-sm text-gray-300">You only care about the <em>first</em> bearish CHoCH and the <em>first</em> bullish CHoCH in each swing. Don't try to force multiple ones.</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 3. SVG Visual Example: Bearish CHoCH -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Example: Spotting Bearish CHoCH</h2>
            <UBadge color="red" variant="soft">Pullback Starting</UBadge>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          Price is in an uptrend. After making a new <strong class="text-green-400">HH</strong>, the small
          moves inside the run (substructure) were making mini higher-highs and higher-lows.
          Then one mini higher-low breaks. <strong class="text-red-400">That's your Bearish CHoCH.</strong>
        </p>

        <div class="bg-gray-900 rounded-xl p-4 sm:p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Bearish CHoCH - The upswing might be over</p>
          <svg viewBox="0 0 560 280" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Background grid -->
            <line x1="0" y1="70" x2="560" y2="70" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="140" x2="560" y2="140" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="210" x2="560" y2="210" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>

            <!-- Swing structure (big moves) - green uptrend -->
            <polyline points="30,230 90,160 140,190 210,100 270,140"
              fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>

            <!-- HH reached -->
            <polyline points="270,140 330,60"
              fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>

            <!-- Labels for swing structure -->
            <text x="90" y="155" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">HL</text>
            <text x="210" y="93" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">HH</text>
            <text x="270" y="155" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">HL</text>
            <text x="330" y="50" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">HH</text>

            <!-- BOS dashed line -->
            <line x1="210" y1="100" x2="330" y2="100" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3"/>
            <text x="270" y="96" fill="#22c55e" font-size="10" text-anchor="middle">BOS</text>

            <!-- Substructure after HH (small moves inside the run going up to HH) -->
            <polyline points="270,140 290,118 305,128 325,95 340,108 330,60"
              fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Mini labels for substructure going up -->
            <circle cx="290" cy="118" r="3" fill="#60a5fa"/>
            <circle cx="325" cy="95" r="3" fill="#60a5fa"/>
            <circle cx="305" cy="128" r="3" fill="#60a5fa"/>
            <circle cx="340" cy="108" r="3" fill="#60a5fa"/>

            <!-- Substructure after HH starts failing -->
            <polyline points="330,60 355,85 375,70 400,100"
              fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            <circle cx="355" cy="85" r="3" fill="#60a5fa"/>
            <circle cx="375" cy="70" r="3" fill="#60a5fa"/>

            <!-- The CHoCH break - mini higher low gets broken -->
            <line x1="340" y1="108" x2="430" y2="108" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2"/>

            <!-- Arrow showing the break -->
            <polyline points="400,100 430,120 450,105 480,145"
              fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- CHoCH label with box -->
            <rect x="395" y="95" width="75" height="22" rx="4" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" stroke-width="1"/>
            <text x="432" y="110" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Bear CHoCH</text>

            <!-- Annotation: minor HL level line -->
            <text x="350" y="120" fill="#9ca3af" font-size="9" text-anchor="middle">mini HL</text>

            <!-- Annotation box -->
            <rect x="340" y="190" width="205" height="55" rx="8" fill="#1f2937" stroke="#ef4444" stroke-width="1" opacity="0.9"/>
            <text x="350" y="208" fill="#f87171" font-size="10" font-weight="bold">This minor low broke!</text>
            <text x="350" y="222" fill="#d1d5db" font-size="9">Substructure flipped from bullish to</text>
            <text x="350" y="234" fill="#d1d5db" font-size="9">bearish. Pullback likely starting.</text>

            <!-- Arrow from annotation to break point -->
            <line x1="420" y1="190" x2="415" y2="125" stroke="#ef4444" stroke-width="1" stroke-dasharray="3" opacity="0.6"/>

            <!-- Legend -->
            <rect x="20" y="245" width="200" height="25" rx="4" fill="#111827" stroke="#374151" stroke-width="1"/>
            <line x1="30" y1="258" x2="55" y2="258" stroke="#22c55e" stroke-width="2.5" opacity="0.4"/>
            <text x="60" y="262" fill="#9ca3af" font-size="9">Swing structure</text>
            <line x1="125" y1="258" x2="150" y2="258" stroke="#60a5fa" stroke-width="2"/>
            <text x="155" y="262" fill="#9ca3af" font-size="9">Substructure</text>
          </svg>
        </div>
      </UCard>

      <!-- 4. SVG Visual Example: Bullish CHoCH -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Example: Spotting Bullish CHoCH</h2>
            <UBadge color="green" variant="soft">New Run Starting</UBadge>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          Price is pulling back after a HH. The substructure is making mini lower-highs and lower-lows.
          Then one mini lower-high breaks to the upside. <strong class="text-green-400">That's your Bullish CHoCH.</strong>
          This is often <strong class="text-white">where you look for entries</strong> (if the HTF trend is bullish).
        </p>

        <div class="bg-gray-900 rounded-xl p-4 sm:p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Bullish CHoCH - The pullback might be over</p>
          <svg viewBox="0 0 560 280" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Background grid -->
            <line x1="0" y1="70" x2="560" y2="70" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="140" x2="560" y2="140" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="210" x2="560" y2="210" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>

            <!-- HH at top -->
            <circle cx="80" cy="45" r="5" fill="#22c55e"/>
            <text x="80" y="37" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">HH</text>

            <!-- Swing structure - pullback down from HH -->
            <polyline points="80,45 130,90 170,70 220,150"
              fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>

            <!-- Substructure during pullback (small moves going down) -->
            <polyline points="80,45 110,75 125,60 145,90 160,78 180,110 195,95 220,130 235,120 260,155"
              fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Mini swing points during pullback -->
            <circle cx="125" cy="60" r="3" fill="#60a5fa"/>
            <text x="125" y="54" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <circle cx="160" cy="78" r="3" fill="#60a5fa"/>
            <text x="160" y="72" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <circle cx="195" cy="95" r="3" fill="#60a5fa"/>
            <text x="195" y="89" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <circle cx="235" cy="120" r="3" fill="#60a5fa"/>
            <text x="235" y="114" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>

            <circle cx="145" cy="90" r="3" fill="#60a5fa"/>
            <text x="145" y="103" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <circle cx="180" cy="110" r="3" fill="#60a5fa"/>
            <text x="180" y="123" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <circle cx="220" cy="130" r="3" fill="#60a5fa"/>
            <text x="220" y="143" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <circle cx="260" cy="155" r="3" fill="#60a5fa"/>
            <text x="260" y="168" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>

            <!-- HL forming -->
            <text x="270" y="180" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">HL</text>
            <circle cx="270" cy="165" r="5" fill="#22c55e"/>

            <!-- The CHoCH break line (minor lower high level) -->
            <line x1="235" y1="120" x2="370" y2="120" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text x="250" y="116" fill="#9ca3af" font-size="9" text-anchor="start">last mini lh</text>

            <!-- Price breaking up through the minor LH -->
            <polyline points="260,155 270,165 285,145 300,152 320,110 345,95 380,70"
              fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- CHoCH label with box -->
            <rect x="295" y="98" width="75" height="22" rx="4" fill="#22c55e" fill-opacity="0.15" stroke="#22c55e" stroke-width="1"/>
            <text x="332" y="113" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Bull CHoCH</text>

            <!-- Entry annotation -->
            <rect x="350" y="55" width="60" height="22" rx="4" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="1"/>
            <text x="380" y="70" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">Entry</text>
            <line x1="380" y1="77" x2="360" y2="87" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3"/>

            <!-- Continuing upward to new HH -->
            <polyline points="380,70 420,50 440,60 480,30"
              fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="480" y="24" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">New HH</text>

            <!-- Annotation box -->
            <rect x="330" y="190" width="215" height="55" rx="8" fill="#1f2937" stroke="#22c55e" stroke-width="1" opacity="0.9"/>
            <text x="340" y="208" fill="#4ade80" font-size="10" font-weight="bold">This minor high broke upward!</text>
            <text x="340" y="222" fill="#d1d5db" font-size="9">Substructure flipped from bearish to</text>
            <text x="340" y="234" fill="#d1d5db" font-size="9">bullish. New upswing likely starting.</text>

            <!-- Arrow from annotation to break point -->
            <line x1="400" y1="190" x2="335" y2="125" stroke="#22c55e" stroke-width="1" stroke-dasharray="3" opacity="0.6"/>

            <!-- Legend -->
            <rect x="20" y="245" width="290" height="25" rx="4" fill="#111827" stroke="#374151" stroke-width="1"/>
            <line x1="30" y1="258" x2="55" y2="258" stroke="#ef4444" stroke-width="2.5" opacity="0.4"/>
            <text x="60" y="262" fill="#9ca3af" font-size="9">Pullback</text>
            <line x1="105" y1="258" x2="130" y2="258" stroke="#60a5fa" stroke-width="2"/>
            <text x="135" y="262" fill="#9ca3af" font-size="9">Substructure</text>
            <line x1="200" y1="258" x2="225" y2="258" stroke="#22c55e" stroke-width="2.5"/>
            <text x="230" y="262" fill="#9ca3af" font-size="9">New run after CHoCH</text>
          </svg>
        </div>
      </UCard>

      <!-- 5. The full picture: BOS + CHoCH together -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Putting It All Together: BOS + CHoCH</h2>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          Here's the full cycle of how BOS and CHoCH work together in a bullish trend:
        </p>

        <!-- Step-by-step cycle -->
        <div class="relative mb-6">
          <div class="space-y-3">
            <div class="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
              <span class="font-mono text-green-400 font-bold text-sm shrink-0 w-6">1.</span>
              <p class="text-sm text-gray-300">Price is trending up: <strong class="text-green-400">HH → HL → HH → HL</strong></p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
              <span class="font-mono text-green-400 font-bold text-sm shrink-0 w-6">2.</span>
              <p class="text-sm text-gray-300">Price takes out a previous high = <strong class="text-green-400">BOS</strong> (trend confirmed)</p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
              <span class="font-mono text-green-400 font-bold text-sm shrink-0 w-6">3.</span>
              <p class="text-sm text-gray-300">After HH, price runs up making small higher-highs in the substructure</p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
              <span class="font-mono text-red-400 font-bold text-sm shrink-0 w-6">4.</span>
              <p class="text-sm text-gray-300">A mini HL breaks = <strong class="text-red-400">Bearish CHoCH</strong> → pullback likely starting</p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
              <span class="font-mono text-gray-400 font-bold text-sm shrink-0 w-6">5.</span>
              <p class="text-sm text-gray-300">Price pulls back (substructure making mini LH → LL → LH → LL)</p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
              <span class="font-mono text-green-400 font-bold text-sm shrink-0 w-6">6.</span>
              <p class="text-sm text-gray-300">A mini LH breaks = <strong class="text-green-400">Bullish CHoCH</strong> → pullback likely ending</p>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <span class="font-mono text-yellow-400 font-bold text-sm shrink-0 w-6">7.</span>
              <p class="text-sm text-gray-300"><strong class="text-yellow-400">Look for entry here!</strong> Enter on the first candle closing above the Bullish CHoCH level.</p>
            </div>
          </div>
        </div>

        <!-- PDF theory diagram -->
        <div class="bg-gray-900 rounded-xl p-2 sm:p-4 mb-4 overflow-hidden">
          <p class="text-xs text-gray-500 mb-2 px-2">BOS + CHoCH combined - Theory diagram from the course</p>
          <img src="/images/market-structure/ms1-page-13.png" alt="BOS and CHoCH theory diagram" class="w-full rounded-lg" loading="lazy" />
        </div>
      </UCard>

      <!-- 6. Real chart examples -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Real Chart Example</h2>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          Here's a real trade from the BTC daily chart. Notice: after a long uptrend, the <strong class="text-red-400">Bearish CHoCH</strong>
          appeared first (first sign the upswing is weakening), then the <strong class="text-white">BOS confirmed</strong> the trend change.
          More aggressive traders enter on the first CHoCH. Beginners should wait for the BOS + pullback confirmation.
        </p>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">CHoCH + BOS on BTC 1D chart - Real trade example</p>
          <img src="/images/market-structure/ms1-page-14.png" alt="CHoCH on BTC 1D chart" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <!-- 7. Common mistakes -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400" />
            <h2 class="text-xl font-semibold text-white">Common Mistakes</h2>
          </div>
        </template>

        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <span class="text-red-400 font-bold text-lg shrink-0">1</span>
            <div>
              <h4 class="font-semibold text-red-400 mb-1">Forcing CHoCH where there isn't one</h4>
              <p class="text-sm text-gray-300">During strong mania phases or harsh sell-offs, price might not have significant pullbacks. No pullback = no CHoCH. That's fine, skip it and use other tools.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <span class="text-red-400 font-bold text-lg shrink-0">2</span>
            <div>
              <h4 class="font-semibold text-red-400 mb-1">Using CHoCH as a standalone entry signal</h4>
              <p class="text-sm text-gray-300">CHoCH is NOT a confirmation - it's just the first <em>sign of weakness</em>. For beginners: always wait for BOS + pullback. Use CHoCH only as extra confluence.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <span class="text-red-400 font-bold text-lg shrink-0">3</span>
            <div>
              <h4 class="font-semibold text-red-400 mb-1">Marking multiple CHoCHs in the same swing</h4>
              <p class="text-sm text-gray-300">You only care about the <strong class="text-white">first</strong> bearish CHoCH and the <strong class="text-white">first</strong> bullish CHoCH per swing. The second, third, etc. don't count.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <span class="text-red-400 font-bold text-lg shrink-0">4</span>
            <div>
              <h4 class="font-semibold text-red-400 mb-1">Not waiting for a candle close</h4>
              <p class="text-sm text-gray-300">A wick poking through the level doesn't count. The candle must <strong class="text-white">close</strong> below/above the level for the CHoCH to be valid.</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 8. Quick reference -->
      <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-bookmark" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-semibold text-primary-400 mb-3">Quick Reference</h4>
            <div class="grid sm:grid-cols-2 gap-3 text-sm">
              <div class="p-3 rounded-lg bg-gray-900/50">
                <p class="text-white font-medium mb-1">BOS vs CHoCH</p>
                <p class="text-gray-400"><strong class="text-green-400">BOS</strong> = big swing breaks → trend confirmed</p>
                <p class="text-gray-400"><strong class="text-yellow-400">CHoCH</strong> = small move flips → early warning</p>
              </div>
              <div class="p-3 rounded-lg bg-gray-900/50">
                <p class="text-white font-medium mb-1">Where they live</p>
                <p class="text-gray-400"><strong class="text-green-400">BOS</strong> = in swing structure (deep swings)</p>
                <p class="text-gray-400"><strong class="text-yellow-400">CHoCH</strong> = in substructure (minor moves)</p>
              </div>
              <div class="p-3 rounded-lg bg-gray-900/50">
                <p class="text-white font-medium mb-1">Bearish CHoCH</p>
                <p class="text-gray-400">Mini HL breaks downward → upswing ending</p>
              </div>
              <div class="p-3 rounded-lg bg-gray-900/50">
                <p class="text-white font-medium mb-1">Bullish CHoCH</p>
                <p class="text-gray-400">Mini LH breaks upward → pullback ending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SWING STRUCTURE & SUBSTRUCTURE -->
    <div v-if="activeSection === 'substructure'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Swing Structure vs Substructure</h2>
        </template>

        <p class="text-gray-300 leading-relaxed mb-6">
          Understanding the difference between these two is the <strong class="text-white">key to understanding where CHoCH and BOS live</strong>.
          Think of it as two different zoom levels on the same chart.
        </p>

        <!-- Visual analogy -->
        <div class="p-5 rounded-xl bg-gray-800 border border-gray-700 mb-6">
          <div class="flex items-start gap-3">
            <span class="text-2xl shrink-0">🔍</span>
            <div>
              <h4 class="font-semibold text-white mb-2">Zoom Level Analogy</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Imagine looking at a mountain range. <strong class="text-primary-400">Swing structure</strong> = the peaks
                and valleys of the mountains themselves (the big picture). <strong class="text-blue-400">Substructure</strong> =
                the bumpy terrain on the path between one peak and the next valley (the small details along the way).
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-bold text-primary-400 mb-2">Swing Structure</h4>
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">The Bigger Picture</p>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-primary-400 mt-1 shrink-0">•</span>
                <span>Deep swing highs and swing lows</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-400 mt-1 shrink-0">•</span>
                <span>Significant price fluctuations</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-400 mt-1 shrink-0">•</span>
                <span><strong class="text-white">BOS happens here</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary-400 mt-1 shrink-0">•</span>
                <span>Confirms trend direction</span>
              </li>
            </ul>
          </div>
          <div class="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-2">Substructure</h4>
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-wide">The Smaller Picture</p>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1 shrink-0">•</span>
                <span>Minor movements between deep swings</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1 shrink-0">•</span>
                <span>The "noise" inside the bigger move</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1 shrink-0">•</span>
                <span><strong class="text-white">CHoCH happens here</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1 shrink-0">•</span>
                <span>Gives early warning of direction change</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- SVG diagram -->
        <div class="bg-gray-900 rounded-xl p-4 sm:p-6 mb-6">
          <p class="text-xs text-gray-500 mb-3 text-center">How swing structure and substructure relate</p>
          <svg viewBox="0 0 560 240" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Swing structure (big smooth curve) -->
            <polyline points="30,180 120,60 250,160 400,40 520,130"
              fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/>

            <!-- Deep swing labels -->
            <circle cx="120" cy="60" r="5" fill="#a78bfa" opacity="0.6"/>
            <text x="120" y="48" fill="#a78bfa" font-size="11" text-anchor="middle" font-weight="bold">HH</text>
            <circle cx="250" cy="160" r="5" fill="#a78bfa" opacity="0.6"/>
            <text x="250" y="178" fill="#a78bfa" font-size="11" text-anchor="middle" font-weight="bold">HL</text>
            <circle cx="400" cy="40" r="5" fill="#a78bfa" opacity="0.6"/>
            <text x="400" y="30" fill="#a78bfa" font-size="11" text-anchor="middle" font-weight="bold">HH</text>

            <!-- BOS line -->
            <line x1="120" y1="60" x2="400" y2="60" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.5"/>
            <text x="260" y="54" fill="#a78bfa" font-size="10" text-anchor="middle" font-weight="bold">BOS</text>

            <!-- Substructure inside (the detailed path) -->
            <polyline points="30,180 55,145 70,155 95,100 110,120 120,60 140,90 155,75 175,110 195,95 215,130 235,120 250,160 270,135 285,145 310,100 330,110 350,75 370,85 385,55 400,40 420,65 435,55 460,85 475,75 500,105 520,130"
              fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Bracket showing "substructure" zone -->
            <rect x="130" y="57" width="115" height="110" rx="8" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="4" opacity="0.4"/>
            <text x="188" y="182" fill="#60a5fa" font-size="9" text-anchor="middle" opacity="0.7">substructure zone</text>

            <!-- Bearish CHoCH marker in substructure -->
            <circle cx="175" cy="110" r="4" fill="#ef4444"/>
            <text x="185" y="125" fill="#ef4444" font-size="8" text-anchor="start">Bear CHoCH</text>

            <!-- Bullish CHoCH marker in substructure -->
            <circle cx="310" cy="100" r="4" fill="#22c55e"/>
            <text x="318" y="96" fill="#22c55e" font-size="8" text-anchor="start">Bull CHoCH</text>

            <!-- Legend -->
            <rect x="20" y="205" width="340" height="25" rx="4" fill="#111827" stroke="#374151" stroke-width="1"/>
            <line x1="30" y1="218" x2="55" y2="218" stroke="#a78bfa" stroke-width="3" opacity="0.4"/>
            <text x="60" y="222" fill="#9ca3af" font-size="9">Swing structure (BOS)</text>
            <line x1="175" y1="218" x2="200" y2="218" stroke="#60a5fa" stroke-width="2"/>
            <text x="205" y="222" fill="#9ca3af" font-size="9">Substructure (CHoCH)</text>
          </svg>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden mb-4">
          <p class="text-xs text-gray-500 px-4 pt-3">Swing structure vs substructure - Real example (4H BTC chart)</p>
          <img src="/images/market-structure/ms2-page-08.png" alt="Swing structure vs substructure on 4H BTC chart" class="w-full" loading="lazy" />
        </div>

        <p class="text-gray-300 leading-relaxed mb-4">
          After a BOS, every price movement happening between the deep swing high and low is
          categorized as <strong class="text-white">noise or minor movements (substructure)</strong>. The only two
          CHoCHs that matter are:
        </p>
        <div class="grid sm:grid-cols-2 gap-3 mb-4">
          <div class="p-3 rounded-lg bg-red-500/5 border border-red-500/20 text-sm text-gray-300">
            <strong class="text-red-400">Bearish CHoCH</strong> = first switch from bullish to bearish substructure (pullback starting)
          </div>
          <div class="p-3 rounded-lg bg-green-500/5 border border-green-500/20 text-sm text-gray-300">
            <strong class="text-green-400">Bullish CHoCH</strong> = first switch from bearish to bullish substructure (pullback ending)
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Long setup using swing structure + CHoCH (4H BTC)</p>
          <img src="/images/market-structure/ms2-page-09.png" alt="Long setup with swing structure" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <!-- Key takeaway -->
      <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-semibold text-primary-400 mb-1">The Simple Rule</h4>
            <p class="text-gray-300 text-sm">
              Always find your <strong class="text-white">BOS first</strong> (the big picture), then look for
              <strong class="text-white">CHoCH inside the substructure</strong> (the small picture). Never the other way around.
              If you're stuck, zoom out and focus on the deep swings first.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TRADE SETUPS -->
    <div v-if="activeSection === 'setups'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trade Setups</h2>
        </template>

        <h3 class="text-lg font-semibold text-green-400 mb-3">Long Setup Example</h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          After defining the first HH on a high timeframe, wait for a pullback to enter.
          The first bearish CHoCH signals the pullback is starting. The second (bullish) CHoCH
          signals the pullback might be ending and a new swing run may start.
        </p>
        <div class="bg-gray-900 rounded-xl overflow-hidden mb-6">
          <p class="text-xs text-gray-500 px-4 pt-3">Consecutive longs (1D BTC chart)</p>
          <img src="/images/market-structure/ms1-page-15.png" alt="Long setup on 1D BTC chart" class="w-full" loading="lazy" />
        </div>

        <h3 class="text-lg font-semibold text-red-400 mb-3">Short Setup Example</h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          The same principles apply in reverse for short setups. Identify a bearish BOS,
          wait for the pullback (bullish CHoCH), then enter short when bearish CHoCH appears again.
        </p>
        <div class="bg-gray-900 rounded-xl overflow-hidden mb-4">
          <p class="text-xs text-gray-500 px-4 pt-3">Short setup (BTC 1D chart)</p>
          <img src="/images/market-structure/ms1-page-17.png" alt="Short setup on BTC 1D chart" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <!-- Multi-timeframe note -->
      <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-semibold text-primary-400 mb-1">Multi-Timeframe Note</h4>
            <p class="text-gray-300 text-sm">
              Market structure appears on all timeframes. You can get a bearish structure on lower
              timeframes while the overall MS on higher timeframes is bullish. The key is to look for
              signs of pullbacks (or CHoCH) on the LTF to get entries aligned with the HTF direction.
            </p>
          </div>
        </div>
      </div>

      <!-- Homework -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-pencil-square" class="w-5 h-5 text-primary-400" />
            <h3 class="font-semibold text-white">Homework</h3>
          </div>
        </template>
        <ol class="space-y-3 text-gray-300">
          <li class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 font-bold text-xs shrink-0">1</span>
            <span>Take out a 4H chart of your choosing</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 font-bold text-xs shrink-0">2</span>
            <span>Mark out the 4H BOS + HH, HL, LH, LL</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 font-bold text-xs shrink-0">3</span>
            <span>Look for pullbacks and mark out bullish CHoCH and bearish CHoCH (you can go to 1H for ease)</span>
          </li>
        </ol>
        <div class="mt-4 bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Homework example: 4H chart with BOS, HH, HL, LH, LL and CHoCH</p>
          <img src="/images/market-structure/ms2-page-11.png" alt="Homework example chart" class="w-full" loading="lazy" />
        </div>
      </UCard>
    </div>
  </div>
</template>
