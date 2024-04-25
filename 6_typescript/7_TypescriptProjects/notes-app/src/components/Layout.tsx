import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types";
type LayoutPropsType = {
  notes: Note[];
};
const Layout = ({ notes }: LayoutPropsType) => {
  // URL'den aldığı idye göre doğru notu bulacak ve bu notun bilgisini çocuk routelara aktaracağız
  const { id } = useParams();

  const found = notes.find((n) => n.id === id);
  // Eğer ki note bulunmazsa anasayfaya yönlendir
  if (!found) return <Navigate to={"/"} />;
  return <Outlet context={found} />;
};

export default Layout;
