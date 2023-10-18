import icon from '~/assets/react-icon.svg'

const Item = () => {
  return (
    <div className="card">
        <div className="card-body">
            <img src={icon} alt="item-project" />
            <p>LOREM INPSUM</p>
        </div>
    </div>
  )
}

export default Item