
// Enable tooltips everywhere:
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

// from 02/01/2000 into "February 2000":
function parseDate(pubDate) {
  const date = new Date(pubDate);
  let month = date.getMonth();
  const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepember', 'October', 'November', 'December'];
  month = arr[month];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

// from "February 2000" into 02/01/2000:
function parseFormDate(pubDate) {
  // console.log("it's working");
  const date = new Date(pubDate);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDay().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

const Book = function (cover, title, author, genre, pages, publishDate, rating, deleteCol, synopsis, edit) {
  this.cover = cover;
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.publishDate = new Date(String(publishDate));
  this.rating = rating;
  this.deleteCol = deleteCol;
  this.synopsis = synopsis;
  this.edit = edit;
};
