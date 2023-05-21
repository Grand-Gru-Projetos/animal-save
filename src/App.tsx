
import './App.css'
import { Banner } from './Components/Banner'
import { Header } from './Components/Header'
import { ProjectsSection } from './Components/ProjectsSection'
import { ContentServices } from './Components/ServicesTitle'
import { BeProtector } from './Components/BeProtector'
import { Footer } from './Components/Footer'
import { PartnerSection } from './Components/Partner'


function App() {


  return (
    <>
      <Header />
      <Banner />
      <ContentServices />
      <ProjectsSection />
      <BeProtector />
      <PartnerSection/>
      <Footer />



    </>
  )
}

export default App
