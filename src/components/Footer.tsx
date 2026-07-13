import instagramicon from "../assets/socialmedia/instagram.png";
import gmailicon from "../assets/socialmedia/gmail.png";
import whatsappicon from "../assets/socialmedia/whatsapp.png";
import logoSideName from "../assets/SitecraftersLogoSideName1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const EMAIL = "sitecraftersltd@gmail.com";
  const PHONES = [
    { number: "+250 789 599 719", link: "250789599719" },
    { number: "+250 738 019 704", link: "250738019704" },
    { number: "+250 789 569 981", link: "250789569981" }
  ];
  const PRIMARY_PHONE = PHONES[0];
  const INSTAGRAM = "sitecraftersltd";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-800/30 border-t border-slate-700/20 py-12 px-4">
      <div className="container mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* BRAND */}
          <div className="col-span-1 md:col-span-2">
            <img
              src={logoSideName}
              alt="Sitecrafters"
              className="h-14 w-auto mb-4"
            />

            <p className="text-slate-300 mb-6 max-w-md">
              We design and build custom websites tailored to each client’s goals, with a structured process from start to finish.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/250789599719"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <img
                  src={whatsappicon}
                  alt="WhatsApp"
                  className="w-[28px] h-[28px] object-contain"
                />
              </a>

              <a
                href={`https://www.instagram.com/${INSTAGRAM}/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <img
                  src={instagramicon}
                  alt="Instagram"
                  className="w-[30px] h-[30px] object-contain"
                />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-110 transition"
              >
                <img
                  src={gmailicon}
                  alt="Email"
                  className="w-[30px] h-[30px] object-contain"
                />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col lg:items-start items-center">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-tl from-cyan-600 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>

            <ul className="space-y-2 text-lg">
              {["home", "services", "about", "portfolio"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-slate-300 hover:text-purple-400 transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col lg:items-start items-center">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-tl from-cyan-600 to-purple-400 bg-clip-text text-transparent">
              Contact
            </h3>

            <ul className="space-y-2 text-lg text-center lg:text-left">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-slate-300 hover:text-purple-400"
                >
                  {EMAIL}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PRIMARY_PHONE.link}`}
                  className="text-slate-300 hover:text-purple-400"
                >
                  {PRIMARY_PHONE.number}
                </a>
              </li>

              <li className="text-slate-300">Kigali, Rwanda</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700/20 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-sm">
            © {currentYear} SitecraftersLtd. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-400 hover:text-purple-400 text-sm transition"
            >
              {EMAIL}
            </a>

            <a
              href={`tel:${PRIMARY_PHONE.link}`}
              className="text-slate-400 hover:text-purple-400 text-sm transition"
            >
              {PRIMARY_PHONE.number}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;