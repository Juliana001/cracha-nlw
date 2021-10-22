const socialMedia = {
  github: 'Juliana001',
  youtube: 'UC5uxT99VmEARkoFPnOmXAUw',
  facebook: '100061440558917',
  instagram: 'souljuliananasc',
  twitter: 'JulianaNRocha1'
}

function changeNameSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeNameSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => 
      response.json()
    )
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
   
}

getGitHubProfileInfos()
