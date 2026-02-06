<script setup>
const route = useRoute()
const nav = [
  { label: 'Home', to: '/', icon: 'i-heroicons-home' },
  { label: 'Glossary', to: '/glossary', icon: 'i-heroicons-book-open' },
  { label: 'Flashcards', to: '/flashcards', icon: 'i-heroicons-rectangle-stack' },
  { label: 'Quiz', to: '/quiz', icon: 'i-heroicons-question-mark-circle' },
  { label: 'Calculators', to: '/calculators', icon: 'i-heroicons-calculator' },
  { label: 'Candlesticks', to: '/candlesticks', icon: 'i-heroicons-chart-bar' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-950">
    <header class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
            <UIcon name="i-heroicons-chart-bar-square" class="h-5 w-5 text-white" />
          </div>
          <span class="text-lg font-bold text-white">Crypto Academy</span>
        </NuxtLink>
        <UButton to="/quiz" variant="soft" color="primary" icon="i-heroicons-play">Quiz</UButton>
      </div>
    </header>
    <div class="mx-auto max-w-7xl flex">
      <aside class="hidden lg:block w-64 border-r border-gray-800">
        <nav class="sticky top-16 p-4 space-y-1">
          <NuxtLink
            v-for="item in nav" :key="item.to" :to="item.to"
            :class="['flex items-center gap-2 rounded-lg px-3 py-2 text-sm',
              route.path === item.to ? 'bg-primary-500/10 text-primary-400' : 'text-gray-400 hover:bg-gray-800']"
          >
            <UIcon :name="item.icon" class="h-4 w-4" />{{ item.label }}
          </NuxtLink>
        </nav>
      </aside>
      <main class="flex-1 min-w-0"><slot /></main>
    </div>
  </div>
</template>
