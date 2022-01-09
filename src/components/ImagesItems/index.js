import './index.css'

const ImagesItems = props => {
  const {imageDetails, clickImageItem} = props
  const {id, thumbnailUrl} = imageDetails
  const onClickTabItem = () => {
    clickImageItem(id)
  }
  return (
    <>
      <li className="project-item-container">
        <button id={id} onClick={onClickTabItem}>
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ImagesItems
