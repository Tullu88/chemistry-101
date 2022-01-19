import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../../styles/elementSquare.module.css'

const ElementSquare = ({Atomic, Symbol, Name, Weight, target}) => {
  return (
      <div className={styles.container}>
         <b>{Atomic}</b>
         <abbr>{Symbol}</abbr>
         <em>{Name}</em>
         <data>{Weight}</data> 
      </div>
  )
}

ElementSquare.propTypes = {
    Atomic: PropTypes.string.isRequired,
    Symbol: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Weight: PropTypes.string.isRequired,
    Target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
};

export default ElementSquare;