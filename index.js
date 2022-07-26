//Tahmid Hoque Filament AI tech task

const axios = require("axios");

exports.beerLookup = async function (req, res) {
  const { beer_name, brewed_before, brewed_after, id } = req.query;
  const urlByQuery = `https://api.punkapi.com/v2/beers?${
    beer_name && !id ? `beer_name=${beer_name}&` : ""
  }${brewed_before && !id ? `brewed_before=${brewed_before}&` : ""}${
    brewed_after && !id ? `brewed_after=${brewed_after}&` : ""
  }`;

  const urlById = `https://api.punkapi.com/v2/beers/${id}`;

  if (req.method == "GET") {
    id ? (url = urlById) : (url = urlByQuery);
    const beers = await axios.get(url);
    const data = () => {
      return beers.data.map((beer) => {
        if (id) return beer;
        return {
          title: beer.name,
          imageUri: beer.image_url ? beer.image_url : "",
          text: beer.description,
        };
      });
    };
    res.status(200).json({ cards: data() });
  } else {
    res.status(403).json({ error: "Forbidden. Request must be GET" });
  }
};
