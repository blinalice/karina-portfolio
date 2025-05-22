
document.addEventListener("keydown", e => {
  const blocks = ["bio", "skills", "contact"];
  if (["a", "s", "d"].includes(e.key.toLowerCase())) {
    const index = {a: 0, s: 1, d: 2}[e.key.toLowerCase()];
    document.getElementById(blocks[index]).scrollIntoView({behavior: "smooth"});
  }
});
