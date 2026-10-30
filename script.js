const btn = document.getElementById("btnGatos");
const img = document.getElementById("catImg");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!res.ok) throw new Error("Error en la API");

    const data = await res.json();

    img.src = data[0].url;

  } catch (error) {
    console.error("Error:", error);
  }
});