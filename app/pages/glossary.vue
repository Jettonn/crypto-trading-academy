<script setup>
const { tradingTerms, categories, masteredTerms, toggleMastered } = useTradingTerms()
const search = ref('')
const selectedCategory = ref('All')

const filteredTerms = computed(() => {
  return tradingTerms.filter(t => {
    const matchesSearch = t.term.toLowerCase().includes(search.value.toLowerCase()) ||
                         t.definition.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || t.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const categoryIcons = {
  'All': 'i-heroicons-squares-2x2',
  'Psychology': 'i-heroicons-face-smile',
  'Basics': 'i-heroicons-academic-cap',
  'Market': 'i-heroicons-chart-pie',
  'Technical': 'i-heroicons-chart-bar',
  'Market Structure': 'i-heroicons-building-office',
  'Timeframes': 'i-heroicons-clock',
  'Risk': 'i-heroicons-shield-exclamation',
  'Trading': 'i-heroicons-currency-dollar',
  'Volume': 'i-heroicons-signal',
  'Candlesticks': 'i-heroicons-fire'
}
</script>

<template>
  <div class="p-6">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Trading Glossary</h1>
      <p class="text-gray-400">{{ tradingTerms.length }} essential terms from Week 1</p>
    </div>

    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <UInput v-model="search" placeholder="Search terms..." icon="i-heroicons-magnifying-glass" class="flex-1" size="lg" />
      <USelectMenu v-model="selectedCategory" :options="categories" class="w-full sm:w-48" size="lg" />
    </div>

    <!-- Category Pills -->
    <div class="flex flex-wrap gap-2 mb-8">
      <UBadge v-for="cat in categories" :key="cat"
        :color="selectedCategory === cat ? 'primary' : 'gray'"
        variant="soft" size="lg" class="cursor-pointer"
        @click="selectedCategory = cat">
        <UIcon :name="categoryIcons[cat] || 'i-heroicons-tag'" class="mr-1" />
        {{ cat }}
      </UBadge>
    </div>

    <!-- Terms Grid -->
    <div class="grid gap-4">
      <UCard v-for="item in filteredTerms" :key="item.term"
        :class="masteredTerms.has(item.term) ? 'border-green-500/50' : ''">
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-lg font-semibold text-white">{{ item.term }}</h3>
              <UBadge :color="masteredTerms.has(item.term) ? 'green' : 'gray'" variant="soft" size="xs">
                {{ item.category }}
              </UBadge>
            </div>
            <p class="text-gray-300">{{ item.definition }}</p>
          </div>
          <UButton :icon="masteredTerms.has(item.term) ? 'i-heroicons-check-circle-solid' : 'i-heroicons-check-circle'"
            :color="masteredTerms.has(item.term) ? 'green' : 'gray'" variant="ghost"
            @click="toggleMastered(item.term)" />
        </div>
      </UCard>
    </div>

    <div v-if="filteredTerms.length === 0" class="text-center py-12 text-gray-400">
      No terms found matching your search.
    </div>
  </div>
</template>
