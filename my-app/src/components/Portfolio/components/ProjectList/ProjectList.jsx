import styles from './styles.module.css';

export const ProjectList = ({projects}) => {
  return (
    <div className={styles.project_list}>
      {projects.map(({img, id}) => (
        <img key={id} src={img} alt={`image${id}`} />
      ))}
    </div>
  )
}