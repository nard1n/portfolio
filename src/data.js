// Social Icon
import githubIcon from "./images/github.svg"
import linkedin from "./images/linkedin.png"
import resume from "./images/resume.png"

export default {
   name: "Nardin",
  headerTagline: [ 
    "Robust products,",
    "Thoughtful designs,",
    "ui | ux",
  ],

  headerParagraph:
    "Please explore my work and feel free to contact me!",

  contactEmail: "nardincodes@gmail.com",

  projects: [
    {
      title: "Takeoff - Coming Soon", 
      
      para:
        "TakeOff is a travel planning and blog application. Users can keep track of current and past trips. The itinerary creator allows the user to keep track of planned events or outings. Since traffic and weather conditions can affect your plans, with a travel itinarary on hand you can be more flexible.",
      imageSrc:
        "https://storage.googleapis.com/emotion-studios-cloud/lcibsuk/2019/02/3cd8e661-coming-soon-placeholder.jpg",
      url: "",
      repo: "https://github.com/espoldi/Takeoff",
    },
    {
      title: "Pet Match",
      para:
        "An application allowing users to search for adoptable pets with a secure login. In the application, the user is able to jot down notes only visible to them as they search through the database. Their login password is hashed in the database, making it secure.",
      imageSrc:
        "https://github.com/nard1n/nard1n.github.io/blob/main/Assets/petmatch.png?raw=true",
      url: "https://sheltered-refuge-68768.herokuapp.com/",
      repo: "https://github.com/dbridgman1/Pet-Match",
    },
    {
      title: "For The Love of Burgers", 
      para:
        "For The Love of Burgers is a restaurant app that lets users input the recommendations of burgers they'd like to eat. This application is a burger logger built with MySQL, Node, Express, Handlebars and a homemade ORM, following an MVC design pattern.",
      imageSrc:
        "https://nard1n.github.io/Assets/screenshot.png",
      url: "https://aqueous-scrubland-45192.herokuapp.com/",
      repo: "https://github.com/nard1n/for-the-love-of-burgers/",
    },
    {
      title: "Note Taker", para:
        "Effective Note Taker is the perfect solution for users who need to keep track of a lot of information. It's easy to forget or be unable to recall something important so this gives you the perfect place to jot it down quickly and retrive it later",
      imageSrc:
        "https://github.com/nard1n/effective-note-taker/raw/master/Develop/public/assets/note-taker.gif",
      url: "https://limitless-woodland-29832.herokuapp.com/notes",
      repo: "https://github.com/nard1n/effective-note-taker",
    },
    {
      title: "Endless Pastabilities",
      para:
        "This is a recipe search page that allows the user to search for recipes using certain ingredients. Adds the ingredients needed to make those recipes into a shopping list.",
      imageSrc:
        "https://github.com/nard1n/nard1n.github.io/blob/main/Assets/recipe-shopper-demo.png?raw=true",
      url: "https://nard1n.github.io/recipe-shopper/",
      repo: "https://github.com/nard1n/recipe-shopper/",
    },
    {
      title: "Weather Dash",para:
        "Weather Application for searching current weather and 5-day forecast. The application allows users to easily search and retrieve the weather forecast via the OpenWeatherMap API",
      imageSrc:
        "https://github.com/nard1n/nard1n.github.io/blob/main/Assets/weather-app-web.png?raw=true",
      url: "https://nard1n.github.io/weather-app/",
      repo: "https://github.com/nard1n/weather-app/",
    },

  ],

  // About Secton 
  aboutParaOne:
    "I am a software developer with over 5 years of experience in product support, implementations and software integrations.",
  aboutParaTwo:
    "I am passionate and interested in collaborating with other developers to build new amazing products.",
  aboutParaThree:
    "Stay Tuned For More",
  aboutImage:
    "https://avatars.githubusercontent.com/u/39885707?v=4",

  //   Contact 

  contactSubHeading: "Want to know more?",
  social: [
    { img: githubIcon, url: "https://github.com/nard1n" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/nardinl",
    },
    {
      img: resume,
      url: "https://nard1n.github.io/Assets/NardinLachowski-Resume.pdf",
    },
  ],

}