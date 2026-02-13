<script setup lang="ts">
const activeSection = ref('what')

const sections = [
  { id: 'what', label: 'What Are Levels?', icon: 'i-heroicons-light-bulb' },
  { id: 'drawing', label: 'Drawing Levels', icon: 'i-heroicons-pencil' },
  { id: 'refining', label: 'Refining', icon: 'i-heroicons-adjustments-horizontal' },
  { id: 'trading', label: 'Trading Levels', icon: 'i-heroicons-bolt' },
  { id: 'management', label: 'Trade Management', icon: 'i-heroicons-shield-check' },
  { id: 'rules', label: 'Golden Rules', icon: 'i-heroicons-star' },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <UBadge color="primary" variant="soft">Week 3</UBadge>
        <UBadge color="amber" variant="soft">Advanced</UBadge>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Level to Level Trading</h1>
      <p class="text-gray-400">
        The most important and logical system in trading. Levels are the roadmap - everything else is just confirmation.
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

    <!-- ==================== WHAT ARE LEVELS ==================== -->
    <div v-if="activeSection === 'what'" class="space-y-6">

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">What Are Levels, Really?</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Levels are NOT just lines on a chart. They represent
            <strong class="text-primary-400">areas where the market has decided to buy or sell</strong>.
            They're like invisible walls where big money has placed their orders.
          </p>

          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-medium text-primary-400 mb-2">Think of it like a city map:</h4>
            <p class="text-sm text-gray-300">
              Levels are the major intersections. Price is the car driving between them.
              At every intersection (level), the car has to decide: keep going straight, or turn around.
              Your job as a trader is to mark the intersections and predict what happens when the car arrives.
            </p>
          </div>

          <!-- Heatmap from PDF -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Order book heatmap showing where buy/sell orders cluster at levels</p>
            <img src="/images/levels-trading/lt-page-04.png" alt="Heatmap showing limit orders at levels" class="w-full" loading="lazy" />
          </div>

          <p class="text-gray-300 leading-relaxed">
            The heatmap above shows limit orders on an exchange. The bright areas are where
            people have placed orders. Those clusters ARE the levels. We use price action to
            identify them without needing a heatmap.
          </p>
        </div>
      </UCard>

      <!-- Expectation vs Reality -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Expectation vs Reality</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Most beginners think S/R are clean bounces. Reality is messier - price
            <strong class="text-white">overshoots, undershoots, and wicks through levels</strong>.
            That's why we think in zones, not exact lines.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Top: What you expect. Bottom: What actually happens.</p>
            <img src="/images/levels-trading/lt-page-05.png" alt="Expectation vs reality of support and resistance" class="w-full" loading="lazy" />
          </div>

          <!-- Critical misconceptions -->
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-medium text-red-400 mb-3">Common mistakes to avoid:</h4>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-circle" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Myth:</strong> Levels get stronger with more touches. <strong class="text-red-400">Reality: They get WEAKER</strong> - orders get filled with each touch.</span>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-circle" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Myth:</strong> Just long support and short resistance. <strong class="text-red-400">Reality:</strong> You need the S/R flip, not blind entries.</span>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-circle" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Myth:</strong> Levels are exact lines. <strong class="text-red-400">Reality:</strong> They are ZONES. A weekly level is a wide zone on a 4H chart.</span>
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Levels vs Zones -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Levels Are Zones, Not Lines</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            A small zone on the weekly timeframe might be a large zone on the 4-hour.
            You use HTF levels for bias and direction, but you need LTF levels for precise entries.
          </p>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <h4 class="font-medium text-white mb-2">What creates levels?</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li>Limit orders (bids/asks) from big players</li>
                <li>Stop losses clustered at similar prices</li>
                <li>Psychological round numbers ($50K, $100K)</li>
                <li>Previous swing highs and lows</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <h4 class="font-medium text-white mb-2">What makes a level important?</h4>
              <ul class="text-sm text-gray-300 space-y-1">
                <li><strong class="text-primary-400">Number of touches</strong> (validated by price)</li>
                <li><strong class="text-primary-400">Recency</strong> (recent reactions > old ones)</li>
                <li><strong class="text-primary-400">Violence of reaction</strong> (big move = important)</li>
                <li><strong class="text-primary-400">Duration in play</strong> (how long it's been relevant)</li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== DRAWING LEVELS ==================== -->
    <div v-if="activeSection === 'drawing'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">How to Draw Levels</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Start by zooming out on your chart to see as many candles as possible
            while still being able to distinguish individual candles and wicks.
            Then look for areas where price has clearly reacted (bounced, reversed, stalled).
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Weekly chart with levels marked - arrows show reasons for each level</p>
            <img src="/images/levels-trading/lt-page-09.png" alt="Weekly chart with levels marked" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- Tip: Color code -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-semibold text-white">Pro Tip: Color Code Your Lines</h3>
            <UBadge color="primary" variant="soft">Organization</UBadge>
          </div>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Use different colors and thicknesses for different timeframes.
            This way you instantly know which timeframe a level belongs to.
          </p>

          <div class="grid sm:grid-cols-3 gap-3">
            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
              <div class="w-full h-1 bg-red-500 rounded mb-3"></div>
              <p class="font-medium text-red-400">Red = Weekly</p>
              <p class="text-xs text-gray-400">Thickest lines</p>
            </div>
            <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-center">
              <div class="w-full h-0.5 bg-blue-500 rounded mb-3 mt-0.5"></div>
              <p class="font-medium text-blue-400">Blue = Daily</p>
              <p class="text-xs text-gray-400">Medium lines</p>
            </div>
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-center">
              <div class="w-full h-px bg-green-500 rounded mb-3 mt-1"></div>
              <p class="font-medium text-green-400">Green = Hourly</p>
              <p class="text-xs text-gray-400">Thinnest lines</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
              <h4 class="font-medium text-amber-400">Visibility Rule</h4>
            </div>
            <p class="text-sm text-gray-300">
              Each level must be visible on timeframes lower and equal to its own.
              A daily level shows on hourly and 4H charts, but NOT on the weekly. No need to clutter higher TFs.
            </p>
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">TradingView visibility settings - only show levels on relevant timeframes</p>
            <img src="/images/levels-trading/lt-page-07.png" alt="TradingView line visibility settings" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- Which levels to mark -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Which Levels to Mark?</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Look right to left (recent first). Mark areas where price reacted.
            Daily levels should also respect the weekly levels you've already drawn.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Daily levels overlaid on the weekly chart - notice how they align</p>
            <img src="/images/levels-trading/lt-page-10.png" alt="Daily levels respecting weekly levels" class="w-full" loading="lazy" />
          </div>

          <!-- When a level loses importance -->
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-medium text-red-400 mb-2">When does a level lose importance?</h4>
            <p class="text-sm text-gray-300 mb-3">
              When price starts <strong class="text-white">trading through it repeatedly</strong> without reacting.
              If recent price action disregards a level, it loses relevance. Always judge from right to left.
            </p>
            <div class="bg-gray-900 rounded-xl overflow-hidden">
              <img src="/images/levels-trading/lt-page-10.png" alt="Level losing importance as price trades through it" class="w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== REFINING ==================== -->
    <div v-if="activeSection === 'refining'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Refining Your Levels</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Drawing levels is a skill AND an art. The more you practice, the better you get.
            Here are the refinement techniques that separate beginners from profitable traders.
          </p>

          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-medium text-primary-400 mb-2">The #1 Rule of Level Tuning:</h4>
            <p class="text-sm text-gray-300">
              <strong class="text-white">Recent price action is the best price action.</strong>
              Always look from right to left. What price did recently matters far more than what happened months ago.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Middle of zone technique -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Technique: Middle of the Zone</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            When confused about where exactly to place your level within a zone,
            <strong class="text-white">pick the middle</strong> with the most touches. Don't overthink it.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Pick the middle of the zone - go for most touches</p>
            <img src="/images/levels-trading/lt-page-13.png" alt="Middle of the zone technique" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <p class="text-sm text-gray-300">
              The exact middle is not important. Don't let imperfection upset you.
              Think of S/R as zones, not pitch-perfect lines. Get in the zone, that's good enough.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Exception: violent breakouts -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Exception: Violent Breakouts</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            When price <strong class="text-white">breaks out violently</strong> from a range, use the
            highs of the range (not the middle). Price is more likely to dip just to the
            breakout point and fly off, rather than returning to the middle.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Violent breakout: use the highs, not the mean</p>
            <img src="/images/levels-trading/lt-page-14.png" alt="Violent breakout retest level" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- SFP tweak -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Tweaking for Swing Failure Patterns (SFPs)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Where novice traders draw a level and expect support, smart money sees a
            liquidity grab opportunity. When you spot obvious stop-losses clustered below
            a level, adjust your level to account for the SFP wick.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">How novice traders draw levels vs where to actually tweak them</p>
            <img src="/images/levels-trading/lt-page-14.png" alt="Level tweaking for SFP" class="w-full" loading="lazy" />
          </div>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">Adjusted level predicts where the SFP wick reaches</p>
            <img src="/images/levels-trading/lt-page-15.png" alt="SFP wick prediction using adjusted level" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
              <h4 class="font-medium text-amber-400">This takes practice</h4>
            </div>
            <p class="text-sm text-gray-300">
              No one can teach you exactly how to tweak every level. You WILL get front-ran,
              you WILL get scam-wicked. Keep following the system, keep reviewing your trades,
              and you'll get better over time.
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== TRADING LEVELS ==================== -->
    <div v-if="activeSection === 'trading'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Taking Trades at Levels</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Knowledge alone doesn't make you profitable. You need a
            <strong class="text-white">system you stick to regardless of feelings</strong>.
            Then backtest it and track your success rate.
          </p>

          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <p class="text-sm text-gray-300">
              <strong class="text-green-400">Remember:</strong> Taking 2:1 R setups with a 50% success rate
              is enough to be a trading legend. You don't need to win every trade.
            </p>
          </div>
        </div>
      </UCard>

      <!-- 3 Touch Level -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-semibold text-white">1) Three-Touch Level</h3>
            <UBadge color="green" variant="soft">Highest confidence</UBadge>
          </div>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            A level touched 3 times can automatically be assumed to give at least a
            short-term <strong class="text-white">S/R flip</strong>. These are the best setups.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">3-touch level trade setup - LINK 4H chart</p>
            <img src="/images/levels-trading/lt-page-16.png" alt="3-touch level trade setup" class="w-full" loading="lazy" />
          </div>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-primary-400 font-bold shrink-0">Entry</span>
              <p class="text-sm text-gray-300">On the first touch from the OTHER side (the flip). Place limit orders.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-red-400 font-bold shrink-0">Stop</span>
              <p class="text-sm text-gray-300">Above/below the next timeframe level. If that flips, your trade idea is wrong.</p>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
              <span class="text-green-400 font-bold shrink-0">Target</span>
              <p class="text-sm text-gray-300">First Trouble Area (FTA) - the next level where price might stall. Take profits, no emotions.</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 2 Touch Level -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-semibold text-white">2) Two-Touch Level</h3>
            <UBadge color="amber" variant="soft">Needs more confluence</UBadge>
          </div>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            A level tested only twice, or already flipped and retested. You need
            <strong class="text-white">extra confluence</strong> to trade these.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">2-touch level with confluence factors</p>
            <img src="/images/levels-trading/lt-page-17.png" alt="2-touch level trade setup" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <h4 class="font-medium text-white mb-2">Confluence factors needed:</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Daily bias</strong> - fade LTF trend, follow HTF trend</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Fib levels</strong> - 0.382, 0.5, 0.618 alignment with your level</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">SFP</strong> (Swing Failure Pattern) at the level</span>
              </li>
            </ul>
          </div>

          <!-- Level description clarification -->
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">How to count touches - it's about the FLIP side, not the same side</p>
            <img src="/images/levels-trading/lt-page-18.png" alt="Level description - counting touches correctly" class="w-full" loading="lazy" />
          </div>
        </div>
      </UCard>

      <!-- 1 Touch Level -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-semibold text-white">3) One-Touch Level</h3>
            <UBadge color="red" variant="soft">High risk</UBadge>
          </div>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            You normally <strong class="text-red-400">don't want to trade these</strong> unless there's
            very high confluence. Multiple indicators aligning (RSI, MACD divergence, etc.).
          </p>

          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <p class="text-sm text-gray-300">
              One-touch levels are the riskiest. If you're still learning,
              <strong class="text-white">skip these entirely</strong> and focus on 3-touch and 2-touch setups.
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== TRADE MANAGEMENT ==================== -->
    <div v-if="activeSection === 'management'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Stop Loss & Target Management</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Draw your fibs from daily swing highs to lows. Your execution timeframe
            (e.g. 1H) should give you a clear trade idea. The levels you drew earlier
            become your stops and targets.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">LINK 4H - Entry at weekly level, stop above 4H level, target at daily level = 4.8R</p>
            <img src="/images/levels-trading/lt-page-19.png" alt="Trade management with levels" class="w-full" loading="lazy" />
          </div>

          <div class="grid sm:grid-cols-3 gap-3">
            <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
              <h4 class="font-medium text-primary-400 mb-2">Entry</h4>
              <p class="text-xs text-gray-300">At your marked level. Limit orders preferred.</p>
            </div>
            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <h4 class="font-medium text-red-400 mb-2">Stop Loss</h4>
              <p class="text-xs text-gray-300">Above/below the NEXT level. If that flips, your idea is invalid.</p>
            </div>
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <h4 class="font-medium text-green-400 mb-2">Target</h4>
              <p class="text-xs text-gray-300">First Trouble Area (FTA). Scale out at levels along the way.</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Moving stops -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Trailing Your Stop Loss</h3>
        </template>
        <div class="space-y-4">
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">NEAR 4H - Mark all levels, manage trade carefully at each one</p>
            <img src="/images/levels-trading/lt-page-20.png" alt="Trade management with multiple levels" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
            <h4 class="font-medium text-white mb-2">How to trail stops using levels:</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Once price moves past an important level, move your stop to just below it
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                If a new support forms, you want price to hold it before reaching your target
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Scale out at different levels where price might bounce
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                Once at target: <strong class="text-white">get out, take profits, no emotions</strong>
              </li>
            </ul>
          </div>
        </div>
      </UCard>

      <!-- Same-role 3 touch -->
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold text-white">Same-Role 3-Touch Level (MACD Required)</h3>
        </template>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            In ranging markets, sometimes support/resistance holds multiple times in the same role.
            For a level tested 3 times <strong class="text-white">from the same side</strong>,
            you need a MACD divergence to trade it.
          </p>

          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">3 SFPs at same support level with MACD bullish divergence</p>
            <img src="/images/levels-trading/lt-page-22.png" alt="MACD divergence at 3-touch same-role level" class="w-full" loading="lazy" />
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400" />
              <h4 class="font-medium text-amber-400">Key Insight</h4>
            </div>
            <p class="text-sm text-gray-300">
              If a market is constantly moving TO a level, it wants to <strong class="text-white">get through there</strong>.
              Levels with the same role on multiple touches get
              <strong class="text-red-400">weaker and weaker</strong>.
              Flipped levels get stronger with touches.
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ==================== GOLDEN RULES ==================== -->
    <div v-if="activeSection === 'rules'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">The Most Important Factor</h2>
        </template>
        <div class="space-y-4">
          <div class="bg-gray-900 rounded-xl overflow-hidden">
            <p class="text-xs text-gray-500 px-4 pt-3">When to use limit orders vs wait for SFP</p>
            <img src="/images/levels-trading/lt-page-21.png" alt="Limit orders vs SFP at levels" class="w-full" loading="lazy" />
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <h4 class="font-medium text-green-400 mb-2">Level changing roles (S/R flip)</h4>
              <p class="text-sm text-gray-300">
                Place <strong class="text-white">limit orders</strong>. Old support becoming resistance?
                Limit short it. High confidence.
              </p>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <h4 class="font-medium text-amber-400 mb-2">Level in same role</h4>
              <p class="text-sm text-gray-300">
                Wait for an <strong class="text-white">SFP</strong> or other confirmation.
                Everyone expects the hold, so market makers will exploit that.
              </p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Summary Rules -->
      <div class="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <div class="flex items-center gap-3 mb-4">
          <UIcon name="i-heroicons-star" class="w-6 h-6 text-amber-400" />
          <h3 class="text-lg font-semibold text-amber-400">Level Trading Golden Rules</h3>
        </div>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">1</span>
            <p class="text-gray-300"><strong class="text-white">Never blindly long support or short resistance.</strong> Play the S/R flip instead.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">2</span>
            <p class="text-gray-300"><strong class="text-white">Levels get weaker with same-role touches.</strong> Each touch fills orders. Flipped levels get stronger.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">3</span>
            <p class="text-gray-300"><strong class="text-white">Recent price action > old price action.</strong> Always read your chart from right to left.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">4</span>
            <p class="text-gray-300"><strong class="text-white">Think in ZONES, not exact lines.</strong> Use zones on HTF, refine on LTF for entries.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">5</span>
            <p class="text-gray-300"><strong class="text-white">3-touch flipped level = highest confidence.</strong> 2-touch needs confluence. 1-touch = skip unless you're experienced.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">6</span>
            <p class="text-gray-300"><strong class="text-white">Violent rallies into your level = good.</strong> More people get trapped = better for your trade.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">7</span>
            <p class="text-gray-300"><strong class="text-white">Target = First Trouble Area.</strong> Take profits at levels, scale out, no emotions.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold shrink-0">8</span>
            <p class="text-gray-300"><strong class="text-white">Patience makes perfect.</strong> Not every level is a trade. Wait for the best setups.</p>
          </div>
        </div>
      </div>

      <!-- Confidence progression -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Your Learning Path</h2>
        </template>
        <div class="space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <span class="text-2xl font-bold text-green-400">1</span>
              <div>
                <h4 class="font-medium text-white">Practice drawing levels</h4>
                <p class="text-sm text-gray-400">Open charts, draw levels, see if price reacts. No money involved yet.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
              <span class="text-2xl font-bold text-blue-400">2</span>
              <div>
                <h4 class="font-medium text-white">Practice refining</h4>
                <p class="text-sm text-gray-400">Tweak levels. Look right to left. Notice which ones price respects.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
              <span class="text-2xl font-bold text-purple-400">3</span>
              <div>
                <h4 class="font-medium text-white">Paper trade the flips</h4>
                <p class="text-sm text-gray-400">Mark your entries/stops/targets. Track your R:R. Build confidence before using real money.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <span class="text-2xl font-bold text-amber-400">4</span>
              <div>
                <h4 class="font-medium text-white">Trade small, review always</h4>
                <p class="text-sm text-gray-400">Start with small positions. Review every trade. The market is your best teacher.</p>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
