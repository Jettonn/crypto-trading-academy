<script setup lang="ts">
const lessons = [
  {
    week: 1,
    number: '1.1',
    title: 'Risk Management',
    desc: 'The 1-2% rule, position sizing, stop losses, and leverage basics',
    to: '/risk-management',
    icon: 'i-heroicons-shield-check',
    color: 'primary'
  },
  {
    week: 1,
    number: '1.2',
    title: 'Trading Glossary',
    desc: 'FOMO, FUD, Bull, Bear, S/R, and 40+ essential trading terms',
    to: '/glossary',
    icon: 'i-heroicons-book-open',
    color: 'primary'
  },
  {
    week: 1,
    number: '1.3',
    title: 'Candlestick Patterns',
    desc: 'Candle anatomy, engulfing, doji, hammer, and other key patterns',
    to: '/candlesticks',
    icon: 'i-heroicons-chart-bar',
    color: 'primary'
  },
]

const tools = [
  { title: 'Flashcards', desc: 'Interactive spaced repetition cards', to: '/flashcards', icon: 'i-heroicons-rectangle-stack' },
  { title: 'Quiz', desc: 'Test your knowledge with 10 questions', to: '/quiz', icon: 'i-heroicons-question-mark-circle' },
  { title: 'Calculators', desc: 'Position sizing, R:R, leverage', to: '/calculators', icon: 'i-heroicons-calculator' },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <UBadge color="primary" variant="soft" class="mb-3">Week 1</UBadge>
      <h1 class="text-3xl font-bold text-white mb-2">Risk Management & Foundations</h1>
      <p class="text-gray-400">
        Master the essential concepts every trader needs before placing their first trade.
        This week covers risk management, trading terminology, and candlestick patterns.
      </p>
    </div>

    <!-- Lessons -->
    <h2 class="text-xl font-semibold text-white mb-4">Lessons</h2>
    <div class="space-y-3 mb-10">
      <NuxtLink
        v-for="lesson in lessons"
        :key="lesson.number"
        :to="lesson.to"
        class="group flex items-center gap-4 p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
      >
        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors shrink-0">
          <UIcon :name="lesson.icon" class="w-6 h-6" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-mono text-gray-500">{{ lesson.number }}</span>
            <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors">{{ lesson.title }}</h3>
          </div>
          <p class="text-sm text-gray-400">{{ lesson.desc }}</p>
        </div>
        <UIcon name="i-heroicons-chevron-right" class="w-5 h-5 text-gray-600 group-hover:text-primary-400 transition-colors shrink-0" />
      </NuxtLink>
    </div>

    <!-- Practice Tools -->
    <h2 class="text-xl font-semibold text-white mb-4">Practice Tools</h2>
    <div class="grid sm:grid-cols-3 gap-4">
      <NuxtLink
        v-for="tool in tools"
        :key="tool.title"
        :to="tool.to"
        class="group p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all text-center"
      >
        <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-gray-400 group-hover:bg-primary-500/10 group-hover:text-primary-400 transition-colors mx-auto mb-3">
          <UIcon :name="tool.icon" class="w-5 h-5" />
        </div>
        <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">{{ tool.title }}</h3>
        <p class="text-xs text-gray-400">{{ tool.desc }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
