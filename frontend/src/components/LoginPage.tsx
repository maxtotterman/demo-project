import { useState } from "react";
import Button from "@/components/Button";
import { createJWT, setAuthToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import type { JWTPayload } from "@/types/auth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    const mockToken: JWTPayload = {
      user: {
        id: "5853c7e0-e02d-4216-b093-cc2bf66299ca",
      },
      card: {
        id: "dacd7bc7-71bd-497c-904a-d07a815e4e58",
        img_url: "",
      },
      selectedCompany: {
        id: "8ca917fb-e9f3-4c9e-bb55-8f81bcfade8f",
        name: "Max Totterman AB",
        img_url: "",
      },
      companies: [
        {
          id: "8ca917fb-e9f3-4c9e-bb55-8f81bcfade8f",
          name: "Max Totterman AB",
          img_url: "",
        },
        {
          name: "Hasses Måleri AB",
          id: "ce76d37d-a080-47e3-a858-630a8cf767ee",
          img_url: "",
        },
      ],
      exp: Math.floor(Date.now() / 1000) + 3600,
    };

    const token = await createJWT(mockToken);
    setAuthToken(token);
    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center p-5 min-h-screen font-sans bg-gray-800">
      <div className="p-8 mx-auto max-w-sm bg-gray-100 shadow-xl rounded-[20px]">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Welcome to Cred
        </h1>
        <p className="mb-8 text-gray-600">Please log in to continue</p>

        <Button
          label="Log In"
          onClick={handleLogin}
          disabled={isLoading}
          loading={isLoading}
          loadingLabel="Logging in..."
          variant="primary"
        />
      </div>
    </div>
  );
}
