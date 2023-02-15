var express = require('express');
var axios = require('axios');
const { ApolloServer } = require('apollo-server-express');

var access_token = 'BQD_NVth18hgG4DqzLL0kzU-l_ru8Y-szY1_7MCgrnTzpd9gKvquLOyk-lnB1fy4Jq6o6g_iUqJBHnU3_q18aJaFEIK0vD7cBvksbnT2OAQFeVraGtPdqrplHgj4MIHQrHjRLR8p9PLGp93Gcq_zeaPTh5wf5rAVm3Fdi_sNEPNQ1ToqoQ8i7simpd3w3VcBMQ';

const typeDefs = `#graphql

  type Track {
    id: String
    href: String
    name: String
    popularity: Int
    preview_url: String
    type: String
    album: Album
    artists: [Artist]
  }
  type Album {
    href: String
    id: String
    name: String
    release_date: String
    total_tracks: Int
  }
  type Artist {
    id: String
    genres: [String]
    name: String
    popularity: Int
  }
  type Playlist {
    id: String
    description: String
    name: String
    public: String
  }
  type Query {
    track(id: String): Track
    album(id: String): Album
    artist(id: String): Artist
    playlist(id: String): Playlist
    myPlaylists: [Playlist]
  }
`;

let albumData = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/albums/'+id,{
      headers: {'Authorization': 'Bearer '+access_token}
    }).then(res => resolve(res.data));
  });
}

let trackData = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/tracks/'+id, {
      headers: {'Authorization': 'Bearer '+access_token}
    }).then(res => resolve(res.data));
  });
}

let artistData = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/artists/'+id, {
      headers: {'Authorization': 'Bearer '+access_token}
    }).then(res => resolve(res.data));
  });
}

let playlistData = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/playlists/'+id, {
      headers: {'Authorization': 'Bearer '+access_token}
    }).then(res => resolve(res.data));
  });
}

let myPlaylistData = (id) => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer '+access_token}
    }).then(res => 
      //console.log(res.data.items));
      resolve(res.data.items));
  });
}

const resolvers = {
    Query: {
      track(parent, args, contextValue, info) {
        return trackData(args.id);
      },
      album(parent, args, contextValue, info) {
        return albumData(args.id);
      },
      artist(parent, args, contextValue, info){
        return artistData(args.id);
      },
      playlist(parent, args, contextValue, info){
        return playlistData(args.id);
      },
      myPlaylists(parent, args, contextValue, info){
        return myPlaylistData();
      }
    },
}

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`ðŸš€ Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();