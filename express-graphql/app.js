var axios = require('axios');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var access_token = 'BQBzYQKlVWI9FrXi19vlTQCCIuhhOGOwBHuFqqXJKKcNtUKYypZr1wSVsErspm701v8pvez-omV8_YXDu4RaCrXR1WH73kux7ohJGTeORpsmr9DAmR-JhJMc3-mQEUgG-tMouJHMOBcKlS1MRg0ZWtaBMOzcCZ9JT_YxWSLSPkArmpyF4xvYPe9RNu7n5rAL0g';

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Track {
    id: String
    href: String
    name: String
    popularity: Int
    preview_url: String
    type: String
    album: Album
  }
  type Album {
    href: String
    id: String
    name: String
    release_date: String
    total_tracks: Int
  }
  type Query {
    track(id: String): Track
    album(id: String): Album
  }
`);

let albumData = (id) => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.spotify.com/v1/albums/'+id,{
                        headers: {'Authorization': 'Bearer '+access_token}
                    }).then(res => resolve(res.data));
    });
}

// The root provides a resolver function for each API endpoint
var root = {
  track: () => {
    return {
               "album": {
                   "album_type": "album",
                   "artists": [
                       {
                           "external_urls": {
                               "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                           },
                           "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                           "id": "2h93pZq0e7k5yf4dywlkpM",
                           "name": "Frank Ocean",
                           "type": "artist",
                           "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                       }
                   ],
                   "available_markets": [
                       "AD",
                       "AE",
                       "AG",
                       "AL",
                       "AM",
                       "AO",
                       "AR",
                       "AT",
                       "AU",
                       "AZ",
                       "BA",
                       "BB",
                       "BD",
                       "BE",
                       "BF",
                       "BG",
                       "BH",
                       "BI",
                       "BJ",
                       "BN",
                       "BO",
                       "BR",
                       "BS",
                       "BT",
                       "BW",
                       "BY",
                       "BZ",
                       "CA",
                       "CD",
                       "CG",
                       "CH",
                       "CI",
                       "CL",
                       "CM",
                       "CO",
                       "CR",
                       "CV",
                       "CW",
                       "CY",
                       "CZ",
                       "DE",
                       "DJ",
                       "DK",
                       "DM",
                       "DO",
                       "DZ",
                       "EC",
                       "EE",
                       "EG",
                       "ES",
                       "ET",
                       "FI",
                       "FJ",
                       "FM",
                       "FR",
                       "GA",
                       "GB",
                       "GD",
                       "GE",
                       "GH",
                       "GM",
                       "GN",
                       "GQ",
                       "GR",
                       "GT",
                       "GW",
                       "GY",
                       "HK",
                       "HN",
                       "HR",
                       "HT",
                       "HU",
                       "ID",
                       "IE",
                       "IL",
                       "IN",
                       "IQ",
                       "IS",
                       "IT",
                       "JM",
                       "JO",
                       "JP",
                       "KE",
                       "KG",
                       "KH",
                       "KI",
                       "KM",
                       "KN",
                       "KR",
                       "KW",
                       "KZ",
                       "LA",
                       "LB",
                       "LC",
                       "LI",
                       "LK",
                       "LR",
                       "LS",
                       "LT",
                       "LU",
                       "LV",
                       "LY",
                       "MA",
                       "MC",
                       "MD",
                       "ME",
                       "MG",
                       "MH",
                       "MK",
                       "ML",
                       "MN",
                       "MO",
                       "MR",
                       "MT",
                       "MU",
                       "MV",
                       "MW",
                       "MX",
                       "MY",
                       "MZ",
                       "NA",
                       "NE",
                       "NG",
                       "NI",
                       "NL",
                       "NO",
                       "NP",
                       "NR",
                       "NZ",
                       "OM",
                       "PA",
                       "PE",
                       "PG",
                       "PH",
                       "PK",
                       "PL",
                       "PS",
                       "PT",
                       "PW",
                       "PY",
                       "QA",
                       "RO",
                       "RS",
                       "RW",
                       "SA",
                       "SB",
                       "SC",
                       "SE",
                       "SG",
                       "SI",
                       "SK",
                       "SL",
                       "SM",
                       "SN",
                       "SR",
                       "ST",
                       "SV",
                       "SZ",
                       "TD",
                       "TG",
                       "TH",
                       "TJ",
                       "TL",
                       "TN",
                       "TO",
                       "TR",
                       "TT",
                       "TV",
                       "TW",
                       "TZ",
                       "UA",
                       "UG",
                       "US",
                       "UY",
                       "UZ",
                       "VC",
                       "VE",
                       "VN",
                       "VU",
                       "WS",
                       "XK",
                       "ZA",
                       "ZM",
                       "ZW"
                   ],
                   "external_urls": {
                       "spotify": "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
                   },
                   "href": "https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf",
                   "id": "3mH6qwIy9crq0I9YQbOuDf",
                   "images": [
                       {
                           "height": 640,
                           "url": "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
                           "width": 640
                       },
                       {
                           "height": 300,
                           "url": "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
                           "width": 300
                       },
                       {
                           "height": 64,
                           "url": "https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526",
                           "width": 64
                       }
                   ],
                   "name": "Blonde",
                   "release_date": "2016-08-20",
                   "release_date_precision": "day",
                   "total_tracks": 17,
                   "type": "album",
                   "uri": "spotify:album:3mH6qwIy9crq0I9YQbOuDf"
               },
               "artists": [
                   {
                       "external_urls": {
                           "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
                       },
                       "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                       "id": "2h93pZq0e7k5yf4dywlkpM",
                       "name": "Frank Ocean",
                       "type": "artist",
                       "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
                   }
               ],
               "available_markets": [
                   "AD",
                   "AE",
                   "AG",
                   "AL",
                   "AM",
                   "AO",
                   "AR",
                   "AT",
                   "AU",
                   "AZ",
                   "BA",
                   "BB",
                   "BD",
                   "BE",
                   "BF",
                   "BG",
                   "BH",
                   "BI",
                   "BJ",
                   "BN",
                   "BO",
                   "BR",
                   "BS",
                   "BT",
                   "BW",
                   "BY",
                   "BZ",
                   "CA",
                   "CD",
                   "CG",
                   "CH",
                   "CI",
                   "CL",
                   "CM",
                   "CO",
                   "CR",
                   "CV",
                   "CW",
                   "CY",
                   "CZ",
                   "DE",
                   "DJ",
                   "DK",
                   "DM",
                   "DO",
                   "DZ",
                   "EC",
                   "EE",
                   "EG",
                   "ES",
                   "ET",
                   "FI",
                   "FJ",
                   "FM",
                   "FR",
                   "GA",
                   "GB",
                   "GD",
                   "GE",
                   "GH",
                   "GM",
                   "GN",
                   "GQ",
                   "GR",
                   "GT",
                   "GW",
                   "GY",
                   "HK",
                   "HN",
                   "HR",
                   "HT",
                   "HU",
                   "ID",
                   "IE",
                   "IL",
                   "IN",
                   "IQ",
                   "IS",
                   "IT",
                   "JM",
                   "JO",
                   "JP",
                   "KE",
                   "KG",
                   "KH",
                   "KI",
                   "KM",
                   "KN",
                   "KR",
                   "KW",
                   "KZ",
                   "LA",
                   "LB",
                   "LC",
                   "LI",
                   "LK",
                   "LR",
                   "LS",
                   "LT",
                   "LU",
                   "LV",
                   "LY",
                   "MA",
                   "MC",
                   "MD",
                   "ME",
                   "MG",
                   "MH",
                   "MK",
                   "ML",
                   "MN",
                   "MO",
                   "MR",
                   "MT",
                   "MU",
                   "MV",
                   "MW",
                   "MX",
                   "MY",
                   "MZ",
                   "NA",
                   "NE",
                   "NG",
                   "NI",
                   "NL",
                   "NO",
                   "NP",
                   "NR",
                   "NZ",
                   "OM",
                   "PA",
                   "PE",
                   "PG",
                   "PH",
                   "PK",
                   "PL",
                   "PS",
                   "PT",
                   "PW",
                   "PY",
                   "QA",
                   "RO",
                   "RS",
                   "RW",
                   "SA",
                   "SB",
                   "SC",
                   "SE",
                   "SG",
                   "SI",
                   "SK",
                   "SL",
                   "SM",
                   "SN",
                   "SR",
                   "ST",
                   "SV",
                   "SZ",
                   "TD",
                   "TG",
                   "TH",
                   "TJ",
                   "TL",
                   "TN",
                   "TO",
                   "TR",
                   "TT",
                   "TV",
                   "TW",
                   "TZ",
                   "UA",
                   "UG",
                   "US",
                   "UY",
                   "UZ",
                   "VC",
                   "VE",
                   "VN",
                   "VU",
                   "WS",
                   "XK",
                   "ZA",
                   "ZM",
                   "ZW"
               ],
               "disc_number": 1,
               "duration_ms": 249191,
               "explicit": true,
               "external_ids": {
                   "isrc": "QZ5C81600002"
               },
               "external_urls": {
                   "spotify": "https://open.spotify.com/track/2ZWlPOoWh0626oTaHrnl2a"
               },
               "href": "https://api.spotify.com/v1/tracks/2ZWlPOoWh0626oTaHrnl2a",
               "id": "2ZWlPOoWh0626oTaHrnl2a",
               "is_local": false,
               "name": "Ivy",
               "popularity": 76,
               "preview_url": "https://p.scdn.co/mp3-preview/70683c8d040053defb1e68d19e3c8ccc49b2136a?cid=32c575710fd04f4ebeb8ff4ebced565e",
               "track_number": 2,
               "type": "track",
               "uri": "spotify:track:2ZWlPOoWh0626oTaHrnl2a"
           };
  },
  album: ({id}) => {
    return albumData(id);
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');