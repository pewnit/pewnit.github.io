// Get all links on the page and the blog container
const links = document.querySelectorAll("a");
const blog = document.querySelector(".blog");

// Listen for mouseover event on each link
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    // Set the background color of the body based on the link id
    switch(link.id) {
      case "resume":
        document.body.style.backgroundColor = "#00ac72";
        break;
      case "github":
        document.body.style.backgroundColor = "#2c2c2c";
        break;
      case "linkedin":
        document.body.style.backgroundColor = "#0072b1";
        break;
      case "twitter":
        document.body.style.backgroundColor = "#1DA1F2";
        break;
      case "youtube":
        document.body.style.backgroundColor = "#CD201F";
        break;
      case "scrapyard":
        document.body.style.backgroundColor = "#A0ED86";
        break;
      case "qawolf":
        document.body.style.backgroundColor = "#3838EF";
        break;
      case "blog":
        document.body.style.backgroundColor = "#3838EF";
        break;
      default:
        document.body.style.backgroundColor = "#3838EF";
    }

    // Set the things in the div with class "blog" to transparent
    if (blog) {
      blog.style.color = "transparent";
    }

    // Set the color of all other links to transparent
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.style.color = "transparent";
      }
    });

    // Set the color of the hovered link to white
    link.style.color = "white";
  });

  // Listen for mouseout event on each link
  link.addEventListener("mouseout", () => {
    // Set the background color of the body back to white
    document.body.style.backgroundColor = "white";

    // Restore the color of things in the div with class "blog"
    if (blog) {
      blog.style.color = "";
    }

    // Set the color of all links back to normal
    links.forEach(otherLink => {
      otherLink.style.color = "";
    });
  });
});
