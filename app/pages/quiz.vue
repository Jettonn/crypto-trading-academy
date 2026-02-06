<script setup>
const { tradingTerms } = useTradingTerms()

const quizQuestions = [
  { q: "What does FOMO stand for?", a: "Fear Of Missing Out", wrong: ["Fear Of Market Orders", "First Order Market Option", "Future Options Made Open"] },
  { q: "What is a 'whale' in crypto trading?", a: "A trader with a very large stake who can move markets", wrong: ["A type of candlestick pattern", "A trading strategy", "A market indicator"] },
  { q: "What does R:R ratio measure?", a: "Potential loss compared to potential gain", wrong: ["Return on investment", "Risk rating", "Revenue ratio"] },
  { q: "What is CHoCH in market structure?", a: "Change of Character - shift from bullish to bearish or vice versa", wrong: ["Chart of Charts", "Continuous High or Chart High", "Changing Order of Charts"] },
  { q: "What indicates a bullish market structure?", a: "Higher Highs (HH) and Higher Lows (HL)", wrong: ["Lower Highs and Lower Lows", "Equal Highs and Lows", "No clear pattern"] },
  { q: "What is the '1% Rule' in risk management?", a: "Never risk more than 1% of your account on a single trade", wrong: ["Only trade 1% of the time", "Expect 1% daily returns", "Use 1% leverage"] },
  { q: "What does a Doji candlestick indicate?", a: "Market indecision - open and close are nearly equal", wrong: ["Strong bullish momentum", "Strong bearish momentum", "High volume"] },
  { q: "What is a 'stop loss' order?", a: "An order to exit a position when price moves against you", wrong: ["An order to enter at a better price", "A type of limit order", "A market maker strategy"] },
  { q: "What is the difference between HTF and LTF?", a: "HTF (Higher Time Frame) for bias, LTF (Lower Time Frame) for entries", wrong: ["HTF is for entries, LTF for exits", "They are the same thing", "HTF means high trading frequency"] },
  { q: "What is 'liquidity' in trading?", a: "How quickly you can buy/sell without significantly moving the price", wrong: ["The amount of water in the market", "Total market cap", "Trading volume only"] }
]

const questions = ref([...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10))
const currentQ = ref(0)
const score = ref(0)
const selected = ref(null)
const showResult = ref(false)
const quizComplete = ref(false)

const options = computed(() => {
  const q = questions.value[currentQ.value]
  return [q.a, ...q.wrong].sort(() => Math.random() - 0.5)
})

const selectAnswer = (opt) => {
  if (showResult.value) return
  selected.value = opt
  showResult.value = true
  if (opt === questions.value[currentQ.value].a) score.value++
}

const nextQuestion = () => {
  if (currentQ.value < questions.value.length - 1) {
    currentQ.value++
    selected.value = null
    showResult.value = false
  } else {
    quizComplete.value = true
  }
}

const restartQuiz = () => {
  questions.value = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10)
  currentQ.value = 0
  score.value = 0
  selected.value = null
  showResult.value = false
  quizComplete.value = false
}
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-white mb-2">Week 1 Quiz</h1>
      <p class="text-gray-400">Test your knowledge of trading fundamentals</p>
    </div>

    <!-- Quiz Complete -->
    <div v-if="quizComplete" class="text-center">
      <UCard class="mb-8">
        <div class="py-8">
          <UIcon :name="score >= 7 ? 'i-heroicons-trophy' : 'i-heroicons-academic-cap'" 
                 :class="score >= 7 ? 'text-yellow-400' : 'text-primary-400'" class="w-16 h-16 mx-auto mb-4" />
          <h2 class="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p class="text-4xl font-bold mb-4" :class="score >= 7 ? 'text-green-400' : score >= 5 ? 'text-yellow-400' : 'text-red-400'">
            {{ score }} / {{ questions.length }}
          </p>
          <p class="text-gray-400">
            {{ score >= 7 ? 'Excellent! You have a solid understanding!' : score >= 5 ? 'Good effort! Review the glossary for missed terms.' : 'Keep studying! Review the flashcards and try again.' }}
          </p>
        </div>
      </UCard>
      <div class="flex gap-4 justify-center">
        <UButton icon="i-heroicons-arrow-path" @click="restartQuiz">Try Again</UButton>
        <UButton to="/flashcards" variant="soft" icon="i-heroicons-rectangle-stack">Study Flashcards</UButton>
      </div>
    </div>

    <!-- Quiz Questions -->
    <div v-else>
      <UProgress :value="((currentQ + 1) / questions.length) * 100" color="primary" size="sm" class="mb-6" />
      
      <UCard class="mb-6">
        <div class="mb-6">
          <UBadge color="primary" variant="soft" class="mb-4">Question {{ currentQ + 1 }} of {{ questions.length }}</UBadge>
          <h2 class="text-xl font-semibold text-white">{{ questions[currentQ].q }}</h2>
        </div>
        
        <div class="space-y-3">
          <button v-for="(opt, i) in options" :key="i" @click="selectAnswer(opt)"
            :class="['w-full p-4 rounded-lg text-left transition border-2',
              showResult && opt === questions[currentQ].a ? 'border-green-500 bg-green-500/10' :
              showResult && opt === selected ? 'border-red-500 bg-red-500/10' :
              !showResult ? 'border-gray-700 hover:border-primary-500 bg-gray-800' : 'border-gray-700 bg-gray-800']">
            <span class="text-gray-200">{{ opt }}</span>
          </button>
        </div>
      </UCard>

      <div class="flex justify-between items-center">
        <p class="text-gray-400">Score: {{ score }}</p>
        <UButton v-if="showResult" @click="nextQuestion" icon="i-heroicons-arrow-right" icon-position="right">
          {{ currentQ < questions.length - 1 ? 'Next Question' : 'See Results' }}
        </UButton>
      </div>
    </div>
  </div>
</template>
