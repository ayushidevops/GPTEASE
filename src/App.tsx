/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

// Navigation Component
function Navbar() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-animation="default" className="navbar_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="432ab101-ff29-e709-9083-318b395c5807" role="banner" data-duration="400"
    >
      <div className="navbar_container">
        <a href="/home/home-1" id="w-node-_432ab101-ff29-e709-9083-318b395c5809-395c5807" aria-current="page" className="navbar_logo-link w-nav-brand w--current">
          <img src="https://gptease.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-large-white.578d69c5.png&w=3840&q=75&dpl=dpl_E3GjA9ucR2Vym9YhicW1s3ZLcX15" loading="lazy" width="120" alt="GPTEase Logo" className="navbar_logo" />
        </a>
        <nav role="navigation" id="w-node-_432ab101-ff29-e709-9083-318b395c580b-395c5807" className="navbar_menu w-nav-menu">
          <motion.a whileHover={{ scale: 1.1 }} href="#Feature" className="navbar_link w-nav-link">Feature</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#Testimonials" className="navbar_link w-nav-link">Testimonials</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#Blog" className="navbar_link w-nav-link">Blogs</motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/sign-up" className="button is-small hide-desktop w-button !mt-8 mb-4 !w-max !px-5 mx-auto">Get Started</motion.a>
        </nav>
        <div id="w-node-_432ab101-ff29-e709-9083-318b395c581e-395c5807" className="navbar_button-wrapper">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/sign-up" className="button is-small hide-mobile-landscape w-button"
          >
            Get Started
          </motion.a>
          <div className="navbar_menu-button w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon_line-top" />
              <div className="menu-icon_line-middle">
                <div className="menu-icon_line-middle-inner" />
              </div>
              <div className="menu-icon_line-bottom" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Hero Component
