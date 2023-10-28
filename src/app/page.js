import styles from './page.module.css';
import Header from '@/sections/header/Header';
import Banner from '@/sections/banner/Banner';
import Skills from '@/sections/skills/Skills';
import Formacao from '@/sections/formacao/Formacao';
import Portifolio from '@/sections/portifolio/Portifolio';
import Footer from '@/sections/footer/Footer';

export default function Home() {
  return (
    <main className={styles.Main}>
      <Header />
      <Banner />
      <Skills />
      <Formacao />
      <Portifolio />
      <Footer />
    </main>
  )
}
