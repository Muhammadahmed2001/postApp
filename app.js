
var text = document.getElementById("text")
var color = document.getElementById("color")
var postDiv = document.getElementById("time-line-post")
var background = ""
var selectedColor = ""
function getcolor() {
  selectedColor = color.value
  text.style.color = selectedColor
}
function getBackground(bacImg) {
  background = bacImg
  text.className = background



}
function postBtn() {
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
        <p>${moment().format('LT')}</p>
      </div>
    </div>
    <div class="card-body  ${background}">
      <h3 style="color: ${selectedColor};">${text.value}</h3>
    </div>
    <div class="like-div">
      <p class="btn like-btn">Like</p>
      <p class="btn like-btn">Comment</p>
      <p class="btn like-btn">Share</p>
    </div>
    </div>` + postDiv.innerHTML
  background = ""
  text.value = ""
  text.className = "post-text-area"
  text.style.color = "#0d0d0d"
}