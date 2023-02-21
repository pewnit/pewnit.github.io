// Get all links on the page
const links = document.querySelectorAll("a");

// Listen for mouseover event on each link
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    // Set the background color of the body to black
    document.body.style.backgroundColor = "black";

    // Set the color of all links to white, except for the currently hovered link
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.style.color = "black";
      }
    });

    // Set the color of the hovered link to black
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
