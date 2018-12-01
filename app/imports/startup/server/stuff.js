import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';
import { Movies } from './movies.json';


/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
//const movieList = readJSON(Movies);

const stuffSeeds = [
  {
    Title: 'Wanted',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true',
    Quantity: 100,
  },
  { Title: 'The Bourne Ultimatum',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true',
    Quantity: 100,
  },
  { Title: 'Guardians of the Galaxy Vol. 2',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true',
    Quantity: 100,
  },
  { Title: 'National Treasure',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true',
    Quantity: 100,
  },
  { Title: 'Bad Boys',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true',
    Quantity: 100,
  },
  { Title: 'Bright',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_SX300.jpg',
    HomePoster: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true',
    Quantity: 100,
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
/* //json reader
const FileReader = require('filereader');
const File = require('file');
function readJSON(path) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.responseType = 'blob';
  xhr.onload = function (e) {
    if (this.status === 200) {
      const file = new File([this.response], 'temp');
      const fileReader = new FileReader();
      fileReader.addEventListener('load', function () {
        // do stuff with fileReader.result
      });
      fileReader.readAsText(file);
    }
  };
  xhr.send();
}
*/