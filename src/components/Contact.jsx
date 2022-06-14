import styles from './Contact.module.css'

export function Contact(){
  return (
    
    <div className={styles.container}>  
          <h1>Contato</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>

          <div className={styles.containerInput}>
            <input type="text" placeholder='Seu melhor email...' />

            <button>Enviar</button>
          </div>
    </div>


  )
}