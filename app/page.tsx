'use client'

import PublicationsSection from "@/components/PublicationsSection";
export default function Home() {

  return (
    <main className="min-h-screen bg-[#0d1f3c] text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1f3c]/95 backdrop-blur border-b border-[#c9a84c] px-8 py-4 flex justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-8 w-auto" alt="logo" />
          <h1 className="text-[#c9a84c] font-serif">Device Physics Lab</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          {[
            "home","about","research","team","facilities","collaborators","publications","careers","contact"
          ].map(i => (
            <a key={i} href={`#${i}`} className="hover:text-[#c9a84c] transition">
              {i.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
          id="home"
          className="min-h-screen flex items-center px-5 md:px-8 pt-24"
      >
        <div className="grid md:grid-cols-[1fr_1.2fr_1fr] gap-8 max-w-7xl mx-auto items-center">

          {/* LEFT: LARGE ANIMATED LAB LOGO */}
          <div className="hidden md:flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="DP Lab Logo" 
              className="w-full h-[520px] object-contain opacity-80 animate-pulse transition duration-1000 hover:scale-105"
            />
          </div>

          {/* CENTER: TEXT CONTENT */}
          <div>
            <div className="mb-4">
              <div className="bg-[#c9a84c] text-[#0d1f3c] px-4 py-1 text-xs tracking-widest inline-block">
                SRM UNIVERSITY AP · AMARAVATI
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-tight mb-6">
              Device <br/>
              <span className="text-[#c9a84c] italic">Physics</span><br/>
              Laboratory
            </h1>

            <p className="text-lg text-[#8fa8c8] mb-6">
              Dr. Sabyasachi Mukhopadhyay<br/>
              Associate Professor · Department of Physics
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#research" className="bg-[#c9a84c] text-[#0d1f3c] px-8 py-3 text-sm rounded">
                OUR RESEARCH
              </a>
              <a href="#contact" className="border px-8 py-3 text-sm rounded">
                CONTACT
              </a>
            </div>
          </div>

          {/* RIGHT: RESEARCH BOX */}
          <div className="flex justify-center md:justify-end">
            <div className="border border-[#c9a84c]/30 p-8 rounded-lg w-full max-w-md">
              <h3 className="text-[#c9a84c] mb-4 font-serif text-lg">Research Interests</h3>
              <ul className="text-base space-y-2 text-[#8fa8c8]">
                <li>Molecular Electronics & Interfaces</li>
                <li>Charge Transport Systems</li>
                <li>Electrochemical Sensors</li>
                <li>Energy Storage</li>
                <li>Optoelectronics</li>
                <li>Self-sustainable & Wearable Electronics</li>
              </ul>

              <div className="mt-6 border-l-2 border-[#c9a84c] pl-4 text-sm">
                <p className="text-[#c9a84c]">Ongoing</p>
                <p className="text-[#8fa8c8]">CRG (ANRF): Organic Logic in Memory</p>

                <p className="text-[#c9a84c] mt-3">Open Positions</p>
                <p className="text-[#8fa8c8]">Ph.D. fellowships + Internship opportunities</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT PI */}
<section
  id="about"
  className="bg-[#f8f5ef] text-black px-5 md:px-8 py-20"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-12">

    {/* LEFT: IMAGE + LINKS */}
    <div className="bg-white p-5 border rounded-lg flex flex-col items-center">
      <img
        src="/pi.jpg"
        alt="PI"
        className="w-full h-[420px] object-cover object-center rounded-lg shadow-md"
      />

      <div className="mt-4 flex flex-col gap-3 w-full">
        <a
          href="https://scholar.google.com/citations?user=GaleEZ8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center border border-[#c9a84c] text-[#0d1f3c] py-2 rounded hover:bg-[#c9a84c] hover:text-white transition"
        >
          Google Scholar
        </a>

        <a
          href="https://orcid.org/0000-0002-6290-6380"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center border border-[#c9a84c] text-[#0d1f3c] py-2 rounded hover:bg-[#c9a84c] hover:text-white transition"
        >
          ORCiD
        </a>

        <a
          href="https://www.linkedin.com/in/sabyasachi-m-3ba24615/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center border border-[#c9a84c] text-[#0d1f3c] py-2 rounded hover:bg-[#c9a84c] hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>

    {/* RIGHT: CONTENT + METRICS */}
    <div className="grid md:grid-cols-[1fr_280px] gap-10">

      {/* TEXT CONTENT */}
      <div>
        <h2 className="text-4xl font-serif text-[#0d1f3c] mb-3">
          Dr. Sabyasachi Mukhopadhyay
        </h2>

        <p className="text-[#444] mb-5">
          Associate Professor · CRF & I-STEM Coordinator · MSc In-charge
        </p>

        <p className="text-sm text-[#555] leading-7 mb-5">
          Device physicist working at the interface of molecular electronics, organic systems, and hybrid materials.
        </p>

        <p className="text-sm text-[#555] leading-7 mb-10">
          Research integrates molecular transport, biointerfaces, and energy systems to develop next-generation devices.
        </p>

        <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
          Professional Experience
        </h3>

        <div className="border-l-2 border-[#c9a84c] pl-6 space-y-4 mb-10 text-sm">
          <p><strong>2017–Present</strong> · Associate Professor, SRM University AP, India</p>
          <p><strong>2012–2016</strong> · Postdoctoral Fellow, Weizmann Institute of Science, Israel</p>
          <p><strong>2015</strong> · Visiting Researcher, Innovation Lab GmbH, Heidelberg</p>
          <p><strong>2012</strong> · Visiting Research Associate, Saha Institute of Nuclear Physics</p>
          <p><strong>2012</strong> · Senior Research Support Specialist, SUNY Albany</p>
        </div>

        <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
          Awards & Honors
        </h3>

        <ul className="space-y-2 text-sm text-[#555]">
          <li>SERB Early Career Research Award (2019–2022, ₹48.3 Lakhs)</li>
          <li>Postdoctoral Research Fellowship, PBC Program, Israel (2013)</li>
          <li>Best Poster Award, IUMRS–ICA, Bangalore (2013)</li>
          <li>Student Presentation Award, NFOII, Beijing (2010)</li>
          <li>Travel Grants: Volkswagen Foundation, DST, CSIR, JNCASR & Weizmann Institute</li>
        </ul>
      </div>

      {/* METRICS */}
      <div className="mt-6 md:mt-0">
        <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
          Research Metrics
        </h3>

        <div className="bg-white border border-[#c9a84c] rounded-lg shadow-md overflow-hidden">
          <table className="text-sm w-full">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Citations</td>
                <td className="px-4 py-3 text-right">3178</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">h-index</td>
                <td className="px-4 py-3 text-right">15</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">i10-index</td>
                <td className="px-4 py-3 text-right">19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* RESEARCH */}
      <section id="research" className="bg-[#f8f5ef] text-black px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-10">Our Research</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title:"Charge Transport in Highly-Ordered Polymer Systems",
                desc:"Investigating π-domain ordering and orientation in periodically grafted aromatic polyamides, enabling efficient through-space charge transport.",
                tags:["Molecular Electronics","Polymer Physics","J–V Characterisation"]
              },
              {
                title:"Heavy Metal Detection via Ligand-Based Sensors",
                desc:"Designing ligand-based electrochemical sensors for selective Pb²⁺ detection with enhanced oxidation response and ppm-level sensitivity.",
                tags:["Electrochemical Sensing","Cyclic Voltammetry","Environmental"]
              },
              {
                title:"Charge Transport in BSA–Au Nanocluster Junctions",
                desc:"Exploring protein-based hybrid junctions using Au nanoclusters as hopping sites for enhanced bioelectronic conductivity.",
                tags:["Bioelectronics","Nanoclusters","Protein Junctions"]
              },
              {
                title:"Boosting Li-Ion Storage via Mo Substitution",
                desc:"Engineering Li₄WO₅ anodes through Mo substitution to enhance capacity, stability, and energy density.",
                tags:["Li-ion Batteries","Anode Materials","Solid-State"]
              },
              {
                title:"Charge Storage Kinetics in Bi₂O₂S",
                desc:"Studying surface vs diffusion-controlled mechanisms in Bi₂O₂S for high-performance hybrid supercapacitors.",
                tags:["Supercapacitors","Charge Kinetics","Materials"]
              },
              {
                title:"Optoelectronic Devices & Nanoscale Characterisation",
                desc:"Probing morphology and electrical behavior in polymer solar cells using advanced scanning probe techniques.",
                tags:["Optoelectronics","SPM/AFM","Solar Cells"]
              }
            ].map((r,i)=> (
              <div key={i} className="bg-white border-l-2 border-[#c9a84c] p-6 rounded">
                <p className="text-3xl text-gray-300 mb-2">0{i+1}</p>
                <h3 className="font-serif mb-2">{r.title}</h3>
                <p className="text-sm text-[#555] mb-3">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map(tag => (
                    <span key={tag} className="bg-[#0d1f3c] text-white text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* FUNDED PROJECTS */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            <div className="bg-[#0d1f3c] text-white p-6 rounded">
              <p className="text-[#c9a84c] text-xs mb-2">SERB–ANRF · ONGOING 2023–26</p>
              <h3 className="font-serif text-lg mb-2">Organic Memory Beyond Silicon</h3>
              <p className="text-sm text-[#8fa8c8] mb-2">PI · 3 Years · ₹40.8 Lakhs</p>
              <p className="text-sm text-[#c8d4e8]">Developing semiconducting polymers for high-performance organic memory and logic-in-memory device architectures.</p>
            </div>

            <div className="bg-[#0d1f3c] text-white p-6 rounded">
              <p className="text-[#c9a84c] text-xs mb-2">SERB–DST ECR · COMPLETED 2019–22</p>
              <h3 className="font-serif text-lg mb-2">Molecular Junction Transport</h3>
              <p className="text-sm text-[#8fa8c8] mb-2">PI · 4.2 Years · ₹48.8 Lakhs</p>
              <p className="text-sm text-[#c8d4e8]">Systematic study of charge transport using impedance and transition voltage spectroscopy in molecular junctions.</p>
            </div>

          </div>

        </div>
      </section>

{/* TEAM */}
<section id="team" className="bg-[#0d1f3c] px-8 py-20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-serif mb-10 text-center">Our Team</h2>

    {/* TEAM GRID */}
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 items-stretch">
      {[
        {name:"Dr. Ramya Kunchanapalli", role:"Assistant Professor (Adhoc)", email:"ramya.k@srmap.edu.in", img:"/team/ramya.jpg"},
        {name:"Dr. Sarathbavan Murugan", role:"Postdoctoral Fellow", email:"sarathbavan.m@srmap.edu.in", img:"/team/sarath.jpg"},
        {name:"Ramkumar Kaliyaperumal", role:"Research Scholar", email:"ramkumar_k@srmap.edu.in", img:"/team/ramkumar.jpg", pos:"object-[center_top]"},
        {name:"Sneigitha Govindarajan", role:"Research Scholar", email:"sneigitha_g@srmap.edu.in", img:"/team/sneigitha.jpg"},
        {name:"Akintayo A. Ismail", role:"Research Scholar", email:"ismailadegbola_a@srmap.edu.in", img:"/team/akintayo.jpg"},
        {name:"Mukesh Iyyamperumal", role:"Research Scholar", email:"mukesh_i@srmap.edu.in", img:"/team/mukesh.jpg", pos:"object-[center_20%]"},
        {name:"Raashi D", role:"Research Scholar", email:"raashi_d@srmap.edu.in", img:"/team/raashi.jpg", pos:"object-[center_top]"},
        {name:"Suryakanta Sahoo", role:"JRF", email:"suryakanta.s@srmap.edu.in", img:"/team/suryakanta.jpg", pos:"object-[center_15%]"},
        {name:"Mohd Ayan Anwar", role:"Research Scholar", email:"mohdayan_anwar@srmap.edu.in", img:"/team/ayan.jpg"},
        {name:"Priyanka Khachariya", role:"Research Scholar", email:"priyanka_khachariya@srmap.edu.in", img:"/team/priyanka.jpg"}
      ].map(member => (
        <div key={member.name} className="relative group bg-[#111f3d] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

          <img
            src={member.img}
            alt={member.name}
            className={`w-full h-64 object-cover ${member.pos || 'object-center'} group-hover:scale-110 transition duration-500 ease-out`}
            onError={(e)=>{e.currentTarget.src='/team/placeholder.jpg'}}
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 
            bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/90 to-transparent 
            opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">

            <h3 className="font-serif text-lg tracking-wide mb-1">
              {member.name}
            </h3>

            <p className="text-xs uppercase tracking-wider text-[#c9a84c] mb-1">
              {member.role}
            </p>

            <p className="text-xs text-[#8fa8c8]">
              {member.email}
            </p>

          </div>
        </div>
      ))}
    </div>

    {/* ALUMNI */}
<div className="mt-16">
  <h3 className="text-2xl font-serif mb-8 text-center text-[#c9a84c]">
    Alumni
  </h3>

  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 items-stretch">
    {[
      {
        name: "Dr. Ramya Kunchanapalli",
        role: "Assistant Professor (Adhoc), SRM University AP",
        img: "/team/alumni/ramya.jpg",
        pos: "object-center",
        profile: "https://www.srmap.edu.in/faculty/dr-kunchanapalli-ramya/",
        linkedin: "https://www.linkedin.com/in/ramya-kunchanapalli-b66371137/",
      },
      {
        name: "Dr. Ashwini Nawade",
        role: "Assistant Professor, Parul University",
        img: "/team/alumni/ashwini.jpg",
        pos: "object-[center_20%]",
        profile: "https://scholar.google.com/citations?user=1WPNcDMAAAAJ&hl=en",
        linkedin: "https://www.linkedin.com/in/ashwini-nawade-527801108/",
      },
    ].map((member) => (
      <div
        key={member.name}
        className="relative group bg-[#111f3d] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      >
        <img
          src={member.img}
          alt={member.name}
          className={`w-full h-64 object-cover ${member.pos || 'object-center'} ${
            member.pos || "object-center"
          } group-hover:scale-110 transition duration-500 ease-out`}
          onError={(e) => {
            e.currentTarget.src = "/team/placeholder.jpg";
          }}
        />

        {/* HOVER OVERLAY */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 
          bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/90 to-transparent 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300"
        >
          <h3 className="font-serif text-lg tracking-wide mb-1">
            {member.name}
          </h3>

          <p className="text-xs uppercase tracking-wider text-[#c9a84c] mb-2">
            {member.role}
          </p>

          <div className="flex gap-2">
            <a
              href={member.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border px-2 py-1 rounded hover:bg-[#c9a84c] hover:text-black transition"
            >
              Profile
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border px-2 py-1 rounded hover:bg-[#c9a84c] hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  </div>
</section>

      {/* FACILITIES */}
      <section id="facilities" className="bg-[#f8f5ef] text-black px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 text-center">Facilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name:"Probe Station", img:"/facilities/probe.jpg"},
              {name:"Source Measure Unit (SMU)", img:"/facilities/smu.jpg"},
              {name:"Spin Coater", img:"/facilities/spin.jpg", pos:"object-[center_30%]"},
              {name:"PVD System (Thermal & Sputtering)", img:"/facilities/pvd.jpg", pos:"object-cover object-[center_20%]"},
              {name:"Photodetector Setup", img:"/facilities/photo.jpg"},
              {name:"Ellipsometry", img:"/facilities/ellipsometry.jpg"}
            ].map(f => (
              <div key={f.name} className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
                <img src={f.img} className={`w-full h-52 object-cover ${f.pos || 'object-center'} group-hover:scale-105 transition duration-300`} onError={(e)=>{e.currentTarget.src='/facilities/placeholder.jpg'}} />
                <div className="p-4">
                  <p className="font-serif text-[#0d1f3c]">{f.name}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COLLABORATORS */}
      <section id="collaborators" className="bg-[#f8f5ef] text-black px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-10 text-center">Collaborators</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name:"Prof. Mordechai Sheves", inst:"Weizmann Institute", img:"/collaborators/sheves.jpg", link:"https://www.weizmann.ac.il/Organic_Chemistry/Sheves/home"},
              {name:"Prof. David Cahen", inst:"Weizmann Institute", img:"/collaborators/cahen.jpg", link:"https://www.weizmann.ac.il/MCMS/Cahen/home", pos:"object-cover object-[center_20%]"},
              {name:"Prof. Raj Kumar Roy", inst:"IISER Mohali", img:"/collaborators/roy.jpg", link:"https://www.iisermohali.ac.in/faculty/dcs/raj", pos:"object-[center_top]"},
              {name:"Dr. Sandipan Halder", inst:"VNIT Nagpur", img:"/collaborators/halder.jpg", link:"https://vnit.ac.in/basic_science/chemistry/dr-sandipan-halder/", pos:"object-[center_top]"},
              {name:"Dr. Priyadip Das", inst:"SRMIST", img:"/collaborators/das.jpg", link:"https://www.srmist.edu.in/faculty/dr-priyadip-das/", pos:"object-cover object-[center_20%]"},
              {name:"Dr. Sabyasachi Chakrabortty", inst:"SRM AP", img:"/collaborators/chakrabortty.jpg", link:"https://www.srmap.edu.in/faculty/dr-sabyasachi-chakrabortty/"},
              {name:"Dr. Mahesh Ravva", inst:"SRM AP", img:"/collaborators/ravva.jpg", link:"https://www.srmap.edu.in/faculty/dr-mahesh-kumar-ravva/", pos:"object-[center_25%]"},
              {name:"Dr. Kammatham Narayanaswamy", inst:"SRM AP", img:"/collaborators/samy.jpg", link:"https://www.srmap.edu.in/faculty/dr-kamatham-narayanaswamy/", pos:"object-[center_30%]"}
            ].map(c => (
              <div key={c.name} className="relative group bg-white rounded-lg overflow-hidden shadow">
                <img src={c.img} className={`w-full h-52 object-cover ${c.pos || 'object-center'} group-hover:scale-105 transition duration-300`} onError={(e)=>{e.currentTarget.src='/collaborators/placeholder.jpg'}} />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4 text-white">
                  <p className="text-sm text-[#c9a84c]">{c.inst}</p>
                  <h3 className="font-serif">{c.name}</h3>
                  <a href={c.link} target="_blank" className="mt-2 text-xs underline">View Profile</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <PublicationsSection />
      {/* CAREERS */}
<section id="careers" className="scroll-mt-24 bg-[#f8f5ef] text-black px-8 py-20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-serif mb-10 text-center text-[#0d1f3c]">
      Join the Lab
    </h2>

    {/* TOP GRID */}
    <div className="grid md:grid-cols-[120px_1fr_120px] gap-10 items-start">

      {/* LEFT LOGO */}
      <div className="hidden md:flex justify-center">
        <img src="/dplogo.png" alt="Device Physics Lab" className="w-20 opacity-80" />
      </div>

      {/* MAIN CONTENT */}
      <div>

        <p className="text-[#444] leading-7 mb-6">
          We are building a research group at the intersection of organic electronics, device physics, and functional materials. 
          If your interests don’t fit neatly into one box, you’ll fit in here.
        </p>

        <p className="text-[#444] leading-7 mb-10">
          Our work spans charge transport, optoelectronic devices, molecular design, and thin-film engineering, 
          with a strong link between experiment and theory. We welcome researchers from physics, chemistry, materials science, 
          electrical engineering, and related interdisciplinary backgrounds.
        </p>

        {/* TWO COLUMN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* WHAT YOU’LL DO */}
          <div>
            <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
              What you’ll do here
            </h3>
            <ul className="space-y-2 text-sm text-[#555]">
              <li>Design and study next-generation organic and hybrid electronic devices</li>
              <li>Work on real experimental systems exploring fabrication, characterization, and analysis</li>
              <li>Explore structure–property relationships using both lab and computational approaches</li>
              <li>Contribute to publishable research and collaborative projects</li>
              <li>Build skills for academia, semiconductor R&D, and deep-tech startups</li>
            </ul>
          </div>

          {/* WHAT YOU’LL LEARN */}
          <div>
            <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
              What you’ll learn
            </h3>
            <ul className="space-y-2 text-sm text-[#555]">
              <li>Device fabrication and electrical characterization (I–V, photoresponse)</li>
              <li>Charge transport mechanisms (SCLC, hopping, interface physics)</li>
              <li>Thin-film processing techniques and materials engineering</li>
              <li>Scientific writing, publishing, and research communication</li>
              <li>How to think like a device physicist</li>
            </ul>
          </div>

        </div>

        {/* POSITIONS */}
        <div>
          <h3 className="font-serif text-xl text-[#0d1f3c] mb-6">
            Available Positions
          </h3>

          <div className="space-y-8">

            {/* PhD */}
            <div className="bg-white border border-[#c9a84c] rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">PhD Positions</h4>

              <p className="text-sm text-[#555] mb-4">
                University-funded fellowships are available for motivated candidates interested in organic electronics 
                and device physics (both experimental and theoretical).
              </p>

              <a
                href="https://applications.srmap.edu.in/ph-d-applicationform-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a84c] text-black px-5 py-2 rounded hover:opacity-90 transition"
              >
                Apply Now
              </a>
            </div>

            {/* Internship */}
            <div className="bg-white border border-[#c9a84c] rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Research Interns (UG/PG Students)</h4>

              <p className="text-sm text-[#555] mb-4">
                We offer internships for motivated students to gain hands-on experience in experimental device physics and materials research. 
                Interns contribute to fabrication, measurements, data analysis, and research-driven problem solving.
              </p>

              <p className="text-sm text-[#555] mb-4">
                Students from physics, chemistry, materials science, nanoscience, electronics, and related fields are encouraged to apply.
              </p>

              <a
                href="mailto:sabyasachi.m@srmap.edu.in"
                className="inline-block border border-[#c9a84c] px-5 py-2 rounded hover:bg-[#c9a84c] hover:text-black transition"
              >
                Email CV
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* RIGHT LOGO */}
      <div className="hidden md:flex justify-center">
        <img src="/srmaplogo.png" alt="SRM University AP" className="w-20 opacity-80" />
      </div>

    </div>

  </div>
</section>

     {/* CONTACT */}
<section id="contact" className="scroll-mt-24 bg-[#0d1f3c] text-white px-8 py-20">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-serif mb-12 text-center">
      Contact
    </h2>

    {/* CONTACT + MAP */}
    <div className="grid md:grid-cols-2 gap-8 items-start mb-16">

      {/* LEFT: CONTACT */}
      <div>
        <h3 className="text-xl font-serif mb-4 text-[#c9a84c]">
          Get in Touch
        </h3>

        <p className="text-sm text-gray-300 mb-4">
          JC-312, Device Physics Lab<br />
          JC Bose Building<br />
          SRM University AP<br />
          Amaravati<br />
          Andhra Pradesh - 522 240, India
        </p>

        <p className="text-sm text-gray-300 mb-4">
          Email: sabyasachi.m@srmap.edu.in
        </p>

        <a
          href="mailto:sabyasachi.m@srmap.edu.in"
          className="inline-block bg-[#c9a84c] text-black px-5 py-2 rounded hover:opacity-90 transition"
        >
          Email Us
        </a>
      </div>

      {/* RIGHT: MAP (smaller + aligned) */}
      <div className="w-full h-[240px] rounded-lg overflow-hidden border border-[#c9a84c]">
        <iframe
          src="https://www.google.com/maps?q=SRM%20University%20AP&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>

    {/* FUNDING */}
    <div className="mb-14">
      <h3 className="text-xl font-serif mb-6 text-center text-[#c9a84c]">
        Funding Agencies
      </h3>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8 items-center">
        {[
          "/funding/anrf.png",
          "/funding/gita.png",
          "/funding/serb.png",
          "/funding/srm.png",
        ].map((logo, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={logo}
              alt="funding"
              className="h-14 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>

    {/* COLLABORATORS */}
    <div>
      <h3 className="text-xl font-serif mb-6 text-center text-[#c9a84c]">
        Collaborators
      </h3>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8 items-center">
        {[
          "/collablogo/weiz.png",
          "/collablogo/iiser.png",
          "/collablogo/vnit.png",
          "/collablogo/srmist.png",
        ].map((logo, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={logo}
              alt="collaborator"
              className="h-14 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </main>
  );
}
