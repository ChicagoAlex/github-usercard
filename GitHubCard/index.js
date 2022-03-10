import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ChicagoAlex')
  .then(res =>{
    // console.log(res.data.public_repos);
  })
  .catch(err => {
    // console.error(err)
  })
  .finally(() => {
    // console.log('Its working!')
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({ imageURL, name, username, location, gitURL, followCount, followingCount, bio }){
  const gitCardDiv = document.createElement('div');
  const image = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p')
  const profileP = document.createElement('p');
  const gitLink = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  gitCardDiv.classList.add('card');
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('h3');
  usernameP.classList.add('username');

  gitCardDiv.appendChild(image);
  gitCardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(usernameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  profileP.appendChild(gitLink);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);

  image.src = imageURL;
  nameH3.textContent = name;
  usernameP.textContent = username;
  locationP.textContent = `Location: ${location}`
  profileP.textContent = 'Profile: ';
  gitLink.href = gitURL;
  gitLink.textContent = gitURL;
  followersP.textContent = `Followers: ${followCount}`;
  followingP.textContent = `Following: ${followingCount}`;
  bioP.textContent = `Bio: ${bio}`;

  return gitCardDiv
}

console.log(cardMaker({imageURL: 'image.jpg', name: 'Alex', username: 'MyUsername', location: 'Chicago', gitURL: 'blah.com', followCount: 'six', followingCount: 'seven', bio: 'This is my bio'}))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
