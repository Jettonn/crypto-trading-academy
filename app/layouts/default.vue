<script setup lang="ts">
const route = useRoute()
const { masteredTerms } = useTradingTerms()

const navigation = [
  {
    label: 'Getting Started',
    icon: 'i-heroicons-rocket-launch',
    children: [
      { label: 'Introduction', to: '/', icon: 'i-heroicons-home' },
      { label: 'Week 1 Overview', to: '/week-1', icon: 'i-heroicons-calendar' },
      { label: 'Week 2 Overview', to: '/week-2', icon: 'i-heroicons-calendar' },
      { label: 'Week 3 Overview', to: '/week-3', icon: 'i-heroicons-calendar' }
    ]
  },
  {
    label: 'Week 1 - Foundations',
    icon: 'i-heroicons-academic-cap',
    children: [
      { label: 'Risk Management', to: '/risk-management', icon: 'i-heroicons-shield-check' },
      { label: 'Trading Glossary', to: '/glossary', icon: 'i-heroicons-book-open' },
      { label: 'Candlesticks', to: '/candlesticks', icon: 'i-heroicons-chart-bar' },
    ]
  },
  {
    label: 'Week 2 - Structure',
    icon: 'i-heroicons-chart-bar-square',
    children: [
      { label: 'Market Structure', to: '/market-structure', icon: 'i-heroicons-arrows-up-down' },
    ]
  },
  {
    label: 'Week 3 - Levels',
    icon: 'i-heroicons-map-pin',
    children: [
      { label: 'Support & Resistance', to: '/support-resistance', icon: 'i-heroicons-arrows-up-down' },
      { label: 'Level Trading', to: '/levels-trading', icon: 'i-heroicons-chart-bar-square' },
    ]
  },
  {
    label: 'Trading System',
    icon: 'i-heroicons-rocket-launch',
    children: [
      { label: 'Complete System', to: '/trading-system', icon: 'i-heroicons-map' },
    ]
  },
  {
    label: 'Practice',
    icon: 'i-heroicons-beaker',
    children: [
      { label: 'Flashcards', to: '/flashcards', icon: 'i-heroicons-rectangle-stack' },
      { label: 'Quiz', to: '/quiz', icon: 'i-heroicons-question-mark-circle' },
      { label: 'Calculators', to: '/calculators', icon: 'i-heroicons-calculator' }
    ]
  }
]

const progressValue = computed(() => (masteredTerms.value.size / 40) * 100)
</script>

<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
              <UIcon name="i-heroicons-chart-bar-square" class="h-5 w-5 text-white" />
            </div>
            <span class="text-lg font-bold text-white">Crypto Academy</span>
          </NuxtLink>
          <UBadge color="primary" variant="soft" size="xs">Week 1-3</UBadge>
        </div>

        <div class="flex items-center gap-2">
          <UButton
            to="/flashcards"
            variant="ghost"
            color="gray"
            icon="i-heroicons-rectangle-stack"
            class="hidden sm:flex"
          >
            Practice
          </UButton>
          <UButton
            to="/quiz"
            variant="soft"
            color="primary"
            icon="i-heroicons-play"
          >
            Start Quiz
          </UButton>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-7xl flex">
      <!-- Sidebar -->
      <aside class="hidden lg:block w-64 shrink-0 border-r border-gray-800">
        <nav class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
          <div v-for="section in navigation" :key="section.label" class="mb-6">
            <h3 class="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <UIcon :name="section.icon" class="h-4 w-4" />
              {{ section.label }}
            </h3>
            <ul class="space-y-1">
              <li v-for="item in section.children" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  :class="[
                    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors',
                    route.path === item.to
                      ? 'bg-primary-500/10 text-primary-400 font-medium'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  ]"
                >
                  <UIcon :name="item.icon" class="h-4 w-4" />
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Progress Card -->
          <div class="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-4">
            <h4 class="text-sm font-medium text-white mb-2">Your Progress</h4>
            <div class="mb-2">
              <div class="flex justify-between text-xs text-gray-400 mb-1">
                <span>Terms mastered</span>
                <span class="text-primary-400">{{ masteredTerms.size }} / 40</span>
              </div>
              <UProgress :value="progressValue" color="primary" size="sm" />
            </div>
            <UButton to="/flashcards" variant="soft" color="primary" size="xs" block>
              Continue Learning
            </UButton>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 min-w-0">
        <slot />
      </main>
    </div>
  </div>
</template>
