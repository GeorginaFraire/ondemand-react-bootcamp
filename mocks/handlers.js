import { rest } from "msw";
import { API_BASE_URL } from "../src/utils/constants";
import { Banners } from "../src/mocks/featured-banners";
import { Categories } from "../src/mocks/product-categories";
import { Feature_Products } from "../src/mocks/featured-products";
import { Product } from "../src/mocks/product_YWL8XBIAAC0AzuPZ";

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ refs: [{ id: "master", ref: "YZaBvBIAACgAvnOP" }] })
    );
  }),

  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams.get("q");
    let jsonResponse = null;

    console.log("******************** query *****************", query);

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
    
   // console.log('******************** jsonResponse *****************', jsonResponse);

    return res(ctx.status(200), ctx.json(jsonResponse));
  }),
];
