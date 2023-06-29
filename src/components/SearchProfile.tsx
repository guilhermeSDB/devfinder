import { Search } from "lucide-react";
import { useState } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export function SearchProfile({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState<string>("");

  return (
    <div className="my-4 flex items-center rounded-2xl bg-[#1F2A48] px-4 md:py-1">
      <Search
        color="#0087FF"
        strokeWidth={1.5}
        className="my-4 ml-2 mr-4 h-8 w-8 md:h-10 md:w-10"
      />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquise um nome de usuário do Github"
        className="w-full bg-transparent py-2 text-sm ring-transparent placeholder:truncate focus:outline-none focus:ring-0 md:text-xl"
        onChange={(e) => setUserName(e.target.value)}
      />

      <button
        className="rounded-xl bg-[#0087FF] p-3 font-bold transition-all hover:brightness-125 md:ml-4 md:px-8 md:py-4"
        onClick={() => loadUser(userName)}
      >
        Pesquisar
      </button>
    </div>
  );
}
