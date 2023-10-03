
var background = ""
function getBackground(bacImg) {
    background = bacImg
    
    console.log(background)
}
function postBtn() {
    let color = document.getElementById("color")
    let postDiv = document.getElementById("time-line-post")
    let text = document.getElementById("text")
    postDiv.innerHTML = ` <div class="card post-div">
    <div class="profile-area">
      <img
        class="profile"
        src="./img/profile.png"
        width="80"
        height="80"
        alt=""
      />
      <div class="name-time">
        <h5>Ahmed Karim</h5>
        <p>just now</p>
      </div>
    </div>
    <div class="card-body  ${background}">
      <h3>${text.value}</h3>
    </div>
    <div class="like-div">
      <p class="btn like-btn">Like</p>
      <p class="btn like-btn">Comment</p>
      <p class="btn like-btn">Share</p>
    </div>
    </div>` + postDiv.innerHTML
    background = ""
    text.value = ""
}