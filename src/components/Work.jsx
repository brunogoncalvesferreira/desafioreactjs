import styles from './Work.module.css'

import image1 from '../assets/profile.svg'
import image2 from '../assets/security.svg'
import image3 from '../assets/emoji.svg'

export function Work(){
  return(
    <div id='function' className={styles.work}>

      <h1>Como Funciona</h1>

      <div className={styles.contentWork}>
            <div>
                <img src={image1} />
                <strong>Crie conexões</strong>
                <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
           <div>
                <img src={image2} />
                <strong>100% gratuito</strong>
                <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
            <div>
                <img src={image3} />
                <strong>Compartilhamento</strong>
                <p>Lorem ipsum dolor sit amet, consecteteu.</p>
            </div>
      </div>



    </div>
  )
}