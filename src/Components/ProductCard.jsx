
function ProductCard(){
    return (
        <div className="product-card-container">
            <div className='product-card'>
                <div className='product-image'>
                    <img src='https://via.placeholder.com/150' alt='Product Image' />
                </div>
                <div className='product-details'>
                    <h2 className='product-title'>Product Title</h2>
                    <p className='product-price'>R150.98</p>
                    <p className='product-seller'>Kgabo Mokoka</p>
                    <button className='add-to-cart-button'>View More</button> 
                </div>
            </div>
        </div>
    ); 
}

export default ProductCard;