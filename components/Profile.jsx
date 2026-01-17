import Achievements from "./Achievements";
import Connect from "./Connect";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Profile({ profile }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Profile Container */}
      <div className="bg-[var(--color-neo-purple)] border-4 border-black rounded-3xl p-6 lg:p-10 neo-shadow-lg relative">
        
        {/* Profile Badge/Heading */}
        <div className="absolute -top-6 left-6 lg:left-10 bg-white border-2 border-black px-6 py-2 rounded-full neo-shadow">
            <h1 className="text-xl font-black text-black uppercase tracking-wider">Profile</h1>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image */}
          <div
            className="
              w-full mx-auto lg:mx-0
              max-w-sm lg:max-w-full
              border-4 border-black rounded-2xl overflow-hidden
              neo-shadow-lg
              aspect-[3/4] bg-white
            "
          >
            <img
              src={profile.photo || "/mascot-coding.jpeg"}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-6">
            
            {/* Bio Card */}
            <div
              className="bg-white border-2 border-black rounded-2xl p-6 lg:p-8
              neo-shadow"
            >
              <h2 className="text-4xl font-black text-black tracking-tight">
                {profile.name}
              </h2>

              {profile.quote && (
                <p className="mt-2 text-lg font-bold text-teal-600 italic">
                  "{profile.quote}"
                </p>
              )}

              <div className="w-full h-1 bg-black/10 my-4 rounded-full"></div>

              <ScrollArea className="max-h-[200px] w-full rounded-md border-0 p-0">
                  <p className="text-black leading-relaxed font-medium text-lg pr-4">
                    {profile.bio || "No bio available."}
                  </p>
              </ScrollArea>
            </div>

            <Achievements achievements={profile.achievements_and_hobbies ? profile.achievements_and_hobbies.split('\n') : []} />
            <Connect
              github={profile.github_link}
              linkedin={profile.linkedin_link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
