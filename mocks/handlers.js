import { rest } from "msw";
import { API_BASE_URL } from "../src/utils/constants";
import { Banners } from "../src/mocks/featured-banners";
import { Categories } from "../src/mocks/product-categories";
import { Feature_Products } from "../src/mocks/featured-products";
import { Product } from "../src/mocks/product_YWL8XBIAAC0AzuPZ";
import { Empty } from "../src/mocks/empty";

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ refs: [{ id: "master", ref: "YZaBvBIAACgAvnOP" }] })
    );
  }),

  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    let query = req.url.searchParams.getAll("q");
    let jsonResponse = null;
    if (query.length === 1) {
      query = query[0];
      if (query === '[[at(document.type, "banner")]]') {
        jsonResponse = Banners;
      }
      if (query === '[[at(document.type, "category")]]') {
        jsonResponse = Categories;
      }
      if (query === '[[at(document.type, "product")]]') {
        jsonResponse = Feature_Products;
      }

      if (query === '[[at(document.id, "YWL8XBIAAC0AzuPZ")]]') {
        jsonResponse = Product;
      }
    }

    if (query.length === 2) {
      query = query.join("-");
      if (
        query === '[[at(document.type, "product")]]-[[fulltext(document,"")]]'
      ) {
        jsonResponse = Empty;
      }
      if (
        query ===
        '[[at(document.type, "product")]]-[[fulltext(document,"Poly")]]'
      ) {
        jsonResponse = Product;
      }
    }
    return res(ctx.status(200), ctx.json(jsonResponse));
  }),
];
