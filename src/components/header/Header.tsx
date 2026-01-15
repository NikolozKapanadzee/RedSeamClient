import userIcon from "../../assets/images/usericon.svg";
import logo from "../../assets/images/redseamlogo.svg";
import { Link } from "react-router";
// import cartIcon from "../../assets/images/shopping-cart.svg";
// import avatarImg from "../../assets/images/defaultavatar.svg";
// import arrowIcon from "../../assets/images/arrowdown.svg";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container_header max-w-480 mx-auto px-25 py-4 flex items-center justify-between">
          <Link to="/">
            <div className="header_left flex items-center gap-1">
              <img src={logo} alt="redseam_logo" className="cursor-pointer" />
              <span className="font-medium text-base leading-none tracking-normal text-[#10151E] cursor-pointer">
                RedSeam Clothing
              </span>
            </div>
          </Link>
          <div className="header_right flex items-center gap-1">
            <Link to="/auth/register">
              <img
                src={userIcon}
                alt="user_icon"
                className="cursor-pointer w-5 h-5"
              />
            </Link>
            <Link to="/auth/register">
              <button className="font-medium text-base leading-none tracking-normal text-[#10151F] cursor-pointer">
                Log in
              </button>
            </Link>
            {/* <div className="icons-div flex items-center gap-4">
              <img src={cartIcon} alt="cart_icon" className="cursor-pointer" />
              <div className="flex items-center gap-1.5">
                <img
                  src={avatarImg}
                  alt="avatar_img"
                  className="cursor-pointer"
                />
                <img
                  src={arrowIcon}
                  alt="arrow_icon"
                  className="cursor-pointer"
                />
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
