import { About, Contact, Experience, Hero, Tech, Works } from "../components";

const Home = () => (
  <div className="relative z-10">
    <Hero />
    <About />
    <Experience />
    <Tech />
    <Works />
    <Contact />
  </div>
);

export default Home;
