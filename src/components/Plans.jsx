import styles from "./Plans.module.css"

export function Plans(){
  return(
    <div className={styles.content}>
        <h1>Nossos Planos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>

      <div className={styles.modal}>
            <div className={styles.container}>
                <strong>Bronze</strong>

                <p><span>R$</span>28<small>/mês</small></p>

                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</h3>

                <button>Assinar</button>
            </div>
            <div className={styles.containerModal}>
                <strong>Prata</strong>

                <h2>Preferido</h2>

              <p><span>R$</span>57<small>/mês</small></p>

              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</h3>

              <button>Assinar</button>
            </div>
            <div className={styles.container}>
              <strong>Ouro</strong>

              <p><span>R$</span>94<small>/mês</small></p>

              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</h3>

              <button>Assinar</button>
            </div>
      </div>
        
    </div>
  )
}