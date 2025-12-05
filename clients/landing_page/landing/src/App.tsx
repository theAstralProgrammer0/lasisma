import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyspacModal } from "./screens/HyspacModal";
import { ProfileMrBada } from "./screens/ProfileMrBada";
import { ProfileMrOjerinde } from "./screens/ProfileMrOjerinde";
import { ProfileShakirat } from "./screens/ProfileShakirat";
import { SolarPoweredKiosks } from "./screens/SolarPoweredKiosks";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ProfileShakirat />,
  },
  {
    path: "/profileshakirat",
    element: <ProfileShakirat />,
  },
  {
    path: "/profilemrojerinde",
    element: <ProfileMrOjerinde />,
  },
  {
    path: "/profilemrbada",
    element: <ProfileMrBada />,
  },
  {
    path: "/hyspac-modal",
    element: <HyspacModal />,
  },
  {
    path: "/solar-powered-kiosks-modal",
    element: <SolarPoweredKiosks />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
