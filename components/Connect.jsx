import { Github, Linkedin } from "lucide-react";

export default function Connect({ github, linkedin }) {
  return (
    <div
      className="bg-[#fcd34d] border-2 border-black rounded-2xl p-6
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <h3 className="font-bold text-lg text-black mb-4">
        Connect
      </h3>

      {github && (
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-3 text-sm font-bold text-black
          hover:translate-x-0.5 transition"
        >
          <Github size={18} /> GitHub
        </a>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          className={github ? "mt-3 flex items-center gap-3 text-sm font-bold text-black hover:translate-x-0.5 transition" : "flex items-center gap-3 text-sm font-bold text-black hover:translate-x-0.5 transition"}
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      )}
    </div>
  );
}
