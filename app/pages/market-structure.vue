<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('basics')
const showChochDetails = ref(false)
const selectedExample = ref(0)

const tabs = [
  { id: 'basics', label: 'MS Basics', icon: 'i-heroicons-academic-cap' },
  { id: 'bos', label: 'BOS', icon: 'i-heroicons-arrow-trending-up' },
  { id: 'choch', label: 'CHOCH', icon: 'i-heroicons-arrow-path' },
  { id: 'confirmation', label: 'Confirmation', icon: 'i-heroicons-check-badge' },
  { id: 'tips', label: 'Tips & Tricks', icon: 'i-heroicons-light-bulb' }
]

const msVocabulary = [
  { term: 'HH', meaning: 'Higher High', description: 'A peak that is higher than the previous peak' },
  { term: 'HL', meaning: 'Higher Low', description: 'A trough that is higher than the previous trough' },
  { term: 'LH', meaning: 'Lower High', description: 'A peak that is lower than the previous peak' },
  { term: 'LL', meaning: 'Lower Low', description: 'A trough that is lower than the previous trough' },
  { term: 'BOS', meaning: 'Break of Structure', description: 'When price breaks a key swing point, confirming trend continuation' },
  { term: 'CHoCH', meaning: 'Change of Character', description: 'First sign of potential trend reversal in the substructure' },
  { term: 'MS', meaning: 'Market Structure', description: 'The pattern of highs and lows that defines the current trend' }
]

const chochExamples = [
  {
    title: 'Bearish CHoCH After Uptrend',
    description: 'After a series of HH and HL, price fails to make a new HH and breaks below a minor swing low. This is the first warning sign that the uptrend may be ending.',
    signal: 'Warning: Bullish momentum weakening',
    action: 'Wait for BOS confirmation before shorting'
  },
  {
    title: 'Bullish CHoCH After Downtrend',
    description: 'After a series of LL and LH, price fails to make a new LL and breaks above a minor swing high. This signals the downtrend may be losing steam.',
    signal: 'Warning: Bearish momentum weakening',
    action: 'Wait for BOS confirmation before going long'
  },
  {
    title: 'CHoCH During Pullback',
    description: 'In an uptrend pullback, a bullish CHoCH signals the pullback may be ending and the trend resuming. This is a potential entry point.',
    signal: 'Opportunity: Pullback may be ending',
    action: 'Look for long entries with stops below the CHoCH low'
  }
]

const confirmationSteps = [
  { step: 1, title: 'Identify the Trend', description: 'Determine if market is in uptrend (HH + HL) or downtrend (LH + LL) on your trading timeframe', icon: 'i-heroicons-magnifying-glass' },
  { step: 2, title: 'Spot the CHoCH', description: 'Look for the first break of a minor swing point against the trend direction', icon: 'i-heroicons-eye' },
  { step: 3, title: 'Wait for Structure Break', description: 'Do NOT enter on CHoCH alone! Wait for price to break a deep swing point (BOS)', icon: 'i-heroicons-clock' },
  { step: 4, title: 'Enter on Pullback', description: 'After BOS confirmation, wait for a pullback to enter with better R:R', icon: 'i-heroicons-cursor-arrow-rays' },
  { step: 5, title: 'Set Stop Loss', description: 'Place stop loss beyond the last significant swing point', icon: 'i-heroicons-shield-check' }
]

const proTips = [
  { category: 'Timeframe', tips: ['Use HTF (4H, Daily) for overall bias/direction', 'Use LTF (15m, 1H) for entries and CHoCH signals', 'A LTF CHoCH while HTF trend is intact = pullback trade opportunity', 'HTF CHoCH = potential major trend reversal'] },
  { category: 'CHoCH Quality', tips: ['Strong CHoCH: Large engulfing candle with volume', 'Weak CHoCH: Small candle, low volume - may be false signal', 'Look for CHoCH at key levels (support/resistance, Fib levels)', 'Multiple CHoCH signals = stronger confirmation'] },
  { category: 'False Signal Prevention', tips: ['Never trade CHoCH alone - always wait for BOS', 'Check for liquidity grabs (SFP) that may fake CHoCH', 'Confirm with volume - real reversals have volume increase', 'Use confluence: levels, indicators, order flow'] },
  { category: 'Entry Strategy', tips: ['Aggressive: Enter after CHoCH + minor BOS', 'Conservative: Wait for deep swing BOS + pullback', 'Beginners: Always use conservative approach', 'Scale in: Enter partial position at CHoCH, add on BOS'] }
]

