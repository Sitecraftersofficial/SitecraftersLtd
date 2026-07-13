import {
  Code2,
  Palette,
  Globe,
  Rocket,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900/40">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              SITECRAFTERS
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            SITECRAFTERS is a web development and design agency focused on
            creating modern, high-performance websites that help businesses
            establish a strong digital presence.
          </p>
        </div>


        {/* VALUES / SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          <div className="flex gap-4 p-6 rounded-lg bg-slate-800/30 border border-slate-700">
            <Code2 className="w-10 h-10 text-cyan-400" />

            <div>
              <h3 className="text-white font-semibold text-lg">
                Custom Web Development
              </h3>

              <p className="text-slate-300 text-sm">
                We build custom websites tailored to each business, focusing on
                performance, scalability, and a smooth user experience.
              </p>
            </div>
          </div>


          <div className="flex gap-4 p-6 rounded-lg bg-slate-800/30 border border-slate-700">
            <Palette className="w-10 h-10 text-purple-400" />

            <div>
              <h3 className="text-white font-semibold text-lg">
                Modern Design
              </h3>

              <p className="text-slate-300 text-sm">
                Every website is designed with a focus on clean visuals,
                usability, and creating a professional brand impression.
              </p>
            </div>
          </div>


          <div className="flex gap-4 p-6 rounded-lg bg-slate-800/30 border border-slate-700">
            <Globe className="w-10 h-10 text-green-400" />

            <div>
              <h3 className="text-white font-semibold text-lg">
                Digital Presence
              </h3>

              <p className="text-slate-300 text-sm">
                We help businesses move online with websites that represent
                their brand and connect them with their customers.
              </p>
            </div>
          </div>


          <div className="flex gap-4 p-6 rounded-lg bg-slate-800/30 border border-slate-700">
            <Rocket className="w-10 h-10 text-yellow-400" />

            <div>
              <h3 className="text-white font-semibold text-lg">
                Growth Focused
              </h3>

              <p className="text-slate-300 text-sm">
                Our websites are built with business growth in mind, helping
                companies attract customers and improve credibility.
              </p>
            </div>
          </div>

        </div>


        {/* STORY */}
        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-2xl font-semibold text-white mb-4">
            Building websites that represent businesses
          </h3>

          <p className="text-slate-300 leading-relaxed">
            At SITECRAFTERS, we believe a website is more than just an online
            page. It is a digital representation of a business. Our goal is to
            create websites that combine thoughtful design, reliable
            technology, and a clear user experience to help businesses stand
            out in the digital world.
          </p>

        </div>


      </div>
    </section>
  );
};

export default About;