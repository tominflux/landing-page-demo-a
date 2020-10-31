import React from 'react'
import Header from './header'
import CtaFooter from './sections/ctaFooter'
import HowItWorksSection from './sections/howItWorks'
import KeyFeaturesSection from './sections/keyFeatures'
import LandingSection from './sections/landing'
import UniqueSection from './sections/unique'

const App = () => (<>
    <Header />
    <LandingSection />
    <KeyFeaturesSection />
    <UniqueSection />
    <HowItWorksSection />
    <CtaFooter />
</>)

export default App