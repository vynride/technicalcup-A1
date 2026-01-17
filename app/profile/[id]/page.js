import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";

import profiles from "@/data/profiles.json";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;

  // Since id in URL is string and id in json is number, we use == or convert
  const profile = profiles.find(
    (p) => p.id.toString() === id
  );

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-neo-bg)]">
      <Navbar />
      <Profile profile={profile} />
    </div>
  );
}
