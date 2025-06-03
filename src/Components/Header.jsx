

function Header(){
    return(
        <div className='header-container'>
                <h1>Campus Market</h1>
                <p>Buy and Sell with your fellow students</p>

                <div className='header-grid'>
                    <div className='header-stat-box'>
                        <h3>100+</h3>
                        <p>Active Users & Listings</p>
                    </div>
                    <div className='header-stat-box'>
                        <h3>100+</h3>
                        <p>Happy Students</p>
                    </div>
                    <div className='header-stat-box'>
                        <h3>24/7</h3>
                        <p>Availability</p>
                    </div>
                </div>
        </div>
    ); 
}

export default Header;