function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="section_hero-header"
    >
      <div className="hero_background" />
      <Navbar />
      <div className="hero_section_wrapper">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="hero-header_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <motion.div 
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="max-width-large"
                    >
                      <div className="margin-bottom margin-small">
                        <h1 className="heading-style-h1">The Uncensored AI Assistant for <span className="text-highlight">Adult Creators</span></h1>
                      </div>
                      <p className="text-color-white max-w-2xl mx-auto">Create scripts, captions, ideas, and more — made specifically for adult creators, without refusals or content filters.</p>
                      <div className="margin-top margin-medium">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                          <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/sign-up" className="button w-button m-0"
                          >
                            Start creating for free
                          </motion.a>
                          <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className="heading-style-h1 !text-xs !m-0 text-white font-bold tracking-widest leading-none">7-DAY FREE TRIAL</span>
                            <span className="heading-style-h1 !text-[10px] !m-0 !font-medium text-gray-400 mt-1.5 tracking-wider leading-none">No credit card required</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div 
                  ref={containerRef}
                  style={{ perspective: "1200px" }}
                  className="hero-header_image-wrapper max-width-xlarge mx-auto !border-none !shadow-none !outline-none"
                >
                  <motion.div
                    style={{
                      rotateX,
                      scale,
                      opacity,
                      transformOrigin: "top",
                    }}
                  >
                    <img 
                      src="https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778782671/ChatGPT_Image_May_14_2026_11_37_50_PM_kwdvpp.png" 
                      loading="eager" 
                      width="1312" 
                      sizes="95vw" 
                      alt="Ai Chatbot Hero Image" 
                      srcSet="https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778782671/ChatGPT_Image_May_14_2026_11_37_50_PM_kwdvpp.png 2624w" 
                      className="hero-header_image !border-none !shadow-none !outline-none" 
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// Integration Section
function Integration() {
  const row1 = [
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778833629/onlyfans-icon-highres_jfjhe7.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836486/copy_of_gemini_generated_image_192w4q192w4q192w_zziteb.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836701/copy_of_gemini_generated_image_b4srw5b4srw5b4sr_ehmgfg.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778833629/onlyfans-icon-highres_jfjhe7.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836486/copy_of_gemini_generated_image_192w4q192w4q192w_zziteb.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836701/copy_of_gemini_generated_image_b4srw5b4srw5b4sr_ehmgfg.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778833629/onlyfans-icon-highres_jfjhe7.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836486/copy_of_gemini_generated_image_192w4q192w4q192w_zziteb.png",
    "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778836701/copy_of_gemini_generated_image_b4srw5b4srw5b4sr_ehmgfg.png"
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="integration_section"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="integration_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="w-layout-grid integration_content-top md:!grid-cols-2 md:!gap-12 md:max-w-none">
                  <div className="integration_content-left">
                    <h2 className="heading-style-h2">Streamlined Workflow For <span className="text-highlight">Top Platforms</span></h2>
                  </div>
                  <div className="integration_content-right">
                    <p className="text-size-medium text-white/70">Connect seamlessly with major platforms. Our integration suite ensures your content reaches the right audience with zero friction.</p>
                  </div>
                </div>
              </div>
              <div className="integration_content-bottom">
                <div className="logo_component overflow-hidden relative">
                  <motion.div 
                    style={{ x }}
                    className="flex flex-row items-center flex-nowrap"
                  >
                    <div className="integration_list flex flex-row items-center flex-nowrap shrink-0 gap-6 md:gap-8">
                      {row1.map((src, idx) => (
                        <div key={idx} className="integration_wrapper shrink-0 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:px-10 md:py-2 lg:py-3 transition-all hover:bg-white/10">
                          <img src={src} loading="lazy" alt="Logo" className="integration_icon max-h-8 md:max-h-8 lg:max-h-10 w-auto object-contain brightness-0 invert opacity-80" />
                          {src.includes("onlyfans-icon") && (
                            <span className="text-white/80 font-medium text-base md:text-lg tracking-tight">OnlyFans</span>
                          )}
                          {src.includes("192w4q192w4q192w_zziteb") && (
                            <span className="text-white/80 font-medium text-base md:text-lg tracking-tight">Fansly</span>
                          )}
                          {src.includes("b4srw5b4srw5b4sr_ehmgfg") && (
                            <span className="text-white/80 font-medium text-base md:text-lg tracking-tight">LoyalFans</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Highlight Section
function Highlight() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: "Contextual Memory",
      description: "GPTease learns from your past interactions. Memory helps creators generate content that is tailored specifically to long‑running conversations, so fans experience consistent storylines across platforms.",
      checks: ["Chat history awareness", "Personality context sharing", "Automated brand alignment"],
      img: "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778843711/Gemini_Generated_Image_334hl9334hl9334h_m3qkjd.png",
      srcset: "https://res.cloudinary.com/dfgi36qop/image/upload/q_auto/f_auto/v1778843711/Gemini_Generated_Image_334hl9334hl9334h_m3qkjd.png"
    },
    {
      id: 1,
      title: "Image Understanding",
      description: "Upload photos and get instant alt‑text, creative captions, and engagement hooks based on what's in the image. GPTease analyzes your visual content to write descriptions that convert.",
      checks: ["Visual feature extraction", "Automated SEO tagging", "Context‑aware captions"],
      img: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f4ae0bbbd13a95164_highlight-2.jpg",
      srcset: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f4ae0bbbd13a95164_highlight-2-p-500.jpg 500w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f4ae0bbbd13a95164_highlight-2-p-800.jpg 800w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f4ae0bbbd13a95164_highlight-2-p-1080.jpg 1080w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f4ae0bbbd13a95164_highlight-2.jpg 1232w"
    },
    {
      id: 2,
      title: "Live Web Search",
      description: "Stay on top of trending topics, viral challenges, and what your competitors are doing in real time. GPTease browses the live web to give you content ideas that are relevant right now.",
      checks: ["Real‑time trend analysis", "Competitor insight gathering", "Source‑cited data retrieval"],
      img: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f21a2c6def53f2fa2_highlight-1.jpg",
      srcset: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f21a2c6def53f2fa2_highlight-1-p-500.jpg 500w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f21a2c6def53f2fa2_highlight-1-p-800.jpg 800w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f21a2c6def53f2fa2_highlight-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330f21a2c6def53f2fa2_highlight-1.jpg 1232w"
    },
    {
      id: 3,
      title: "Multiple Personas",
      description: "Create individual brand personas for different writing styles, content niches, or audience segments. Whether you're sweet and spicy or dark and dominant, GPTΞASΞ adapts to your voice perfectly.",
      checks: ["Tone and voice customization", "Platform‑specific formatting", "Intelligent persona slots"],
      img: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330eee41efbf37caa9f6_highlight.jpg",
      srcset: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330eee41efbf37caa9f6_highlight-p-500.jpg 500w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330eee41efbf37caa9f6_highlight-p-800.jpg 800w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330eee41efbf37caa9f6_highlight-p-1080.jpg 1080w, https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/67aa330eee41efbf37caa9f6_highlight.jpg 1232w"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section_highlight"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="highlight_component flex flex-col gap-12 lg:gap-16">
              {/* Heading Section */}
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2">Powerful <span className="text-highlight">Features</span></h2>
                  </div>
                  <p className="text-size-medium max-w-2xl mx-auto">
                    GPTΞASΞ is built specifically for adult creator workflows
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="highlight_image-main relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={features[activeTab].img} 
                      srcSet={features[activeTab].srcset}
                      alt={features[activeTab].title}
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Play icon for Video/Image if it's Tab 2 (Video logic placeholder) */}
                {activeTab === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="lightbox-play-icon scale-125">
                      <div className="icon-embed-large">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Grid Section */}
              <div className="w-layout-grid feature_layout-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
                {/* Left Column */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  {[features[0], features[1]].map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`text-left p-6 lg:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                        activeTab === feature.id 
                        ? "bg-white/10 border-highlight shadow-[0_0_20px_rgba(var(--text-highlight-rgb),0.1)]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <h3 className={`heading-style-h4 mb-3 transition-colors ${activeTab === feature.id ? "text-highlight" : "text-white"}`}>
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">{feature.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        {feature.checks.map((check, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className={`w-3.5 h-3.5 flex-shrink-0 ${activeTab === feature.id ? "text-highlight" : "text-white/40"}`} />
                            <span className="text-xs text-white/60">{check}</span>
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 lg:gap-8">
                  {[features[2], features[3]].map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`text-left p-6 lg:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                        activeTab === feature.id 
                        ? "bg-white/10 border-highlight shadow-[0_0_20px_rgba(var(--text-highlight-rgb),0.1)]" 
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <h3 className={`heading-style-h4 mb-3 transition-colors ${activeTab === feature.id ? "text-highlight" : "text-white"}`}>
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">{feature.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        {feature.checks.map((check, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className={`w-3.5 h-3.5 flex-shrink-0 ${activeTab === feature.id ? "text-highlight" : "text-white/40"}`} />
                            <span className="text-xs text-white/60">{check}</span>
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonialsSet1 = [
    { name: "Mark Roberts", role: "Freelancer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/679ca151035f6d276de73b59_Testimonial_Avatar_2.jpg" },
    { name: "Jenny", role: "Developer, HIL", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73b1e/679ca151035f6d276de73b52_Testimonial_Avatar_6.jpg" },
    { name: "Jenny Walker", role: "CEO, Asia", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73c30_Testimonial_1.jpg" },
    { name: "Michaerl Walker", role: "CEO, RevUp", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73b56_Testimonial_Avatar_4.jpg" },
    { name: "Emily Davis", role: "Developer, Facelook", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73b54_Testimonial_Avatar_5.jpg" },
    { name: "Davis Thomsan", role: "Founder, Agency", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", avatar: "https://cdn.prod.website-files.com/679ca151035f6d276de73bfa_Testimonial_8.jpg" }
  ];

  return (
    <section id="Testimonials" className="section_testimonial">
      <div className="padding-section-large">
        <div className="margin-bottom margin-xxlarge">
          <div className="text-align-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-width-large align-center"
            >
              <div className="margin-bottom margin-small">
                <h2 className="heading-style-h2">You're in <span className="text-highlight">Good Company</span></h2>
              </div>
              <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          </div>
        </div>
        <div className="testimonial_wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="testimonial_component"
          >
            {testimonialsSet1.map((t, i) => (
              <div key={i} className="testimonial_content">
                <div className="margin-bottom margin-small">
                  <div className="text-size-medium">"{t.quote}"</div>
                </div>
                <div className="testimonial_client">
                  <div className="testimonial_client-image-wrapper">
                    <img src={t.avatar} loading="lazy" alt="Portrait" className="testimonial_customer-image" />
                  </div>
                  <div className="testimonial_client-info">
                    <p className="text-weight-bold"><strong className="text-color-white">{t.name}</strong></p>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="testimonial_component hide-mobile-landscape">
            {testimonialsSet1.map((t, i) => (
              <div key={`dup-${i}`} className="testimonial_content">
                <div className="margin-bottom margin-small">
                  <div className="text-size-medium">"{t.quote}"</div>
                </div>
                <div className="testimonial_client">
                  <div className="testimonial_client-image-wrapper">
                    <img src={t.avatar} loading="lazy" alt="Portrait" className="testimonial_customer-image" />
                  </div>
                  <div className="testimonial_client-info">
                    <p className="text-weight-bold"><strong className="text-color-white">{t.name}</strong></p>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    {
      question: "Is it really uncensored?",
      answer: "Yes. Our AI models are specifically designed for adult content. We do not have content filters that refuse to generate scripts, captions, or dialogue for adult themes."
    },
    {
      question: "Will my fans know I'm using AI?",
      answer: "Our intelligent automation is built to mimic your specific tone and style. It learns from your previous interactions to ensure every message sounds like it came directly from you."
    },
    {
      question: "Which platforms do you support?",
      answer: "We offer streamlined workflows for OnlyFans, Fansly, and LoyalFans, with more platforms being added regularly."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and do not store your personal messages or private creator data on our public servers."
    },
    {
      question: "Do I need a credit card for the trial?",
      answer: "No. You can start your 7-day free trial immediately without providing any payment information."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section_faq"
    >
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2">Frequently Asked <span className="text-highlight">Questions</span></h2>
                  </div>
                  <p className="text-size-medium">Everything you need to know about scaling your creator business with GPTEase.</p>
                </div>
              </div>
            </div>
            <div className="faq_component">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="faq_accordion"
                >
                  <div className="faq_question">
                    <div className="text-size-medium text-weight-bold text-color-white">{faq.question}</div>
                    <div className="faq_icon-wrappper">
                      <div className="icon-embed-small w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="faq_answer p-4 text-gray-400 text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// UseCase Section
function UseCase() {
  const cases = [
    { title: "Script Writing", desc: "Generate spicy, engaging scripts for custom video requests in seconds. Never run out of things to say.", icon: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67aae4fd4c117c3ccbce2188_Automation.png" },
    { title: "Caption Ideas", desc: "Get perfect, platform-optimized captions that drive engagement and sales across all your profiles.", icon: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67aae4eb146dbd646dd42c51_Integration.png" },
    { title: "Chat Automation", desc: "Intelligent messaging that handles initial fan interactions, keeping them engaged until you jump in.", icon: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67aae4d3c79cc514132a5b9d_Code.png" },
    { title: "Content Ideas", desc: "Beat creator's block with unlimited suggestions for photoshoots, themes, and PPV content.", icon: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67aae49b6f25ac0e12f229cf_Support.png" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section_usecase"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="usecase_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="max-width-large">
                  <div className="text-align-center">
                    <h3 style={{ opacity: 1 }}><strong>Built for Your </strong><span className="text-highlight"><strong>Unique Business</strong></span><br /></h3>
                  </div>
                </div>
              </div>
              <div className="margin-bottom margin-large">
                <div className="usecase_list">
                  {cases.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ y: -10 }}
                      className="usecase_item"
                    >
                      <div className="margin-bottom !mb-2">
                        <img src={item.icon} loading="lazy" alt="" className="icon-1x1-small" />
                      </div>
                      <div className="margin-bottom !mb-1">
                        <h3 className="heading-style-h6">{item.title}</h3>
                      </div>
                      <p>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Blog Section
function Blog() {
  const posts = [
    { title: "The Ultimate Guide to Choosing the Right Chatbot Solution", image: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67ab521c235a321b2bbce6b8_blog_thumbnail_2.jpg", category: "Ideas" },
    { title: "Top 10 Chatbot Trends to Watch in the Next Five Years", image: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67ab522cf52e85d2e78f06a0_blog_thumbnail_3.jpg", category: "Business" },
    { title: "Best Practices for Data Security in Chatbot Applications", image: "https://cdn.prod.website-files.com/679ca151035f6d276de73b4a/67ab5243366413acd019d605_blog_thumbnail_4.jpg", category: "Ideas" }
  ];

  return (
    <section id="Blog" className="section_blog-list">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-width-large align-center"
                >
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2">Featured Blog</h2>
                  </div>
                  <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </motion.div>
              </div>
            </div>
            <div className="blog-list_component">
              <div className="blog-list_list">
                {posts.map((post, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="blog-list_item"
                  >
                    <div className="blog-link_item">
                      <a href="#" className="blog-list_image-link w-inline-block">
                        <div className="blog-list_image-wrapper">
                          <img src={post.image} loading="lazy" alt="" className="blog-list_image" />
                        </div>
                      </a>
                      <div className="blog-list_meta-wrapper">
                        <div className="text-highlight">{post.category}</div>
                      </div>
                      <h3 className="heading-style-h5">{post.title}</h3>
                    </div>
                    <div className="text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                  </motion.div>
                ))}
              </div>
              <div className="margin-top margin-xlarge">
                <div className="button-group is-center">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/blog" className="button is-secondary w-button"
                  >
                    View all
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section_home_cta"
    >
      <div className="cta_background" />
      <div className="cta_content_wrapper">
        <div className="padding-global">
          <div className="container-small">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="margin-bottom margin-small">
                  <h2 className="heading-style-h2"><span className="text-highlight">Take Control</span> of Your Growth Today</h2>
                </div>
                <p className="text-size-medium">Stop wasting hours on repetitive tasks. Start your 7-day free trial and experience the power of uncensored AI creator support.</p>
                <div className="margin-top margin-medium">
                  <div className="button-group is-center">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/sign-up" className="button w-button"
                    >
                      Start Free Trial
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/contact" className="button is-secondary w-button"
                    >
                      Contact Support
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Global Footer Component
function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="footer_component"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xxlarge">
            <div className="footer_newsletter-wrapper">
              <div className="footer_newsletter-text-wrapper">
                <div className="text-weight-bold text-size-medium text-white">Join our creator community</div>
                <p className="text-gray-400">Get the latest tips on AI automation and niche growth strategies.</p>
              </div>
              <div className="footer_form-block w-form">
                <form id="Subscribe-Email-Form" name="wf-form-Subscribe-Email-Form" className="footer_form">
                  <input className="form_input newsletter w-input bg-white/5 border-white/10 text-white" maxLength={256} name="Subscribe-Email" placeholder="Enter your email" type="email" id="Subscribe-Email" required />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="button is-secondary is-small w-button"
                  >
                    Subscribe
                  </motion.button>
                </form>
                <div className="text-size-tiny text-gray-500 mt-2">By subscribing you agree to our <a href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></div>
              </div>
            </div>
            <div className="padding-bottom padding-xxlarge">
              <div className="w-layout-grid footer_top-wrapper">
                <div id="w-node-d1a930e7-12bd-9b69-612b-b772987ab466-86a626e3" className="footer_column">
                  <a href="/" className="footer_logo-link w-nav-brand">
                    <img src="https://gptease.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-large-white.578d69c5.png&w=3840&q=75&dpl=dpl_E3GjA9ucR2Vym9YhicW1s3ZLcX15" loading="lazy" width="110" alt="GPTEase Logo" />
                  </a>
                  <p className="footer_logo-notes text-gray-400">Empowering adult creators with the world's most advanced, uncensored AI assistant. Scale faster, live better.</p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="footer_link-list"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-bold text-color-white font-semibold">Solution</div>
                  </div>
                  <a href="#Feature" className="footer_link text-gray-400 hover:text-white transition-colors">Features</a>
                  <a href="#Testimonials" className="footer_link text-gray-400 hover:text-white transition-colors">Success Stories</a>
                  <a href="#FAQ" className="footer_link text-gray-400 hover:text-white transition-colors">FAQs</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="footer_link-list"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-bold text-color-white font-semibold">Resources</div>
                  </div>
                  <a href="#Blog" className="footer_link text-gray-400 hover:text-white transition-colors">Blog</a>
                  <a href="/contact" className="footer_link text-gray-400 hover:text-white transition-colors">Contact</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="footer_link-list"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-bold text-color-white font-semibold">Legal</div>
                  </div>
                  <a href="/privacy" className="footer_link text-gray-400 hover:text-white transition-colors">Privacy</a>
                  <a href="/terms" className="footer_link text-gray-400 hover:text-white transition-colors">Terms</a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="line-divider border-white/10" />
          <div className="padding-top padding-medium">
            <div className="footer_bottom-wrapper flex justify-between items-center text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} GPTEase. All rights reserved.</p>
              <div className="w-layout-grid footer_legal-list flex gap-4">
                <a href="/privacy" className="footer_legal-link hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="footer_legal-link hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default function App() {
  useEffect(() => {
    // Re-initialize Webflow on mount
    const webflow = (window as any).Webflow;
    if (webflow && webflow.ready) {
      webflow.ready();
    }
  }, []);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Hero />
        <Integration />
        <Highlight />
        <UseCase />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
