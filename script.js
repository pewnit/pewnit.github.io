// Get all links on the page
const links = document.querySelectorAll("a");

// Listen for mouseover event on each link
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    // Set the background color of the body based on the link id
    switch(link.id) {
      case "link1":
        document.body.style.backgroundColor = "#00ac72";
        break;
      case "link2":
        document.body.style.backgroundColor = "#2c2c2c";
        break;
      case "link3":
        document.body.style.backgroundColor = "#0072b1";
        break;
      case "link4":
        document.body.style.backgroundColor = "#1DA1F2";
        break;
      case "link5":
        document.body.style.backgroundColor = "#CD201F";
        break;
      default:
        document.body.style.backgroundColor = "#AAAAFF";
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
