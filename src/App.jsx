import styles from "./App.module.css"
import "./global.css"

import { Header } from "./components/Header"
import { Presentation } from "./components/Presentation"
import { Work } from "./components/Work"
import { AppStore } from "./components/Appstore"
import { Plans } from "./components/Plans"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"


export function App() {
  
  return (
      <div>
         <Header/>
              <main>
         <Presentation/>
         <Work/>
         <AppStore/>
         <Plans/>
         <Contact/>
         <Footer/>

              </main>
       
      </div>

  )
}

