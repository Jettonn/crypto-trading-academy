export const tradingTerms = [
  { term: "FOMO", definition: "Fear Of Missing Out - entering a trade without enough research due to fear of missing profits", category: "Psychology" },
  { term: "FUD", definition: "Fear, Uncertainty, and Doubt - negative sentiments or misinformation affecting market sentiment", category: "Psychology" },
  { term: "Bull", definition: "Someone expecting the price to go higher", category: "Basics" },
  { term: "Bear", definition: "Someone expecting the price to go lower", category: "Basics" },
  { term: "CMP", definition: "Current Market Price", category: "Basics" },
  { term: "Bag", definition: "A position held in any asset or coin", category: "Basics" },
  { term: "Bag Holder", definition: "Someone holding a coin at a loss", category: "Basics" },
  { term: "Whale", definition: "A trader with a very large stake compared to retail traders, able to move markets", category: "Market" },
  { term: "Support", definition: "A zone/line where price is expected to bounce back up due to buying pressure", category: "Technical" },
  { term: "Resistance", definition: "A zone/line where price is expected to rebound downwards due to selling pressure", category: "Technical" },
  { term: "HH (Higher High)", definition: "A swing high that is higher than the previous swing high - sign of uptrend", category: "Market Structure" },
  { term: "HL (Higher Low)", definition: "A swing low that is higher than the previous swing low - sign of uptrend", category: "Market Structure" },
  { term: "LH (Lower High)", definition: "A swing high that is lower than the previous swing high - sign of downtrend", category: "Market Structure" },
  { term: "LL (Lower Low)", definition: "A swing low that is lower than the previous swing low - sign of downtrend", category: "Market Structure" },
  { term: "CHoCH", definition: "Change of Character - the first switch turning substructure from bullish to bearish or vice versa", category: "Market Structure" },
  { term: "BOS / MSB", definition: "Break of Structure / Market Structure Break - when price takes out a significant high or low", category: "Market Structure" },
  { term: "HTF", definition: "Higher Time Frame - typically Daily, Weekly, Monthly charts for bias", category: "Timeframes" },
  { term: "LTF", definition: "Lower Time Frame - typically anything under 4H, used for entries", category: "Timeframes" },
  { term: "Leverage", definition: "The extra amount of asset bought or sold over your capital (e.g., 10x means $100 controls $1000)", category: "Risk" },
  { term: "Margin", definition: "The amount of funds required to open a leveraged trade", category: "Risk" },
  { term: "Stop Loss", definition: "An order triggered when price goes against you, used to cut losses at a predetermined level", category: "Risk" },
  { term: "R:R (Risk to Reward)", definition: "Ratio comparing potential loss to potential gain. 2:1 R:R means risking $1 to potentially gain $2", category: "Risk" },
  { term: "Position Sizing", definition: "Determining how much capital to allocate to a trade based on risk tolerance", category: "Risk" },
  { term: "Long Position", definition: "A buy position with leverage - you profit when price goes up", category: "Trading" },
  { term: "Short Position", definition: "A sell position with leverage - you profit when price goes down", category: "Trading" },
  { term: "Consolidation", definition: "A period where price ranges in a well-defined region, showing indecision", category: "Technical" },
  { term: "Deviation", definition: "When price briefly goes below support or above resistance but reverses (fake breakout)", category: "Technical" },
  { term: "POC (Point of Control)", definition: "The price level with the highest traded volume in a given period", category: "Volume" },
  { term: "Value Area", definition: "The range of price levels where 70% of all volume was traded (VAH = high, VAL = low)", category: "Volume" },
  { term: "VWAP", definition: "Volume Weighted Average Price - acts as dynamic S/R. Above = above value, Below = below value", category: "Volume" },
  { term: "Liquidity", definition: "How quickly you can buy/sell without moving price much. Large orders need liquidity to fill", category: "Market" },
  { term: "Laddering", definition: "Placing multiple buy/sell orders at different prices to get an average entry", category: "Trading" },
  { term: "FTA", definition: "First Trouble Area - an area where price might be rejected before reaching target", category: "Technical" },
  { term: "Arbitrage", definition: "Making profit using price differences between exchanges", category: "Trading" },
  { term: "Bull Trap", definition: "Market makers buy suddenly, spiking price, then dump on retail buyers", category: "Market" },
  { term: "Bear Trap", definition: "Market makers sell heavily, crash price, liquidate longs, then buy back cheaper", category: "Market" },
  { term: "Spread", definition: "The difference between ask (sell) and bid (buy) prices. Lower spread = higher liquidity", category: "Market" },
  { term: "Doji", definition: "Candlestick where open and close are nearly equal - signals indecision/potential reversal", category: "Candlesticks" },
  { term: "Engulfing Candle", definition: "A candle that completely engulfs the previous candle - strong reversal signal", category: "Candlesticks" },
  { term: "Long Wick", definition: "Shows rejection. Upper wick = sellers won. Lower wick = buyers won", category: "Candlesticks" },
]

