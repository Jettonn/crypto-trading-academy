<script setup lang="ts">
const activeSection = ref('overview')

const sections = [
  { id: 'overview', label: 'System Overview', icon: 'i-heroicons-map' },
  { id: 'pre-trade', label: 'Pre-Trade', icon: 'i-heroicons-magnifying-glass' },
  { id: 'structure', label: 'Market Structure', icon: 'i-heroicons-arrows-up-down' },
  { id: 'zones', label: 'Key Zones', icon: 'i-heroicons-map-pin' },
  { id: 'entry', label: 'Entry Criteria', icon: 'i-heroicons-arrow-right-circle' },
  { id: 'management', label: 'Trade Management', icon: 'i-heroicons-shield-check' },
  { id: 'exit', label: 'Exit Strategy', icon: 'i-heroicons-arrow-left-on-rectangle' },
  { id: 'principles', label: 'Principles & Rules', icon: 'i-heroicons-star' },
]

// Interactive checklist state
const checklistState = ref({
  preTrade: {
    macroChecked: false,
    sentimentChecked: false,
    riskCalculated: false,
    stopLossPlanned: false,
  },
  analysis: {
    htfBiasIdentified: false,
    bosOrChochSpotted: false,
    keyZoneMarked: false,
    levelTypeIdentified: false,
    levelStrengthConfirmed: false,
  },
  entry: {
    htfAligned: false,
    pullbackOccurred: false,
    chochConfirmed: false,
    zoneRetest: false,
    rrMinimum2to1: false,
    positionSizeCalculated: false,
  },
  management: {
    stopLossSet: false,
    targetSet: false,
    breakevenMoved: false,
  },
  exit: {
    targetHit: false,
    profitsTaken: false,
    tradeJournaled: false,
  },
})

const totalItems = computed(() => {
  return Object.values(checklistState.value).reduce((acc, phase) => {
    return acc + Object.keys(phase).length
  }, 0)
})

const completedItems = computed(() => {
  return Object.values(checklistState.value).reduce((acc, phase) => {
    return acc + Object.values(phase).filter(Boolean).length
  }, 0)
})

const progressPercent = computed(() => {
  return Math.round((completedItems.value / totalItems.value) * 100)
})

const resetChecklist = () => {
  Object.keys(checklistState.value).forEach((phase) => {
    const p = phase as keyof typeof checklistState.value
    Object.keys(checklistState.value[p]).forEach((item) => {
      ;(checklistState.value[p] as Record<string, boolean>)[item] = false
    })
  })
}

// LocalStorage persistence
onMounted(() => {
  const saved = localStorage.getItem('trading-checklist-state')
  if (saved) {
    try {
      checklistState.value = JSON.parse(saved)
    } catch {
      // Ignore corrupt data
    }
  }
})

