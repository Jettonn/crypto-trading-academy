<script setup>
const { tradingTerms, masteredTerms } = useTradingTerms()
const tools = [
  { title: 'Glossary', desc: '40+ terms', to: '/glossary', icon: 'i-heroicons-book-open', color: 'primary' },
  { title: 'Flashcards', desc: 'Learn terms', to: '/flashcards', icon: 'i-heroicons-rectangle-stack', color: 'green' },
  { title: 'Quiz', desc: 'Test yourself', to: '/quiz', icon: 'i-heroicons-question-mark-circle', color: 'amber' },
  { title: 'Calculators', desc: 'Risk tools', to: '/calculators', icon: 'i-heroicons-calculator', color: 'blue' },
]
</script>

<template>
  <div class="px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-4">Crypto Trading Academy</h1>
      <p class="text-xl text-gray-400">Master crypto trading fundamentals - Week 1: Risk Management</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <NuxtLink v-for="tool in tools" :key="tool.to" :to="tool.to"
        class="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500 transition">
        <UIcon :name="tool.icon" class="w-8 h-8 text-primary-400 mb-4" />
        <h3 class="font-semibold text-white mb-1">{{ tool.title }}</h3>
        <p class="text-sm text-gray-400">{{ tool.desc }}</p>
      </NuxtLink>
    </div>

    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-bold text-white">Week 1: Foundations</h2>
      </template>
      <ul class="space-y-2">
        <li class="flex items-center gap-2 text-gray-300">
          <UIcon name="i-heroicons-check-circle" class="text-green-400" /> Risk Management Basics
        </li>
        <li class="flex items-center gap-2 text-gray-300">
          <UIcon name="i-heroicons-check-circle" class="text-green-400" /> Trading Psychology
        </li>
        <li class="flex items-center gap-2 text-gray-300">
          <UIcon name="i-heroicons-check-circle" class="text-green-400" /> Market Structure
        </li>
        <li class="flex items-center gap-2 text-gray-300">
          <UIcon name="i-heroicons-check-circle" class="text-green-400" /> Candlestick Patterns
        </li>
      </ul>
    </UCard>

    <div class="text-center">
      <UButton to="/flashcards" size="lg" color="primary">Start Learning</UButton>
    </div>
  </div>
</template>
