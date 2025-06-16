import type { Company } from "@/types/company";

export type JWTPayload = {
  user: {
    id: string;
  };
  selectedCompany: Company;
  companies: Company[];
  card: {
    id: string;
    img_url: string;
  };
  exp: number;
};
