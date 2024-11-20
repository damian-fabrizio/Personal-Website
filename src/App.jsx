import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectDemo from "./components/ProjectDemo";
import Contact from "./components/Contact";
import './index.css'; // Adjust the path as necessary
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed inset-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
    </div>
    <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectDemo />
      <Contact />
    </div>
    </div>
  )
}

export default App
