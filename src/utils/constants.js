const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

// has maxResults=50
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+GOOGLE_API_KEY

// search query api
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_KEYWORD="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="

export const YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG="&key="+GOOGLE_API_KEY
// export const YOUTUBE_SEARCH_API_WITH_KEY="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="[YOUR_API_KEY];