export const candlestickPatterns = [
  {
    name: "Bullish Engulfing",
    type: "bullish",
    description: "A large green candle completely covers the previous red candle, signaling strong buying pressure and potential reversal to the upside",
    svg: "bullish-engulfing"
  },
  {
    name: "Bearish Engulfing",
    type: "bearish",
    description: "A large red candle completely covers the previous green candle, signaling strong selling pressure and potential reversal to the downside",
    svg: "bearish-engulfing"
  },
  {
    name: "Doji",
    type: "neutral",
    description: "Open and close prices are virtually equal, creating a cross shape. Shows market indecision - at trend tops/bottoms signals potential reversal",
    svg: "doji"
  },
  {
    name: "Hammer",
    type: "bullish",
    description: "Small body at the top with a long lower wick (2-3x body size). At the bottom of a downtrend, signals buyers are stepping in",
    svg: "hammer"
  },
  {
    name: "Shooting Star",
    type: "bearish",
    description: "Small body at the bottom with a long upper wick. At the top of an uptrend, signals sellers are rejecting higher prices",
    svg: "shooting-star"
  },
  {
    name: "Morning Star",
    type: "bullish",
    description: "Three-candle pattern: large red, small body (gap down), large green. Strong bullish reversal signal at market bottoms",
    svg: "morning-star"
  },
  {
    name: "Evening Star",
    type: "bearish",
    description: "Three-candle pattern: large green, small body (gap up), large red. Strong bearish reversal signal at market tops",
    svg: "evening-star"
  },
  {
    name: "Three White Soldiers",
    type: "bullish",
    description: "Three consecutive long green candles with small wicks. Each opens within previous body and closes near its high. Strong bullish continuation",
    svg: "three-white-soldiers"
  },
]

export const formulas = [
  {
    name: "Position Size",
    formula: "Position Size = (Account × Risk%) ÷ (Entry - Stop Loss)",
    description: "Calculate how many units to buy based on your risk tolerance",
    inputs: ["accountSize", "riskPercent", "entryPrice", "stopLoss"],
    calculate: (vals: Record<string, number>) => {
      const riskAmount = (vals.accountSize || 0) * ((vals.riskPercent || 0) / 100)
      const priceDiff = Math.abs((vals.entryPrice || 0) - (vals.stopLoss || 0))
      return priceDiff > 0 ? (riskAmount / priceDiff).toFixed(4) : "0"
    }
  },
  {
    name: "Risk Amount",
    formula: "Risk Amount = Account Size × Risk Percentage",
    description: "How much money you're risking on a trade",
    inputs: ["accountSize", "riskPercent"],
    calculate: (vals: Record<string, number>) => "$" + ((vals.accountSize || 0) * ((vals.riskPercent || 0) / 100)).toFixed(2)
  },
  {
    name: "Risk:Reward Ratio",
    formula: "R:R = (Target - Entry) ÷ (Entry - Stop Loss)",
    description: "Compare potential profit to potential loss",
    inputs: ["entryPrice", "targetPrice", "stopLoss"],
    calculate: (vals: Record<string, number>) => {
      const risk = Math.abs((vals.entryPrice || 0) - (vals.stopLoss || 0))
      const reward = Math.abs((vals.targetPrice || 0) - (vals.entryPrice || 0))
      return risk > 0 ? (reward / risk).toFixed(2) + ":1" : "0:1"
    }
  },
  {
    name: "Leverage",
    formula: "Leverage = Position Value ÷ Margin",
    description: "Calculate how much leverage you're using",
    inputs: ["positionValue", "marginUsed"],
    calculate: (vals: Record<string, number>) => (vals.marginUsed || 0) > 0 ? ((vals.positionValue || 0) / vals.marginUsed).toFixed(1) + "x" : "0x"
  },
  {
    name: "Profit/Loss",
    formula: "P/L = Position Size × (Exit Price - Entry Price)",
    description: "Calculate profit or loss from a trade",
    inputs: ["positionSize", "entryPrice", "exitPrice"],
    calculate: (vals: Record<string, number>) => {
      const pl = (vals.positionSize || 0) * ((vals.exitPrice || 0) - (vals.entryPrice || 0))
      return pl >= 0 ? `+$${pl.toFixed(2)}` : `-$${Math.abs(pl).toFixed(2)}`
    }
  }
]

export const inputLabels: Record<string, string> = {
  accountSize: "Account Size ($)",
  riskPercent: "Risk %",
  entryPrice: "Entry Price ($)",
  stopLoss: "Stop Loss ($)",
  targetPrice: "Target Price ($)",
  positionValue: "Position Value ($)",
  marginUsed: "Margin Used ($)",
  positionSize: "Position Size",
  exitPrice: "Exit Price ($)"
}

export function useTradingTerms() {
  const masteredTerms = useState<Set<string>>('masteredTerms', () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('masteredTerms')
      return new Set(saved ? JSON.parse(saved) : [])
    }
    return new Set()
  })

  const toggleMastered = (term: string) => {
    if (masteredTerms.value.has(term)) {
      masteredTerms.value.delete(term)
    } else {
      masteredTerms.value.add(term)
    }
    masteredTerms.value = new Set(masteredTerms.value)
    if (import.meta.client) {
      localStorage.setItem('masteredTerms', JSON.stringify([...masteredTerms.value]))
    }
  }

  const categories = computed(() => ['All', ...new Set(tradingTerms.map(t => t.category))])

  return {
    tradingTerms,
    candlestickPatterns,
    formulas,
    inputLabels,
    masteredTerms,
    toggleMastered,
    categories
  }
}
