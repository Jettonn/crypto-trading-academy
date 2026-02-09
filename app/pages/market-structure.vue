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

        <!-- Real chart: Full labeled example showing both CHoCH types -->
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Real chart with Bearish CHoCH, Bullish CHoCH, and BOS all labeled</p>
          <img src="/images/market-structure/ms2-page-06.png" alt="Real chart showing bearish CHoCH, bullish CHoCH and BOS labeled" class="w-full" loading="lazy" />
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

        <!-- Real chart: Swing structure with CHoCH marked inside substructure -->
        <p class="text-gray-400 text-sm mb-2">Here's a real 4H BTC chart. Notice how the CHoCH sits <strong class="text-white">inside</strong> the substructure between the deep swing high and low:</p>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">4H BTC - Deep swing high/low marked, CHoCH lives in the substructure between them</p>
          <img src="/images/market-structure/ms2-page-10.png" alt="4H BTC chart showing swing structure with CHoCH in substructure" class="w-full" loading="lazy" />
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

        <!-- Real chart example for bearish CHoCH -->
        <p class="text-gray-400 text-sm mb-2">Now see it on a real chart - the bearish CHoCH appears after HH, signaling the upswing is weakening:</p>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">BTC 1D - Bearish CHoCH after long uptrend, then confirmed by BOS</p>
          <img src="/images/market-structure/ms1-page-14.png" alt="Bearish CHoCH on real BTC 1D chart" class="w-full" loading="lazy" />
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

        <!-- Real chart example for bullish CHoCH entry -->
        <p class="text-gray-400 text-sm mb-2">On a real chart - the bullish CHoCH signals the pullback is ending, entry is after the first candle closes above it:</p>
        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">4H BTC - Bullish CHoCH signals end of pullback, enter long targeting previous HH</p>
          <img src="/images/market-structure/ms2-page-09.png" alt="Bullish CHoCH long entry on real 4H BTC chart" class="w-full" loading="lazy" />
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
          <h2 class="text-xl font-semibold text-white">Real Trade Examples Using CHoCH</h2>
        </template>

        <!-- Long setup -->
        <h3 class="text-lg font-semibold text-green-400 mb-2">Long Setup with CHoCH</h3>
        <p class="text-gray-300 text-sm leading-relaxed mb-3">
          On this 1D BTC chart, after each HH, the <strong class="text-red-400">Bearish CHoCH</strong> signals the pullback is starting.
          Then the <strong class="text-green-400">Bullish CHoCH</strong> signals the pullback is ending - that's where you enter long,
          targeting the previous HH.
        </p>
        <div class="bg-gray-900 rounded-xl overflow-hidden mb-6">
          <p class="text-xs text-gray-500 px-4 pt-3">1D BTC - Consecutive longs using Bearish + Bullish CHoCH cycle</p>
          <img src="/images/market-structure/ms1-page-15.png" alt="Long setup using CHoCH on BTC 1D chart" class="w-full" loading="lazy" />
        </div>

        <!-- Short setup -->
        <h3 class="text-lg font-semibold text-red-400 mb-2">Short Setup with CHoCH</h3>
        <p class="text-gray-300 text-sm leading-relaxed mb-3">
          Same idea in reverse. The <strong class="text-red-400">Bearish CHoCH</strong> signals the upswing is weakening.
          After BOS confirms the trend change, wait for a pullback. The second <strong class="text-red-400">Bearish CHoCH</strong>
          signals the pullback is ending - enter short.
        </p>
        <div class="bg-gray-900 rounded-xl overflow-hidden mb-6">
          <p class="text-xs text-gray-500 px-4 pt-3">1D BTC - Short setup: CHoCH signals weakness, BOS confirms, enter on pullback</p>
          <img src="/images/market-structure/ms1-page-17.png" alt="Short setup using CHoCH on BTC 1D chart" class="w-full" loading="lazy" />
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

        <div class="space-y-4 mb-6">
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
              <h4 class="font-semibold text-red-400 mb-1">Confusing CHoCH with BOS</h4>
              <p class="text-sm text-gray-300">CHoCH is NOT a structure break. It happens in the <strong class="text-white">minor movements in between</strong>, while BOS happens at deep swing levels. A bearish CHoCH might look like a BOS on lower timeframes, but they are different.</p>
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

        <!-- Real Q&A examples from the course -->
        <h3 class="text-base font-semibold text-white mb-3">Student Q&A from the Course</h3>
        <p class="text-gray-400 text-sm mb-3">These are real questions from students that show common mistakes:</p>

        <div class="space-y-4">
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">"Why is this not CHoCH?" - Because price retraced upside right away (not a significant pullback)</p>
            <img src="/images/market-structure/ms2-page-04.png" alt="Q1: Why is this not CHoCH - price retraced immediately" class="w-full" loading="lazy" />
          </div>
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">"Why is this a BOS and not CHoCH?" - CHoCH is not a structure break, it happens before the BOS</p>
            <img src="/images/market-structure/ms2-page-07.png" alt="Q4: CHoCH vs BOS - CHoCH happens before BOS in minor movements" class="w-full" loading="lazy" />
          </div>
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">"Is it the red candle?" - No, the candle must close below the level. Look at the intermediate low being broken.</p>
            <img src="/images/market-structure/ms2-page-08.png" alt="Q5: Which candle is the CHoCH - must close below the level" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- 8. CHoCH vs CHoCH+ (Stronger Confirmation) -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">CHoCH vs CHoCH+ (Stronger Signal)</h2>
            <UBadge color="purple" variant="soft">Advanced</UBadge>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          Not all CHoCHs are created equal. There's a stronger version called <strong class="text-purple-400">CHoCH+</strong>
          that gives you higher-probability entries.
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <h4 class="font-bold text-yellow-400 mb-2">Regular CHoCH</h4>
            <p class="text-sm text-gray-300 mb-3">
              Price breaks a minor swing point in the opposite direction. For example, in a bearish substructure,
              price breaks above the <strong class="text-white">most recent lower high</strong>.
            </p>
            <div class="p-3 rounded-lg bg-gray-900/50 text-sm">
              <p class="text-yellow-300">Early warning - trend <em>might</em> shift</p>
            </div>
          </div>
          <div class="p-5 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <h4 class="font-bold text-purple-400 mb-2">CHoCH+ (Stronger)</h4>
            <p class="text-sm text-gray-300 mb-3">
              Not only does price break the minor swing point, but it also <strong class="text-white">fails to create
              a new HH/HL or LL/LH pattern</strong>. The entire substructure pattern collapses.
            </p>
            <div class="p-3 rounded-lg bg-gray-900/50 text-sm">
              <p class="text-purple-300">Stronger confirmation - trend shift is <em>more likely</em></p>
            </div>
          </div>
        </div>

        <!-- Visual comparison -->
        <div class="bg-gray-900 rounded-xl p-4 sm:p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">CHoCH vs CHoCH+ - The difference in structure failure</p>
          <svg viewBox="0 0 560 260" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Divider -->
            <line x1="280" y1="10" x2="280" y2="250" stroke="#374151" stroke-width="1" stroke-dasharray="4"/>
            <text x="140" y="20" fill="#fbbf24" font-size="11" text-anchor="middle" font-weight="bold">Regular CHoCH</text>
            <text x="420" y="20" fill="#a855f7" font-size="11" text-anchor="middle" font-weight="bold">CHoCH+</text>

            <!-- LEFT: Regular CHoCH (bearish sub → breaks one LH) -->
            <!-- Downtrend substructure -->
            <polyline points="30,50 60,80 80,65 110,100 130,85 160,120 180,105"
              fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Labels -->
            <text x="80" y="58" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <text x="130" y="78" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <text x="110" y="113" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <text x="160" y="133" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <!-- CHoCH break -->
            <line x1="180" y1="105" x2="260" y2="105" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4"/>
            <polyline points="180,105 200,120 220,95 240,85"
              fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="195" y="82" width="55" height="16" rx="3" fill="#fbbf24" fill-opacity="0.15" stroke="#fbbf24" stroke-width="1"/>
            <text x="222" y="93" fill="#fbbf24" font-size="9" text-anchor="middle" font-weight="bold">CHoCH</text>
            <!-- Note -->
            <text x="140" y="160" fill="#9ca3af" font-size="9" text-anchor="middle">Breaks one lower high</text>
            <text x="140" y="173" fill="#9ca3af" font-size="9" text-anchor="middle">Could still be a fakeout</text>

            <!-- RIGHT: CHoCH+ (bearish sub → full pattern failure) -->
            <!-- Downtrend substructure -->
            <polyline points="310,50 340,80 360,65 390,100 410,85 440,120 460,105"
              fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Labels -->
            <text x="360" y="58" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <text x="410" y="78" fill="#9ca3af" font-size="8" text-anchor="middle">lh</text>
            <text x="390" y="113" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <text x="440" y="133" fill="#9ca3af" font-size="8" text-anchor="middle">ll</text>
            <!-- CHoCH+ break - goes much higher, forming HL -->
            <line x1="460" y1="105" x2="545" y2="105" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4"/>
            <polyline points="460,105 475,115 490,80 505,90 520,55 540,45"
              fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- HL marker -->
            <circle cx="475" cy="115" r="3" fill="#22c55e"/>
            <text x="475" y="128" fill="#22c55e" font-size="8" text-anchor="middle">HL!</text>
            <rect x="480" y="62" width="60" height="16" rx="3" fill="#a855f7" fill-opacity="0.15" stroke="#a855f7" stroke-width="1"/>
            <text x="510" y="73" fill="#a855f7" font-size="9" text-anchor="middle" font-weight="bold">CHoCH+</text>
            <!-- Note -->
            <text x="420" y="160" fill="#9ca3af" font-size="9" text-anchor="middle">Breaks LH AND forms a higher low</text>
            <text x="420" y="173" fill="#9ca3af" font-size="9" text-anchor="middle">Full pattern collapse = stronger signal</text>

            <!-- Bottom comparison -->
            <rect x="50" y="195" width="180" height="50" rx="6" fill="#1f2937" stroke="#fbbf24" stroke-width="1" opacity="0.8"/>
            <text x="140" y="213" fill="#fbbf24" font-size="9" text-anchor="middle" font-weight="bold">Regular CHoCH</text>
            <text x="140" y="228" fill="#d1d5db" font-size="8" text-anchor="middle">Use as early warning</text>
            <text x="140" y="239" fill="#d1d5db" font-size="8" text-anchor="middle">Wait for more confirmation</text>

            <rect x="330" y="195" width="180" height="50" rx="6" fill="#1f2937" stroke="#a855f7" stroke-width="1" opacity="0.8"/>
            <text x="420" y="213" fill="#a855f7" font-size="9" text-anchor="middle" font-weight="bold">CHoCH+</text>
            <text x="420" y="228" fill="#d1d5db" font-size="8" text-anchor="middle">More confident signal</text>
            <text x="420" y="239" fill="#d1d5db" font-size="8" text-anchor="middle">Can enter with tighter stop</text>
          </svg>
        </div>

        <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
          <div class="flex items-start gap-3">
            <span class="text-xl shrink-0">🎯</span>
            <p class="text-gray-300 text-sm">
              <strong class="text-purple-400">Pro tip:</strong> When you see a <strong class="text-white">CHoCH+</strong>,
              you can be more aggressive with your entry because the entire substructure pattern has failed.
              A regular CHoCH might just be a temporary fakeout, but CHoCH+ means the old pattern is fully broken
              - buyers/sellers at the previous level have been completely absorbed.
            </p>
          </div>
        </div>
      </UCard>

      <!-- 9. Why CHoCH Works: Order Flow -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Why CHoCH Works: Order Flow</h2>
            <UBadge color="blue" variant="soft">Theory</UBadge>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          CHoCH isn't just a random pattern - it reflects a real shift in <strong class="text-white">who is in control of the market</strong>.
          Understanding this makes you much better at reading whether a CHoCH is significant or just noise.
        </p>

        <!-- Order flow explanation -->
        <div class="space-y-4 mb-6">
          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <h4 class="font-semibold text-green-400 mb-2">In an uptrend (before Bearish CHoCH)</h4>
            <p class="text-sm text-gray-300">
              Buyers are in control. Each time price pulls back to a higher low (HL), buyers step in and push price higher.
              The HL is a <strong class="text-white">demand zone</strong> where buyers have been consistently active.
            </p>
          </div>
          <div class="flex justify-center">
            <UIcon name="i-heroicons-arrow-down" class="w-6 h-6 text-red-400" />
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-semibold text-red-400 mb-2">When a minor HL breaks (Bearish CHoCH)</h4>
            <p class="text-sm text-gray-300">
              It means <strong class="text-white">buyers who were expected to defend that level didn't show up</strong>.
              The demand that was previously holding price up has been exhausted. Sellers have overcome the buying pressure.
              This absence of buyers is what makes CHoCH significant - it's not just a line break, it's a shift in
              the balance of power.
            </p>
          </div>
          <div class="flex justify-center">
            <UIcon name="i-heroicons-arrow-down" class="w-6 h-6 text-yellow-400" />
          </div>
          <div class="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <h4 class="font-semibold text-yellow-400 mb-2">What this tells you</h4>
            <p class="text-sm text-gray-300">
              Smart money and institutional traders watch these levels. When a CHoCH happens, it tells you that the
              <strong class="text-white">composition of market participants has changed</strong>. The previous buyers
              have exited or been stopped out, and new sellers are taking over. This is why CHoCH often leads to
              significant moves - it's not just a technical break, it reflects a real change in order flow.
            </p>
          </div>
        </div>

        <!-- Practical implication -->
        <div class="p-4 rounded-xl bg-gray-800 border border-gray-700">
          <div class="flex items-start gap-3">
            <span class="text-xl shrink-0">💰</span>
            <div>
              <h4 class="font-semibold text-white mb-1">The Practical Takeaway</h4>
              <p class="text-sm text-gray-300">
                This is why you <strong class="text-white">never trade the CHoCH itself</strong> - you trade the pullback
                after it. After a Bullish CHoCH, new buyers are entering. Wait for price to pull back into a
                <strong class="text-primary-400">key zone</strong> (Order Block, supply/demand zone, support/resistance)
                and enter there. This gives you a tight stop and high reward-to-risk.
              </p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 10. CHoCH Entry Strategy Framework -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">CHoCH Entry Strategy</h2>
            <UBadge color="green" variant="soft">Actionable</UBadge>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          Here's a step-by-step framework for turning CHoCH into actual trades. This combines what we've
          learned about CHoCH with practical entry technique.
        </p>

        <!-- Strategy steps -->
        <div class="space-y-3 mb-6">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm shrink-0">1</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Establish your trend bias on HTF</h4>
              <p class="text-sm text-gray-300">Use the 4H or 1D chart. Mark your swing structure (HH, HL or LH, LL) and confirm the trend with BOS.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm shrink-0">2</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Wait for the CHoCH</h4>
              <p class="text-sm text-gray-300">
                After a BOS, drop to a lower timeframe (15m-1H) and watch the substructure.
                Wait for the <strong class="text-red-400">Bearish CHoCH</strong> (pullback starting) → then the
                <strong class="text-green-400">Bullish CHoCH</strong> (pullback ending).
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm shrink-0">3</span>
            <div>
              <h4 class="font-semibold text-white mb-1">Identify your key zone</h4>
              <p class="text-sm text-gray-300">
                After the CHoCH confirms direction, look for a pullback into a key area:
                <strong class="text-primary-400">Order Block</strong>, supply/demand zone, or key support/resistance level.
                This is where you look for your entry.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm shrink-0">4</span>
            <div>
              <h4 class="font-semibold text-yellow-400 mb-1">Enter on the retest</h4>
              <p class="text-sm text-gray-300">
                Enter when price pulls back to the key zone after CHoCH. Place your stop below the recent swing low
                (for longs) or above the recent swing high (for shorts). Target the previous HH/LL for take profit.
              </p>
            </div>
          </div>
        </div>

        <!-- Long entry example -->
        <div class="bg-gray-900 rounded-xl p-4 sm:p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">Long Entry Framework - CHoCH → Pullback to Key Zone → Enter</p>
          <svg viewBox="0 0 560 300" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
            <!-- Background grid -->
            <line x1="0" y1="75" x2="560" y2="75" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="150" x2="560" y2="150" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>
            <line x1="0" y1="225" x2="560" y2="225" stroke="#374151" stroke-width="0.5" stroke-dasharray="2"/>

            <!-- HTF swing structure -->
            <text x="30" y="18" fill="#9ca3af" font-size="9" font-weight="bold">HTF TREND (4H/1D)</text>
            <polyline points="30,220 100,120 180,180 280,60 380,130"
              fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
            <text x="100" y="112" fill="#22c55e" font-size="10" text-anchor="middle">HH</text>
            <text x="180" y="195" fill="#22c55e" font-size="10" text-anchor="middle">HL</text>
            <text x="280" y="52" fill="#22c55e" font-size="10" text-anchor="middle">HH</text>
            <line x1="100" y1="120" x2="280" y2="120" stroke="#22c55e" stroke-width="1.2" stroke-dasharray="5" opacity="0.4"/>
            <text x="190" y="116" fill="#22c55e" font-size="9" text-anchor="middle" opacity="0.6">BOS</text>

            <!-- Substructure pullback after HH -->
            <text x="300" y="38" fill="#60a5fa" font-size="9" font-weight="bold">LTF SUBSTRUCTURE (15m-1H)</text>
            <polyline points="280,60 300,85 310,72 330,105 345,90 360,125 375,110"
              fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Bearish CHoCH -->
            <text x="320" y="118" fill="#ef4444" font-size="8" text-anchor="middle">Bear CHoCH</text>
            <circle cx="330" cy="105" r="3" fill="#ef4444"/>

            <!-- Continued pullback -->
            <polyline points="375,110 390,135 400,122 420,155 435,140"
              fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Bullish CHoCH -->
            <line x1="400" y1="122" x2="460" y2="122" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4"/>
            <polyline points="435,140 450,148 460,115 475,105"
              fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="430" y="100" width="65" height="16" rx="3" fill="#22c55e" fill-opacity="0.15" stroke="#22c55e" stroke-width="1"/>
            <text x="462" y="111" fill="#22c55e" font-size="8" text-anchor="middle" font-weight="bold">Bull CHoCH</text>

            <!-- Key zone (Order Block area) -->
            <rect x="445" y="130" width="55" height="25" rx="3" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1"/>
            <text x="472" y="147" fill="#a78bfa" font-size="8" text-anchor="middle">Key Zone</text>

            <!-- Pullback to key zone and entry -->
            <polyline points="475,105 485,115 490,125 495,140"
              fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3"/>
            <!-- Entry marker -->
            <circle cx="495" cy="140" r="5" fill="#fbbf24"/>
            <text x="510" y="145" fill="#fbbf24" font-size="9" font-weight="bold">ENTRY</text>

            <!-- Stop loss -->
            <line x1="490" y1="165" x2="520" y2="165" stroke="#ef4444" stroke-width="1.5"/>
            <text x="530" y="169" fill="#ef4444" font-size="8">SL</text>

            <!-- Take profit target -->
            <line x1="490" y1="60" x2="540" y2="60" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3"/>
            <text x="545" y="64" fill="#22c55e" font-size="8">TP (prev HH)</text>

            <!-- Arrow from entry to TP -->
            <line x1="495" y1="135" x2="495" y2="65" stroke="#22c55e" stroke-width="1" stroke-dasharray="4" opacity="0.5"/>

            <!-- Step labels -->
            <rect x="30" y="240" width="510" height="50" rx="6" fill="#111827" stroke="#374151" stroke-width="1"/>
            <text x="40" y="256" fill="#60a5fa" font-size="9" font-weight="bold">Step 1:</text>
            <text x="85" y="256" fill="#d1d5db" font-size="8">HTF bias (bullish)</text>
            <text x="180" y="256" fill="#60a5fa" font-size="9" font-weight="bold">Step 2:</text>
            <text x="225" y="256" fill="#d1d5db" font-size="8">Wait for CHoCH</text>
            <text x="320" y="256" fill="#60a5fa" font-size="9" font-weight="bold">Step 3:</text>
            <text x="365" y="256" fill="#d1d5db" font-size="8">Find key zone</text>
            <text x="450" y="256" fill="#fbbf24" font-size="9" font-weight="bold">Step 4:</text>
            <text x="495" y="256" fill="#d1d5db" font-size="8">Enter retest</text>
            <text x="40" y="275" fill="#9ca3af" font-size="8">SL below swing low | TP at previous HH | Risk:Reward typically 1:2 to 1:3+</text>
          </svg>
        </div>
      </UCard>

      <!-- 11. Best Timeframes for CHoCH -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-clock" class="w-5 h-5 text-primary-400" />
            <h2 class="text-xl font-semibold text-white">Best Timeframes for CHoCH</h2>
          </div>
        </template>

        <p class="text-gray-300 leading-relaxed mb-4">
          CHoCH works on all timeframes, but certain combinations give you the best results.
          The key is to use <strong class="text-white">HTF for trend bias</strong> and <strong class="text-white">LTF for entry timing</strong>.
        </p>

        <div class="space-y-3 mb-6">
          <!-- Swing trading -->
          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <div class="flex items-center gap-3 mb-2">
              <UBadge color="green" variant="soft" size="xs">Swing Trading</UBadge>
            </div>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">HTF (Trend Bias)</p>
                <p class="text-white font-semibold">1D - Weekly</p>
                <p class="text-gray-400 text-xs">Mark BOS, HH, HL, LL, LH</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">LTF (CHoCH Entry)</p>
                <p class="text-white font-semibold">4H - 1H</p>
                <p class="text-gray-400 text-xs">Find CHoCH in substructure</p>
              </div>
            </div>
          </div>

          <!-- Intraday -->
          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <div class="flex items-center gap-3 mb-2">
              <UBadge color="blue" variant="soft" size="xs">Intraday Trading</UBadge>
            </div>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">HTF (Trend Bias)</p>
                <p class="text-white font-semibold">4H - 1H</p>
                <p class="text-gray-400 text-xs">Mark BOS, HH, HL, LL, LH</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">LTF (CHoCH Entry)</p>
                <p class="text-white font-semibold">15m - 30m</p>
                <p class="text-gray-400 text-xs">Find CHoCH in substructure</p>
              </div>
            </div>
          </div>

          <!-- Scalping -->
          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <div class="flex items-center gap-3 mb-2">
              <UBadge color="red" variant="soft" size="xs">Scalping</UBadge>
            </div>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">HTF (Trend Bias)</p>
                <p class="text-white font-semibold">30m - 15m</p>
                <p class="text-gray-400 text-xs">Mark BOS, HH, HL, LL, LH</p>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-1">LTF (CHoCH Entry)</p>
                <p class="text-white font-semibold">5m - 1m</p>
                <p class="text-gray-400 text-xs">Find CHoCH in substructure</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <p class="text-gray-300 text-sm">
              <strong class="text-amber-400">Warning:</strong> The lower the timeframe, the more noise you'll see and
              the more fakeout CHoCHs you'll get. As a beginner, <strong class="text-white">start with 4H for trend
              bias and 1H for CHoCH entries</strong>. Only go to lower timeframes once you're consistently profitable.
            </p>
          </div>
        </div>
      </UCard>

      <!-- 12. Quick reference (updated) -->
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
                <p class="text-white font-medium mb-1">CHoCH vs CHoCH+</p>
                <p class="text-gray-400"><strong class="text-yellow-400">CHoCH</strong> = breaks one minor level (early warning)</p>
                <p class="text-gray-400"><strong class="text-purple-400">CHoCH+</strong> = full pattern collapse (stronger)</p>
              </div>
              <div class="p-3 rounded-lg bg-gray-900/50">
                <p class="text-white font-medium mb-1">Entry Framework</p>
                <p class="text-gray-400">HTF bias → Wait for CHoCH → Find key zone → Enter retest</p>
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
