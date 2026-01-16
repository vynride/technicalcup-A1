import Achievements from "./Achievements";
import Connect from "./Connect";

export default function Profile({ profile }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Profile Container */}
      <div className="bg-[#E9D5FF] border-4 border-black rounded-3xl p-6 lg:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
        
        {/* Profile Badge/Heading */}
        <div className="absolute -top-6 left-6 lg:left-10 bg-white border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-xl font-black text-black uppercase tracking-wider">Profile</h1>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image */}
          <div
            className="
              w-full mx-auto lg:mx-0
              max-w-sm lg:max-w-full
              border-4 border-black rounded-2xl overflow-hidden
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              aspect-[3/4] bg-white
            "
          >
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-6">
            
            {/* Bio Card */}
            <div
              className="bg-white border-2 border-black rounded-2xl p-6 lg:p-8
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="text-4xl font-black text-black tracking-tight">
                {profile.name}
              </h2>

              <p className="mt-2 text-lg font-bold text-teal-600 italic">
                "{profile.quote}"
              </p>

              <div className="w-full h-1 bg-black/10 my-4 rounded-full"></div>

              <p className="text-black leading-relaxed font-medium text-lg">
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
    </div>
  );
}
