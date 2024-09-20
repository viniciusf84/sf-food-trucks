import axios from "axios";

const DATA_URL = "https://data.sfgov.org/api/id/rqzj-sfat.json";

export default async function getFoodTruckFacilities(req, res) {
  const { search, status } = req;

  try {
    let query = "select *, :id";

    if (status) {
      query += ` where status='${status}'`;
    }

    if (search) {
      query +=
        (status ? ` and ` : ` where `) +
        `LOWER(fooditems) like LOWER('%${search}%')`;
    }

    const url = `${DATA_URL}?$query=${encodeURIComponent(query)}`;

    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error(error);
  }
}
