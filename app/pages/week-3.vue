<script setup lang="ts">
const lessons = [
  {
    number: '3.1',
    title: 'Support & Resistance Zones',
    desc: 'Supply/demand, support zones, resistance zones, continuation & reversal types, MS confluence',
    to: '/support-resistance',
    icon: 'i-heroicons-arrows-up-down',
  },
  {
    number: '3.2',
    title: 'Level to Level Trading',
    desc: 'Drawing levels, refining, 3-touch/2-touch/1-touch setups, S/R flips, trade management',
    to: '/levels-trading',
    icon: 'i-heroicons-chart-bar-square',
  },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <UBadge color="primary" variant="soft" class="mb-3">Week 3</UBadge>
      <h1 class="text-3xl font-bold text-white mb-2">Support, Resistance & Level Trading</h1>
      <p class="text-gray-400">
        Learn where buyers and sellers place their orders, and how to trade from level to level like a professional.
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

    <!-- Key Concepts -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold text-white">Key Concepts This Week</h2>
      </template>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
          <UIcon name="i-heroicons-arrows-up-down" class="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-medium text-white text-sm">Supply & Demand</h4>
            <p class="text-xs text-gray-400">How buyer/seller pressure creates support and resistance</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-medium text-white text-sm">Continuation vs Reversal Zones</h4>
            <p class="text-xs text-gray-400">Two types of zones and when to trade each</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
          <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-medium text-white text-sm">S/R Flips</h4>
            <p class="text-xs text-gray-400">The #1 rule: trade the flip, not the bounce</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
          <UIcon name="i-heroicons-chart-bar-square" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <div>
            <h4 class="font-medium text-white text-sm">Level to Level Trading</h4>
            <p class="text-xs text-gray-400">Drawing, refining, and trading horizontal levels</p>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
