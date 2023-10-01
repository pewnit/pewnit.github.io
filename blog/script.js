// Get all links on the page
const links = document.querySelectorAll("a");

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
      case "blog":
        document.body.style.backgroundColor = "#A0ED86";
      default:
        document.body.style.backgroundColor = "#A0ED86";
    }

    // Set the color of all links to white, except for the currently hovered link
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.style.color = document.body.style.backgroundColor;
      }
    });

    // Set the color of the hovered link to white
    link.style.color = "white";
  });

  // Listen for mouseout event on each link
  link.addEventListener("mouseout", () => {
    // Set the background color of the body back to white
    document.body.style.backgroundColor = "white";

    // Set the color of all links back to black
    links.forEach(otherLink => {
      otherLink.style.color = "black";
    });
  });
});
