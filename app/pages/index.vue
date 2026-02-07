<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-book-open',
    title: 'Trading Glossary',
    description: '40+ essential trading terms you need to know before placing your first trade.',
    to: '/glossary'
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Market Structure',
    description: 'Master BOS, CHoCH, and trend analysis with interactive diagrams and tips.',
    to: '/market-structure',
    featured: true
  },
  {
    icon: 'i-heroicons-rectangle-stack',
    title: 'Flashcards',
    description: 'Interactive flashcards with spaced repetition to master concepts quickly.',
    to: '/flashcards'
  },
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Quiz Mode',
    description: 'Test your knowledge with 10-question quizzes and track your progress.',
    to: '/quiz'
  },
  {
    icon: 'i-heroicons-calculator',
    title: 'Calculators',
    description: 'Position sizing, risk/reward, and P/L calculators for real trading.',
    to: '/calculators'
  }
]

const weekContent = [
  { title: 'Trading Jargons', desc: 'FOMO, FUD, Bull, Bear, S/R, and more' },
  { title: 'Market Structure', desc: 'BOS, CHoCH, HH/HL/LH/LL, trend analysis' },
  { title: 'Risk Management', desc: '1-2% rule, position sizing, leverage' },
  { title: 'Candlesticks', desc: 'Anatomy, patterns, and what they mean' },
  { title: '17 Bulletproof Concepts', desc: 'Essential rules to avoid bankruptcy' },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero -->
    <div class="max-w-3xl">
      <UBadge color="primary" variant="soft" class="mb-4">
        Week 1 â¢ Risk Management & Foundations
      </UBadge>

      <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
        Master Crypto Trading
        <span class="text-primary-400">Fundamentals</span>
      </h1>

      <p class="text-xl text-gray-400 mb-8 leading-relaxed">
        Learn the essential concepts, terminology, and risk management principles
        that professional traders use. Built from EmperorBTC's trading education materials.
      </p>

      <div class="flex flex-wrap gap-3">
        <UButton
          to="/glossary"
          size="lg"
          color="primary"
          icon="i-heroicons-play"
        >
          Start Learning
        </UButton>
        <UButton
          to="/quiz"
          size="lg"
          variant="soft"
          color="gray"
          icon="i-heroicons-academic-cap"
        >
          Take Quiz
        </UButton>
      </div>
    </div>

    <!-- Week 1 Content Preview -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-white mb-6">What You'll Learn This Week</h2>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in weekContent"
          :key="i"
          class="flex items-start gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800"
        >
          <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 font-bold text-sm shrink-0">
            {{ i + 1 }}
          </div>
          <div>
            <h3 class="font-semibold text-white">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mt-16">
      <h2 class="text-2xl font-bold text-white mb-6">Learning Tools</h2>

      <div class="grid sm:grid-cols-2 gap-4">
        <NuxtLink
          v-for="feature in features"
          :key="feature.title"
          :to="feature.to"
          class="group p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary-500/50 transition-all"
        >
          <div class="flex items-center gap-4 mb-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
              <UIcon :name="feature.icon" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-white group-hover:text-primary-400 transition-colors">
              {{ feature.title }}
            </h3>
          </div>
          <p class="text-gray-400 text-sm">{{ feature.description }}</p>
        </NuxtLink>
      </div>
    </div>

    <!-- Golden Rules -->
    <div class="mt-16 p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
      <div class="flex items-center gap-3 mb-4">
        <UIcon name="i-heroicons-light-bulb" class="w-6 h-6 text-amber-400" />
        <h2 class="text-xl font-bold text-amber-400">Golden Rules of Trading</h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">Never risk more than <strong class="text-white">1-2%</strong> of your account on a single trade</p>
        </div>
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">Always have a <strong class="text-white">stop loss</strong> before entering any trade</p>
        </div>
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">Aim for minimum <strong class="text-white">2:1 R:R</strong> (Risk to Reward ratio)</p>
        </div>
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <p class="text-gray-300">Use <strong class="text-white">leverage cautiously</strong> - higher leverage = higher risk</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <p class="text-gray-400 mb-4">Ready to start your trading journey?</p>
      <UButton to="/glossary" size="lg" color="primary">
        Begin with the Glossary
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
      </UButton>
    </div>
  </div>
</template>
