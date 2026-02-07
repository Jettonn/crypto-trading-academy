<script setup lang="ts">
const rules = [
  {
    number: 1,
    title: 'The 1-2% Rule',
    content: 'Never risk more than 1-2% of your total account on a single trade. This ensures that even a string of losses won\'t destroy your capital.',
    example: 'Account: $10,000 | Max risk per trade (2%): $200'
  },
  {
    number: 2,
    title: 'Always Use a Stop Loss',
    content: 'A stop loss is an order that triggers when price goes against you. It\'s used to cut losses at a predetermined level. Never enter a trade without one.',
    example: 'Entry: $50 | Stop Loss: $45 | Risk per share: $5'
  },
  {
    number: 3,
    title: 'Risk-to-Reward Ratio (R:R)',
    content: 'Aim for a minimum 2:1 R:R. This means for every $1 you risk, you should target at least $2 in profit. Even with a 50% win rate, you\'ll be profitable.',
    example: 'Risk $200 to make $400 = 2:1 R:R = 2R'
  },
  {
    number: 4,
    title: 'Position Sizing',
    content: 'Position Size = Risk Amount / Distance to Stop Loss. This formula ensures your position is sized correctly based on your risk tolerance.',
    example: 'Risk: $300 | SL distance: 5% | Position Size: $6,000'
  },
]

const leveragePoints = [
  { label: 'Pros', items: ['Trade larger positions with less capital', 'Amplify gains on correct trades', 'Capital efficiency'], color: 'green' },
  { label: 'Cons', items: ['Amplifies losses equally', 'Closer liquidation price', 'Higher emotional pressure', 'Can lose entire position'], color: 'red' },
]

const principles = [
  'If a trade can\'t be spotted easily, it doesn\'t exist',
  'Low understanding of market mechanics = higher losses',
  'Impulsive trades are losing trades, almost always',
  'Having clear concepts won\'t make you a trader - practice is key',
  'Don\'t copy strategies - gain insight and build your own system',
  'You have to find your own Edge, your own system',
  'Money is made on pattern repetition',
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-3">
        <UBadge color="primary" variant="soft">Week 1</UBadge>
        <UBadge color="gray" variant="soft">Lesson 1.1</UBadge>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Risk Management</h1>
      <p class="text-gray-400">
        The foundation of profitable trading. Master these concepts before you place a single trade.
      </p>
    </div>

    <!-- Core Rules -->
    <div class="space-y-4 mb-10">
      <div
        v-for="rule in rules"
        :key="rule.number"
        class="p-6 rounded-xl bg-gray-900 border border-gray-800"
      >
        <div class="flex items-start gap-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/10 text-primary-400 font-bold shrink-0">
            {{ rule.number }}
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-2">{{ rule.title }}</h3>
            <p class="text-gray-300 leading-relaxed mb-3">{{ rule.content }}</p>
            <div class="p-3 rounded-lg bg-gray-800 font-mono text-sm text-primary-400">
              {{ rule.example }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Position Sizing Deep Dive -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-white">Position Sizing Formula</h2>
      </template>

      <div class="p-4 bg-gray-900 rounded-xl mb-6 font-mono text-center text-lg text-primary-400">
        Position Size = Risk Amount / Distance to Stop Loss
      </div>

      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <h4 class="font-semibold text-white mb-2">Example 1: Without Leverage</h4>
          <p class="text-sm text-gray-300 mb-2">Account: $10,000 | Risk: 3% ($300) | Stop Loss: 5% from entry</p>
          <p class="text-sm font-mono text-primary-400">Position Size = $300 / 0.05 = $6,000</p>
        </div>
        <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <h4 class="font-semibold text-white mb-2">Example 2: With 5x Leverage</h4>
          <p class="text-sm text-gray-300 mb-2">Same setup but using 5x leverage: margin needed = $6,000 / 5 = $1,200</p>
          <p class="text-sm font-mono text-primary-400">Potential loss is still limited to 3% ($300)</p>
        </div>
        <div class="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
          <h4 class="font-semibold text-white mb-2">Example 3: Small Account</h4>
          <p class="text-sm text-gray-300 mb-2">Account: $1,000 | Risk: 1% ($10) | Stop Loss: 5% from entry</p>
          <p class="text-sm font-mono text-primary-400">Position Size = $10 / 0.05 = $200</p>
        </div>
      </div>

      <div class="mt-4">
        <UButton to="/calculators" variant="soft" color="primary" icon="i-heroicons-calculator">
          Try the Calculator
        </UButton>
      </div>
    </UCard>

    <!-- Leverage -->
    <UCard class="mb-8">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-amber-400" />
          <h2 class="text-xl font-semibold text-white">Leverage</h2>
        </div>
      </template>

      <p class="text-gray-300 leading-relaxed mb-4">
        Leverage allows you to trade with a larger position size than your available capital.
        If you have $1,000 and use 10x leverage, you can take a position worth $10,000.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div
          v-for="group in leveragePoints"
          :key="group.label"
          :class="[
            'p-4 rounded-xl border',
            group.color === 'green' ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'
          ]"
        >
          <h4 :class="['font-semibold mb-3', group.color === 'green' ? 'text-green-400' : 'text-red-400']">
            {{ group.label }}
          </h4>
          <ul class="space-y-2">
            <li v-for="item in group.items" :key="item" class="flex items-start gap-2 text-sm text-gray-300">
              <UIcon
                :name="group.color === 'green' ? 'i-heroicons-check' : 'i-heroicons-x-mark'"
                :class="['w-4 h-4 mt-0.5 shrink-0', group.color === 'green' ? 'text-green-400' : 'text-red-400']"
              />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Leverage examples -->
      <div class="space-y-3">
        <div class="p-3 rounded-lg bg-gray-800 text-sm">
          <strong class="text-white">1x leverage:</strong>
          <span class="text-gray-300"> $1k position, +1% = +$10 profit, -1% = -$10 loss</span>
        </div>
        <div class="p-3 rounded-lg bg-gray-800 text-sm">
          <strong class="text-white">3x leverage:</strong>
          <span class="text-gray-300"> $3k position ($1k own capital), +1% = +$30, -1% = -$30</span>
        </div>
        <div class="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm">
          <strong class="text-red-400">Rule:</strong>
          <span class="text-gray-300"> Never go above 5x leverage. Never enter a trade with your entire account. The more leverage, the closer your liquidation price.</span>
        </div>
      </div>
    </UCard>

    <!-- 7 Principles of Price Action -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-white">7 Principles of Price Action</h2>
      </template>
      <div class="space-y-3">
        <div
          v-for="(principle, i) in principles"
          :key="i"
          class="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50"
        >
          <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 font-bold text-sm shrink-0">
            {{ i + 1 }}
          </span>
          <p class="text-gray-300">{{ principle }}</p>
        </div>
      </div>
    </UCard>

    <!-- Navigation -->
    <div class="flex justify-between items-center">
      <UButton to="/week-1" variant="ghost" color="gray" icon="i-heroicons-arrow-left">
        Back to Week 1
      </UButton>
      <UButton to="/glossary" variant="soft" color="primary">
        Next: Trading Glossary
        <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
      </UButton>
    </div>
  </div>
</template>
