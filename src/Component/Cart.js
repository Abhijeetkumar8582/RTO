import React,{useEffect, useState} from 'react'

function Cart() {

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products?limit=5`)
      .then((response)=>response.json())
      .then((data)=>{setcartDetails(data)})
    }, [])
    const [getCartDetails,setcartDetails]=useState([])
  return (
    <div>
        <div className="checkout-modal">
	<div className="container-fluid">
		<div className="row">
			{/* <div className="col-md-6 shopping-cart"> */}
            {/* <div> */}
				<h1 className="text-center">Order Summary 🛒</h1>
                <div className='cart-item-conatiner'>
				<ul className="cart-items css-table">
                    {getCartDetails.map((element,i)=>(
                        <li className="css-table-row" key={i}>
						<div className="css-table-cell item-thumb">
							<img src={element.image} className='item-cart-images' alt={element.image}/>
						</div>
						<div className="css-table-cell item-name">
							<strong>{element.title.slice(0,25)}</strong>
						</div>
						<div className="css-table-cell item-quantity">x1</div>
						<div className="css-table-cell item-price">₹{element.price}</div>
					</li>
                    ))}
				
				</ul>
                </div>
				<div className="cart-summary container-fluid">
					<div className="row">
							<div className="css-table">
								<div className="css-table-row">
									<em className="css-table-cell">Subtotal: </em>
									<em className="css-table-cell">$274.40</em>
								</div>
								<div className="css-table-row">
									<em className="css-table-cell">Tax: </em>
									<em className="css-table-cell">$19.21</em>
								</div>
							</div>
						
						<div className="col-sm-6">
							<div className="css-table">
								<div className="css-table-cell"><strong>Total:</strong></div>
								<div className="css-table-cell"><strong>$293.61</strong></div>
						</div>
                        </div>
					</div>
				</div>
			{/* </div> */}
			
		</div>
	</div>
</div>
    </div>
  )
}

export default Cart