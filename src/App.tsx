import type { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MGXLayout from "./components/mgx/Layout";
import MGXPage from "./pages/MGXPage";
import PageAccueil from "./pages/PageAccueil";
import { MGX_KNOWN_SLUGS, MGX_DEFAULT_SLUG } from "./components/mgx/content";
import NotFound from "./pages/NotFound";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MGXLayout />}>
        <Route index element={<Navigate to={MGX_DEFAULT_SLUG} replace />} />
        <Route path={MGX_DEFAULT_SLUG} element={<PageAccueil />} />
        {MGX_KNOWN_SLUGS.filter((slug) => slug !== MGX_DEFAULT_SLUG).map((slug) => (
          <Route key={slug} path={slug} element={<MGXPage slug={slug} />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
