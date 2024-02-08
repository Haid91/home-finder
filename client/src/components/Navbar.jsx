function Navbar({ handleChange, type }) {
    return (
        <>
            <div class="ui secondary  menu">
                <a href="/" class="active item">
                    Home
                </a>
                
                <a href="/listing.html" class="item">
                    My favourite Listing
                </a>
                <a href="/login" class="item">
                    Login
                </a>
                <a href="/signup" class="item">
                    Sign up
                </a>

                <a class="ui item">
                        Logout
                    </a>

                <div class="right menu">
                    <div class="item">
                        <label for="type">Rent/Buy:</label>


                        <div class="ui icon input">
                            <select name="type" id="type" value={type} onChange={handleChange}>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>

                            </select>
                            {/* <input type="text" placeholder="Search..." />
                            <i class="search link icon"></i> */}
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )

}

export default Navbar