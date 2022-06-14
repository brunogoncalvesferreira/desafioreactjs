import styles from './Presentation.module.css'

import image from '../assets/image.svg'

export function Presentation(){
  return(
    <div className={styles.contentBox}>

      <div className={styles.info}>
          <h1>Rachi, <br /> é tudo que você precisa em um só lugar.</h1>

          <button type='submit'>Cadastrar-se</button>
      </div>

      <img src={image}/>

    </div>
  )
}