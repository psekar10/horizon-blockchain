import Head from 'next/head';
// JS Components
import Contact from '../components/Contact';
import DeveloperSDK from '../components/DeveloperSDK';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <DeveloperSDK />
      <Contact />
    </div>
  )
}
