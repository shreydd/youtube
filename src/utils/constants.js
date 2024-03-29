const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

// export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+GOOGLE_API_KEY

export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key="+GOOGLE_API_KEY+"&regionCode="

// search query api, has a cors headache tho
export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// from docs, but only suggests channel, videos and stuff
// export const YOUTUBE_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=";

export const YOUTUBE_SEARCH_RESULTS_KEYWORD="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="

export const YOUTUBE_REMAINING_CONFIG="&key="+GOOGLE_API_KEY

// export const YOUTUBE_SEARCH_RESULTS_REMAINING_CONFIG="&key="+GOOGLE_API_KEY

export const YOUTUBE_COMMENTS_API="https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet,replies&maxResults=40&videoId="


export const LOFI_2021_VIDEO_ID="n61ULEU7CO0"

export const MOCK_LIVE_CHAT_QUOTES_API="https://quotes-api-production-81c7.up.railway.app/quote"

export const CHAT_MSGS_RESTRICT = 10;

export const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];