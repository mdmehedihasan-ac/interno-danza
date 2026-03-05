import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import PointeBalletPage from './pages/PointeBalletPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import CategoryPage from './pages/CategoryPage'
import PrivacyPage from './pages/PrivacyPage'
import CookiePage from './pages/CookiePage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Collections */}
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/women/dancewear" element={<CategoryPage categoryKey="women-dancewear" />} />
        <Route path="/collections/women/internodanza-collection" element={<CategoryPage categoryKey="women-internodanza" />} />
        <Route path="/collections/women/collant-essentials" element={<CategoryPage categoryKey="women-collant" />} />
        <Route path="/collections/women/warmup" element={<CategoryPage categoryKey="women-warmup" />} />
        <Route path="/collections/women/accessories-bags" element={<CategoryPage categoryKey="women-accessories" />} />
        <Route path="/collections/girls" element={<CategoryPage categoryKey="girls" />} />
        <Route path="/collections/men-boys" element={<CategoryPage categoryKey="men-boys" />} />

        {/* Pointe & Ballet */}
        <Route path="/pointe-ballet" element={<PointeBalletPage />} />
        <Route path="/pointe-ballet/pointe-shoes" element={<CategoryPage categoryKey="pointe-shoes" />} />
        <Route path="/pointe-ballet/soft-ballet" element={<CategoryPage categoryKey="soft-ballet" />} />
        <Route path="/pointe-ballet/shoe-foot-accessories" element={<CategoryPage categoryKey="shoe-foot-accessories" />} />
        <Route path="/pointe-ballet/jazz-modern" element={<CategoryPage categoryKey="jazz-modern" />} />
        <Route path="/pointe-ballet/cuccarini-danceshoes" element={<CategoryPage categoryKey="cuccarini-danceshoes" />} />
        <Route path="/pointe-ballet/dance-wedding-shoes" element={<CategoryPage categoryKey="dance-wedding" />} />

        {/* Other pages */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />

        {/* Legacy redirects */}
        <Route path="/collezioni" element={<Navigate to="/collections" replace />} />
        <Route path="/collezioni/*" element={<Navigate to="/collections" replace />} />
        <Route path="/servizi" element={<Navigate to="/contact" replace />} />
        <Route path="/contatti" element={<Navigate to="/contact" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
