import styles from './Appstore.module.css'
import notification from '../assets/notification.svg'
import google from '../assets/googleplay.svg'
import apple from '../assets/apple.svg'

export function AppStore(){
  return (
    <div className={styles.content}>
        <div className={styles.contentText}>
            <h1>Baixe nosso app para desfrutar mais!</h1>
            <p>Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>

            <div className="contentButton">
              <a href=""><img src={google} /></a>
              <a href=""><img src={apple} /></a>
            </div>
        </div>

        <div className={styles.contentImage}>
          <img src={notification} />
        </div>
    </div>
  )
}