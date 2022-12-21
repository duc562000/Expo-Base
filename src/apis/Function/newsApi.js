import { GetData } from "../helpers";
import url from "../url";

export const newsApi = async (body) =>
  GetData(url.urlGetNews, body)
    .then((res) => res)
    .catch((err) => err);
