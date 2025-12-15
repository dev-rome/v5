import { Github, Linkedin, Mail, Twitch } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 w-full px-4 border-t border-white/10 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-mono mb-6">
          <span className="text-secondary">&gt;</span> ESTABLISH_LINK
        </h2>
        <p className="text-neutral-400 mb-8">
          Ready to collaborate or just want to chat about games? Send a signal.
        </p>

        <a 
          href="mailto:contact@example.com" 
          className="inline-block px-8 py-3 bg-primary text-black font-bold font-mono rounded-sm hover:bg-primary/90 transition-transform hover:scale-105 mb-12"
        >
          SEND_MESSAGE
        </a>

        <div className="flex justify-center gap-6">
          <a href="#" className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-neutral-400 hover:text-[#9146FF] hover:bg-white/10 rounded-full transition-all">
            <Twitch className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
