window.onload = fetch("https://deezerdevs-deezer.p.rapidapi.com/album/301728", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c4178e5555msh491d5da8ad507fbp1df5eajsn3a73de73c949",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const albumCover = document.getElementById("album-cover");
    const mainContainer = document.getElementById("main");
    albumCover.setAttribute("src", `${data.cover_medium}`);
    const albumName = document.getElementById("albumName");
    albumName.innerText = `${data.title}`;
    const artistAvatar = document.getElementsByClassName("artist-avatar")[0];
    const artistName = document.getElementsByClassName("artist-name")[0];
    console.log(data.contributors[0].picture_small);
    artistAvatar.setAttribute("src", `${data.contributors[0].picture_small}`);
    artistName.textContent = `${data.artist.name}`;
    const albumTracksCount = document.getElementsByClassName("album-tracks-count")[0];
    albumTracksCount.textContent = `${data.nb_tracks} tracks`;
    const albumDuration = document.getElementsByClassName("album-duration")[0];
    albumDuration.textContent = `${data.duration} seconds`;
    albumDate = document.getElementsByClassName("album-date")[0];
    albumDate.textContent = `${data.release_date}`;
    const albumFansCount = document.getElementsByClassName("album-fans-count")[0];
    albumFansCount.textContent = `${data.fans} fans`;
    const tracksBody = document.getElementById("tracks-body");
    data.tracks.data.map((elem, index) => {
      const tableRow = document.createElement("tr");
      tracksBody.appendChild(tableRow);
      const trackIndex = document.createElement("td");
      tableRow.appendChild(trackIndex);
      trackIndex.innerText = index + 1;
      const trackName = document.createElement("td");
      tableRow.appendChild(trackName);
      trackName.innerText = elem.title;
      const trackDuration = document.createElement("td");
      tableRow.appendChild(trackDuration);
      let minutes = Math.floor(elem.duration / 60);
      let seconds = elem.duration - minutes * 60;
      trackDuration.innerText = `${minutes}:${seconds}`;
      const trackRank = document.createElement("td");
      tableRow.appendChild(trackRank);
      trackRank.innerText = elem.rank;
    });
  })
  .catch((err) => {
    console.error(err);
  });
