import styles from './page.module.css';
import Header from '@/sections/header/Header';
import Banner from '@/sections/banner/Banner';
import Skills from '@/sections/skills/Skills';

export default function Home() {
  return (
    <main className={styles.Main}>
      <Header />
      <Banner />
      <Skills />
      
    </main>
  )
}
