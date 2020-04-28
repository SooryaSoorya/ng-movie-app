export class Movie {
  public title: string;
  public year: string;
  public rated: string;
  public released: string;
  public runtime: string;
  public plot: string;
  public poster: string;
  public imdbLink: string;
  public imdbID: string;

  constructor(
    title?: string,
    year?: string,
    rated?: string,
    released?: string,
    runtime?: string,
    plot?: string,
    poster?: string,
    imdbID?: string,
    imdbLink?:String
  ) {
    (title = title),
      (year = year),
      (rated = rated),
      (released = released),
      (runtime = runtime),
      (plot = plot),
      (poster = this.parsePosterId(poster)),
      (imdbID = imdbID),
      (imdbLink = `http://imdb.com/title/${imdbID}`);
  }

  parsePosterId(url: any) {
    let prefix = "https://m.media-amazon.com/images/M/"; // should abstract this to config value
    if (url && url.includes(prefix)) {
      return url.replace("https://m.media-amazon.com/images/M/", "");
    } else {
      return "not-found"; // can use this to propagate an error
    }
  }
}
