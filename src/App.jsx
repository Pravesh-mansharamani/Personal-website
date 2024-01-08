import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
const App = () => { 
    return (
      <main className='relative'>
        <Navbar />
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>
        <section className='padding'>
        <Work />
      </section>

      </main>
    )
}

export default App;