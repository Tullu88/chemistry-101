import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../../styles/Home.module.css'

const NavLink = ({href, text, target}) => {
  return (
      <div className={styles.navLink}>
          <Link href={href}>
              <a target={target}>{text}</a>
          </Link>
      </div>
  )
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
};

export default NavLink;