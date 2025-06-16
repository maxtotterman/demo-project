import type { Card } from "@/types/card";
import type { Transaction } from "@/types/transaction";

// TODO: Read from environment variables instad of hardcoding
const API_BASE_URL = "http://localhost:1337";

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getAuthToken()}`,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        // TODO: Could throw a more specific error based on status code
        throw new Error();
      }

      if (response.status === 204) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  private getAuthToken(): string {
    return localStorage.getItem("authToken") || "";
  }

  async getCardDetails(cardId: string) {
    const endpoint = `/api/cards/${cardId}`;

    return this.request<Card>(endpoint, {
      method: "GET",
    });
  }

  async getCardTransactions(cardId: string, limit: number = 3) {
    const endpoint = `/api/cards/${cardId}/transactions?limit=${limit}`;

    return this.request<Transaction[]>(endpoint, {
      method: "GET",
    });
  }

  // TODO: Accept string instead of boolean
  async activateCard(cardId: string) {
    const endpoint = `/api/cards/${cardId}`;

    return this.request<Card>(endpoint, {
      method: "PATCH",
      body: JSON.stringify({ active: true }),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
