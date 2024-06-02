import avatar from './assets/avatars/av-1.svg';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="search friends"/>
                </div>
                <div className="icons">
                    <i className="fa-regular fa-bell"></i>
                    <img src={ avatar } alt=""/>
                </div>
            </div>
        </header>
    );
}

export default Navbar;