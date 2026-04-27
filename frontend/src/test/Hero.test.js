import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {

  test("renders hero image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const signupButton = screen.getByRole("button", { name: /signup/i });

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });

});