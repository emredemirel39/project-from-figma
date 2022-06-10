//Icons
import fbIcon from "../../assets/icons/Facebook.png";
import twIcon from "../../assets/icons/Twitter.png";
import lnkIcon from "../../assets/icons/Linkedin.png";
import igIcon from "../../assets/icons/Instagram.png";

//styles
import styles from './IconBox.module.scss';

const IconBox = () => {
  return (
    <div className={styles.iconBox}>
        <img src={fbIcon} alt="social-icon" />
        <img src={twIcon} alt="social-icon" />
        <img src={lnkIcon} alt="social-icon" />
        <img src={igIcon} alt="social-icon" />
    </div>
  )
}

export default IconBox;