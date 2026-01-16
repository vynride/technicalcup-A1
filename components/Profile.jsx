import Achievements from "./Achievements";
import Connect from "./Connect";

export default function Profile({ profile }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
        <div
          className="
            w-full
            max-w-sm lg:max-w-md mb-8 lg:mb-0
            border-2 border-black rounded-2xl overflow-hidden
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            aspect-[3/4]
          "
        >
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="bg-white border-2 border-black rounded-2xl p-8
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <h2 className="text-3xl font-bold text-black">
              {profile.name}
            </h2>

            <p className="mt-1 font-semibold text-teal-600">
              {profile.quote}
            </p>

            <p className="mt-6 text-black leading-relaxed font-medium">
              {profile.bio}
            </p>
          </div>

          <Achievements achievements={profile.achievements} />
          <Connect
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </div>
      </div>
    </div>
  );
}
