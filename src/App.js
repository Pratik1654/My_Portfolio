import { useEffect } from 'react';
import Navbar from './components/nav';
import Skills from './components/skills';
import Projects from './components/Projects';
import snowTree from './components/snow-tree.png';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_17tq8hn',
        'template_3xrox5j',
        e.target,
        'hcrEe0Zfiyx2zzuIm' // OR public key (EmailJS dashboard > Account > API Keys)
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message.');
          console.log(error.text);
        }
      );
  
    e.target.reset();
  };
  useEffect(() => {
    const createSnowflakes = () => {
      const snowflakesContainer = document.createElement('div');
      snowflakesContainer.className = 'snowflakes';
      
      const snowflakeCount = 50;
      
      for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() + 0.5;
        snowflake.style.fontSize = `${size}em`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.top = `${Math.random() * -100}px`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        const blueTint = Math.floor(Math.random() * 55 + 200);
        snowflake.style.color = `rgba(${blueTint}, ${blueTint}, 255, ${Math.random() * 0.5 + 0.5})`;
        
        snowflakesContainer.appendChild(snowflake);
      }
      
      document.body.appendChild(snowflakesContainer);
      
      return () => {
        document.body.removeChild(snowflakesContainer);
      };
    };
    
    createSnowflakes();
  }, []);

  return (
    <div className="snowflake-container">
      <div className="snow-bg">
        <img src={snowTree} alt="Snow Background" className="bg-image" />
      </div>

      <div className="content-overlay">
        <Navbar />

        <section id="name" className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-sky-900 mb-4">
            Hi, I'm <span className="text-sky-700">Pratik</span> ❄️
          </h1>
          <p className="text-xl sm:text-2xl text-sky-800 font-medium mb-2">
            I'm a <span className="text-sky-600 font-semibold">Full Stack Developer</span>
          </p>
          <p className="text-md sm:text-lg text-sky-700 max-w-xl">
          Welcome to my portfolio! I like creating aesthetic and functional websites!
          </p>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col sm:flex-row items-center justify-center px-6 py-12"
        >
          <div className="flex flex-col items-center sm:items-start sm:mr-16 mb-10 sm:mb-0">
            <img
              src="/over2.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 object-cover border-blue-400 shadow-lg"
            />

            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/18ygpAXxVWK7UdzZiYkHC0cAs6-tWOLpu/view?usp=sharing"
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 text-center"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-zine-8030172b5/"
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <a
                href="https://github.com/RyomenSukuna516"
                className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="max-w-xl text-left">
            <p className="uppercase text-sm tracking-widest text-blue-500 mb-2">Introduction</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Overview.</h1>

            <ul className="space-y-4 text-lg text-gray-700 font-medium">
              <li>I'm a full-stack developer with a passion for building innovative and functional web applications!</li>
              <li>Currently pursuing a B.E in IT Engineering, I have a strong foundation in both frontend and backend technologies.
              </li>
              <li>I love integrating cutting-edge tools like Google's Gemini AI to create intelligent, responsive user experiences.
              </li>
              <li>My skills span modern stacks, including Next.js, Node.js, Python/Flask, and databases like MongoDB and MySQL.
              </li>
              <li>Always curious, I enjoy tackling complex problems and bringing creative ideas to life through code.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="min-h-screen py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-gray-500 text-sm tracking-widest mb-2 py-5">WHAT I HAVE STUDIED SO FAR</h3>
    <h2 className="text-5xl font-extrabold text-gray-800 mb-12">Education.</h2>

    <div className="relative border-l-4 border-blue-400 pl-8">

      {/* School */}
      <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center text-blue-500 font-bold shadow-md">
          S
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-1">Schooling </h3>
          <p className="text-sm text-gray-700 mb-1">St. De Paul School, India</p>
          <p className="text-xs text-gray-500">2008 – 2020</p>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
            <li>Completed SSC Board with strong academic foundation</li>
          </ul>
        </div>
      </div>

      {/* Junior College */}
      <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center text-blue-500 font-bold shadow-md">
          Jr
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-1">Junior College</h3>
          <p className="text-sm text-gray-700 mb-1">Fergusson College Pune, India</p>
          <p className="text-xs text-gray-500">2020 – 2022</p>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
          <li>Completed HSC Board with Computer Science as a Bifocal Subject.</li></ul>
        </div>
      </div>

      {/* B.E. */}
      <div className="mb-12 relative">
        <div className="absolute -left-6 top-1 w-10 h-10 bg-white border-4 border-blue-400 rounded-full flex items-center justify-center text-blue-500 font-bold shadow-md">
          U
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-1">B.E in IT Engineering</h3>
          <p className="text-sm text-gray-700 mb-1">SKNCOE Pune, India</p>
          <p className="text-xs text-gray-500">2022 – Present</p>
          <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
            <li>Current CGPA: 9.02/10</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


        <section id="experience" className="min-h-screen py-20 text-gray-800">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-blue-500 uppercase tracking-wide text-lg text-center mb-2">Where I've Worked</h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 pb-3">Experience</h2>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-3xl font-semibold text-blue-600 mb-1">Data Administrator Intern</h4>
              <p className="text-base text-gray-600 mb-2">Amey Engineering</p>
              <p className="text-base text-gray-500 mb-4">November 2024 – May 2024</p>
              <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
              <li>Worked as a Database Administrator Intern at Amey Engineering for 6 months.</li>
<li>Managed and optimized real-time databases for performance and security.</li>
<li>Implemented updates, performed migrations, and resolved technical issues.</li>
<li>Collaborated with internal teams to fulfill data-related requirements.</li>
<li>Gained hands-on experience with database systems and backend operations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <Projects />

        <section className="text-gray-800 px-6 py-16 min-h-screen" id="contact">
          <h2 className="text-4xl font-bold text-center mb-12">Contact.</h2>

          <div className="max-w-5xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <form onSubmit={handleSubmit} className=" p-8 rounded-xl bg-sky-50 shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">Name</label>
                  <input
                  name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">Message</label>
                <textarea
                name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-sky-200 to-sky-500 text-white font-semibold hover:opacity-90 hover:cursor-pointer transition"
                >
                  Send Message 🚀
                </button>
              </div>
            </form>

            <div className="flex justify-center">
              <img
                src="/image-Photoroom.png"
                className="rounded-xl w-full "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;