const commonMistakes = [
  { mistake: 'Trading every CHoCH', solution: 'CHoCH is a warning, not an entry signal. Wait for confirmation.', severity: 'high' },
  { mistake: 'Ignoring the higher timeframe', solution: 'Always check HTF direction. LTF CHoCH against HTF trend is usually just a pullback.', severity: 'high' },
  { mistake: 'No stop loss', solution: 'CHoCH can fail. Always have a stop loss beyond the swing point.', severity: 'critical' },
  { mistake: 'Using minor swings for BOS', solution: 'For BOS confirmation, use DEEP swings, not minor fluctuations.', severity: 'medium' },
  { mistake: 'FOMO entering on breakdown/breakout', solution: 'Wait for pullback after BOS. Better entry = better R:R.', severity: 'medium' }
]

const quizQuestions = ref([
  { question: 'What does CHoCH stand for?', options: ['Change of Chart', 'Change of Character', 'Chart of Changes', 'Channel of Charts'], correct: 1, answered: null as number | null },
  { question: 'What is a CHoCH signal?', options: ['Confirmation of trend continuation', 'First warning of potential trend change', 'Guaranteed reversal signal', 'Entry signal to go all-in'], correct: 1, answered: null as number | null },
  { question: 'What should you wait for after seeing a CHoCH?', options: ['Nothing, enter immediately', 'A bullish engulfing candle', 'BOS (Break of Structure) confirmation', 'The market to close'], correct: 2, answered: null as number | null },
  { question: 'In a bullish market structure, what pattern do you see?', options: ['Lower Highs and Lower Lows', 'Higher Highs and Higher Lows', 'Equal Highs and Lows', 'Random price movements'], correct: 1, answered: null as number | null },
  { question: 'When is the best time to enter after BOS confirmation?', options: ['Immediately at the breakout', 'On a pullback', 'At market close', 'At random'], correct: 1, answered: null as number | null }
])

const quizScore = computed(() => quizQuestions.value.filter(q => q.answered === q.correct).length)
const quizCompleted = computed(() => quizQuestions.value.every(q => q.answered !== null))

function answerQuestion(qIndex: number, optionIndex: number) {
  quizQuestions.value[qIndex].answered = optionIndex
}

