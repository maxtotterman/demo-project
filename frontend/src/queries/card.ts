import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/services/api-client";
import { queryKeys } from "@/lib/query-keys";

export function activateCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (cardId: string) => apiClient.activateCard(cardId),
    onMutate: async (cardId: string) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.cards.details(cardId),
      });
    },
  });
}

export function useCardDetails(cardId: string) {
  return useQuery({
    queryKey: queryKeys.cards.details(cardId),
    queryFn: () => apiClient.getCardDetails(cardId),
  });
}

export function useCardTransactions(cardId: string) {
  return useQuery({
    queryKey: queryKeys.cards.transactions(cardId),
    queryFn: () => apiClient.getCardTransactions(cardId),
  });
}
