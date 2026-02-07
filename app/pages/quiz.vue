<script setup lang="ts">
const { tradingTerms } = useTradingTerms()

const quizState = ref({
  current: 0,
  score: 0,
  answered: false,
  selected: null as string | null,
  finished: false
})

const quizQuestions = ref<any[]>([])

function generateQuiz() {
  const questions: any[] = []
  const shuffled = [...tradingTerms].sort(() => Math.random() - 0.5).slice(0, 10)

  shuffled.forEach(correct => {
    const wrongAnswers = tradingTerms
      .filter(t => t.term !== correct.term)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    const options = [...wrongAnswers.map(w => w.definition), correct.definition]
      .sort(() => Math.random() - 0.5)

    questions.push({
      term: correct.term,
      correctAnswer: correct.definition,
      options
    })
  })

  quizQuestions.value = questions
  quizState.value = { current: 0, score: 0, answered: false, selected: null, finished: false }
}

function handleAnswer(answer: string) {
  if (quizState.value.answered) return
  const isCorrect = answer === quizQuestions.value[quizState.value.current].correctAnswer
  quizState.value.answered = true
  quizState.value.selected = answer
  if (isCorrect) quizState.value.score++
}

function nextQuestion() {
  if (quizState.value.current + 1 >= quizQuestions.value.length) {
    quizState.value.finished = true
  } else {
    quizState.value.current++
    quizState.value.answered = false
    quizState.value.selected = null
  }
}

const progress = computed(() => ((quizState.value.current + 1) / quizQuestions.value.length) * 100)
const currentQuestion = computed(() => quizQuestions.value[quizState.value.current])

onMounted(generateQuiz)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-2xl mx-auto">
      <!-- Finished State -->
      <div v-if="quizState.finished" class="text-center py-12">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <UIcon name="i-heroicons-trophy" class="w-12 h-12 text-white" />
        </div>

        <h1 class="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>

        <p class="text-6xl font-extrabold text-primary-400 mb-4">
          {{ quizState.score }} / {{ quizQuestions.length }}
        </p>

        <p class="text-xl text-gray-400 mb-8">
          {{ quizState.score === quizQuestions.length ? "Perfect score! You're a trading master! 🎉" :
             quizState.score >= 7 ? "Great job! Keep practicing! 💪" :
             quizState.score >= 5 ? "Good effort! Review the flashcards 📚" :
             "Keep studying! You'll get there! 🚀" }}
        </p>

        <div class="flex justify-center gap-3">
          <UButton @click="generateQuiz" size="lg" color="primary">
            Try Again
          </UButton>
          <UButton to="/flashcards" size="lg" variant="soft" color="gray">
            Review Flashcards
          </UButton>
        </div>
      </div>

      <!-- Quiz Questions -->
      <div v-else-if="currentQuestion">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold text-white">Quiz</h1>
          <UBadge color="primary" variant="soft" size="lg">
            Score: {{ quizState.score }}
          </UBadge>
        </div>

        <div class="flex items-center gap-4 mb-6 text-sm text-gray-400">
          <span>Question {{ quizState.current + 1 }} of {{ quizQuestions.length }}</span>
        </div>

        <UProgress :value="progress" color="primary" size="sm" class="mb-8" />

        <UCard class="mb-6">
          <h2 class="text-xl font-semibold text-center text-white mb-8">
            What is <span class="text-primary-400">{{ currentQuestion.term }}</span>?
          </h2>

          <div class="space-y-3">
            <button
              v-for="(option, idx) in currentQuestion.options"
              :key="idx"
              @click="handleAnswer(option)"
              :disabled="quizState.answered"
              :class="[
                'w-full p-4 rounded-xl text-left transition-all flex items-center gap-4',
                quizState.answered
                  ? option === currentQuestion.correctAnswer
                    ? 'bg-green-500/20 border-2 border-green-500 text-white'
                    : quizState.selected === option
                      ? 'bg-red-500/20 border-2 border-red-500 text-white'
                      : 'bg-gray-800 border-2 border-transparent opacity-50 text-gray-400'
                  : 'bg-gray-800 border-2 border-gray-700 hover:border-primary-500 text-white cursor-pointer'
              ]"
            >
              <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-700 text-lg font-bold shrink-0">
                {{ String.fromCharCode(65 + idx) }}
              </span>
              <span class="flex-1">{{ option }}</span>
              <UIcon
                v-if="quizState.answered && option === currentQuestion.correctAnswer"
                name="i-heroicons-check-circle-solid"
                class="w-6 h-6 text-green-400"
              />
              <UIcon
                v-if="quizState.answered && quizState.selected === option && option !== currentQuestion.correctAnswer"
                name="i-heroicons-x-circle-solid"
                class="w-6 h-6 text-red-400"
              />
            </button>
          </div>
        </UCard>

        <UButton
          v-if="quizState.answered"
          @click="nextQuestion"
          block
          size="lg"
          color="primary"
        >
          {{ quizState.current + 1 >= quizQuestions.length ? 'See Results' : 'Next Question' }}
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
        </UButton>
      </div>
    </div>
  </div>
</template>
