export const Middle = () => {
  return (
    <div className="middle-sec">
      <div className="left-div">
        <h1 className="middle-header">Groups</h1>
        <div className="mid-divs">
        <h2 style={{color:"#6F747E"}}>Search Groups..</h2>
        <input
          type="search"
          placeholder="Search Groups.."
          className="search-middle"
        />
        <button className="search-button">Search</button>
        </div>
        <div className="mid-divs">
            <p className="mid-para" style={{color:"#FAB19D"}}>All Groups<span className="batch">5</span></p>
            <p className="mid-para">My Groups<span className="batch">3</span></p>
            <hr style={{width:"100%"}}/>
            <select className="mid-select">
                <option>Last Active</option>
                <option>1hr ago</option>
                <option>1day ago</option>
                <option>1week ago</option>
            </select>
        </div>
        <div className="card-section">
        <div class="card">
  <img src="img_avatar2.png" alt="Avatar" style={{width:"100%"}} />
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>
        </div>
      </div>
      <div className="right-div">
        <div className="right-top">
            <h2>Active Members</h2>
            <img src="img_avatar.png" alt="face" className="face-batch"/>
            <img src="img_avatar.png" alt="face" className="face-batch"/>
            <img src="img_avatar.png" alt="face" className="face-batch"/>
            <img src="img_avatar.png" alt="face" className="face-batch"/>
            <p>view all</p>
        </div>
        <div className="right-down">
            <h2 style={{paddingTop:"30px"}}>Recent Topics</h2>
            <p><img src="img_avatar.png" alt="face" className="face-batch"/></p>
            <p><img src="img_avatar.png" alt="face" className="face-batch"/></p>
            <p><img src="img_avatar.png" alt="face" className="face-batch"/></p>
            <p><img src="img_avatar.png" alt="face" className="face-batch"/></p>
        </div>
      </div>
    </div>
  );
};
