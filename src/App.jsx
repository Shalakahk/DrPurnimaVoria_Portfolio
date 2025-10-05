import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Mail, Phone, MapPin, ExternalLink, Award, Users, Globe, Calendar, Star, Building, Handshake, Crown, Trophy, Briefcase } from 'lucide-react'
import './App.css'

// Import images
import drVoriaPhoto from './assets/DrV_Red.jpg'
import drVoriaAboutPhoto from './assets/DrVoria_NUICC_Soft_Launch.png'
import drVoriaPhoto1 from './assets/VbBAJ6LxArjU.jpg'
import drVoriaPhoto2 from './assets/u8zPHPooRC89.jpg'
import drVoriaPhoto3 from './assets/zEG3CXZeaXfZ.jpeg'
import drVoriaPortfolio from './assets/DrVoria_Portfolio.png'
import drVoriaEvent1 from './assets/LSk69WyWnCnJ.jpg'
import drVoriaEvent2 from './assets/dP8JmRfwh9lE.jpg'
import drVoriaEvent3 from './assets/Kp8XEqwNoofZ.jpg'
// New Dr. Voria images
import drVoriaAfrica from './assets/DrV_Africa.jpeg'
import drVoriaAmbSupriya from './assets/DrV_Amb_Supriya.jpeg'
import drVoriaAmbKwatra from './assets/DrV_Amb_Kwatra.jpeg'
import drVoriaBiden from './assets/DrV_Biden.jpeg'
import drVoriaBookSigning from './assets/DrV_BookSigning.mp4'
import drVoriaDisit from './assets/DrV_Dixit.jpeg'
import drVoriaHonRSingh from './assets/DrV_HonRSingh.jpeg'
import drVoriaHonRSingh2 from './assets/DrV_HonRSingh2.jpeg'
import drVoriaKamal from './assets/DrV_Kamal.jpeg'
import drVoriaKeynoteEmbassy from './assets/DrV_Keynote_IndianEmbassy.jpeg'
import drVoriaLisaSmith from './assets/DrV_Lisa_Smith.jpeg'
import drVoriaModi from './assets/DrV_Modi.jpeg'
import drVoriaModiInAmerica from './assets/DrV_ModiInAmerica.jpeg'
import drVoriaNancyPelosi from './assets/DrV_NancyPelosi.jpeg'
import drVoriaOfficePresident from './assets/DrV_OfficePresident.jpeg'
import drVoriaSentLisaWellman from './assets/DrV_Sent_LisaWellman.jpeg'
import drVoriaSMBWH from './assets/DrV_SMB_WH.jpeg'
import drVoriaWhitehouseSolo from './assets/DrV_Whitehouse_solo.jpeg'
import drVoriaWithGroup from './assets/DrV_withgroup.jpeg'
import drVoriaWHAsianAmericans from './assets/DrV_WH_AsianAmericans.jpeg'
// NUICC images
import nuiccLogo from './assets/NUICC_Logo.png'
import nuiccLaunch1 from './assets/NUICC_Launch1.png'
import nuiccLaunch2 from './assets/NUICC_Launch2.png'
import nuiccLaunch3 from './assets/NUICC_Launch3.png'
import nuiccLaunch4 from './assets/NUICC_Launch4.png'
import nuiccLaunch5 from './assets/NUICC_Launch5.png'
import nuiccLaunch6 from './assets/NUICC_Launch6.png'
import nuiccModi from './assets/NUICC_Modi.jpeg'
import ausCham from './assets/AUS_Cham.png'
// Existing images
import usIndiaPartnership from './assets/PmN3WfaRKWAd.jpg'
import usIndiaFlags from './assets/rnlJUP7tpqpG.jpg'
import usCapitol from './assets/4H72usG0uh3m.jpg'
import businessHandshake from './assets/bMSPVN2xK10Q.jpg'
import redFort from './assets/ngkhAwRQPnFU.jpg'
import tajMahal from './assets/C9sYIVE8xTRm.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'nuicc', 'achievements', 'gallery', 'media', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const timelineEvents = [
    {
      year: '2004',
      title: 'National Advisor Appointment',
      description: 'Appointed by US Secretary of Commerce Gary Locke as National Advisor to the Minority Business Development Agency',
      icon: <Building className="w-4 h-4" />
    },
    {
      year: '2005',
      title: 'Presidential Commission',
      description: 'Served on President George W. Bush\'s Presidential Commission and Business Club',
      icon: <Star className="w-4 h-4" />
    },
    {
      year: '2005',
      title: 'Wall Street Journal Recognition',
      description: 'Honored as Business Woman of the Year by The Wall Street Journal',
      icon: <Award className="w-4 h-4" />
    },
    {
      year: '2006',
      title: 'Congressional Medal',
      description: 'Awarded Congressional Medal of Distinction for outstanding leadership in business',
      icon: <Award className="w-4 h-4" />
    },
    {
      year: '2004-2014',
      title: 'Commerce Department Service',
      description: 'Served under US Commerce Secretaries across two presidential administrations',
      icon: <Building className="w-4 h-4" />
    },
    {
      year: '2017',
      title: 'Global Entrepreneurship Summit',
      description: 'Invited by US State Department to join Ivanka Trump at GES in Hyderabad, India',
      icon: <Globe className="w-4 h-4" />
    },
    {
      year: '2018',
      title: 'Commonwealth Games Speaker',
      description: 'Opening Speaker for Commonwealth Games in Gold Coast, Australia on Trade and Investments',
      icon: <Globe className="w-4 h-4" />
    },
    {
      year: 'Present',
      title: 'Founder & CEO of National U.S. India Chamber of Commerce',
      description: 'Leading the organization with 9,200+ members worldwide, facilitating bilateral trade and strengthening Indo-US relations',
      icon: <Crown className="w-4 h-4" />
    }
  ]

  const achievements = [
    {
      title: 'Congressional Medal of Distinction',
      year: '2006',
      description: 'For outstanding leadership in business and contributions to the United States economy'
    },
    {
      title: 'Wall Street Journal Business Woman of the Year',
      year: '2005',
      description: 'Recognized for exceptional business leadership and achievements'
    },
    {
      title: 'United Nations SDG-16',
      year: '2023',
      description: 'For achieving Sustainable Development Goal in the United Nations'
    },
    {
      title: 'Ronald Reagan Republican Gold Medal',
      year: '2005',
      description: 'For acumen as a local business leader'
    },
    {
      title: 'Presidential Commission Member',
      year: '2005',
      description: 'Served on President George W. Bush\'s Presidential Commission'
    },
    {
      title: 'National Advisor to MBDA',
      year: '2004-2014',
      description: 'Drove growth and policy-making for 7.8 million minority businesses'
    }
  ]

  const mediaAppearances = [
    'BBC World News London - Climate Change Commentary',
    'Voice of America TV and Radio - Global Women\'s Empowerment',
    'India Today Magazine - NRI Economic Contributions',
    'The Times of India - Business Leadership',
    'The Denver Post - Local Business Impact',
    'The Denver Business Journal - Trade Relations',
    'Colorado Today Television - Community Leadership'
  ]

  const galleryImages = [
    // Photos of the United States
    {
      id: 1,
      src: drVoriaOfficePresident,
      title: 'Office of the President of the United States',
      description: 'Dr. Purnima Voria in front of the Office of the President of the United States',
      category: 'United States'
    },
    {
      id: 2,
      src: drVoriaBiden,
      title: 'Discussion with President Biden',
      description: 'Dr. Purnima Voria discussions on Small U.S. Businesses with His Excellency, U.S. President, Joe Biden, in the East Wing of White House',
      category: 'United States'
    },
    {
      id: 3,
      src: drVoriaKamal,
      title: 'With Vice President Kamala Harris',
      description: 'Dr. Purnima Voria with Her Excellency, Vice President of the United States, Kamala Harris',
      category: 'United States'
    },
    {
      id: 4,
      src: drVoriaWithGroup,
      title: 'White House VIP Visit',
      description: 'Dr. Purnima Voria with V.I.Ps at the White House visit of His Excellency, Prime Minister of India Shri. Narendra Modi\'s State visit with Hon. Joe Biden',
      category: 'United States'
    },
    {
      id: 5,
      src: drVoriaModiInAmerica,
      title: 'Modi State Visit',
      description: 'Dr. Purnima Voria at the White House visit of His Excellency, Prime Minister of India, Shri. Narendra Modi\'s State visit with Hon. President Trump in Washington D.C.',
      category: 'United States'
    },
    {
      id: 6,
      src: drVoriaSentLisaWellman,
      title: 'Capitol Hill Discussions',
      description: 'Dr. Purnima Voria goes to the Capital to discuss Indo-U.S. Relations and Trade Investments with the U.S. Senators and Congressmen',
      category: 'United States'
    },
    {
      id: 7,
      src: drVoriaWHAsianAmericans,
      title: 'Asian Americans Initiative',
      description: 'Dr. Purnima Voria participates in the White House Initiative on Asian Americans and Pacific Islanders',
      category: 'United States'
    },
    {
      id: 8,
      src: drVoriaSMBWH,
      title: 'Small Business White House',
      description: 'Dr. Purnima Voria in the East Wing of the White House with the Hon. President Biden for Small Business Boom and Grant announcement',
      category: 'United States'
    },
    // India Photos
    {
      id: 9,
      src: drVoriaModi,
      title: 'With Prime Minister Modi',
      description: 'Dr. Purnima Voria with His Excellency, Hon. Prime Minister of India, Shri. Narendra Modi at the reception hosted by Indian Embassy in Washington D.C',
      category: 'India'
    },
    {
      id: 10,
      src: drVoriaHonRSingh,
      title: 'With Vice President Shekhawat',
      description: 'Dr. Purnima Voria with H.E. Vice President of India Shri. Bhairon Singh Shekhawat, who encouraged the launch of the National U.S.-India Chamber of Commerce to promote Indo-U.S. Relations and Trade Investments',
      category: 'India'
    },
    {
      id: 11,
      src: drVoriaKeynoteEmbassy,
      title: 'Global Entrepreneurship Summit',
      description: 'Dr. Purnima Voria was invited by the U.S. State Department to join Ivanka Trump at the Global Entrepreneurship Summit (GES) in Hyderabad, India',
      category: 'India'
    },
    {
      id: 12,
      src: drVoriaHonRSingh2,
      title: 'With Speaker Om Birla',
      description: 'Dr. Purnima Voria with India Speaker of Lok Sabha, Hon. Om Birla',
      category: 'India'
    },
    {
      id: 13,
      src: drVoriaDisit,
      title: 'With Finance Minister Sitharaman',
      description: 'Dr. Purnima Voria presented her book to Her Excellency, Minister of Finance and Minister of Corporate Affairs of the Government of India, Smt. Nirmala Sitharaman',
      category: 'India'
    },
    {
      id: 14,
      src: drVoriaAmbKwatra,
      title: 'With Ambassador Kwatra',
      description: 'Dr. Purnima Voria presenting her book on India and Rajasthan to His Excellency, Vinay Mohan Kwatra (India\'s Ambassador to U.S. in Washington D.C)',
      category: 'India'
    },
    // United Nations
    {
      id: 15,
      src: drVoriaAfrica,
      title: 'UN SDG-16 Award',
      description: 'Dr. Purnima Voria received SDG-16 award – Peace, Justice and Strong Institution at the United Nations',
      category: 'United Nations'
    },
    {
      id: 16,
      src: drVoriaPhoto1,
      title: 'World RAKHI Day Launch',
      description: 'Dr. Purnima Voria received SDG-16 award – For launching the "World R.A.K.H.I Day" at the United Nations as a Peace Initiative for promoting Brotherhood and Sisterhood practices across the Globe under the theme "Vasudhaiva Kutumbakan"- The World is One family',
      category: 'United Nations'
    },
    // With World Leaders
    {
      id: 17,
      src: drVoriaPhoto2,
      title: 'Davos World Economic Forum',
      description: 'Dr. Purnima Voria with world leaders at Davos forum',
      category: 'World Leaders'
    },
    {
      id: 18,
      src: drVoriaPhoto3,
      title: 'With WWF Director General',
      description: 'Dr. Purnima Voria with Kirsten Schuijt, the Director General of the World Wide Fund for Nature (WWF) International',
      category: 'World Leaders'
    },
    {
      id: 19,
      src: drVoriaLisaSmith,
      title: 'With Hillary Clinton',
      description: 'Dr. Purnima Voria with Hilary Clinton',
      category: 'World Leaders'
    },
    // Book Launch & Media
    {
      id: 20,
      src: drVoriaPortfolio,
      title: 'Book Launch - Falling in Love with India',
      description: 'Book Launch: Falling in love with India, written by Dr. Purnima Voria',
      category: 'Professional'
    },
    {
      id: 21,
      src: drVoriaAboutPhoto,
      title: 'Book Signing Event',
      description: 'Dr. Purnima Voria, signing "Falling in Love with India" book',
      category: 'Professional'
    },
    {
      id: 22,
      src: drVoriaEvent1,
      title: 'Journey from Home to White House',
      description: '"Falling in love with India" Dr. Voria\'s journey from "Home to the White House"',
      category: 'Professional'
    },
    {
      id: 23,
      src: drVoriaEvent2,
      title: 'Daughter of Jaipur',
      description: 'Dr. Purnima Voria- a daughter of Jaipur, Rajasthan, India, embarks in the United States as a newly wed',
      category: 'Professional'
    },
    {
      id: 24,
      src: drVoriaEvent3,
      title: 'Featured in Divapreneur Magazine',
      description: 'Dr. Purnima Voria featured in Divapreneur Magazine',
      category: 'Professional'
    },
    // Indian Conglomerates
    {
      id: 25,
      src: drVoriaPhoto1,
      title: 'With Mrs. Nita Mukesh Ambani',
      description: 'Dr. Purnima Voria with Mrs. Nita Mukesh Ambani for presenting India to the world in the greatest event of his decade at the Lincoln center',
      category: 'Indian Conglomerates'
    },
    {
      id: 26,
      src: drVoriaPhoto2,
      title: 'With Aditya Vikram Birla',
      description: 'Dr. Purnima Voria with Aditya Vikram Birla, an Indian industrialist and philanthropist',
      category: 'Indian Conglomerates'
    },
    {
      id: 27,
      src: drVoriaPhoto3,
      title: 'With Natarajan Chandrashekar',
      description: 'Dr. Purnima Voria with Natarajan Chandrashekar, an Indian businessman, and the chairman of Tata and Sons and Tata Group',
      category: 'Indian Conglomerates'
    },
    {
      id: 28,
      src: drVoriaEvent1,
      title: 'With Mr. Arvind Krishna',
      description: 'Dr. Purnima Voria with Mr. Arvind Krishna, an Indian American executive and CEO of IBM',
      category: 'Indian Conglomerates'
    }
  ]

  return (
    <div className="min-h-screen hero-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-navy/10 z-50 elegant-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={usIndiaFlags} alt="US India Partnership" className="w-8 h-6 object-cover rounded" />
              <span className="font-display font-bold text-xl text-navy">Dr. Purnima Voria</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'timeline', 'nuicc', 'achievements', 'gallery', 'media', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize smooth-transition font-body ${
                    activeSection === section 
                      ? 'text-navy font-semibold border-b-2 border-gold' 
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  {section === 'nuicc' ? 'NUICC' : section === 'achievements' ? 'Awards & Honors' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                  Dr. Purnima Voria
                </h1>
              <p className="text-xl text-gray-600 font-body leading-relaxed max-w-2xl">
                Founder and CEO of National U.S. India Chamber of Commerce (USA)
              </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-navy hover:bg-navy/90 text-white px-8 py-4 text-lg font-body elegant-shadow-lg hover-lift"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More About Dr. Voria
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-body elegant-shadow-lg hover-lift"
                  onClick={() => document.getElementById('nuicc')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore NUICC
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-white px-8 py-4 text-lg font-body elegant-shadow-lg hover-lift"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={drVoriaPhoto} 
                alt="Dr. Purnima Voria" 
                className="w-80 h-80 object-cover rounded-full mx-auto elegant-shadow-xl"
              />
            </div>
          </div>

          {/* Statistics Strip */}
          <div className="mt-16 py-8 bg-navy text-white stats-strip">
            <div className="flex flex-wrap justify-center items-center gap-12 text-center">
              <div className="flex flex-col items-center space-y-2 stats-item">
                <div className="text-3xl font-display font-bold stats-number">9,200+</div>
                <div className="text-sm font-body opacity-90">NUICC Members Worldwide</div>
              </div>
              <div className="flex flex-col items-center space-y-2 stats-item">
                <div className="text-lg font-body font-semibold stats-number">Global Speaker</div>
                <div className="text-sm font-body opacity-90">UN, Davos, Commonwealth Games</div>
              </div>
              <div className="flex flex-col items-center space-y-2 stats-item">
                <div className="text-lg font-body font-semibold stats-number">U.S. Advisor</div>
                <div className="text-sm font-body opacity-90">Bush and Obama Administrations (2004-2014)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-display font-bold text-navy mb-8">About</h1>
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">Strengthening Indo–US Ties Through Global Leadership</h2>
            <p className="text-xl text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
              Dr. Purnima Voria has dedicated her career to building bridges between nations, fostering international trade relationships, and empowering minority businesses across the globe. As the founder of NUICC, she has created a platform that connects over 9,200 members worldwide, facilitating billions in trade and collaboration between the United States and India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <Card className="p-8 elegant-shadow-lg hover-lift bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold text-gray-900 mb-4">Leadership Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 font-body leading-relaxed mb-4">
                  Recognized by The Wall Street Journal as Business Woman of the Year and recipient of the Congressional Medal of Distinction for her outstanding contributions to global business and diplomacy.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-display font-semibold text-gray-900 mb-2">Key Recognition:</h5>
                  <p className="text-gray-600 font-body">
                    <strong>Business Woman of the Year – The Wall Street Journal</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 elegant-shadow-lg hover-lift bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold text-gray-900 mb-4">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 font-body leading-relaxed">
                  Featured speaker at the World Economic Forum, United Nations, and major international summits, sharing insights on global trade and minority business development.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={drVoriaAboutPhoto} 
                alt="Dr. Purnima Voria at NUICC Event" 
                className="w-full rounded-xl elegant-shadow-lg hover-lift"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h3 className="text-3xl font-display font-bold text-navy mb-6">Executive Bio</h3>
              <p className="text-lg text-gray-600 font-body leading-relaxed">
                Dr. Purnima Voria is the Founder and CEO of the National US India Chamber of Commerce. 
                Ms. Voria was appointed by the US Secretary of Commerce Gary Locke as a National Advisor to 
                the Minority Business Development Agency to drive growth and policy-making for 7.8 million 
                minority businesses in the US, which attributes to a trillion dollar economy of U.S.
              </p>
              
              <p className="text-lg text-gray-600 font-body leading-relaxed">
                She also served US Commerce Secretaries John Bryson, Rebecca Blank, and Penny Pritzker under 
                President George W. Bush and President Barack Obama's administration from 2004-2014. In 2017, 
                Ms. Voria was invited by the US State Department to join Ivanka Trump at the Global 
                Entrepreneurship Summit in Hyderabad, India.
              </p>

              <p className="text-lg text-gray-600 font-body leading-relaxed">
                Dr. Purnima Voria has been strengthening Indo-US international ties and enriching our 
                communities through diverse cultural exchanges and Trade and Investments.
              </p>

              <p className="text-lg text-gray-600 font-body leading-relaxed">
                As an international speaker, Dr. Voria was the keynote speaker at the 2018 Commonwealth 
                Games and has been featured on BBC World News, Voice of America, India Today, Times of 
                India, and more.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-display font-bold text-gray-900 mb-6">Leadership Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center space-x-3 p-4 bg-white rounded-lg elegant-shadow hover-lift text-left border border-gray-200 hover:border-navy transition-colors">
                    <Building className="w-6 h-6 text-navy flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-gray-900">Global Trade Leadership</div>
                      <div className="text-sm text-gray-600">Founder & CEO of NUICC, 9,200+ members</div>
                    </div>
                  </button>
                  
                  <button className="flex items-center space-x-3 p-4 bg-white rounded-lg elegant-shadow hover-lift text-left border border-gray-200 hover:border-navy transition-colors">
                    <Award className="w-6 h-6 text-navy flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-gray-900">U.S. Administrations Advisor</div>
                      <div className="text-sm text-gray-600">Bush and Obama administrations</div>
                    </div>
                  </button>
                  
                  <button className="flex items-center space-x-3 p-4 bg-white rounded-lg elegant-shadow hover-lift text-left border border-gray-200 hover:border-navy transition-colors">
                    <Globe className="w-6 h-6 text-navy flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-gray-900">International Recognition</div>
                      <div className="text-sm text-gray-600">World Economic Forum, UN summits</div>
                    </div>
                  </button>
                  
                  <button className="flex items-center space-x-3 p-4 bg-white rounded-lg elegant-shadow hover-lift text-left border border-gray-200 hover:border-navy transition-colors">
                    <Crown className="w-6 h-6 text-navy flex-shrink-0" />
                    <div>
                      <div className="font-body font-semibold text-gray-900">Community Leadership</div>
                      <div className="text-sm text-gray-600">Ambassador for Peace, Advisory Councils</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-navy mb-6">Career Timeline</h2>
            <p className="text-xl text-navy/70 font-body">
              A journey of leadership, service, and international collaboration
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'} elegant-shadow-lg hover-lift bg-white border-navy/10`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gold/20 rounded-full">
                        {event.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-display text-navy">{event.title}</CardTitle>
                        <Badge variant="secondary" className="bg-gold/20 text-gold font-body">{event.year}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy/70 font-body">{event.description}</p>
                  </CardContent>
                </Card>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-white elegant-shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUICC Section */}
      <section id="nuicc" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">National U.S. India Chamber of Commerce</h2>
            <p className="text-3xl text-gold font-display font-semibold mb-6">"The Right Passage To India"</p>
            <p className="text-xl text-gray-600 font-body max-w-4xl mx-auto">
              Connecting businesses, fostering trade relationships, and building bridges between the United States and India through strategic partnerships and comprehensive business solutions.
            </p>
          </div>

          {/* Membership at a Glance */}
          <div className="mb-16">
            <h3 className="text-4xl font-display font-bold text-gray-900 text-center mb-12">Membership at a Glance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center elegant-shadow-lg hover-lift bg-white">
                <CardContent>
                  <div className="text-4xl font-display font-bold text-navy mb-2">9,200+</div>
                  <div className="text-lg font-body font-semibold text-gray-900 mb-1">Direct Members</div>
                  <div className="text-sm text-gray-600">Across the globe</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center elegant-shadow-lg hover-lift bg-white">
                <CardContent>
                  <div className="text-4xl font-display font-bold text-navy mb-2">50+</div>
                  <div className="text-lg font-body font-semibold text-gray-900 mb-1">Countries</div>
                  <div className="text-sm text-gray-600">Worldwide presence</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center elegant-shadow-lg hover-lift bg-white">
                <CardContent>
                  <div className="text-4xl font-display font-bold text-navy mb-2">$1B+</div>
                  <div className="text-lg font-body font-semibold text-gray-900 mb-1">Trade Volume</div>
                  <div className="text-sm text-gray-600">Facilitated annually</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center elegant-shadow-lg hover-lift bg-white">
                <CardContent>
                  <div className="text-4xl font-display font-bold text-navy mb-2">500+</div>
                  <div className="text-lg font-body font-semibold text-gray-900 mb-1">Fortune 500</div>
                  <div className="text-sm text-gray-600">Company partnerships</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Global Reach */}
          <div className="mb-16">
            <Card className="p-8 elegant-shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold text-gray-900 mb-4 text-center">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-600 font-body text-center leading-relaxed">
                  Our members span across continents, with concentrated presence in major business hubs throughout the United States, India, and Asia-Pacific region.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Industries Represented */}
          <div className="mb-16">
            <h3 className="text-4xl font-display font-bold text-gray-900 text-center mb-12">Industries Represented</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Technology</div>
                <div className="text-sm text-gray-600">Software</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Healthcare</div>
                <div className="text-sm text-gray-600">Pharmaceuticals</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Finance</div>
                <div className="text-sm text-gray-600">Banking</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Aerospace</div>
                <div className="text-sm text-gray-600">Defense</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Energy</div>
                <div className="text-sm text-gray-600">Renewables</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Educational</div>
                <div className="text-sm text-gray-600">Research</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Legal</div>
                <div className="text-sm text-gray-600">Professional Services</div>
              </div>
              <div className="bg-white p-6 rounded-xl elegant-shadow hover-lift text-center">
                <div className="text-lg font-body font-semibold text-gray-900 mb-2">Consumer Goods</div>
                <div className="text-sm text-gray-600">Retail</div>
              </div>
            </div>
          </div>

          {/* Strategic Collaborations */}
          <div className="mb-16">
            <h3 className="text-4xl font-display font-bold text-gray-900 text-center mb-12">Strategic Collaborations</h3>
            <div className="space-y-8">
              <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
                <CardContent>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-3">Government Partnerships</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-900">U.S. Department of Commerce:</strong>
                      <span className="text-gray-600 ml-2">Strategic partnership for trade policy development and business promotion</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Confederation of Indian Industry (CII):</strong>
                      <span className="text-gray-600 ml-2">Joint initiatives for bilateral trade and investment opportunities</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">U.S State Department:</strong>
                      <span className="text-gray-600 ml-2">Delegation partnerships and international summit participation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
                  <CardContent>
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-3">Fortune 500 Corporations</h4>
                    <p className="text-gray-600 font-body">
                      Boeing, IBM, Microsoft, and other leading global enterprises
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
                  <CardContent>
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-3">Indian Enterprises</h4>
                    <p className="text-gray-600 font-body">
                      Infosys, Reliance, Tata Group, and major Indian corporations
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="mb-16">
            <h3 className="text-4xl font-display font-bold text-gray-900 text-center mb-8">Economic Impact</h3>
            <Card className="p-8 elegant-shadow-lg bg-white mb-8">
              <CardContent>
                <p className="text-xl text-gray-600 font-body text-center leading-relaxed mb-8">
                  NUICC has facilitated over $1B in bilateral trade between the United States and India, creating thousands of jobs and fostering innovation across multiple industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">$1B+</div>
                    <div className="text-lg font-body font-semibold text-gray-900">Trade Volume Facilitated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">10,000+</div>
                    <div className="text-lg font-body font-semibold text-gray-900">Jobs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">500+</div>
                    <div className="text-lg font-body font-semibold text-gray-900">Business Partnerships</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-navy mr-3" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 font-body">
                  <li>• Exclusive networking opportunities</li>
                  <li>• Trade mission participation</li>
                  <li>• Business matchmaking services</li>
                  <li>• Market intelligence reports</li>
                  <li>• Government liaison support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-navy mr-3" />
                  Global Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 font-body">
                  <li>• International trade facilitation</li>
                  <li>• Cross-border investment guidance</li>
                  <li>• Cultural exchange programs</li>
                  <li>• Regulatory compliance support</li>
                  <li>• Strategic partnership development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 elegant-shadow-lg hover-lift bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center">
                  <Building className="w-6 h-6 text-navy mr-3" />
                  Industry Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 font-body">
                  <li>• Technology & Innovation</li>
                  <li>• Healthcare & Life Sciences</li>
                  <li>• Financial Services</li>
                  <li>• Manufacturing & Defense</li>
                  <li>• Energy & Sustainability</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* NUICC Launch Gallery */}
          <div className="mt-20">
            <h3 className="text-4xl font-display font-bold text-navy mb-8 text-center">NUICC Launch Events</h3>
            <p className="text-xl text-navy/70 font-body text-center mb-12">
              Highlights from the National US India Chamber of Commerce launch events and milestones
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch1}
                    alt="NUICC Launch Ceremony"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Launch Ceremony</h4>
                  <p className="text-navy/70 font-body">Official NUICC launch ceremony with dignitaries and stakeholders</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch2}
                    alt="Dr. Voria Presentation"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Keynote Presentation</h4>
                  <p className="text-navy/70 font-body">Dr. Voria presenting NUICC vision and mission to attendees</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch3}
                    alt="Media Coverage"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Media Coverage</h4>
                  <p className="text-navy/70 font-body">International media coverage of NUICC launch and initiatives</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch4}
                    alt="Audience Engagement"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Audience Engagement</h4>
                  <p className="text-navy/70 font-body">Engaged audience of business leaders and government officials</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch5}
                    alt="Flag Ceremony"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Flag Ceremony</h4>
                  <p className="text-navy/70 font-body">Ceremonial presentation with US and India flags symbolizing partnership</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={nuiccLaunch6}
                    alt="Virtual Launch Event"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-navy mb-2">Virtual Launch Event</h4>
                  <p className="text-navy/70 font-body">Global virtual launch event connecting US and India participants</p>
                </div>
              </div>
            </div>

            {/* NUICC Logo and Modi Recognition */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <img
                  src={nuiccLogo}
                  alt="NUICC Logo"
                  className="w-full max-w-md mx-auto elegant-shadow-lg rounded-2xl bg-white p-8"
                />
                <h4 className="text-2xl font-display font-bold text-navy mt-6 mb-4">Official NUICC Logo</h4>
                <p className="text-navy/70 font-body">
                  "The Right Passage to India" - Symbolizing the bridge between US and India business communities
                </p>
              </div>
              
              <div className="text-center">
                <img
                  src={nuiccModi}
                  alt="Prime Minister Modi Recognition"
                  className="w-full max-w-md mx-auto elegant-shadow-lg rounded-2xl"
                />
                <h4 className="text-2xl font-display font-bold text-navy mt-6 mb-4">Prime Minister Recognition</h4>
                <p className="text-navy/70 font-body">
                  Recognition from His Excellency Prime Minister Shri Narendra Modi for NUICC's contributions to US-India relations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-navy mb-6">Awards & Honors</h2>
            <p className="text-xl text-navy/70 font-body">
              Honored for exceptional leadership and contributions to international business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="elegant-shadow-lg hover-lift bg-white border-gold/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-8 h-8 text-gold" />
                    <Badge variant="outline" className="border-gold text-gold font-body">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="text-lg font-display text-navy">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70 font-body">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-navy mb-6">Gallery</h2>
            <p className="text-xl text-navy/70 font-body">
              A visual journey through Dr. Voria's distinguished career and leadership
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'United States', 'India', 'United Nations', 'World Leaders', 'Professional', 'Indian Conglomerates'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white border-2 border-navy/20 text-navy hover:bg-navy hover:text-white transition-all duration-300 font-body font-medium elegant-shadow hover-lift"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item group relative overflow-hidden rounded-2xl elegant-shadow-lg hover-lift bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <Badge className="bg-gold text-white font-body text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">{image.title}</h3>
                    <p className="text-sm font-body text-white/90 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Lightbox Trigger */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Archive Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-20">
            <h3 className="text-4xl font-display font-bold text-navy mb-8 text-center">Video Archive</h3>
            <p className="text-xl text-navy/70 font-body text-center mb-12">
              Watch Dr. Voria's interviews, speaking engagements, and media appearances
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">SDTV Interview</h4>
                    <p className="text-sm text-navy/70 px-4">Seattle Desi TV interview with Dr. Purnima Voria, Founder & CEO</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=uoan_Nlw2qo" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">Global Trade Matters</h4>
                    <p className="text-sm text-navy/70 px-4">Why Global Trade Matters More Than Ever for Local Business Growth</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=aJ8u96Z47XY" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">Economic Partnership</h4>
                    <p className="text-sm text-navy/70 px-4">Conversation on Economic partnership between Northwest US and India</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=AmbTbwSQRr8" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">Modi's US Visit</h4>
                    <p className="text-sm text-navy/70 px-4">Dr. Voria talks about Prime Minister Modi's visit to the US</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=nxhHLhYySpU" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">NUICC Interview</h4>
                    <p className="text-sm text-navy/70 px-4">NUICC interview with Cynthia Coffman</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=Ho5F3nvmsQs" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl elegant-shadow-lg hover-lift overflow-hidden">
                <div className="aspect-video bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <ExternalLink className="w-12 h-12 text-navy mx-auto mb-4" />
                    <h4 className="font-display font-bold text-navy mb-2">India Power Talk</h4>
                    <p className="text-sm text-navy/70 px-4">Glimpses of India Power Talk with Dr Purnima Voria</p>
                  </div>
                </div>
                <div className="p-6">
                  <a href="https://www.youtube.com/watch?v=03fbVJEHt44" target="_blank" rel="noopener noreferrer" 
                     className="text-gold hover:text-gold/80 font-body font-medium">
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-navy mb-6">Media & Press</h2>
            <p className="text-xl text-navy/70 font-body">
              Featured across international media and speaking platforms
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-display font-bold text-navy mb-8 text-center">Media Appearances</h3>
              <div className="relative overflow-hidden">
                <div className="flex space-x-6 animate-scroll">
                  {mediaAppearances.map((appearance, index) => (
                    <div key={index} className="flex-shrink-0 w-80 p-6 bg-white rounded-xl elegant-shadow-lg hover-lift border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <ExternalLink className="w-6 h-6 text-navy flex-shrink-0" />
                        <span className="text-navy/80 font-body">{appearance}</span>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {mediaAppearances.map((appearance, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 p-6 bg-white rounded-xl elegant-shadow-lg hover-lift border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <ExternalLink className="w-6 h-6 text-navy flex-shrink-0" />
                        <span className="text-navy/80 font-body">{appearance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-navy mb-8 text-center">Speaking Engagements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Commonwealth Games 2018 - Opening Speaker',
                  'United Nations - Business Summit',
                  'South Korea Business Summit - 15,000 attendees',
                  'World Economic Forum - Davos',
                  'Global CEO Conferences - Multiple countries',
                  'Global Entrepreneurship Summit - Hyderabad'
                ].map((engagement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-gold/10 rounded-xl hover-lift">
                    <Globe className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-navy/80 font-body">{engagement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-navy mb-8 text-center">Testimonials</h3>
              <div className="max-w-4xl mx-auto">
                <div className="relative p-8 bg-gradient-to-br from-gold/10 to-navy/5 rounded-2xl elegant-shadow-lg border-l-4 border-gold">
                  <div className="absolute top-4 left-4">
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                  <blockquote className="text-center">
                    <p className="text-2xl font-display italic text-navy mb-6 leading-relaxed">
                      "Dr. Voria's vision and leadership have been instrumental in strengthening business relationships between our nations and creating opportunities for entrepreneurs worldwide."
                    </p>
                    <footer className="flex items-center justify-center space-x-2">
                      <div className="w-12 h-0.5 bg-gold"></div>
                      <cite className="text-lg font-body font-semibold text-gold not-italic">
                        International Business Leader Magazine
                      </cite>
                      <div className="w-12 h-0.5 bg-gold"></div>
                    </footer>
                  </blockquote>
                  <div className="absolute bottom-4 right-4">
                    <Trophy className="w-8 h-8 text-gold/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold mb-6">Get In Touch</h2>
            <p className="text-3xl font-display font-bold text-gold mb-6">
              "The Right Passage to India"
            </p>
            <p className="text-xl text-white/80 font-body max-w-4xl mx-auto">
              Strengthening Indo-US ties and enriching communities through cultural exchange, business collaboration, and global leadership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-display font-bold mb-8">Contact Information</h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-4">
                    <Building className="w-6 h-6 text-gold" />
                    <span className="font-body text-lg">National US India Chamber of Commerce</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="w-6 h-6 text-gold" />
                    <a href="mailto:purnima@nuicc.org" className="font-body text-lg text-gold hover:text-gold/80 transition-colors">
                      purnima@nuicc.org
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Globe className="w-6 h-6 text-gold" />
                    <a href="https://www.nuicc.org" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-gold hover:text-gold/80 transition-colors">
                      www.nuicc.org
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <ExternalLink className="w-6 h-6 text-gold" />
                    <a href="https://www.linkedin.com/in/purnimavoria/" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-gold hover:text-gold/80 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-display font-bold mb-8">Professional Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="text-white/80 font-body text-lg">• International Business Consulting</div>
                  <div className="text-white/80 font-body text-lg">• US-India Trade Facilitation</div>
                  <div className="text-white/80 font-body text-lg">• Cultural Training & Workshops</div>
                  <div className="text-white/80 font-body text-lg">• Speaking Engagements</div>
                  <div className="text-white/80 font-body text-lg">• Business Partnership Development</div>
                  <div className="text-white/80 font-body text-lg">• Global Leadership Consulting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy/90 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/80 font-body text-lg">
              © 2024 Dr. Purnima Voria | National US India Chamber of Commerce. All rights reserved.
            </p>
            <p className="text-gold font-display font-medium mt-4 text-lg">
              Strengthening Indo-US International Ties Through Trade and Cultural Exchange
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

