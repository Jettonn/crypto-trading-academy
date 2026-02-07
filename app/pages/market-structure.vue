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
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Change of Character (CHoCH)</h2>
        </template>
        <p class="text-gray-300 leading-relaxed mb-4">
          CHoCH is used alongside BOS to anticipate when a run may be finished and a pullback
          may be starting (<strong class="text-red-400">Bearish CHoCH</strong>), and when a
          pullback has finished and a run may be beginning (<strong class="text-green-400">Bullish CHoCH</strong>).
        </p>
        <p class="text-gray-300 leading-relaxed mb-4">
          Think of CHoCH as the <strong class="text-primary-400">first sign of trend change</strong> in the
          substructure. It doesn't have to be a deep swing - it can be in the minor movements in between.
        </p>

        <!-- Theory diagram -->
        <div class="bg-gray-900 rounded-xl p-6 mb-4">
          <p class="text-xs text-gray-500 mb-3 text-center">BOS + CHoCH combined with Market Structure</p>
          <img src="/images/market-structure/ms1-page-13.png" alt="BOS and CHoCH theory diagram" class="w-full" loading="lazy" />
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-semibold text-red-400 mb-2">Bearish CHoCH</h4>
            <p class="text-sm text-gray-300">The first switch turning the substructure from bullish to bearish. Signals that a bullish swing run might be over and a pullback is starting.</p>
          </div>
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-semibold text-green-400 mb-2">Bullish CHoCH</h4>
            <p class="text-sm text-gray-300">The first switch turning the substructure from bearish to bullish. Signals that a pullback might be ending and a new run may begin.</p>
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">CHoCH trade example (BTC 1D chart)</p>
          <img src="/images/market-structure/ms1-page-14.png" alt="CHoCH on BTC 1D chart" class="w-full" loading="lazy" />
        </div>
      </UCard>

      <div class="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">
            <strong class="text-red-400">Warning:</strong> CHoCH is NOT a guarantee. It can give false signals.
            Use it in confluence with other tools. If you are a beginner, do NOT use CHoCH as an entry signal -
            wait for a deep swing low (LL) confirmation then enter on a pullback.
          </p>
        </div>
      </div>
    </div>

    <!-- SWING STRUCTURE & SUBSTRUCTURE -->
    <div v-if="activeSection === 'substructure'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Swing Structure vs Substructure</h2>
        </template>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-semibold text-primary-400 mb-2">Swing Structure (Bigger Picture)</h4>
            <p class="text-sm text-gray-300">The framework where we lay out deep swing highs and swing lows. It highlights the significant price fluctuations. <strong class="text-white">BOS happens in swing structures.</strong></p>
          </div>
          <div class="p-5 rounded-xl bg-gray-800 border border-gray-700">
            <h4 class="font-semibold text-gray-300 mb-2">Substructure (Smaller Picture)</h4>
            <p class="text-sm text-gray-300">The minor movements happening inside the larger swing structure. <strong class="text-white">CHoCH happens in substructures.</strong></p>
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl overflow-hidden mb-4">
          <p class="text-xs text-gray-500 px-4 pt-3">Swing structure vs substructure (4H BTC chart)</p>
          <img src="/images/market-structure/ms2-page-08.png" alt="Swing structure vs substructure on 4H BTC chart" class="w-full" loading="lazy" />
        </div>

        <p class="text-gray-300 leading-relaxed mb-4">
          After a BOS, every price movement happening between the deep swing high and low is
          categorized as <strong class="text-white">noise or minor movements</strong>. We refer to
          substructure changes as bearish CHoCH or bullish CHoCH. These are the only two CHoCHs
          you should care about.
        </p>

        <div class="bg-gray-900 rounded-xl overflow-hidden">
          <p class="text-xs text-gray-500 px-4 pt-3">Long setup using swing structure + CHoCH (4H BTC)</p>
          <img src="/images/market-structure/ms2-page-09.png" alt="Long setup with swing structure" class="w-full" loading="lazy" />
        </div>
      </UCard>
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
