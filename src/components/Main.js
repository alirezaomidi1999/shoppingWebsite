import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { basketContext } from './Basketcontext';
import { useContext } from 'react'
import { useEffect } from 'react';


function Main() {


    const [products, setProduct] = useState([])
    const { productBasket, setProductBasket } = useContext(basketContext)
    const { totalPrice, setTotalPrice } = useContext(basketContext)
    const {counterProduct,setCounterProduct} = useContext(basketContext)


    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))

    }, [])


    const addToBasket = (product) => {

        const newBasket = [...products]
        const updateBasket = newBasket.filter(basketproduct => basketproduct.id == product.id)
        const checkBasket = productBasket.some(basketproduct => basketproduct.id == product.id)
        const indexBasket = productBasket.findIndex(basketproduct => basketproduct.id == product.id)
       
        setTotalPrice(price => updateBasket[0].price + price)
        console.log(totalPrice)

        if (checkBasket) {

            
            productBasket[indexBasket].quantity = productBasket[indexBasket].quantity + 1
            console.log('indexbasket: ' + indexBasket)
            console.log('updateBasket: ' + updateBasket)
            console.log('checkBasket: ' + checkBasket)
        } else {


            setCounterProduct(counter => counter + 1)
            updateBasket[0].quantity = 1
            setProductBasket([...productBasket, ...updateBasket])
          


        }

    }

    return (
        <div className='container h-100 mt-5 d-flex flex-wrap justify-content-center gap-3'>

            {products.map(product => <Card style={{ width: '18rem' }} key={product.id}>
                <Card.Img className='h-50' variant="top" src={product.images[1]} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{product.title}</Card.Title>
                    <div className='mt-auto'>
                        <Card.Text>
                            {product.description}

                        </Card.Text>
                        <Card.Text className='text-center'>
                            {product.price + '$'}
                        </Card.Text>

                        <Button onClick={() => addToBasket(product)} className='w-100' variant="outline-dark" >ADD</Button>
                    </div>
                </Card.Body>
            </Card>)}

        </div>
    )
}

export default Main