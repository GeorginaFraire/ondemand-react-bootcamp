import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store/index";

import Slider from "../Components/Feature-Slider/Slider";
import Grid from "../Components/Feature-Category/Grid";
import FeatureProducts from "../Components/Feature-Product/Feature-Product";

const FeatureSlider = () => {
  return <Slider />;
};

const FeatureCategory = () => {
  return (
    <BrowserRouter>
      <Grid />
    </BrowserRouter>
  );
};

const FeatureProduct = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FeatureProducts />
      </BrowserRouter>
    </Provider>
  );
};

describe("Featured Banners Slider", () => {
  it("should render feature slider", async () => {
    render(<FeatureSlider />);
    const slider = await screen.findByTestId("home-feature-slider");
    expect(slider).toBeInTheDocument();
  });

  it("should fetching data ", async () => {
    render(<FeatureSlider />);
    const img = await screen.findByTestId("home-slide-0");
    expect(img).toBeInTheDocument();
  });
});

describe("Categories Carousel/Grid", () => {
  it("should render feature grid", async () => {
    render(<FeatureCategory />);
    const grid = await screen.findByTestId("home-feature-category");
    expect(grid).toBeInTheDocument();
  });

  it("should render category name", async () => {
    render(<FeatureCategory />);
    const category = await screen.findByTestId(
      "home-feature-category-Lighting"
    );
    expect(category).toBeInTheDocument();
  });
});

describe("Featured Products Grid", () => {
  it("should render feature products", async () => {
    render(<FeatureProduct />);
    const products = await screen.findByTestId("home-feature-product");
    expect(products).toBeInTheDocument();
  });

  it("should render product id", async () => {
    render(<FeatureProduct />);
    const product = await screen.findByTestId(
      "home-feature-product-YWL8XBIAAC0AzuPZ"
    );
    expect(product).toBeInTheDocument();
  });
});
