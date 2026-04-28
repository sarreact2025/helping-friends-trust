import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────────────── */
const PROGRAMS = [
  {
    icon: "📚",
    title: "Education",
    desc: "Building a one-stop platform for education reaching children and the general public across Chennai, Tamil Nadu.",
    color: "#3B82F6",
  },
  {
    icon: "🩸",
    title: "Blood Donation",
    desc: "5 periodic blood donation camps since 2021 — saving lives and supplying local hospitals with vital blood.",
    color: "#EF4444",
  },
  {
    icon: "🏃",
    title: "Marathons",
    desc: "Community marathons promoting physical fitness, community spirit, and awareness of healthy living.",
    color: "#F59E0B",
  },
  {
    icon: "🏠",
    title: "Old Age Support",
    desc: "Adopted an old age home in Bengaluru — volunteers provide care and financial support to elderly residents.",
    color: "#8B5CF6",
  },
  {
    icon: "💼",
    title: "Skill Development",
    desc: "Technical, soft, and professional training through workshops, internships, and on-the-job programs.",
    color: "#10B981",
  },
  {
    icon: "♟️",
    title: "Sports Development",
    desc: "Empowering young minds through chess and other sports activities with skilled coaches at govt. schools.",
    color: "#F97316",
  },
];

const INITIATIVES = [
  {
    tag: "Education",
    title: "Career Guidance — Vazhikaatti",
    desc: "A career guidance program helping students explore options, connect with industry leaders, write effective resumes, and handle interviews.",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    tag: "Health",
    title: "Immunity Booster Distribution",
    desc: "Distributing vitamin-rich fruits, Kabasura Kudineer and Nilavembu Kashayam to students and the public to strengthen immune systems.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    tag: "School",
    title: "Alumni Meet & School Renovation",
    desc: "Fundraising meets enabling playground renovation, classroom painting, green boards, auditorium restoration and donated furniture at GMHSS.",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    tag: "Empowerment",
    title: "Women Entrepreneurship",
    desc: "Supporting women to pursue their passion by providing resources, mentorship and addressing barriers like capital access and workforce participation.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    tag: "Digital",
    title: "MSM — Free E-Services Camp",
    desc: "Bringing free government e-services directly to factory workers and residents who face timing constraints in availing digital services.",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    tag: "Arts & Language",
    title: "Competitions & Spoken English",
    desc: "Drawing, chess and recitation competitions at school and district level, plus free Spoken English classes for all proficiency levels.",
    color: "#F97316",
    bg: "#FFF7ED",
  },
];

const STATS = [
  { icon: "🎓", num: "1000+", label: "Students Supported" },
  { icon: "🩸", num: "5", label: "Blood Camps Held" },
  { icon: "🏃", num: "2", label: "Marathons Organized" },
  { icon: "📚", num: "400+", label: "Books Donated" },
  { icon: "👩‍🏫", num: "4+", label: "Teacher's Day Events" },
  { icon: "🤝", num: "50+", label: "Active Volunteers" },
];

