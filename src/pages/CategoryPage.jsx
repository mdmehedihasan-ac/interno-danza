import { Navigate } from 'react-router-dom'
import ProductCategoryTemplate from '../components/ProductCategoryTemplate'
import { productCategoryMap } from '../data/products'

export default function CategoryPage({ categoryKey }) {
  const category = productCategoryMap[categoryKey]

  if (!category) {
    return <Navigate to="/collections" replace />
  }

  return (
    <div className="pt-20">
      <ProductCategoryTemplate category={category} />
    </div>
  )
}
