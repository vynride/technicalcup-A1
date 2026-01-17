import Profile from "@/components/Profile";
import Navbar from "@/components/Navbar";

import profiles from "@/data/profile.json";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;

  const profile = profiles.find(
    (p) => p._id.$oid === id
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
