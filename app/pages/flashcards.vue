<script setup lang="ts">
const { tradingTerms, masteredTerms, toggleMastered } = useTradingTerms()

const currentCard = ref(0)
const isFlipped = ref(false)
const shuffledTerms = ref([...tradingTerms])

function shuffleCards() {
  shuffledTerms.value = [...tradingTerms].sort(() => Math.random() - 0.5)
  currentCard.value = 0
  isFlipped.value = false
}

function nextCard() {
  if (currentCard.value < shuffledTerms.value.length - 1) {
    currentCard.value++
    isFlipped.value = false
  }
}

function prevCard() {
  if (currentCard.value > 0) {
    currentCard.value--
    isFlipped.value = false
  }
}

const currentTerm = computed(() => shuffledTerms.value[currentCard.value])
const progress = computed(() => ((currentCard.value + 1) / shuffledTerms.value.length) * 100)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-white">Flashcards</h1>
          <p class="text-sm text-gray-400">Card {{ currentCard + 1 }} of {{ shuffledTerms.length }}</p>
        </div>
        <UButton
          @click="shuffleCards"
          variant="soft"
          color="gray"
          icon="i-heroicons-arrow-path"
        >
          Shuffle
        </UButton>
      </div>

      <!-- Progress -->
      <UProgress :value="progress" color="primary" size="sm" class="mb-8" />

      <!-- Card -->
      <div
        @click="isFlipped = !isFlipped"
        class="cursor-pointer mb-8"
        style="perspective: 1000px"
      >
        <div
          :class="[
            'relative h-80 transition-transform duration-500',
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          ]"
          style="transform-style: preserve-3d"
        >
          <!-- Front -->
          <div
            class="absolute inset-0 p-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex flex-col justify-center items-center text-center"
            style="backface-visibility: hidden"
          >
            <UBadge color="white" variant="soft" class="mb-4">
              {{ currentTerm?.category }}
            </UBadge>
            <h2 class="text-4xl font-bold text-white mb-6">{{ currentTerm?.term }}</h2>
            <p class="text-primary-100 flex items-center gap-2">
              <UIcon name="i-heroicons-hand-raised" class="w-5 h-5" />
              Tap to reveal definition
            </p>
          </div>

          <!-- Back -->
          <div
            class="absolute inset-0 p-8 rounded-2xl bg-gray-800 border border-gray-700 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)]"
            style="backface-visibility: hidden"
          >
            <h3 class="text-xl font-semibold text-primary-400 mb-4">{{ currentTerm?.term }}</h3>
            <p class="text-lg text-gray-300 leading-relaxed">{{ currentTerm?.definition }}</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-4">
        <UButton
          @click="prevCard"
          :disabled="currentCard === 0"
          variant="soft"
          color="gray"
          icon="i-heroicons-chevron-left"
          size="lg"
          square
        />

        <UButton
          @click="toggleMastered(currentTerm?.term)"
          :color="masteredTerms.has(currentTerm?.term) ? 'primary' : 'gray'"
          :variant="masteredTerms.has(currentTerm?.term) ? 'solid' : 'soft'"
          size="lg"
        >
          <UIcon name="i-heroicons-check" class="w-5 h-5 mr-2" />
          {{ masteredTerms.has(currentTerm?.term) ? 'Mastered' : 'Mark as Mastered' }}
        </UButton>

        <UButton
          @click="nextCard"
          :disabled="currentCard === shuffledTerms.length - 1"
          variant="soft"
          color="gray"
          icon="i-heroicons-chevron-right"
          size="lg"
          square
        />
      </div>

      <!-- Keyboard Hints -->
      <div class="mt-8 text-center text-sm text-gray-500">
        <p>Click card to flip • Use arrow buttons to navigate</p>
      </div>
    </div>
  </div>
</template>
