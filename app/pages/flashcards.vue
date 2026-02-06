<script setup>
const { tradingTerms, masteredTerms, toggleMastered } = useTradingTerms()

const cards = ref([...tradingTerms])
const currentIndex = ref(0)
const isFlipped = ref(false)

const currentCard = computed(() => cards.value[currentIndex.value])
const progress = computed(() => ((currentIndex.value + 1) / cards.value.length) * 100)

const flip = () => { isFlipped.value = !isFlipped.value }
const next = () => {
  isFlipped.value = false
  setTimeout(() => { currentIndex.value = (currentIndex.value + 1) % cards.value.length }, 200)
}
const prev = () => {
  isFlipped.value = false
  setTimeout(() => { currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length }, 200)
}
const shuffle = () => {
  cards.value = [...cards.value].sort(() => Math.random() - 0.5)
  currentIndex.value = 0
  isFlipped.value = false
}
const markMastered = () => {
  toggleMastered(currentCard.value.term)
  next()
}
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-white mb-2">Flashcards</h1>
      <p class="text-gray-400">Card {{ currentIndex + 1 }} of {{ cards.length }}</p>
    </div>

    <!-- Progress Bar -->
    <UProgress :value="progress" color="primary" size="sm" class="mb-8" />

    <!-- Flashcard -->
    <div class="perspective-1000 mb-8" @click="flip">
      <div :class="['relative w-full h-80 transition-transform duration-500 transform-style-3d cursor-pointer',
                    isFlipped ? 'rotate-y-180' : '']">
        <!-- Front -->
        <div class="absolute inset-0 backface-hidden">
          <UCard class="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <div class="text-center p-8">
              <UBadge color="primary" variant="soft" class="mb-4">{{ currentCard?.category }}</UBadge>
              <h2 class="text-3xl font-bold text-white">{{ currentCard?.term }}</h2>
              <p class="text-gray-400 mt-4">Click to reveal definition</p>
            </div>
          </UCard>
        </div>
        <!-- Back -->
        <div class="absolute inset-0 backface-hidden rotate-y-180">
          <UCard class="h-full flex items-center justify-center bg-gradient-to-br from-primary-900/50 to-gray-900">
            <div class="text-center p-8">
              <h3 class="text-xl font-semibold text-primary-400 mb-4">{{ currentCard?.term }}</h3>
              <p class="text-lg text-gray-200">{{ currentCard?.definition }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="flex justify-center gap-4 mb-6">
      <UButton icon="i-heroicons-arrow-left" color="gray" variant="soft" @click="prev">Previous</UButton>
      <UButton icon="i-heroicons-arrow-path" color="gray" variant="soft" @click="shuffle">Shuffle</UButton>
      <UButton icon="i-heroicons-arrow-right" color="gray" variant="soft" @click="next">Next</UButton>
    </div>

    <div class="flex justify-center">
      <UButton :icon="masteredTerms.has(currentCard?.term) ? 'i-heroicons-check-circle-solid' : 'i-heroicons-check-circle'"
        :color="masteredTerms.has(currentCard?.term) ? 'green' : 'primary'" size="lg" @click="markMastered">
        {{ masteredTerms.has(currentCard?.term) ? 'Mastered!' : 'Mark as Mastered' }}
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }
</style>
