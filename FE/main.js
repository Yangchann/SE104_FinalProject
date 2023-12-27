// your-script.js

document.addEventListener("DOMContentLoaded", function () {
    var username = localStorage.getItem("username");
    fetchownPlaylists(username);
    fetchRecentlyPlaylists(username);
    fetchUserInfo(username);
});

function fetchownPlaylists(username) {
    // Gửi yêu cầu GET tới endpoint của server
    // var username = document.getElementById("userImage").getAttribute("title")
    fetch(`http://127.0.0.1:8001/playlists/take_owned_playlists/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Lấy container của playlists
        console.log(data);
        const playlistContainer = document.getElementById('myPlaylistContainer');

        // Loop through the data and create playlist items
        for (const key in data) {
            // console.log(key, data[key]);
            // Create the content for each playlist item

            const imageUrl = data[key]["imageUrl"]
            const title = data[key]["title"]
            console.log(imageUrl)
            console.log(title)

            const playlistItem = document.createElement('li', className='Item');
            playlistItem.innerHTML = `
                <div class="img_play">
                    <img src="${imageUrl}" alt="alan">
                    <i class="bi playListPlay bi-play-circle-fill"></i>
                </div>
                <h5>${title}
                    <br>
                    <div class="subtitle">Subtitle</div>

                </h5>
            `;

            // Append the playlist item to the container
            playlistContainer.appendChild(playlistItem);
                
            }
        }
    )}
function fetchRecentlyPlaylists(username) {
    // Gửi yêu cầu GET tới endpoint của server
    // var username = document.getElementById("userImage").getAttribute("title")
   fetch(`http://127.0.0.1:8001/playlists/take_recently_playlists/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Lấy container của playlists
        const playlistContainer = document.getElementById('myRecentlyPlaylistContainter');

        // Loop through the data and create playlist items
        for (const key in data) {
            // console.log(key, data[key]);
            // Create the content for each playlist item

            const imageUrl = data[key]["imageUrl"]
            const title = data[key]["title"]
            console.log(imageUrl)
            console.log(title)

            const playlistItem = document.createElement('li', className='Item');
            playlistItem.innerHTML = `
                <div class="img_play">
                    <img src="${imageUrl}" alt="alan">
                    <i class="bi playListPlay bi-play-circle-fill"></i>
                </div>
                <h5>${title}
                    <br>
                    <div class="subtitle">Subtitle</div>

                </h5>
            `;

            // Append the playlist item to the container
            playlistContainer.appendChild(playlistItem);
                
            }
        }
    )}




    
function fetchUserInfo(username){
    // Request

    fetch(`http://127.0.0.1:8001/take_user_infor/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();

    })
    .then(data => {
        
        console.log(data);

        // take data from fetch
        var avatarPath = data["avatar_path"];
        var firstName = data["first_name"];
        var lastName = data["last_name"];

        var userImage = document.getElementById('userImage');
        var userImage_1 = document.getElementById('userImage_1');
        var usernameElemet = document.getElementById('username');

        userImage.src = avatarPath
        userImage_1.src = avatarPath
        usernameElemet.textContent = firstName + " " + lastName


    })

}

// function fetchRecentlyPlaylists() {
//     // Gửi yêu cầu GET tới endpoint của server
//    fetch('http://127.0.0.1:8001/playlists/take_all_playlists')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Lấy container của playlists
//         const playlistContainer = document.getElementById('myPlaylistContainer');

//         // Loop through the data and create playlist items
//         for (const key in data) {
//             // console.log(key, data[key]);
//             // Create the content for each playlist item

//             const imageUrl = data[key]["imageUrl"]
//             const title = data[key]["title"]
//             console.log(imageUrl)
//             console.log(title)

//             const playlistItem = document.createElement('li', className='Item');
//             playlistItem.innerHTML = `
//                 <div class="img_play">
//                     <img src="${imageUrl}" alt="alan">
//                     <i class="bi playListPlay bi-play-circle-fill"></i>
//                 </div>
//                 <h5>${title}
//                     <br>
//                     <div class="subtitle">Subtitle</div>

//                 </h5>
//             `;

//             // Append the playlist item to the container
//             playlistContainer.appendChild(playlistItem);
                
//             }
//         }
//     )}