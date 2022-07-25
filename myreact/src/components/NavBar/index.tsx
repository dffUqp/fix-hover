import { useShoppingCart } from '../../context/ShoppingCartContext';
import SearchBlock from '../InputBlock';
import Button from '../UI/button/Button';
import styles from './NavBar.module.scss';

function Navbar() {
  const { openCart } = useShoppingCart();

  return (
    <nav className={styles.nav}>
      <img src="images/logo.png" alt="" />

      <SearchBlock />

      <div className={styles.btns}>
        <button className={styles.btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M13.9143 11.9312C13.6196 11.2331 13.1919 10.5989 12.655 10.0641C12.1197 9.52767 11.4856 9.10001 10.7878 8.80469C10.7815 8.80156 10.7753 8.8 10.769 8.79688C11.7425 8.09375 12.3753 6.94844 12.3753 5.65625C12.3753 3.51562 10.6409 1.78125 8.50028 1.78125C6.35966 1.78125 4.62528 3.51562 4.62528 5.65625C4.62528 6.94844 5.2581 8.09375 6.23153 8.79844C6.22528 8.80156 6.21903 8.80312 6.21278 8.80625C5.51278 9.10156 4.88466 9.525 4.3456 10.0656C3.8092 10.6009 3.38154 11.235 3.08622 11.9328C2.7961 12.616 2.63963 13.3485 2.62528 14.0906C2.62487 14.1073 2.62779 14.1239 2.63389 14.1394C2.63998 14.1549 2.64912 14.1691 2.66077 14.181C2.67242 14.193 2.68634 14.2025 2.70171 14.2089C2.71709 14.2154 2.7336 14.2188 2.75028 14.2188H3.68778C3.75653 14.2188 3.81122 14.1641 3.81278 14.0969C3.84403 12.8906 4.32841 11.7609 5.18466 10.9047C6.0706 10.0188 7.24716 9.53125 8.50028 9.53125C9.75341 9.53125 10.93 10.0188 11.8159 10.9047C12.6722 11.7609 13.1565 12.8906 13.1878 14.0969C13.1893 14.1656 13.244 14.2188 13.3128 14.2188H14.2503C14.267 14.2188 14.2835 14.2154 14.2989 14.2089C14.3142 14.2025 14.3281 14.193 14.3398 14.181C14.3514 14.1691 14.3606 14.1549 14.3667 14.1394C14.3728 14.1239 14.3757 14.1073 14.3753 14.0906C14.3597 13.3437 14.205 12.6172 13.9143 11.9312V11.9312ZM8.50028 8.34375C7.7831 8.34375 7.1081 8.06406 6.60028 7.55625C6.09247 7.04844 5.81278 6.37344 5.81278 5.65625C5.81278 4.93906 6.09247 4.26406 6.60028 3.75625C7.1081 3.24844 7.7831 2.96875 8.50028 2.96875C9.21747 2.96875 9.89247 3.24844 10.4003 3.75625C10.9081 4.26406 11.1878 4.93906 11.1878 5.65625C11.1878 6.37344 10.9081 7.04844 10.4003 7.55625C9.89247 8.06406 9.21747 8.34375 8.50028 8.34375Z"
              fill="white"
            />
          </svg>
          Login
        </button>
        <Button color="white" onClick={openCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.4202 10.9672H5.11555L5.58274 10.0156L13.3452 10.0016C13.6077 10.0016 13.8327 9.81406 13.8796 9.55469L14.9546 3.5375C14.9827 3.37969 14.9406 3.21719 14.8374 3.09375C14.7865 3.033 14.7229 2.98407 14.6511 2.95034C14.5793 2.91661 14.5011 2.8989 14.4218 2.89844L4.5468 2.86562L4.46243 2.46875C4.4093 2.21562 4.18118 2.03125 3.9218 2.03125H1.50774C1.36146 2.03125 1.22116 2.08936 1.11773 2.1928C1.01429 2.29624 0.956177 2.43653 0.956177 2.58281C0.956177 2.7291 1.01429 2.86939 1.11773 2.97283C1.22116 3.07626 1.36146 3.13438 1.50774 3.13438H3.47493L3.84368 4.8875L4.75149 9.28281L3.58274 11.1906C3.52204 11.2725 3.48549 11.3698 3.4772 11.4714C3.46892 11.573 3.48924 11.675 3.53586 11.7656C3.62961 11.9516 3.81868 12.0688 4.02805 12.0688H5.0093C4.80011 12.3466 4.68712 12.685 4.68743 13.0328C4.68743 13.9172 5.40618 14.6359 6.29055 14.6359C7.17493 14.6359 7.89368 13.9172 7.89368 13.0328C7.89368 12.6844 7.77805 12.3453 7.5718 12.0688H10.089C9.8798 12.3466 9.76681 12.685 9.76711 13.0328C9.76711 13.9172 10.4859 14.6359 11.3702 14.6359C12.2546 14.6359 12.9734 13.9172 12.9734 13.0328C12.9734 12.6844 12.8577 12.3453 12.6515 12.0688H14.4218C14.7249 12.0688 14.9734 11.8219 14.9734 11.5172C14.9725 11.3711 14.9138 11.2312 14.8102 11.1282C14.7065 11.0251 14.5664 10.9673 14.4202 10.9672V10.9672ZM4.77649 3.95312L13.7734 3.98281L12.8921 8.91719L5.82493 8.92969L4.77649 3.95312ZM6.29055 13.5266C6.01868 13.5266 5.7968 13.3047 5.7968 13.0328C5.7968 12.7609 6.01868 12.5391 6.29055 12.5391C6.56243 12.5391 6.7843 12.7609 6.7843 13.0328C6.7843 13.1638 6.73228 13.2894 6.63969 13.3819C6.54709 13.4745 6.4215 13.5266 6.29055 13.5266V13.5266ZM11.3702 13.5266C11.0984 13.5266 10.8765 13.3047 10.8765 13.0328C10.8765 12.7609 11.0984 12.5391 11.3702 12.5391C11.6421 12.5391 11.864 12.7609 11.864 13.0328C11.864 13.1638 11.812 13.2894 11.7194 13.3819C11.6268 13.4745 11.5012 13.5266 11.3702 13.5266V13.5266Z"
              fill="#8C8C8C"
            />
          </svg>
          Cart
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
