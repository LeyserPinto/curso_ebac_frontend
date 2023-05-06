document.addEventListener('DOMContentLoaded', ()=> {
    fetchingData()
})


function fetchingData() {    
    fetch('https://api.github.com/users/LeyserPinto')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setContent(data)
    })
    .catch((err)=>{
        throw new Error("A Error happens: " + err);
    })
}

function setContent(data) {
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const bio = document.querySelector('.profile-bio');
    const username = document.querySelector('.profile-username');    
    const repos = document.querySelector('#repos_count');
    const followers = document.querySelector('#followers_count');
    const following = document.querySelector('#following_count');
    const link = document.querySelector('.profile-link');
    username.innerHTML = data.login;
    name.innerHTML = data.name;
    bio.innerText = data.bio;
    avatar.src = data.avatar_url;
    repos.innerText = data.public_repos;
    followers.innerText = data.followers;
    following.innerText = data.following;
    link.href = data.html_url;
}