import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title:string
    description:string
    type:string
    capacity:string
    price:number
}

const ProductListItem = (props: Props) => {
  return (<Card variant='outlined' className='product'>
    <CardContent>
        <h4 className='product-title'>{props.title}</h4>
        <div className='product-description'>{props.description}</div>
        <div className='product-features'>Type: {props.type}</div>
        <div className='product-features'>Capacity: {props.capacity}Gb</div>
        <div className='product-price'>Price: <strong>${props.price}</strong> </div>

        <CardActions className='btns-wrap'>
            <Button variant='outlined'>Add to cart</Button>
        </CardActions>
    </CardContent>
  </Card>
  )
}
export default ProductListItem