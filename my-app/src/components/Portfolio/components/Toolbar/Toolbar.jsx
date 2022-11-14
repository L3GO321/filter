import styles from './styles.module.css';

export const Toolbar  = (props) => {
  const {filters, selected, onSelectedFilter} = props

  const getItemClassname = (value) => {
    return selected === value ? 
    [styles.toolbar_item, styles.toolbar_item__cheked].join(' ') :
    styles.toolbar_item
  }

  return (
    <div className={styles.toolbar}>
      {
        filters.map((filter, index) => ( 
          <div key={index}>
            <input
            className={styles.input_radio} 
            type={'radio'} 
            id={filter} 
            name={'filter'} 
            value={filter} 
            checked={selected === filter}
            onChange={(e) => onSelectedFilter(e.target.value)}
            />
            <label htmlFor={filter} className={getItemClassname(filter)}>{filter}</label>
          </div>
        ))
      }
    </div>
  )
}