"use client";
import { Header } from "@/components/Header";
import { NotFoundProfile } from "@/components/NotFoundProfile";
import { Profile } from "@/components/Profile";
import { SearchProfile } from "@/components/SearchProfile";
import { IUser } from "@/types/user";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isUserNotFound, setIsUserNotFound] = useState<boolean>(false);

  async function loaduser(username: string) {
    setIsUserNotFound(false);
    if (username && username !== "") {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
      } else {
        setIsUserNotFound(true);
        setUser(null);
        throw new Error("Failed to fetch data");
      }
    }
  }

  return (
    <main>
      <Header />
      <SearchProfile loadUser={loaduser} />
      {isUserNotFound === true && <NotFoundProfile />}
      {isUserNotFound === false && user && <Profile data={user} />}
    </main>
  );
}
