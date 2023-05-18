
export const AnswerExperienceConfig = {
  // limit:3,
  locale: "en",
  apiKey : "2373fe8b47bc84b1bc4b2db1bd8c8c07",
  verticalKey : "locations",
  experienceKey : "united-site-services",
  experienceVersion: "STAGING",
  locationRadius: 804672,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
}