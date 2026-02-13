<script setup lang="ts">
const activeSection = ref('why')

const sections = [
  { id: 'why', label: 'Why S/R?', icon: 'i-heroicons-light-bulb' },
  { id: 'support', label: 'Support Zones', icon: 'i-heroicons-arrow-trending-up' },
  { id: 'resistance', label: 'Resistance Zones', icon: 'i-heroicons-arrow-trending-down' },
  { id: 'continuation', label: 'Continuation', icon: 'i-heroicons-arrow-right' },
  { id: 'reversal', label: 'Reversal', icon: 'i-heroicons-arrow-path' },
  { id: 'confluence', label: 'MS Confluence', icon: 'i-heroicons-bolt' },
]

const vocabulary = [
  { term: 'Support', full: 'Support Zone', desc: 'Price area where buyers step in aggressively, pushing price upward' },
  { term: 'Resistance', full: 'Resistance Zone', desc: 'Price area where sellers step in aggressively, pushing price downward' },
  { term: 'S/R Flip', full: 'Support/Resistance Flip', desc: 'When old support becomes new resistance (or vice versa)' },
  { term: 'Continuation', full: 'Continuation Zone', desc: 'S/R zone that forms mid-trend and price continues in the same direction' },
  { term: 'Reversal', full: 'Reversal Zone', desc: 'S/R zone where the trend changes direction entirely' },
  { term: 'Zone Failure', full: 'Zone Failure', desc: 'When a resistance or support zone fails to hold price as expected' },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <UBadge color="primary" variant="soft">Week 3</UBadge>
        <UBadge color="gray" variant="soft">Support & Resistance</UBadge>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Support & Resistance Zones</h1>
      <p class="text-gray-400">
        Understanding where buyers and sellers are willing to fight for price.
        This is the foundation of every real trading setup.
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

    <!-- ==================== WHY S/R ==================== -->
    <div v-if="activeSection === 'why'" class="space-y-6">

      <!-- Super Simple Analogy -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">The Simplest Way to Think About It</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Imagine a <strong class="text-white">ball bouncing between a floor and a ceiling</strong>.
            The floor is <strong class="text-green-400">support</strong> (buyers catch it),
            the ceiling is <strong class="text-red-400">resistance</strong> (sellers push it down).
          </p>
          <p class="text-gray-300 leading-relaxed">
            The ball keeps bouncing until one side gets tired. When buyers get exhausted,
            the floor breaks and the ball falls to the next floor. When sellers get exhausted,
            the ceiling breaks and the ball flies to the next ceiling.
          </p>

          <!-- Simple SVG diagram -->
          <div class="bg-gray-900 rounded-xl p-6">
            <p class="text-xs text-gray-500 mb-3 text-center">Floor & Ceiling Analogy</p>
            <svg viewBox="0 0 500 220" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
              <!-- Resistance (ceiling) -->
              <rect x="40" y="30" width="420" height="4" rx="2" fill="#ef4444" opacity="0.3"/>
              <line x1="40" y1="32" x2="460" y2="32" stroke="#ef4444" stroke-width="2" stroke-dasharray="6"/>
              <text x="470" y="36" fill="#ef4444" font-size="11" font-weight="bold">RESISTANCE</text>

              <!-- Support (floor) -->
              <rect x="40" y="176" width="420" height="4" rx="2" fill="#22c55e" opacity="0.3"/>
              <line x1="40" y1="178" x2="460" y2="178" stroke="#22c55e" stroke-width="2" stroke-dasharray="6"/>
              <text x="470" y="182" fill="#22c55e" font-size="11" font-weight="bold">SUPPORT</text>

              <!-- Bouncing ball path -->
              <polyline points="60,170 100,45 160,170 210,50 270,165 320,48 380,170 430,42"
                fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>

              <!-- Ball markers -->
              <circle cx="60" cy="170" r="5" fill="#22c55e"/>
              <circle cx="100" cy="45" r="5" fill="#ef4444"/>
              <circle cx="160" cy="170" r="5" fill="#22c55e"/>
              <circle cx="210" cy="50" r="5" fill="#ef4444"/>
              <circle cx="270" cy="165" r="5" fill="#22c55e"/>
              <circle cx="320" cy="48" r="5" fill="#ef4444"/>
              <circle cx="380" cy="170" r="5" fill="#22c55e"/>
              <circle cx="430" cy="42" r="5" fill="#ef4444"/>

              <!-- Labels -->
              <text x="250" y="110" fill="#9ca3af" font-size="10" text-anchor="middle">Price bounces between buyers and sellers</text>
            </svg>
          </div>
        </div>
      </UCard>

      <!-- Supply and Demand explanation -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Supply & Demand Behind the Scenes</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            The market is like a <strong class="text-white">continuous auction</strong>. Buyers bid prices up,
            sellers push prices down. The price you see is where these two forces are currently balanced.
          </p>

          <!-- Pressure diagram from PDF -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Buyer vs Seller pressure on price</p>
            <img src="/images/support-resistance/sr-page-05.png" alt="Supply and demand pressure diagram" class="w-full" loading="lazy" />
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <h4 class="font-medium text-green-400 mb-2">Cheaper price = More buyers</h4>
              <p class="text-sm text-gray-300">
                When price drops to levels people think are "cheap," everyone wants to buy.
                This creates demand and pushes price back up.
              </p>
            </div>
            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <h4 class="font-medium text-red-400 mb-2">Higher price = More sellers</h4>
              <p class="text-sm text-gray-300">
                When price rises to levels people think are "expensive," everyone wants to sell.
                This creates supply and pushes price back down.
              </p>
            </div>
          </div>

          <!-- Equilibrium chart from PDF -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Where supply meets demand = Market Price</p>
            <img src="/images/support-resistance/sr-page-07.png" alt="Equilibrium price where supply meets demand" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- Key Vocabulary -->
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

    <!-- ==================== SUPPORT ZONES ==================== -->
    <div v-if="activeSection === 'support'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Support Zones</h2>
            <UBadge color="green" variant="soft">Buyers defend here</UBadge>
          </div>
        </template>

        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            A support zone is where price consolidates in a range and then
            <strong class="text-green-400">breaks out to the upside</strong>.
            That range becomes the "floor" price can return to.
          </p>

          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-medium text-green-400 mb-2">Think of it like this:</h4>
            <p class="text-sm text-gray-300">
              Price is hanging out in a small area (ranging). Then suddenly, buyers get aggressive
              and push price UP out of that range. That small area where price was hanging out?
              That's now a support zone. If price ever comes back down to it, buyers are likely
              to show up again.
            </p>
          </div>

          <!-- Support zone illustration from PDF -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Support Zone Illustration</p>
            <img src="/images/support-resistance/sr-page-08.png" alt="Support zone illustration" class="w-full" loading="lazy" />
          </div>

          <!-- Real chart -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Real BTC 4H chart - Support zone in action</p>
            <img src="/images/support-resistance/sr-page-09.png" alt="BTC 4H support zone chart" class="w-full" loading="lazy" />
          </div>

          <!-- How to draw -->
          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <h4 class="font-medium text-white mb-2">How to draw support zones:</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Find where price ranged before breaking upward
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Mark the extremities of that range (lowest wick to highest wick)
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                That rectangle is your support zone - buyers are interested here
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-information-circle" class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                No perfect way to draw it - some use wicks, some use candle closes. Backtest what works for you.
              </li>
            </ul>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== RESISTANCE ZONES ==================== -->
    <div v-if="activeSection === 'resistance'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Resistance Zones</h2>
            <UBadge color="red" variant="soft">Sellers defend here</UBadge>
          </div>
        </template>

        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            The exact mirror of support. A resistance zone is where price consolidates
            and then <strong class="text-red-400">breaks out to the downside</strong>.
            That range becomes the "ceiling" price can return to.
          </p>

          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-medium text-red-400 mb-2">Think of it like this:</h4>
            <p class="text-sm text-gray-300">
              Price hangs out in a range, then sellers get aggressive and push price DOWN.
              That range is now a resistance zone. If price comes back up to it,
              sellers are likely to show up again.
            </p>
          </div>

          <!-- Resistance zone illustration -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Resistance Zone Illustration and Real BTC 1H Chart</p>
            <img src="/images/support-resistance/sr-page-09.png" alt="Resistance zone illustration" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Real BTC 1H chart - Resistance zone rejected price</p>
            <img src="/images/support-resistance/sr-page-10.png" alt="BTC 1H resistance zone" class="w-full" loading="lazy" />
          </div>

          <!-- Why zones matter -->
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
              <h4 class="font-medium text-amber-400">Why zones, not lines?</h4>
            </div>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>Zones let you <strong class="text-white">ladder orders</strong> across the area instead of picking one exact price</li>
              <li>You won't get "front-ran" by a few cents like you would with a single line</li>
              <li>You can <strong class="text-white">set limit orders and walk away</strong> - no need to stare at the screen</li>
              <li>Big players (institutions) place huge orders in these zones - you want to trade alongside them</li>
            </ul>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== CONTINUATION ZONES ==================== -->
    <div v-if="activeSection === 'continuation'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Type 1: Continuation Zones</h2>
            <UBadge color="blue" variant="soft">Trend continues</UBadge>
          </div>
        </template>

        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            When price is already trending, pauses in a small range, then
            <strong class="text-white">continues in the same direction</strong> - that's a continuation zone.
          </p>

          <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <h4 class="font-medium text-blue-400 mb-2">Real-world analogy:</h4>
            <p class="text-sm text-gray-300">
              Think of a runner (price) sprinting uphill. They stop to catch their breath (range),
              then keep running in the same direction (breakout). That rest stop is the continuation zone.
              If the runner comes back, they'll probably take a rest there again before continuing.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Support continuation -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-green-400">Support Continuation (Bullish)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Price is in an <strong class="text-green-400">uptrend</strong>, forms a range, then breaks UP
            and keeps going. If it ever comes back to that range = potential long entry.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Support continuation illustration and BTC 1H real chart</p>
            <img src="/images/support-resistance/sr-page-11.png" alt="Support continuation zone illustration" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">BTC 1H - Price returns to zone and bounces</p>
            <img src="/images/support-resistance/sr-page-12.png" alt="Support continuation on real BTC chart" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- Resistance continuation -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-red-400">Resistance Continuation (Bearish)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Price is in a <strong class="text-red-400">downtrend</strong>, forms a range, then breaks DOWN
            and keeps going. If it comes back to that range = potential short entry.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Resistance continuation and BTC 1H chart</p>
            <img src="/images/support-resistance/sr-page-12.png" alt="Resistance continuation illustration" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Resistance continuation on real chart - zone holds as ceiling</p>
            <img src="/images/support-resistance/sr-page-13.png" alt="Resistance continuation on real chart" class="w-full" loading="lazy" />
          </div>

          <!-- S/R Flip explanation -->
          <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-purple-400" />
              <h4 class="font-medium text-purple-400">The S/R Flip on Higher Timeframes</h4>
            </div>
            <p class="text-sm text-gray-300">
              On lower timeframes, these look like continuation zones. But zoom out to a higher timeframe
              and they look like a classic <strong class="text-white">support/resistance flip</strong>.
              Same concept, different zoom level.
            </p>
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Zoomed in (LTF) vs Zoomed out (HTF) - same area, S/R flip visible</p>
            <img src="/images/support-resistance/sr-page-14.png" alt="S/R flip on different timeframes" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== REVERSAL ZONES ==================== -->
    <div v-if="activeSection === 'reversal'" class="space-y-6">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Type 2: Reversal Zones</h2>
            <UBadge color="amber" variant="soft">Trend changes</UBadge>
          </div>
        </template>

        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            When price is trending one way, forms a range, then
            <strong class="text-amber-400">breaks out in the OPPOSITE direction</strong> - that's a reversal zone.
          </p>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <h4 class="font-medium text-amber-400 mb-2">Real-world analogy:</h4>
            <p class="text-sm text-gray-300">
              The runner was going downhill, stops to rest (range), then suddenly turns around
              and starts running uphill. That turning point is the reversal zone.
              If they come back to it, they might turn around again.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Bullish reversal -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-green-400">Bullish Reversal Zone (Downtrend to Uptrend)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Price was falling, formed a range at the bottom, then
            <strong class="text-green-400">broke out upward</strong>.
            If it returns to this zone, look for long entries.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Bullish reversal zone - illustration and real BTC 1H chart</p>
            <img src="/images/support-resistance/sr-page-15.png" alt="Bullish reversal zone illustration" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Real chart - price reversed from bearish to bullish at this zone</p>
            <img src="/images/support-resistance/sr-page-16.png" alt="Bullish reversal on real BTC chart" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-medium text-green-400 mb-2">Key patience rule:</h4>
            <p class="text-sm text-gray-300">
              If price never comes back to your reversal zone, <strong class="text-white">never chase it
              with market orders</strong>. You simply move on to the next setup. Patience is vital.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Bearish reversal -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-red-400">Bearish Reversal Zone (Uptrend to Downtrend)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Price was rising, formed a range at the top, then
            <strong class="text-red-400">broke out downward</strong>.
            Price struggled to break the last high, showing weakness.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Bearish reversal zone - illustration and real chart</p>
            <img src="/images/support-resistance/sr-page-16.png" alt="Bearish reversal zone illustration" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">BTC 1H - Price could not break the top range, reversed bearish</p>
            <img src="/images/support-resistance/sr-page-17.png" alt="Bearish reversal on real chart" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== MS CONFLUENCE ==================== -->
    <div v-if="activeSection === 'confluence'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trading Zones with Market Structure</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Charts are FULL of support and resistance zones. Not all of them are worth trading.
            The key is to combine zones with <strong class="text-primary-400">market structure</strong>
            to filter the best setups.
          </p>

          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-medium text-primary-400 mb-3">Two methods to trade zones with MS:</h4>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs font-bold shrink-0">1</span>
                <div>
                  <p class="text-white font-medium">Continuation zones + BOS (Safer)</p>
                  <p class="text-sm text-gray-400">Wait for a Break of Structure, then enter at the zone that caused it on the pullback.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold shrink-0">2</span>
                <div>
                  <p class="text-white font-medium">Reversal zones + CHoCH (Aggressive)</p>
                  <p class="text-sm text-gray-400">Look for reversal zones that cause a CHoCH in substructure. Riskier but earlier entries.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <p class="text-sm text-gray-300">
              <strong class="text-green-400">For beginners:</strong> Stick with Method 1.
              Wait for the BOS confirmation before jumping into trades. It's safer and easier to learn.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Example 1: Continuation + MS -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Example 1: Continuation Zones + BOS</h3>
        </template>
        <div class="space-y-4">
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">4H BTC - Support zones combined with market structure (BOS + CHoCH)</p>
            <img src="/images/support-resistance/sr-page-18.png" alt="Continuation zones with market structure" class="w-full" loading="lazy" />
          </div>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-green-400 font-bold shrink-0">Step 1</span>
              <p class="text-sm text-gray-300">After a BOS to the upside, <strong class="text-white">never enter right away</strong> - wait for a pullback.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-green-400 font-bold shrink-0">Step 2</span>
              <p class="text-sm text-gray-300">Draw support zones from the <strong class="text-white">last bearish candles before the BOS happened</strong>.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-green-400 font-bold shrink-0">Step 3</span>
              <p class="text-sm text-gray-300">Watch which support zone holds. Use <strong class="text-white">bullish CHoCHs</strong> on lower TFs to confirm the pullback is ending.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-green-400 font-bold shrink-0">Step 4</span>
              <p class="text-sm text-gray-300">Resistance zones that fail to push price lower = <strong class="text-white">zone failure</strong>. These confirm uptrend strength.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
              <h4 class="font-medium text-amber-400">Golden Rule</h4>
            </div>
            <p class="text-sm text-gray-300">
              Focus on zones that <strong class="text-white">lead to a BOS</strong>. These zones are highly
              likely to hold the next time price returns to them.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Example 2: Reversal + MS -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Example 2: Reversal Zones + MS</h3>
        </template>
        <div class="space-y-4">
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">4H BTC - Resistance zones during a bearish trend reversal</p>
            <img src="/images/support-resistance/sr-page-20.png" alt="Reversal zones with market structure" class="w-full" loading="lazy" />
          </div>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-red-400 font-bold shrink-0">Step 1</span>
              <p class="text-sm text-gray-300">First sign of reversal: a <strong class="text-white">bearish CHoCH</strong> - price shows weakness at the top.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-red-400 font-bold shrink-0">Step 2</span>
              <p class="text-sm text-gray-300">After first bearish BOS, the trend change is confirmed. Every lower high = resistance zone forming.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-red-400 font-bold shrink-0">Step 3</span>
              <p class="text-sm text-gray-300">Draw zones from the <strong class="text-white">last buy candle before the bearish BOS</strong>.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-red-400 font-bold shrink-0">Step 4</span>
              <p class="text-sm text-gray-300">Support zones that fail = zone failure. Confirms bearish direction is intact.</p>
            </div>
          </div>

          <!-- Every BOS note -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <h4 class="font-medium text-green-400 mb-2">Bullish BOS means:</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>A support zone was respected</li>
                <li>A resistance zone was NOT respected (failed)</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <h4 class="font-medium text-red-400 mb-2">Bearish BOS means:</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>A resistance zone was respected</li>
                <li>A support zone was NOT respected (failed)</li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Quick Cheat Sheet -->
      <div class="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h3 class="text-lg font-semibold text-white mb-4">Quick Cheat Sheet</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p class="text-gray-300">Buy at <strong class="text-green-400">support zones</strong> - sell at <strong class="text-red-400">resistance zones</strong></p>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p class="text-gray-300">Not all zones are equal - use <strong class="text-white">BOS/CHoCH</strong> to filter the best ones</p>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p class="text-gray-300">Never enter after a BOS - always <strong class="text-white">wait for the pullback</strong></p>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p class="text-gray-300">Zone failures tell you the trend is strong in the opposite direction</p>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p class="text-gray-300">If price never returns to your zone, <strong class="text-white">move on</strong> - never chase</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
