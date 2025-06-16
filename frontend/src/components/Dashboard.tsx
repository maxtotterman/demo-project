import Button from "@/components/Button";
import TransactionList from "@/components/TransactionList";
import SpendCard from "@/components/SpendCard";
import InvoiceCard from "./InvoiceCard";
import { activateCard } from "@/queries/card";
import { openInNewTab } from "@/utils/browser";
import { useEffect } from "react";
import { clearAuthToken, getAuthPayload, isTokenExpired } from "@/utils/token";
import CompanySelector from "./CompanySelector";
import { useNavigate } from "react-router-dom";
import logoUrl from "@/assets/logo.webp";

export default function BankingDashboard() {
  const { mutate, isPending } = activateCard();
  const cardId = "dacd7bc7-71bd-497c-904a-d07a815e4e58";
  const authPayload = getAuthPayload();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authPayload || isTokenExpired(authPayload)) {
      clearAuthToken();
      navigate("/login");
      return;
    }
  }, [authPayload, navigate]);

  const handleActivateCard = () => {
    mutate(cardId);
  };

  if (!authPayload) {
    return null;
  }

  return (
    <div className="p-5 min-h-screen font-sans bg-gray-800">
      <div className="p-5 mx-auto max-w-sm bg-gray-300 shadow-xl rounded-[20px]">
        <div className="flex justify-between mb-5">
          <img className="object-scale-down w-28 h-14" src={logoUrl} />
          <div className="py-3 px-5 text-2xl font-medium rounded-lg cursor-pointer">
            ☰
          </div>
        </div>

        <CompanySelector
          companies={authPayload?.companies}
          selectedCompany={authPayload?.selectedCompany}
        />

        <InvoiceCard
          imageUrl="https://cdn.prod.website-files.com/6152c3f8ecb71d43ae546fec/66fba57d1add33b7afe5ddd6_qc.webp
"
        />

        <SpendCard />

        <TransactionList />

        <div className="flex flex-col gap-3 mt-10">
          <Button
            label={"Activate Card"}
            onClick={handleActivateCard}
            disabled={isPending}
            loading={isPending}
            loadingLabel="Activating Card..."
            variant="primary"
          />
          <Button
            label="Contact Qred's support"
            variant="secondary"
            onClick={() => openInNewTab("https://www.qred.se/support")}
          />
        </div>
      </div>
    </div>
  );
}
