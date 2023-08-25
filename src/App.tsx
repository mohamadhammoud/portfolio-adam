import './App.css';
import Introduction from './components/templates/Introduction';
import Projects from './components/templates/Projects';
import Resume from './components/templates/Resume';
import Services from './components/templates/Services';
import CallToAction from './components/organisms/CallToAction';
import SocialLinks from './components/organisms/SocialLinks';

import Footer from './components/organisms/Footer';

function App() {
  return (
    <div className="App">
      {/* <!-- Blockchain-Description Start --> */}
      <Introduction />
      {/* <!-- Blockchain-Description End --> */}

      {/* <!-- Social Link --> */}
      <SocialLinks />
      {/* <!-- Social Link End --> */}

      {/* <!-- Services --> */}
      <Services />
      {/* <!-- Services End --> */}

      {/* <!-- Resume --> */}
      <Resume />
      {/* <!-- Resume End -->  */}

      {/* <!-- Grid Masonry --> */}
      <Projects />
      {/* <!-- Grid Masonry End --> */}

      {/* <!-- CTA  --> */}
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