function resetQuiz() {
  quizQuestions.value.forEach(q => q.answered = null)
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-emerald-400 mb-2">Market Structure Masterclass</h1>
        <p class="text-gray-400">Understanding BOS, CHoCH, and Trend Analysis</p>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="['px-4 py-2 rounded-lg flex items-center gap-2 transition-all', activeTab === tab.id ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700']">
          <UIcon :name="tab.icon" class="w-5 h-5" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="space-y-6">
        <!-- BASICS TAB -->
        <div v-if="activeTab === 'basics'" class="space-y-6">
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h2 class="text-xl font-bold text-emerald-400 flex items-center gap-2">
                <UIcon name="i-heroicons-book-open" class="w-6 h-6" />
                Essential Vocabulary
              </h2>
            </template>
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="item in msVocabulary" :key="item.term" class="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded font-mono font-bold">{{ item.term }}</span>
                  <span class="text-white font-medium">{{ item.meaning }}</span>
                </div>
                <p class="text-gray-400 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </UCard>

          <!-- Visual Market Structure -->
          <div class="grid md:grid-cols-2 gap-6">
            <UCard class="bg-gray-900/50 border-gray-800">
              <template #header>
                <h3 class="text-lg font-bold text-green-400 flex items-center gap-2">
                  <UIcon name="i-heroicons-arrow-trending-up" class="w-5 h-5" />
                  Bullish Market Structure
                </h3>
              </template>
              <div class="space-y-4">
                <svg viewBox="0 0 400 200" class="w-full h-48 bg-gray-800/50 rounded-lg">
                  <line v-for="i in 5" :key="i" :x1="0" :y1="i*40" :x2="400" :y2="i*40" stroke="#374151" stroke-width="0.5"/>
                  <path d="M 30 160 L 80 120 L 120 140 L 180 80 L 220 110 L 280 50 L 330 80 L 370 30" fill="none" stroke="#10b981" stroke-width="3"/>
                  <circle cx="80" cy="120" r="6" fill="#10b981"/><circle cx="120" cy="140" r="6" fill="#10b981"/>
                  <circle cx="180" cy="80" r="6" fill="#10b981"/><circle cx="220" cy="110" r="6" fill="#10b981"/>
                  <circle cx="280" cy="50" r="6" fill="#10b981"/><circle cx="330" cy="80" r="6" fill="#10b981"/>
                  <text x="75" y="110" fill="#9ca3af" font-size="11">HL</text>
                  <text x="175" y="70" fill="#10b981" font-size="11" font-weight="bold">HH</text>
                  <text x="215" y="125" fill="#9ca3af" font-size="11">HL</text>
                  <text x="275" y="40" fill="#10b981" font-size="11" font-weight="bold">HH</text>
                  <text x="130" y="65" fill="#fbbf24" font-size="10">BOS</text>
                  <text x="230" y="35" fill="#fbbf24" font-size="10">BOS</text>
                </svg>
                <p class="text-gray-300 text-sm"><span class="text-green-400 font-bold">Pattern:</span> Higher Highs (HH) + Higher Lows (HL)</p>
              </div>
            </UCard>
            <UCard class="bg-gray-900/50 border-gray-800">
              <template #header>
                <h3 class="text-lg font-bold text-red-400 flex items-center gap-2">
                  <UIcon name="i-heroicons-arrow-trending-down" class="w-5 h-5" />
                  Bearish Market Structure
                </h3>
              </template>
              <div class="space-y-4">
                <svg viewBox="0 0 400 200" class="w-full h-48 bg-gray-800/50 rounded-lg">
                  <line v-for="i in 5" :key="i" :x1="0" :y1="i*40" :x2="400" :y2="i*40" stroke="#374151" stroke-width="0.5"/>
                  <path d="M 30 30 L 80 70 L 120 50 L 180 110 L 220 80 L 280 140 L 330 110 L 370 170" fill="none" stroke="#ef4444" stroke-width="3"/>
                  <circle cx="80" cy="70" r="6" fill="#ef4444"/><circle cx="120" cy="50" r="6" fill="#ef4444"/>
                  <circle cx="180" cy="110" r="6" fill="#ef4444"/><circle cx="220" cy="80" r="6" fill="#ef4444"/>
                  <circle cx="280" cy="140" r="6" fill="#ef4444"/><circle cx="330" cy="110" r="6" fill="#ef4444"/>
                  <text x="115" y="40" fill="#9ca3af" font-size="11">LH</text>
                  <text x="175" y="125" fill="#ef4444" font-size="11" font-weight="bold">LL</text>
                  <text x="215" y="70" fill="#9ca3af" font-size="11">LH</text>
                  <text x="275" y="155" fill="#ef4444" font-size="11" font-weight="bold">LL</text>
                  <text x="130" y="125" fill="#fbbf24" font-size="10">BOS</text>
                </svg>
                <p class="text-gray-300 text-sm"><span class="text-red-400 font-bold">Pattern:</span> Lower Highs (LH) + Lower Lows (LL)</p>
              </div>
            </UCard>
          </div>
        </div>

        <!-- BOS TAB -->
        <div v-if="activeTab === 'bos'" class="space-y-6">
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h2 class="text-xl font-bold text-yellow-400 flex items-center gap-2">
                <UIcon name="i-heroicons-bolt" class="w-6 h-6" />
                Break of Structure (BOS)
              </h2>
            </template>
            <div class="space-y-6">
              <p class="text-gray-300">BOS is the <strong class="text-yellow-400">confirmation</strong> that the trend is continuing.</p>
              <div class="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <h4 class="text-emerald-400 font-bold mb-3">Key BOS Rules</h4>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li><span class="text-emerald-400 font-bold">1.</span> After every BOS, expect a pullback on that timeframe</li>
                  <li><span class="text-emerald-400 font-bold">2.</span> Never buy right after a bullish BOS - wait for the pullback</li>
                  <li><span class="text-emerald-400 font-bold">3.</span> Use deep swings for BOS, not minor fluctuations</li>
                  <li><span class="text-emerald-400 font-bold">4.</span> Look for a candle close beyond the level, not just a wick</li>
                </ul>
              </div>
            </div>
          </UCard>
        </div>

        <!-- CHOCH TAB -->
        <div v-if="activeTab === 'choch'" class="space-y-6">
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h2 class="text-xl font-bold text-purple-400 flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-path" class="w-6 h-6" />
                Change of Character (CHoCH)
              </h2>
            </template>
            <div class="space-y-6">
              <div class="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p class="text-purple-200"><strong class="text-purple-400">CHoCH</strong> is the first sign of a potential trend change. It's an early warning signal that appears in the substructure BEFORE the main structure breaks.</p>
              </div>
              <div class="space-y-4">
                <h4 class="text-white font-bold">CHoCH Scenarios</h4>
                <div class="flex gap-2 mb-4">
                  <button v-for="(example, index) in chochExamples" :key="index" @click="selectedExample = index" :class="['px-3 py-1 rounded text-sm transition-all', selectedExample === index ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' : 'bg-gray-800 text-gray-400 border border-gray-700']">{{ index + 1 }}</button>
                </div>
                <div class="p-4 bg-gray-800/50 rounded-lg border border-purple-500/30">
                  <h5 class="text-purple-400 font-bold mb-2">{{ chochExamples[selectedExample].title }}</h5>
                  <p class="text-gray-300 mb-3">{{ chochExamples[selectedExample].description }}</p>
                  <div class="flex flex-wrap gap-4">
                    <div class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">{{ chochExamples[selectedExample].signal }}</div>
                    <div class="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded text-sm">{{ chochExamples[selectedExample].action }}</div>
                  </div>
                </div>
              </div>
              <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h4 class="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5" />
                  Critical Warning
                </h4>
                <p class="text-red-200 text-sm"><strong>CHoCH is NOT a guarantee!</strong> Always wait for BOS confirmation. If you're a beginner, never use CHoCH as an entry signal alone.</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- CONFIRMATION TAB -->
        <div v-if="activeTab === 'confirmation'" class="space-y-6">
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h2 class="text-xl font-bold text-emerald-400 flex items-center gap-2">
                <UIcon name="i-heroicons-check-badge" class="w-6 h-6" />
                How to Confirm a Real CHoCH
              </h2>
            </template>
            <div class="space-y-6">
              <p class="text-gray-300">Follow this step-by-step process to confirm a real CHoCH and avoid false signals.</p>
              <div class="space-y-4">
                <div v-for="step in confirmationSteps" :key="step.step" class="flex gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span class="text-emerald-400 font-bold text-lg">{{ step.step }}</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-white font-bold flex items-center gap-2">
                      <UIcon :name="step.icon" class="w-5 h-5 text-emerald-400" />
                      {{ step.title }}
                    </h4>
                    <p class="text-gray-400 text-sm mt-1">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Quiz Section -->
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h3 class="text-lg font-bold text-blue-400 flex items-center gap-2">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
                Quick Quiz
              </h3>
            </template>
            <div class="space-y-4">
              <div v-for="(q, qIndex) in quizQuestions" :key="qIndex" class="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p class="text-white font-medium mb-3">{{ qIndex + 1 }}. {{ q.question }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <button v-for="(option, oIndex) in q.options" :key="oIndex" @click="answerQuestion(qIndex, oIndex)" :disabled="q.answered !== null" :class="['p-2 rounded text-sm text-left transition-all', q.answered === null ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : q.answered === oIndex ? (oIndex === q.correct ? 'bg-green-500/30 text-green-300 border border-green-500' : 'bg-red-500/30 text-red-300 border border-red-500') : oIndex === q.correct ? 'bg-green-500/20 text-green-300' : 'bg-gray-700 text-gray-500']">{{ option }}</button>
                </div>
              </div>
              <div v-if="quizCompleted" class="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
                <p class="text-emerald-400 font-bold text-lg">Score: {{ quizScore }}/{{ quizQuestions.length }}</p>
                <button @click="resetQuiz" class="mt-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30">Try Again</button>
              </div>
            </div>
          </UCard>
        </div>

        <!-- TIPS TAB -->
        <div v-if="activeTab === 'tips'" class="space-y-6">
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h2 class="text-xl font-bold text-yellow-400 flex items-center gap-2">
                <UIcon name="i-heroicons-light-bulb" class="w-6 h-6" />
                Pro Tips & Best Practices
              </h2>
            </template>
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="tip in proTips" :key="tip.category" class="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 class="text-emerald-400 font-bold mb-3">{{ tip.category }}</h4>
                <ul class="space-y-2">
                  <li v-for="(t, i) in tip.tips" :key="i" class="flex items-start gap-2 text-sm text-gray-300">
                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{{ t }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>

          <!-- Common Mistakes -->
          <UCard class="bg-gray-900/50 border-gray-800">
            <template #header>
              <h3 class="text-lg font-bold text-red-400 flex items-center gap-2">
                <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5" />
                Common Mistakes to Avoid
              </h3>
            </template>
            <div class="space-y-3">
              <div v-for="mistake in commonMistakes" :key="mistake.mistake" class="p-4 rounded-lg border" :class="mistake.severity === 'critical' ? 'bg-red-500/10 border-red-500/30' : mistake.severity === 'high' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-yellow-500/10 border-yellow-500/30'">
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-x-circle" :class="mistake.severity === 'critical' ? 'text-red-400' : mistake.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'" class="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p class="font-medium" :class="mistake.severity === 'critical' ? 'text-red-300' : mistake.severity === 'high' ? 'text-orange-300' : 'text-yellow-300'">{{ mistake.mistake }}</p>
                    <p class="text-gray-400 text-sm mt-1">{{ mistake.solution }}</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>

      </div>
    </div>
  </div>
</template>
