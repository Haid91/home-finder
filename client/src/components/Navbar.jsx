function Navbar({ handleChange, type }) {
    return (
        <>
            <div class="ui secondary  menu">
                <a href="/" class="active item">
                    Home
                </a>
                <a href="/about.html" class="item">
                    About
                </a>
                <a href="/listing.html" class="item">
                    Listing
                </a>
                <a href="/profile.html" class="item">
                    Profile
                </a>
                <a href="/signup.html" class="item">
                    Sign up
                </a>

                <div class="right menu">
                    <div class="item">
                        <label for="type">Rent/Buy:</label>


                        <div class="ui icon input">
                            <select name="type" id="type" value={type} onChange={handleChange}>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>

                            </select>
                            <input type="text" placeholder="Search..." />
                            <i class="search link icon"></i>
                        </div>
                    </div>
                    <a class="ui item">
                        Logout
                    </a>
                </div>

            </div>
        </>
    )

}

export default Navbar