const VISION = [
  {
    num: "01",
    icon: "🌱",
    title: "Holistic Development",
    desc: "Academic, emotional, social and ethical growth — preparing individuals to contribute positively to society.",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Community Empowerment",
    desc: "Bringing together youth, alumni, teachers and volunteers to strengthen the community fabric.",
  },
  {
    num: "03",
    icon: "❤️",
    title: "Health & Wellness",
    desc: "Blood donation camps, immunity booster distribution, and free health check-ups for the public.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
export default function HFCTWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        margin: 0,
        padding: 0,
        background: "#fff",
        color: "#1a1a1a",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        /* ── Fonts ── */
        .font-display { font-family: 'Playfair Display', Georgia, serif; }

        /* ── Animations ── */
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse  { 0%,100%{transform:scale(1);} 50%{transform:scale(1.06);} }
        @keyframes float  { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .anim-1 { animation: fadeUp .65s .1s both; }
        .anim-2 { animation: fadeUp .65s .25s both; }
        .anim-3 { animation: fadeUp .65s .4s both; }

        /* ── Buttons ── */
        .btn-solid {
          display: inline-block; background: linear-gradient(135deg,#16a34a,#14532d);
          color: #fff; border: none; padding: 13px 30px; border-radius: 10px;
          font-weight: 700; font-size: 15px; cursor: pointer;
          transition: transform .25s, box-shadow .25s; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: .3px;
        }
        .btn-solid:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(22,163,74,.38); }
        .btn-ghost {
          display: inline-block; background: transparent; color: #16a34a;
          border: 2px solid #16a34a; padding: 12px 30px; border-radius: 10px;
          font-weight: 700; font-size: 15px; cursor: pointer;
          transition: all .25s; text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: .3px;
        }
        .btn-ghost:hover { background: #16a34a; color: #fff; }
        .btn-ghost-white {
          display: inline-block; background: transparent; color: #fff;
          border: 2px solid rgba(255,255,255,.7); padding: 12px 30px; border-radius: 10px;
          font-weight: 700; font-size: 15px; cursor: pointer;
          transition: all .25s; font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .btn-ghost-white:hover { background: rgba(255,255,255,.15); border-color: #fff; }

        /* ── Section helpers ── */
        .section-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }
        .section-tag {
          display: inline-block; background: #dcfce7; color: #15803d;
          padding: 5px 14px; border-radius: 20px; font-size: 12px;
          font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 14px;
        }

        /* ── Cards ── */
        .card {
          background: #fff; border-radius: 18px; padding: 26px;
          border: 1px solid #e5e7eb; transition: transform .3s, box-shadow .3s;
        }
        .card:hover { transform: translateY(-5px); box-shadow: 0 18px 45px rgba(0,0,0,.09); }

        /* ── Nav ── */
        .nav-link {
          color: inherit; font-weight: 600; font-size: 14px;
          text-decoration: none; transition: color .2s; letter-spacing: .2px;
        }
        .nav-link:hover { color: #16a34a !important; }

        /* ── Mobile menu ── */
        .mobile-menu {
          display: none; flex-direction: column; gap: 0;
          position: absolute; top: 100%; left: 0; right: 0;
          background: #052e16; padding: 8px 0 20px; z-index: 999;
          border-top: 1px solid rgba(255,255,255,.1);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a, .mobile-menu button {
          padding: 14px 24px; color: #d1fae5 !important;
          font-size: 15px; font-weight: 600; text-align: left;
          background: none; border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif; text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.05);
        }
        .mobile-menu a:hover, .mobile-menu button:hover { background: rgba(255,255,255,.06); }

        /* ── Grids ── */
        .grid-2  { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .grid-3  { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .grid-6  { display: grid; grid-template-columns: repeat(6,1fr); gap: 16px; }
        .grid-footer { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .grid-3  { grid-template-columns: repeat(2,1fr); }
          .grid-6  { grid-template-columns: repeat(3,1fr); }
          .grid-footer { grid-template-columns: 1fr 1fr; gap: 30px; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats-grid { grid-template-columns: repeat(4,1fr) !important; }
        }

        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .grid-2  { grid-template-columns: 1fr; }
          .grid-3  { grid-template-columns: 1fr; }
          .grid-6  { grid-template-columns: repeat(2,1fr); }
          .grid-footer { grid-template-columns: 1fr 1fr; gap: 24px; }
          .hero-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .section-pad { padding: 60px 0 !important; }
          .hero-pad { padding: 100px 0 60px !important; }
          .timeline-line { display: none !important; }
          .tl-item { flex-direction: column !important; align-items: flex-start !important; margin-bottom: 16px !important; }
          .tl-dot { display: none !important; }
          .tl-card { width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .donate-grid { grid-template-columns: 1fr 1fr; max-width: 100% !important; }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .grid-6  { grid-template-columns: 1fr 1fr; }
          .grid-footer { grid-template-columns: 1fr; }
          .hero-title { font-size: 34px !important; }
          .donate-grid { grid-template-columns: 1fr !important; }
          .hero-cta { flex-direction: column !important; }
          .hero-cta .btn-solid, .hero-cta .btn-ghost-white { width: 100%; text-align: center; }
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0fdf4; }
        ::-webkit-scrollbar-thumb { background: #16a34a; border-radius: 3px; }
      `}</style>

      {/* ══════════ NAVBAR ══════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(5,46,22,.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,.25)" : "none",
          transition: "all .4s",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: 68,
            maxWidth: 1160,
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => scrollTo("home")}
          >
            <div>
              <img
                src="/helping-friends-logo.png"
                alt="Logo"
                width={72}
                height={72}
              />
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                Helping Friends
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#86efac",
                  fontWeight: 600,
                  letterSpacing: ".5px",
                }}
              >
                CHARITABLE TRUST
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div
            className="desktop-nav-links"
            style={{ display: "flex", gap: 32, alignItems: "center" }}
          >
            {[
              ["home", "Home"],
              ["about", "About Us"],
              ["programs", "Programs"],
              ["gallery", "Gallery"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                style={{ color: "#d1fae5" }}
              >
                {label}
              </a>
            ))}
            <button
              className="btn-solid"
              style={{ padding: "9px 22px", fontSize: 13 }}
              onClick={() => scrollTo("donate")}
            >
              Support Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "all .3s",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px,-5px)"
                        : "rotate(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {[
            ["home", "Home"],
            ["about", "About Us"],
            ["programs", "Programs"],
            ["gallery", "Gallery"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button
            onClick={() => scrollTo("donate")}
            style={{ color: "#86efac !important", fontWeight: 700 }}
          >
            Support Now →
          </button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section
        id="home"
        style={{
          background:
            "linear-gradient(140deg,#031d0e 0%,#052e16 35%,#14532d 65%,#166534 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(134,239,172,.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "-60px",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(22,163,74,.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "10%",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(134,239,172,.04)",
            animation: "float 6s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          className="section-wrap hero-pad"
          style={{
            padding: "120px 24px 80px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Badge */}
          <div
            className="anim-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.2)",
              borderRadius: 30,
              padding: "7px 18px",
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "#86efac",
                fontWeight: 700,
                letterSpacing: ".5px",
              }}
            >
              Reg No: 204/IV/2020 &nbsp;•&nbsp; 12A & 80G Registered
              &nbsp;•&nbsp; CSR Form 1 Certified
            </span>
          </div>

          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div className="anim-2">
              <h1
                className="font-display hero-title"
                style={{
                  fontSize: "clamp(36px,5.5vw,68px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                Together We
                <br />
                <span style={{ color: "#86efac", fontStyle: "italic" }}>
                  Make a Difference
                </span>
              </h1>
              <p
                style={{
                  color: "#d1fae5",
                  fontSize: "clamp(15px,1.8vw,18px)",
                  lineHeight: 1.85,
                  marginBottom: 36,
                  maxWidth: 500,
                }}
              >
                Helping Friends Charitable Trust — empowering communities in
                Arumbakkam, Chennai through education, health, skill
                development, and social welfare since 2020.
              </p>
              <div
                className="hero-cta"
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <button
                  className="btn-solid"
                  style={{
                    background: "#fff",
                    color: "#15803d",
                    fontSize: 15,
                    padding: "14px 32px",
                  }}
                  onClick={() => scrollTo("donate")}
                >
                  Support Our Mission
                </button>
                <button
                  className="btn-ghost-white"
                  style={{ fontSize: 15, padding: "14px 32px" }}
                  onClick={() => scrollTo("about")}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div
              className="anim-3 hero-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {[
                { n: "4+", l: "Years of\nService" },
                { n: "5", l: "Blood Camps\nConducted" },
                { n: "400+", l: "Books\nDonated" },
                { n: "50+", l: "Communities\nServed" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,.09)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,.18)",
                    borderRadius: 16,
                    padding: "24px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "clamp(28px,3.5vw,44px)",
                      fontWeight: 900,
                      color: "#86efac",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      color: "#d1fae5",
                      fontSize: 13,
                      marginTop: 8,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 70"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", marginTop: -2 }}
        >
          <path d="M0,56L80,50C160,44,320,32,480,32C640,32,800,44,960,50C1120,56,1280,56,1360,56L1440,56L1440,70L0,70Z" />
        </svg>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="section-pad" style={{ padding: "90px 0" }}>
        <div className="section-wrap">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="section-tag">About HFCT</span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px,4vw,46px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Helping Friends
                <br />
                <span style={{ color: "#16a34a" }}>Charitable Trust</span>
              </h2>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: 16,
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                Founded in 2020 by alumni of government schools in Arumbakkam,
                Chennai, HFCT has been providing social and educational services
                for four years — dedicated to empowering and uplifting the
                community we grew up in.
              </p>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: 16,
                  lineHeight: 1.85,
                  marginBottom: 24,
                }}
              >
                <strong style={{ color: "#15803d" }}>Our Mission:</strong> To
                empower and educate underprivileged communities by providing
                access to quality education, fostering lifelong learning, and
                supporting holistic development — bridging gaps and promoting
                social equity.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 24,
                }}
              >
                {["✓ 12A Registered", "✓ 80G Registered", "✓ CSR Form 1"].map(
                  (b) => (
                    <span
                      key={b}
                      style={{
                        background: "#dcfce7",
                        color: "#15803d",
                        padding: "6px 14px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {b}
                    </span>
                  ),
                )}
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  background: "#f0fdf4",
                  borderRadius: 12,
                  borderLeft: "4px solid #16a34a",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    marginBottom: 4,
                    fontWeight: 600,
                    letterSpacing: ".5px",
                  }}
                >
                  UNIQUE ID (NITI AAYOG)
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    color: "#15803d",
                    fontSize: 15,
                    fontFamily: "monospace, monospace",
                  }}
                >
                  TN/2022/0330470
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VISION.map((v, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "linear-gradient(135deg,#16a34a,#14532d)",
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      flexShrink: 0,
                      boxShadow: "0 6px 18px rgba(22,163,74,.25)",
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#16a34a",
                        fontWeight: 800,
                        letterSpacing: 1.2,
                        marginBottom: 5,
                        textTransform: "uppercase",
                      }}
                    >
                      Vision {v.num}
                    </div>
                    <div
                      className="font-display"
                      style={{
                        fontWeight: 700,
                        fontSize: 17,
                        marginBottom: 6,
                        color: "#111",
                      }}
                    >
                      {v.title}
                    </div>
                    <div
                      style={{
                        color: "#6b7280",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROGRAMS ══════════ */}
      <section
        id="programs"
        className="section-pad"
        style={{ padding: "90px 0", background: "#f8fafc" }}
      >
        <div className="section-wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">What We Do</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,4vw,46px)",
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              Key Areas of <span style={{ color: "#16a34a" }}>Our Work</span>
            </h2>
            <p
              style={{
                color: "#6b7280",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              We focus on multiple areas to create comprehensive impact and
              transform lives across Chennai.
            </p>
          </div>
          <div className="grid-3">
            {PROGRAMS.map((p, i) => (
              <div
                key={i}
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: 28,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: p.color,
                  }}
                />
                <div
                  style={{
                    width: 54,
                    height: 54,
                    background: `${p.color}1a`,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 18,
                    border: `1px solid ${p.color}22`,
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 19,
                    marginBottom: 10,
                    color: "#111",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ IMPACT NUMBERS ══════════ */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg,#031d0e,#052e16,#15803d)",
        }}
      >
        <div className="section-wrap">
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px,4vw,44px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              HFCT Impact by Numbers
            </h2>
            <p style={{ color: "#86efac", fontSize: 16 }}>
              Our collective efforts have created meaningful change across
              communities
            </p>
          </div>
          <div className="grid-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "28px 14px",
                  background: "rgba(255,255,255,.08)",
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,.14)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(22px,2.5vw,36px)",
                    fontWeight: 900,
                    color: "#86efac",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    color: "#d1fae5",
                    fontSize: 12,
                    marginTop: 8,
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INITIATIVES ══════════ */}
      <section
        className="section-pad"
        style={{ padding: "90px 0", background: "#fff" }}
      >
        <div className="section-wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">Our Programs</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,4vw,46px)",
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              Making Change <span style={{ color: "#16a34a" }}>in Society</span>
            </h2>
            <p
              style={{
                color: "#6b7280",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Through dedicated efforts and community support, we are creating
              lasting positive change.
            </p>
          </div>
          <div className="grid-2">
            {INITIATIVES.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.color}20`,
                }}
              >
                <span
                  style={{
                    background: item.color,
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {item.tag}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    margin: "14px 0 10px",
                    color: "#111",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GALLERY ══════════ */}
      <section
        id="gallery"
        className="section-pad"
        style={{ padding: "90px 0", background: "#f8fafc" }}
      >
        <div className="section-wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">Our Activities</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,4vw,46px)",
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              4 Years of <span style={{ color: "#16a34a" }}>Impact</span>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                e: "🩸",
                l: "1st Blood Camp",
                d: "10 Jan 2021",
                c: "#FEF2F2",
                a: "#EF4444",
              },
              {
                e: "🩸",
                l: "2nd Blood Camp",
                d: "08 Aug 2021",
                c: "#FEF2F2",
                a: "#EF4444",
              },
              {
                e: "🩸",
                l: "3rd Blood Camp",
                d: "08 Jan 2022",
                c: "#FEF2F2",
                a: "#EF4444",
              },
              {
                e: "🏫",
                l: "Alumni Meet",
                d: "04 Sep 2022",
                c: "#ECFDF5",
                a: "#10B981",
              },
              {
                e: "🏃",
                l: "Marathon",
                d: "22 Jan 2023",
                c: "#FFFBEB",
                a: "#F59E0B",
              },
              {
                e: "🩸",
                l: "4th Blood Camp",
                d: "12 Feb 2023",
                c: "#FEF2F2",
                a: "#EF4444",
              },
              {
                e: "♟️",
                l: "Chess Competition",
                d: "2023",
                c: "#F5F3FF",
                a: "#8B5CF6",
              },
              {
                e: "🩸",
                l: "5th Blood Camp",
                d: "10 Sep 2023",
                c: "#FEF2F2",
                a: "#EF4444",
              },
              {
                e: "🏫",
                l: "Alumni Meet",
                d: "24 Sep 2023",
                c: "#ECFDF5",
                a: "#10B981",
              },
              {
                e: "🎨",
                l: "Drawing Competition",
                d: "2022 & 2023",
                c: "#EFF6FF",
                a: "#3B82F6",
              },
              {
                e: "🏃",
                l: "Marathon 2024",
                d: "19 May 2024",
                c: "#FFFBEB",
                a: "#F59E0B",
              },
              {
                e: "🎤",
                l: "Recitation Competition",
                d: "2024",
                c: "#FFF7ED",
                a: "#F97316",
              },
              {
                e: "📚",
                l: "Library Donation",
                d: "400+ Books",
                c: "#ECFDF5",
                a: "#10B981",
              },
              {
                e: "👩‍🏫",
                l: "Teacher's Day",
                d: "2021 – 2024",
                c: "#F5F3FF",
                a: "#8B5CF6",
              },
              {
                e: "💻",
                l: "Skill Development",
                d: "IT & Vocational",
                c: "#EFF6FF",
                a: "#3B82F6",
              },
              {
                e: "🏠",
                l: "Old Age Support",
                d: "Bengaluru Home",
                c: "#FFF7ED",
                a: "#F97316",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: item.c,
                  border: `1px solid ${item.a}22`,
                  textAlign: "center",
                  padding: "22px 16px",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 10 }}>{item.e}</div>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#1a1a1a",
                    marginBottom: 5,
                    lineHeight: 1.3,
                  }}
                >
                  {item.l}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: item.a,
                    fontWeight: 700,
                    letterSpacing: ".3px",
                  }}
                >
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA / DONATE ══════════ */}
      <section
        id="donate"
        style={{
          padding: "80px 24px",
          background: "linear-gradient(140deg,#031d0e,#052e16,#166534)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(26px,4vw,50px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            Ready to Make a Difference?
          </h2>
          <p
            style={{
              color: "#d1fae5",
              fontSize: 17,
              lineHeight: 1.85,
              marginBottom: 36,
            }}
          >
            Join our team of dedicated volunteers and donors. Be part of
            something meaningful — help us transform lives and build stronger
            communities across Chennai.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <button
              className="btn-solid"
              style={{
                background: "#fff",
                color: "#15803d",
                fontSize: 15,
                padding: "14px 32px",
              }}
            >
              Become a Volunteer
            </button>
            <button
              className="btn-ghost-white"
              style={{ fontSize: 15, padding: "14px 32px" }}
            >
              Learn About Volunteering
            </button>
          </div>
          <p
            className="font-display"
            style={{
              color: "#86efac",
              fontStyle: "italic",
              fontSize: 17,
              marginBottom: 20,
              fontWeight: 700,
            }}
          >
            Donate directly to our bank accounts
          </p>
          <div
            className="donate-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,.1)",
                borderRadius: 14,
                padding: "20px 18px",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,.15)",
              }}
            >
              <div
                style={{
                  color: "#86efac",
                  fontSize: 11,
                  fontWeight: 800,
                  marginBottom: 8,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                SBI Account
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "monospace, monospace",
                  marginBottom: 4,
                }}
              >
                39589868398
              </div>
              <div style={{ color: "#d1fae5", fontSize: 12 }}>
                IFSC: SBIN0011604
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,.1)",
                borderRadius: 14,
                padding: "20px 18px",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,.15)",
              }}
            >
              <div
                style={{
                  color: "#86efac",
                  fontSize: 11,
                  fontWeight: 800,
                  marginBottom: 8,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                HDFC Account
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "monospace, monospace",
                  marginBottom: 4,
                }}
              >
                50200061802377
              </div>
              <div style={{ color: "#d1fae5", fontSize: 12 }}>
                IFSC: HDFC0001861
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section
        id="contact"
        className="section-pad"
        style={{ padding: "90px 0", background: "#fff" }}
      >
        <div className="section-wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">Get In Touch</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,4vw,46px)",
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              Contact <span style={{ color: "#16a34a" }}>Us</span>
            </h2>
          </div>
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 50,
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  icon: "📍",
                  label: "REGISTERED OFFICE",
                  value:
                    '"F" Block, No 201, Bharathidasan Street, MMDA Colony, Arumbakkam, Chennai – 600106',
                },
                {
                  icon: "🏢",
                  label: "ALSO AT",
                  value:
                    '#51/42, "O" Block, MMDA Colony, Arumbakkam, Chennai – 600106',
                },
                { icon: "📞", label: "PHONE", value: "9884557820" },
                {
                  icon: "✉️",
                  label: "EMAIL",
                  value: "helpingfriendscharitabletrust@gmail.com",
                },
                { icon: "🌐", label: "WEBSITE", value: "www.hfct.in" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <span style={{ fontSize: 24 }}>{c.icon}</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 11,
                        color: "#16a34a",
                        marginBottom: 5,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        color: "#374151",
                        fontSize: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 36 }}>
              <h3
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 28,
                  color: "#111",
                }}
              >
                Send a Message
              </h3>
              {[
                { l: "Full Name", t: "text", p: "Your full name" },
                { l: "Email Address", t: "email", p: "your@email.com" },
                { l: "Phone Number", t: "tel", p: "+91 XXXXX XXXXX" },
              ].map((f, i) => (
                <div key={i} style={{ marginBottom: 18 }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontSize: 13,
                      marginBottom: 7,
                      color: "#374151",
                      letterSpacing: ".2px",
                    }}
                  >
                    {f.l}
                  </label>
                  <input
                    type={f.t}
                    placeholder={f.p}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: "1.5px solid #e5e7eb",
                      fontSize: 14,
                      outline: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: "border .2s, box-shadow .2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#16a34a";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(22,163,74,.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 22 }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: 13,
                    marginBottom: 7,
                    color: "#374151",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How would you like to help?"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1.5px solid #e5e7eb",
                    fontSize: 14,
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "border .2s, box-shadow .2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#16a34a";
                    e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <button
                className="btn-solid"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        style={{
          background: "#031d0e",
          color: "#d1fae5",
          padding: "60px 24px 28px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="grid-footer" style={{ marginBottom: 48 }}>
            <div className="footer-brand">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div>
                  <img
                    src="/helping-friends-logo.png"
                    alt="Logo"
                    width={72}
                    height={72}
                  />
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}
                  >
                    Helping Friends
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#86efac",
                      fontWeight: 600,
                      letterSpacing: ".5px",
                    }}
                  >
                    CHARITABLE TRUST
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "#86efac",
                  maxWidth: 260,
                }}
              >
                Dedicated to creating positive change through education, health,
                and community development since 2020.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                {["FB", "YT", "IN"].map((s) => (
                  <div
                    key={s}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "#86efac",
                      fontSize: 11,
                      fontWeight: 700,
                      transition: "background .2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(22,163,74,.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,.1)")
                    }
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                  fontSize: 15,
                }}
              >
                Quick Links
              </div>
              {["Home", "About Us", "Programs", "Gallery", "Contact"].map(
                (l) => (
                  <div
                    key={l}
                    style={{
                      color: "#86efac",
                      fontSize: 14,
                      marginBottom: 10,
                      cursor: "pointer",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#86efac")
                    }
                  >
                    {l}
                  </div>
                ),
              )}
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                  fontSize: 15,
                }}
              >
                Our Programs
              </div>
              {[
                "Education",
                "Blood Camps",
                "Marathons",
                "Skill Development",
                "Career Guidance",
                "Sports",
              ].map((l) => (
                <div
                  key={l}
                  style={{ color: "#86efac", fontSize: 14, marginBottom: 10 }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                  fontSize: 15,
                }}
              >
                Contact
              </div>
              <div
                style={{
                  color: "#86efac",
                  fontSize: 13,
                  lineHeight: 1.8,
                  marginBottom: 10,
                }}
              >
                MMDA Colony, Arumbakkam
                <br />
                Chennai – 600106
              </div>
              <div style={{ color: "#86efac", fontSize: 13, marginBottom: 6 }}>
                📞 9884557820
              </div>
              <div
                style={{
                  color: "#86efac",
                  fontSize: 12,
                  wordBreak: "break-all",
                  lineHeight: 1.6,
                }}
              >
                helpingfriendscharitabletrust@gmail.com
              </div>
              <div style={{ color: "#86efac", fontSize: 13, marginTop: 8 }}>
                🌐 www.hfct.in
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.1)",
              paddingTop: 22,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <div style={{ color: "#86efac", fontSize: 13 }}>
              © 2024 Helping Friends Charitable Trust. All rights reserved.
            </div>
            <div style={{ color: "#4ade80", fontSize: 12, fontWeight: 600 }}>
              Reg No: 204/IV/2020 &nbsp;•&nbsp; 12A & 80G Registered
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
