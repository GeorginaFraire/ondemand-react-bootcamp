import { rest } from "msw";
import { API_BASE_URL } from "../src/utils/constants";
import { Banners } from "../src/mocks/featured-banners";
import { Categories } from "../src/mocks/product-categories";
import {Feature_Products} from "../src/mocks/featured-products";

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({"refs":[{"id":"master","ref":"YZaBvBIAACgAvnOP"}]}));
  }),

  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
   
    const query = req.url.searchParams.get("q");
    let jsonResponse = null;
    
    if (query == '[[at(document.type, "banner")]]') {
      jsonResponse = Banners;
   
    }
    if (query == '[[at(document.type, "category")]]') {
      jsonResponse = Categories;
    }

    if (query == '[[at(document.type, "product")]]') {
        jsonResponse = Feature_Products;
      }

    return res(ctx.status(200), ctx.json(jsonResponse));
  }),
];
