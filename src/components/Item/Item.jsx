import { Link } from 'react-router-dom'


const Item = ({item}) => {

  return (
    <Link to={"/item/" + item.id} className="w25-desktop">
      <div className='card productItem'>
          <img src={item?.imageUrl} className='card-img-top' alt={item?.title} />
          <div className="card-body text-center">
              <h5 className="card-title">{item?.title}</h5>
              <p className="cart-text">${item?.price}</p>
          </div>
      </div>
    </Link>
  )
}

export default Item