import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ActionPlansModal } from "./screens/ActionPlansModal";
import { Home } from "./screens/Home";
import { HyspacModal } from "./screens/HyspacModal";
import { ProfileAuditor } from "./screens/ProfileAuditor";
import { ProfileMrBada } from "./screens/ProfileMrBada";
import { ProfileMrOjerinde } from "./screens/ProfileMrOjerinde";
import { ProfileShakirat } from "./screens/ProfileShakirat";
import { ServicesOverlay } from "./screens/ServicesOverlay";
import { SolarPoweredKiosks } from "./screens/SolarPoweredKiosks";
import { UrbanAgricModal } from "./screens/UrbanAgricModal";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
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
  {
    path: "/urban-agric-modal",
    element: <UrbanAgricModal />,
  },
  {
    path: "/action-plans-modal",
    element: <ActionPlansModal />,
  },
  {
    path: "/services-overlay",
    element: <ServicesOverlay />,
  },
  {
    path: "/profileauditor",
    element: <ProfileAuditor />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