watch(
  checklistState,
  (newState) => {
    localStorage.setItem('trading-checklist-state', JSON.stringify(newState))
  },
  { deep: true }
)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <!-- Hero -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <UBadge color="primary" variant="soft">Complete System</UBadge>
        <UBadge color="amber" variant="soft">Weeks 1-3 Combined</UBadge>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">The Complete Trading System</h1>
      <p class="text-gray-400">
        All learnings from risk management, market structure, support/resistance, and level trading
        organized into a single, actionable workflow. Use the reference tabs to review each phase,
        then apply the interactive checklist to every trade.
      </p>
    </div>

    <!-- Tab Navigation -->
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

    <!-- ======================== -->
    <!-- SECTION 1: SYSTEM OVERVIEW -->
    <!-- ======================== -->
    <div v-if="activeSection === 'overview'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">The 5-Phase Trading Workflow</h2>
        </template>
        <p class="text-gray-400 mb-6">
          Every trade follows the same 5 phases. No exceptions. No shortcuts. This system is built on
          pattern repetition and probability - we don't predict, we react to what the market shows us.
        </p>

        <!-- Workflow Visual -->
        <div class="grid grid-cols-5 gap-2 mb-6">
          <div class="text-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <UIcon name="i-heroicons-magnifying-glass" class="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div class="text-xs font-semibold text-blue-400">1. Pre-Trade</div>
            <div class="text-xs text-gray-500 mt-1">Macro & Risk</div>
          </div>
          <div class="text-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <UIcon name="i-heroicons-arrows-up-down" class="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div class="text-xs font-semibold text-purple-400">2. Analysis</div>
            <div class="text-xs text-gray-500 mt-1">MS & Zones</div>
          </div>
          <div class="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <UIcon name="i-heroicons-arrow-right-circle" class="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div class="text-xs font-semibold text-green-400">3. Entry</div>
            <div class="text-xs text-gray-500 mt-1">Confluence</div>
          </div>
          <div class="text-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div class="text-xs font-semibold text-amber-400">4. Manage</div>
            <div class="text-xs text-gray-500 mt-1">SL & Trailing</div>
          </div>
          <div class="text-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <UIcon name="i-heroicons-arrow-left-on-rectangle" class="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div class="text-xs font-semibold text-red-400">5. Exit</div>
            <div class="text-xs text-gray-500 mt-1">FTA & Journal</div>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trading Philosophy</h2>
        </template>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <p class="text-gray-300">
              This system is built on <strong class="text-white">pattern repetition and probability</strong>.
              We don't predict where the market will go - we identify high-probability setups and manage risk.
              Taking 2:1 R:R setups with a 50% win rate is enough to be consistently profitable.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="flex items-center gap-2 mb-2">
                <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
                <h4 class="font-semibold text-amber-400">Core Rule #1</h4>
              </div>
              <p class="text-sm text-gray-300">If a trade can't be spotted easily, it doesn't exist. Move on.</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div class="flex items-center gap-2 mb-2">
                <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400" />
                <h4 class="font-semibold text-amber-400">Core Rule #2</h4>
              </div>
              <p class="text-sm text-gray-300">Never risk more than 1-2% of your account on a single trade. Ever.</p>
            </div>
          </div>
        </div>
      </UCard>

      <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
        <div class="flex items-center gap-2 mb-3">
          <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400" />
          <h4 class="font-semibold text-green-400">What Makes a Good Trade?</h4>
        </div>
        <div class="grid sm:grid-cols-3 gap-3 text-sm">
          <div class="text-gray-300">HTF trend alignment + pullback after BOS</div>
          <div class="text-gray-300">CHoCH confirmation on LTF + key zone retest</div>
          <div class="text-gray-300">Minimum 2:1 R:R + proper position sizing</div>
        </div>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 2: PRE-TRADE -->
    <!-- ======================== -->
    <div v-if="activeSection === 'pre-trade'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Pre-Trade Analysis</h2>
        </template>
        <p class="text-gray-400 mb-4">
          Before touching a chart, check the bigger picture. Macro tells you <strong class="text-white">IF</strong>
          you should be trading. Technicals tell you <strong class="text-white">WHERE</strong> to trade.
        </p>

        <div class="space-y-4">
          <!-- Macro Context -->
          <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-blue-400" />
              <h4 class="font-semibold text-blue-400">Macro Context Check</h4>
            </div>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Economic calendar:</strong> Any major events today? (FOMC, CPI, NFP) - Avoid trading during high-impact news</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Market sentiment:</strong> Check Fear & Greed Index and funding rates. Extreme readings = caution</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Correlations:</strong> BTC dominance trend, DXY direction, stock market momentum</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">Finviz heatmap:</strong> Quick scan for sector rotation and risk-on vs risk-off environment</span>
              </li>
            </ul>
          </div>

          <!-- Risk Calculation -->
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-heroicons-calculator" class="w-5 h-5 text-red-400" />
              <h4 class="font-semibold text-red-400">Risk Calculation (Do This FIRST)</h4>
            </div>
            <div class="space-y-3 text-sm">
              <div class="p-3 rounded-lg bg-gray-800/50">
                <div class="text-gray-400 mb-1">Step 1: Know Your Account Size</div>
                <div class="text-white font-mono">Account = $___</div>
              </div>
              <div class="p-3 rounded-lg bg-gray-800/50">
                <div class="text-gray-400 mb-1">Step 2: Calculate Max Risk (1-2%)</div>
                <div class="text-white font-mono">Max Risk = Account x 0.01 or 0.02</div>
                <div class="text-gray-500 text-xs mt-1">Example: $10,000 x 2% = $200 max risk per trade</div>
              </div>
              <div class="p-3 rounded-lg bg-gray-800/50">
                <div class="text-gray-400 mb-1">Step 3: Identify Stop Loss Level BEFORE Entry</div>
                <div class="text-white font-mono">SL Distance = Entry Price - Stop Price</div>
              </div>
              <div class="p-3 rounded-lg bg-gray-800/50">
                <div class="text-gray-400 mb-1">Step 4: Calculate Position Size</div>
                <div class="text-white font-mono">Position Size = Risk Amount / SL Distance</div>
                <div class="text-gray-500 text-xs mt-1">Example: $200 risk / 5% SL = $4,000 position</div>
              </div>
            </div>
          </div>

          <!-- Pre-Trade Mindset -->
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-3">
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
              <h4 class="font-semibold text-amber-400">Pre-Trade Mindset Check</h4>
            </div>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>Am I trading based on my system, or out of <strong class="text-white">FOMO/revenge</strong>?</li>
              <li>Do I have a <strong class="text-white">stop loss planned</strong> before looking at entry?</li>
              <li>Am I okay with <strong class="text-white">losing this amount</strong> if the trade goes wrong?</li>
              <li>Impulsive trades are losing trades - <strong class="text-white">almost always</strong>.</li>
            </ul>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ======================== -->
    <!-- SECTION 3: MARKET STRUCTURE -->
    <!-- ======================== -->
    <div v-if="activeSection === 'structure'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Market Structure Analysis</h2>
        </template>
        <p class="text-gray-400 mb-4">
          Market structure is your compass. It tells you the current trend direction.
          Always start with HTF (4H or Daily), then zoom into LTF for entries.
        </p>

        <!-- HTF Bias -->
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-arrow-trending-up" class="w-5 h-5 text-green-400" />
              <h4 class="font-semibold text-green-400">Bullish Structure</h4>
            </div>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>Series of <strong class="text-white">HH + HL</strong> (Higher Highs + Higher Lows)</li>
              <li>Each HH = BOS (Break of Structure)</li>
              <li>Trend is your friend - look for <strong class="text-white">long setups</strong></li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-arrow-trending-down" class="w-5 h-5 text-red-400" />
              <h4 class="font-semibold text-red-400">Bearish Structure</h4>
            </div>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>Series of <strong class="text-white">LL + LH</strong> (Lower Lows + Lower Highs)</li>
              <li>Each LL = BOS (Break of Structure)</li>
              <li>Trend is your friend - look for <strong class="text-white">short setups</strong></li>
            </ul>
          </div>
        </div>
      </UCard>

      <!-- BOS Rules -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">BOS (Break of Structure)</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-400">
            BOS confirms the trend is continuing. It happens at <strong class="text-white">swing structure</strong> (the big picture).
          </p>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-red-400" />
              <h4 class="font-semibold text-red-400">Critical Rule</h4>
            </div>
            <p class="text-sm text-gray-300">
              <strong class="text-white">NEVER buy right after a BOS</strong> - always wait for the pullback.
              After every BOS, expect a pullback on that same timeframe. The pullback is where you enter.
            </p>
          </div>
          <div class="p-3 rounded-lg bg-gray-800/50 text-sm">
            <div class="text-gray-400 mb-1">What BOS Tells You:</div>
            <ul class="space-y-1 text-gray-300">
              <li><strong class="text-white">Bullish BOS</strong> = Support zone held + Resistance zone failed</li>
              <li><strong class="text-white">Bearish BOS</strong> = Resistance zone held + Support zone failed</li>
            </ul>
          </div>
        </div>
      </UCard>

      <!-- CHoCH -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">CHoCH (Change of Character)</h2>
        </template>
        <div class="space-y-4">
          <p class="text-gray-400">
            CHoCH is the early warning system. It lives in <strong class="text-white">substructure</strong>
            (small moves inside the bigger trend). BOS confirms trend; CHoCH warns of a pause or reversal.
          </p>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <h4 class="font-semibold text-red-400 mb-2">Bearish CHoCH</h4>
              <p class="text-sm text-gray-300">Mini higher-low breaks to downside</p>
              <p class="text-xs text-gray-500 mt-1">Means: "The upswing might be over. Pullback starting."</p>
            </div>
            <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <h4 class="font-semibold text-green-400 mb-2">Bullish CHoCH</h4>
              <p class="text-sm text-gray-300">Mini lower-high breaks to upside</p>
              <p class="text-xs text-gray-500 mt-1">Means: "The pullback might be over. New run starting."</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-semibold text-primary-400 mb-2">How to Use CHoCH for Entries</h4>
            <ol class="space-y-2 text-sm text-gray-300 list-decimal list-inside">
              <li>Establish <strong class="text-white">HTF trend bias</strong> (4H/Daily): Mark swing structure + confirm with BOS</li>
              <li>Drop to <strong class="text-white">LTF (15m-1H)</strong>: Watch substructure for CHoCH signals</li>
              <li>Wait for <strong class="text-white">Bearish CHoCH</strong> (pullback starting) then <strong class="text-white">Bullish CHoCH</strong> (pullback ending)</li>
              <li>Identify <strong class="text-white">key zone</strong>: Order Block, S/D zone, or S/R level</li>
              <li>Enter on <strong class="text-white">retest</strong> of key zone after CHoCH confirms direction</li>
            </ol>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400" />
              <h4 class="font-semibold text-amber-400">CHoCH Rules</h4>
            </div>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>Only mark the <strong class="text-white">FIRST</strong> CHoCH in each swing</li>
              <li><strong class="text-white">Never trade the CHoCH itself</strong> - trade the pullback after it into a key zone</li>
              <li>Wait for <strong class="text-white">candle close</strong> - wicks don't count</li>
              <li><strong class="text-white">CHoCH+</strong> (full pattern collapse) = stronger signal, tighter stop possible</li>
              <li>Beginners: Start with <strong class="text-white">4H bias + 1H CHoCH entries</strong></li>
            </ul>
          </div>
        </div>
      </UCard>

      <div class="text-center">
        <NuxtLink to="/market-structure" class="text-primary-400 hover:text-primary-300 text-sm">
          Deep dive into Market Structure with chart examples →
        </NuxtLink>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 4: KEY ZONES -->
    <!-- ======================== -->
    <div v-if="activeSection === 'zones'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Support & Resistance Zones</h2>
        </template>
        <p class="text-gray-400 mb-4">
          S/R zones are where buyers and sellers placed their orders. Think of them as invisible walls
          where big money sits. Always think in <strong class="text-white">zones, not exact lines</strong>.
        </p>

        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-semibold text-green-400 mb-2">Support Zone</h4>
            <p class="text-sm text-gray-300">Price consolidated, then broke <strong class="text-white">UP</strong>. That range = floor where buyers are interested.</p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-semibold text-red-400 mb-2">Resistance Zone</h4>
            <p class="text-sm text-gray-300">Price consolidated, then broke <strong class="text-white">DOWN</strong>. That range = ceiling where sellers are waiting.</p>
          </div>
        </div>
      </UCard>

      <!-- Zone Types -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Two Zone Types</h2>
        </template>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <h4 class="font-semibold text-blue-400 mb-2">Type 1: Continuation (Safer)</h4>
            <p class="text-sm text-gray-300 mb-2">Price pauses mid-trend, forms range, then continues in same direction.</p>
            <p class="text-xs text-gray-500">Best when combined with BOS confirmation. Wait for pullback to zone.</p>
          </div>
          <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <h4 class="font-semibold text-purple-400 mb-2">Type 2: Reversal (Aggressive)</h4>
            <p class="text-sm text-gray-300 mb-2">Price changes direction at zone. Higher risk but earlier entries.</p>
            <p class="text-xs text-gray-500">Need CHoCH confirmation in substructure before trading these.</p>
          </div>
        </div>
      </UCard>

      <!-- Level Strength -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Level Strength & Confidence</h2>
        </template>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-green-400">3-Touch Flipped Level</h4>
              <UBadge color="green" variant="soft" size="xs">Highest Confidence</UBadge>
            </div>
            <p class="text-sm text-gray-300">Can automatically assume S/R flip. Place limit orders on first touch from other side.</p>
          </div>
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-amber-400">2-Touch Level</h4>
              <UBadge color="amber" variant="soft" size="xs">Needs Confluence</UBadge>
            </div>
            <p class="text-sm text-gray-300">Need extra confluence: daily bias alignment, fib levels (0.382, 0.5, 0.618), or SFP at level.</p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-red-400">1-Touch Level</h4>
              <UBadge color="red" variant="soft" size="xs">Skip If Learning</UBadge>
            </div>
            <p class="text-sm text-gray-300">Don't trade these unless very experienced with multiple indicators aligning.</p>
          </div>

          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400" />
              <h4 class="font-semibold text-amber-400">Key Insight</h4>
            </div>
            <p class="text-sm text-gray-300">
              Levels get <strong class="text-white">WEAKER</strong> with same-role touches (orders get filled each time).
              But <strong class="text-white">flipped levels get STRONGER</strong> with touches.
              This is why the S/R flip is the #1 trade.
            </p>
          </div>
        </div>
      </UCard>

      <!-- Color Coding -->
      <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <h4 class="font-semibold text-white mb-3">Level Color Coding System</h4>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="flex items-center gap-2">
            <div class="w-4 h-1 bg-red-500 rounded"></div>
            <span class="text-gray-300"><strong class="text-white">Red</strong> = Weekly (thickest)</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-4 h-1 bg-blue-500 rounded"></div>
            <span class="text-gray-300"><strong class="text-white">Blue</strong> = Daily (medium)</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-4 h-1 bg-green-500 rounded"></div>
            <span class="text-gray-300"><strong class="text-white">Green</strong> = Hourly (thinnest)</span>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Recent price action > old price action. Always read chart from right to left.</p>
      </div>

      <div class="text-center space-x-4">
        <NuxtLink to="/support-resistance" class="text-primary-400 hover:text-primary-300 text-sm">
          S/R Zones deep dive →
        </NuxtLink>
        <NuxtLink to="/levels-trading" class="text-primary-400 hover:text-primary-300 text-sm">
          Level Trading deep dive →
        </NuxtLink>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 5: ENTRY CRITERIA -->
    <!-- ======================== -->
    <div v-if="activeSection === 'entry'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Entry Criteria</h2>
        </template>
        <p class="text-gray-400 mb-4">
          A good entry needs multiple factors aligning. Never enter on just one signal.
        </p>

        <!-- The Perfect Setup -->
        <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20 mb-6">
          <div class="flex items-center gap-2 mb-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-400" />
            <h4 class="font-semibold text-green-400">The Perfect Long Setup (All Must Be True)</h4>
          </div>
          <ol class="space-y-2 text-sm text-gray-300 list-decimal list-inside">
            <li>HTF structure is <strong class="text-white">bullish</strong> (HH + HL on 4H/Daily)</li>
            <li>Price <strong class="text-white">pulled back</strong> after BOS (not entering right at BOS)</li>
            <li><strong class="text-white">Bullish CHoCH</strong> occurred on LTF (15m-1H) signaling pullback ending</li>
            <li>Price is <strong class="text-white">retesting a key zone</strong> (S/R flip, flipped level, or demand zone)</li>
            <li>Zone is <strong class="text-white">3-touch flip</strong> or 2-touch with confluence</li>
            <li>Minimum <strong class="text-white">2:1 R:R</strong> to target (FTA)</li>
          </ol>
        </div>

        <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
          <div class="flex items-center gap-2 mb-3">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-red-400" />
            <h4 class="font-semibold text-red-400">The Perfect Short Setup (Mirror of Long)</h4>
          </div>
          <ol class="space-y-2 text-sm text-gray-300 list-decimal list-inside">
            <li>HTF structure is <strong class="text-white">bearish</strong> (LL + LH on 4H/Daily)</li>
            <li>Price <strong class="text-white">rallied back</strong> after bearish BOS</li>
            <li><strong class="text-white">Bearish CHoCH</strong> occurred on LTF signaling rally ending</li>
            <li>Price is <strong class="text-white">retesting a key zone</strong> from below (resistance/supply zone)</li>
            <li>Zone is <strong class="text-white">3-touch flip</strong> or 2-touch with confluence</li>
            <li>Minimum <strong class="text-white">2:1 R:R</strong> to target (FTA)</li>
          </ol>
        </div>
      </UCard>

      <!-- S/R Flip Priority -->
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">S/R Flip = #1 Entry Signal</h2>
        </template>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <p class="text-sm text-gray-300">
              <strong class="text-white">NEVER blindly long support or short resistance.</strong>
              The highest probability trade is always the S/R flip - when old support becomes new resistance
              (for shorts) or old resistance becomes new support (for longs). Place limit orders at the flip level.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="p-3 rounded-lg bg-gray-800/50">
              <h4 class="font-medium text-white text-sm mb-2">Position Sizing</h4>
              <div class="font-mono text-sm text-primary-400">
                Position = Risk $ / SL Distance
              </div>
              <div class="text-xs text-gray-500 mt-1">$200 risk / 5% SL = $4,000 position</div>
            </div>
            <div class="p-3 rounded-lg bg-gray-800/50">
              <h4 class="font-medium text-white text-sm mb-2">Entry/Stop/Target</h4>
              <ul class="text-xs text-gray-300 space-y-1">
                <li><strong class="text-white">Entry:</strong> At flipped level (limit order)</li>
                <li><strong class="text-white">Stop:</strong> Above/below next HTF level</li>
                <li><strong class="text-white">Target:</strong> FTA (First Trouble Area)</li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Leverage Warning -->
      <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
        <div class="flex items-center gap-2 mb-2">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-red-400" />
          <h4 class="font-semibold text-red-400">Leverage Warning</h4>
        </div>
        <p class="text-sm text-gray-300">
          <strong class="text-white">Never go above 5x leverage.</strong> Never enter a trade with your entire account.
          Higher leverage = closer liquidation price = higher emotional pressure. Most beginners should use 1-3x max.
        </p>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 6: TRADE MANAGEMENT -->
    <!-- ======================== -->
    <div v-if="activeSection === 'management'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Trade Management</h2>
        </template>
        <p class="text-gray-400 mb-4">
          Entry is only half the trade. How you manage it determines if you're profitable long-term.
        </p>

        <div class="space-y-4">
          <!-- Stop Loss -->
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 class="font-semibold text-red-400 mb-2">Stop Loss Rules</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>Place stop above/below the <strong class="text-white">next HTF level</strong>. If that level flips, your trade idea is wrong.</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">NEVER move your stop loss further away</strong> from entry. This is how accounts blow up.</span>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span><strong class="text-white">NEVER add to a losing position.</strong> Accept the loss and re-analyze.</span>
              </li>
            </ul>
          </div>

          <!-- Breakeven -->
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 class="font-semibold text-green-400 mb-2">Breakeven Rule</h4>
            <p class="text-sm text-gray-300">
              Move your stop loss to <strong class="text-white">breakeven</strong> after price moves <strong class="text-white">1R</strong> in your favor.
              This turns a potential loss into a free trade. Example: Risked $200, price moved $200 in profit → move SL to entry.
            </p>
          </div>

          <!-- Trailing -->
          <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
            <h4 class="font-semibold text-primary-400 mb-2">Trailing Stops Using Levels</h4>
            <ol class="space-y-2 text-sm text-gray-300 list-decimal list-inside">
              <li>Once price moves past an important level, move stop just below/above it</li>
              <li>If new support forms, you want price to hold it before reaching target</li>
              <li>Scale out partial profits at levels where price might bounce</li>
              <li>Don't trail too tight - let the trade breathe</li>
            </ol>
          </div>

          <!-- Partial Profits -->
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <h4 class="font-semibold text-amber-400 mb-2">Partial Profit Strategy</h4>
            <div class="text-sm text-gray-300 space-y-1">
              <p>Take <strong class="text-white">50%</strong> off at first S/R level in profit direction</p>
              <p>Let remaining <strong class="text-white">50%</strong> run to FTA target with trailing stop</p>
              <p>If price stalls at a level, consider closing more of the position</p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Zone Failure -->
      <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <h4 class="font-semibold text-white mb-2">Zone Failures = Confirmation</h4>
        <p class="text-sm text-gray-300">
          If a zone you expected to hold breaks, it <strong class="text-white">confirms the trend is strong</strong>
          in the opposite direction. Don't fight it. If your trade gets stopped out by a zone failure, respect it and move on.
        </p>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 7: EXIT STRATEGY -->
    <!-- ======================== -->
    <div v-if="activeSection === 'exit'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">Exit Strategy</h2>
        </template>
        <p class="text-gray-400 mb-4">
          Your target is always the <strong class="text-white">FTA (First Trouble Area)</strong> - the next level
          where price is likely to stall. Take profits, no emotions.
        </p>

        <!-- Exit Scenarios -->
        <div class="grid sm:grid-cols-3 gap-4 mb-6">
          <div class="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-center">
            <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 class="font-semibold text-green-400 mb-1">Win</h4>
            <p class="text-xs text-gray-300">Hit FTA target. Close 100% or trail with tight SL. Journal the trade.</p>
          </div>
          <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center">
            <UIcon name="i-heroicons-minus-circle" class="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h4 class="font-semibold text-amber-400 mb-1">Breakeven</h4>
            <p class="text-xs text-gray-300">SL hit at entry. No loss. Re-analyze the setup and look for next opportunity.</p>
          </div>
          <div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
            <UIcon name="i-heroicons-x-circle" class="w-8 h-8 text-red-400 mx-auto mb-2" />
            <h4 class="font-semibold text-red-400 mb-1">Loss</h4>
            <p class="text-xs text-gray-300">SL hit at original level. Accept 1-2% loss. Journal it. Learn from it.</p>
          </div>
        </div>
      </UCard>

      <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
        <div class="flex items-center gap-2 mb-3">
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-amber-400" />
          <h4 class="font-semibold text-amber-400">Emotional Discipline</h4>
        </div>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>Take profits when target is hit - <strong class="text-white">no emotions</strong></li>
          <li>Don't hold hoping for more - <strong class="text-white">greed kills accounts</strong></li>
          <li>If price never returns to your zone, <strong class="text-white">move on</strong> - never chase with market orders</li>
          <li>A loss is part of the system. <strong class="text-white">50% win rate with 2:1 R:R = profitable</strong></li>
          <li>Journal every trade: setup, result, lessons learned</li>
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
        <h4 class="font-semibold text-primary-400 mb-2">The Math That Matters</h4>
        <div class="grid sm:grid-cols-2 gap-4 text-sm">
          <div class="p-3 rounded-lg bg-gray-800/50">
            <div class="text-gray-400 mb-1">With 50% Win Rate + 2:1 R:R</div>
            <div class="text-gray-300">10 trades: 5 wins ($400 each) = $2,000</div>
            <div class="text-gray-300">10 trades: 5 losses ($200 each) = $1,000</div>
            <div class="text-green-400 font-semibold mt-1">Net Profit: $1,000</div>
          </div>
          <div class="p-3 rounded-lg bg-gray-800/50">
            <div class="text-gray-400 mb-1">With 40% Win Rate + 3:1 R:R</div>
            <div class="text-gray-300">10 trades: 4 wins ($600 each) = $2,400</div>
            <div class="text-gray-300">10 trades: 6 losses ($200 each) = $1,200</div>
            <div class="text-green-400 font-semibold mt-1">Net Profit: $1,200</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ======================== -->
    <!-- SECTION 8: PRINCIPLES & RULES -->
    <!-- ======================== -->
    <div v-if="activeSection === 'principles'" class="space-y-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">7 Principles of Price Action</h2>
        </template>
        <div class="space-y-3">
          <div v-for="(principle, i) in [
            'If a trade can\'t be spotted easily, it doesn\'t exist. Move on to the next chart.',
            'Low understanding of market mechanics = higher losses. Study before you trade.',
            'Impulsive trades are losing trades, almost always. Follow your system.',
            'Having clear concepts won\'t make you a trader - practice is the only way.',
            'Don\'t copy strategies blindly - gain insight and build YOUR own system.',
            'You have to find your own Edge. What works for others may not work for you.',
            'Money is made on pattern repetition. Consistency beats brilliance.',
          ]" :key="i" class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
            <div class="flex items-center justify-center w-7 h-7 rounded-lg bg-primary-500/10 text-primary-400 font-bold text-sm shrink-0">
              {{ i + 1 }}
            </div>
            <p class="text-sm text-gray-300">{{ principle }}</p>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold text-white">8 Golden Rules of Level Trading</h2>
        </template>
        <div class="space-y-3">
          <div v-for="(rule, i) in [
            'Never blindly long support or short resistance. Play the S/R flip instead.',
            'Levels get weaker with same-role touches. Each touch fills orders. Flipped levels get stronger.',
            'Recent price action > old price action. Always read chart from right to left.',
            'Think in ZONES, not exact lines. Use zones on HTF, refine on LTF for entries.',
            '3-touch flipped level = highest confidence. 2-touch needs confluence. 1-touch = skip.',
            'Violent rallies into your level = good. More people trapped = better for your trade.',
            'Target = First Trouble Area. Take profits at levels, scale out, no emotions.',
            'Patience makes perfect. Not every level is a trade. Wait for the best setups.',
          ]" :key="i" class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
            <div class="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-sm shrink-0">
              {{ i + 1 }}
            </div>
            <p class="text-sm text-gray-300">{{ rule }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- ============================================ -->
    <!-- INTERACTIVE ACTIVE TRADE CHECKLIST           -->
    <!-- ============================================ -->
    <div class="mt-16 space-y-6">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 class="text-2xl font-bold text-white mb-2">Active Trade Checklist</h2>
          <p class="text-gray-400 text-sm">
            Use this checklist for every trade. Check items as you go through each phase.
            Your progress is saved automatically.
          </p>
        </div>
        <UButton @click="resetChecklist" variant="soft" color="gray" icon="i-heroicons-arrow-path" size="sm">
          Reset
        </UButton>
      </div>

      <!-- Progress Bar -->
      <UCard>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm text-gray-400">Checklist Progress</span>
          <span class="text-sm font-medium text-primary-400">
            {{ completedItems }} / {{ totalItems }} ({{ progressPercent }}%)
          </span>
        </div>
        <UProgress :value="progressPercent" color="primary" size="md" />
      </UCard>

      <!-- Phase 1: Pre-Trade -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10">
              <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 text-blue-400" />
            </div>
            <h3 class="text-lg font-semibold text-white">Phase 1: Pre-Trade Analysis</h3>
          </div>
        </template>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.preTrade.macroChecked"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Checked macro context</span>
              <p class="text-xs text-gray-500">Economic calendar, major events, no high-impact news during trade</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.preTrade.sentimentChecked"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Reviewed market sentiment</span>
              <p class="text-xs text-gray-500">Fear & Greed Index, funding rates, BTC dominance, correlations</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.preTrade.riskCalculated"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Calculated max risk (1-2% of account)</span>
              <p class="text-xs text-gray-500">Know exact dollar amount you're willing to lose on this trade</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.preTrade.stopLossPlanned"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Stop loss level identified BEFORE entry</span>
              <p class="text-xs text-gray-500">You must know where you're wrong before you know where you're right</p>
            </div>
          </label>
        </div>
      </UCard>

      <!-- Phase 2: Analysis -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10">
              <UIcon name="i-heroicons-arrows-up-down" class="w-5 h-5 text-purple-400" />
            </div>
            <h3 class="text-lg font-semibold text-white">Phase 2: Market Structure & Zone Analysis</h3>
          </div>
        </template>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.analysis.htfBiasIdentified"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">HTF bias identified (4H/Daily)</span>
              <p class="text-xs text-gray-500">Bullish (HH+HL), Bearish (LL+LH), or Ranging?</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.analysis.bosOrChochSpotted"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">BOS or CHoCH spotted</span>
              <p class="text-xs text-gray-500">Trend continuation (BOS) or potential reversal signal (CHoCH)?</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.analysis.keyZoneMarked"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Key S/R zones marked on chart</span>
              <p class="text-xs text-gray-500">Think zones, not lines. Mark consolidation areas before breakouts.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.analysis.levelTypeIdentified"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Zone type identified</span>
              <p class="text-xs text-gray-500">Type 1 Continuation (safer, with BOS) or Type 2 Reversal (aggressive, needs CHoCH)?</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.analysis.levelStrengthConfirmed"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Level strength confirmed</span>
              <p class="text-xs text-gray-500">3-touch flip (best), 2-touch with confluence (OK), or 1-touch (skip)?</p>
            </div>
          </label>
        </div>
      </UCard>

      <!-- Phase 3: Entry -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10">
              <UIcon name="i-heroicons-arrow-right-circle" class="w-5 h-5 text-green-400" />
            </div>
            <h3 class="text-lg font-semibold text-white">Phase 3: Entry Confirmation</h3>
          </div>
        </template>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.htfAligned"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Entry aligns with HTF structure bias</span>
              <p class="text-xs text-gray-500">Long in bullish structure, short in bearish structure</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.pullbackOccurred"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Pullback occurred after BOS</span>
              <p class="text-xs text-gray-500">NOT entering right after BOS. Waiting for price to come back to a zone.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.chochConfirmed"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">CHoCH confirmed on LTF (15m-1H)</span>
              <p class="text-xs text-gray-500">Bullish CHoCH for longs (pullback ending), Bearish CHoCH for shorts</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.zoneRetest"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Price retesting key zone or flipped level</span>
              <p class="text-xs text-gray-500">S/R flip, demand/supply zone, or order block. Place limit orders.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.rrMinimum2to1"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">R:R minimum 2:1 confirmed</span>
              <p class="text-xs text-gray-500">Risk $1 to make at least $2. Target (FTA) must be 2x the stop distance.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.entry.positionSizeCalculated"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Position size calculated</span>
              <p class="text-xs text-gray-500">Position = Risk Amount / SL Distance. Max 5x leverage.</p>
            </div>
          </label>
        </div>
      </UCard>

      <!-- Phase 4: Management -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10">
              <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400" />
            </div>
            <h3 class="text-lg font-semibold text-white">Phase 4: Trade Management</h3>
          </div>
        </template>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.management.stopLossSet"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Stop loss set on exchange</span>
              <p class="text-xs text-gray-500">Above/below next HTF level. Never move it further from entry.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.management.targetSet"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Target set at FTA (First Trouble Area)</span>
              <p class="text-xs text-gray-500">Next major S/R level where price is likely to stall. Consider partial TP here.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.management.breakevenMoved"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">SL moved to breakeven after 1R profit</span>
              <p class="text-xs text-gray-500">Optional but recommended. Turns potential loss into risk-free trade.</p>
            </div>
          </label>
        </div>
      </UCard>

      <!-- Phase 5: Exit -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10">
              <UIcon name="i-heroicons-arrow-left-on-rectangle" class="w-5 h-5 text-red-400" />
            </div>
            <h3 class="text-lg font-semibold text-white">Phase 5: Exit & Review</h3>
          </div>
        </template>
        <div class="space-y-3">
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.exit.targetHit"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Trade closed (target hit or SL triggered)</span>
              <p class="text-xs text-gray-500">Win, breakeven, or loss - all are valid outcomes of a proper system.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.exit.profitsTaken"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Profits taken without emotion</span>
              <p class="text-xs text-gray-500">No holding hoping for more. No regret if price keeps going. Discipline wins.</p>
            </div>
          </label>
          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              v-model="checklistState.exit.tradeJournaled"
              class="mt-1 w-4 h-4 rounded border-gray-600 text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900 bg-gray-800"
            />
            <div>
              <span class="text-white text-sm group-hover:text-primary-400 transition-colors">Trade journaled</span>
              <p class="text-xs text-gray-500">Recorded: setup reason, entry/exit prices, R:R result, lessons learned.</p>
            </div>
          </label>
        </div>
      </UCard>

      <!-- Completion Message -->
      <div v-if="progressPercent === 100" class="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
        <div class="flex items-start gap-4">
          <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-400 shrink-0" />
          <div>
            <h4 class="font-semibold text-green-400 mb-2">Checklist Complete!</h4>
            <p class="text-sm text-gray-300">
              You've completed all 5 phases of the trading system. Consistency and pattern repetition
              are key to long-term profitability. Reset the checklist for your next trade.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ======================== -->
    <!-- QUICK LINKS              -->
    <!-- ======================== -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-white mb-6">Deep Dive into Each Topic</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          to="/risk-management"
          class="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
        >
          <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-primary-400 mb-3" />
          <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">Risk Management</h3>
          <p class="text-xs text-gray-400">1-2% rule, position sizing, leverage, 17 bulletproof concepts</p>
        </NuxtLink>
        <NuxtLink
          to="/market-structure"
          class="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
        >
          <UIcon name="i-heroicons-arrows-up-down" class="w-8 h-8 text-primary-400 mb-3" />
          <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">Market Structure</h3>
          <p class="text-xs text-gray-400">HH, HL, BOS, CHoCH, swing vs substructure, pullbacks</p>
        </NuxtLink>
        <NuxtLink
          to="/support-resistance"
          class="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
        >
          <UIcon name="i-heroicons-map-pin" class="w-8 h-8 text-primary-400 mb-3" />
          <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">S/R Zones</h3>
          <p class="text-xs text-gray-400">Support, resistance, continuation, reversal, MS confluence</p>
        </NuxtLink>
        <NuxtLink
          to="/levels-trading"
          class="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
        >
          <UIcon name="i-heroicons-chart-bar-square" class="w-8 h-8 text-primary-400 mb-3" />
          <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">Level Trading</h3>
          <p class="text-xs text-gray-400">Drawing levels, S/R flips, 3-touch setups, 8 golden rules</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
