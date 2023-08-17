export const HeaderBar = () => {
  return (
    <div class="topnav">
      <a class="logo" href="#home">
        Anesta<span style={{ color: "red" }}>.</span>
      </a>
      <a href="#colaps">
        <i class="fa fa-bars" style={{marginLeft:"95px"}} aria-hidden="true"></i>
      </a>
      <input
        type="search"
        className="search-box"
        placeholder="Start typing to search..."
      />

      <div class="topnav-right">
        <a href="#country">
          <img src="usflag.jpg" className="country-img" alt="country_image" />
        </a>
        <a href="#languge">English</a>
        <a href="#search">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <a href="#country">
          <img
            src="img_avatar.png"
            className="country-img"
            alt="country_image"
          />
        </a>
        <a href="#about" style={{color:"#757A83"}}>Hi, Jack</a>
      </div>
    </div>
  );
};
