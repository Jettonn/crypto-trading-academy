<script setup lang="ts">
const { tradingTerms, masteredTerms, toggleMastered, categories } = useTradingTerms()

const searchTerm = ref('')
const selectedCategory = ref('All')

const filteredTerms = computed(() => {
  return tradingTerms.filter(t =>
    (selectedCategory.value === 'All' || t.category === selectedCategory.value) &&
    (t.term.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
     t.definition.toLowerCase().includes(searchTerm.value.toLowerCase()))
  )
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Trading Glossary</h1>
      <p class="text-gray-400">Essential trading terms you need to know. Click the check to mark as mastered.</p>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-3 mb-6">
      <UInput
        v-model="searchTerm"
        icon="i-heroicons-magnifying-glass"
        placeholder="Search terms..."
        class="flex-1"
        size="lg"
      />
      <USelect
        v-model="selectedCategory"
        :options="categories"
        size="lg"
        class="w-full sm:w-48"
      />
    </div>

    <!-- Stats -->
    <div class="flex items-center gap-4 mb-6 text-sm">
      <span class="text-gray-400">{{ filteredTerms.length }} terms</span>
      <span class="text-gray-600">•</span>
      <span class="text-primary-400">{{ masteredTerms.size }} mastered</span>
    </div>

    <!-- Terms List -->
    <div class="space-y-3">
      <div
        v-for="term in filteredTerms"
        :key="term.term"
        :class="[
          'p-5 rounded-xl border transition-all',
          masteredTerms.has(term.term)
            ? 'bg-primary-500/5 border-primary-500/30'
            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
        ]"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 mb-2 flex-wrap">
              <h3 class="font-semibold text-lg text-white">{{ term.term }}</h3>
              <UBadge :color="masteredTerms.has(term.term) ? 'primary' : 'gray'" variant="soft" size="xs">
                {{ term.category }}
              </UBadge>
            </div>
            <p class="text-gray-400 leading-relaxed">{{ term.definition }}</p>
          </div>
          <UButton
            @click="toggleMastered(term.term)"
            :color="masteredTerms.has(term.term) ? 'primary' : 'gray'"
            :variant="masteredTerms.has(term.term) ? 'solid' : 'soft'"
            icon="i-heroicons-check"
            size="sm"
            square
          />
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredTerms.length === 0" class="text-center py-12">
      <UIcon name="i-heroicons-magnifying-glass" class="w-12 h-12 text-gray-600 mx-auto mb-4" />
      <p class="text-gray-400">No terms found matching "{{ searchTerm }}"</p>
    </div>
  </div>
</template>
