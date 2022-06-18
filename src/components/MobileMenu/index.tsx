import Navbar from '../Navbar'
import styles from './MobileMenu.module.scss';

interface IMobileMenuProps {
  mobileMenu: boolean,
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC <IMobileMenuProps> = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={`${styles.mobileMenuContainer}`}>
        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  )
}

export default MobileMenu