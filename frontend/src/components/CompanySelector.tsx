import type { Company } from "@/types/company";

type Props = {
  selectedCompany: Company;
  companies: Company[];
};

export default function CompanySelector({ selectedCompany, companies }: Props) {
  const handleChange = () => {
    console.log("Changed company");
  };

  return (
    <div className="mb-10">
      <div className="relative">
        <select
          value={selectedCompany.name}
          onChange={handleChange}
          className="p-4 w-full text-base bg-gray-200 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {companies?.map((company) => (
            <option key={company.id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>

        <div className="flex absolute inset-y-0 right-4 items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
