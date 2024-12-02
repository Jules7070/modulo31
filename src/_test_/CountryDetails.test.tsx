// src/__tests__/CountryDetails.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Necesario para manejar rutas en tests
import CountryDetails from "../pages/CountryDetails";

test("renders CountryDetails component", () => {
  render(
    <MemoryRouter initialEntries={["/country/USA"]}>
      <CountryDetails />
    </MemoryRouter>
  );

  // Verificamos que el componente renderiza correctamente
  expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
});
