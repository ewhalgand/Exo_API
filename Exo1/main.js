const featchOffer = async () => {
  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://www.codepassport.dev/api/offers/1"
    )}`
  );
  const data = await res.json();
  const offer = JSON.parse(data.contents);
  const { titre, description, technologie } = offer;

  document.body.innerHTML = `
    <h1>${titre}</h1>
    <p>${description}</p>

    <div class="content">
      <p>${technologie}</p>
    </div>`;
};
featchOffer();
