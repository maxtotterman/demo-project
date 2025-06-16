export const queryKeys = {
  cards: {
    all: ["cards"] as const,
    details: (cardId: string) =>
      [...queryKeys.cards.all, "details", cardId] as const,
    transactions: (cardId: string) =>
      [...queryKeys.cards.all, "transactions", cardId] as const,
  },
} as const;
