
import SearchBar from '../components/store/SearchBar'
import ProductFilter from '../components/store/ProductFilter'
import ProductGrid from '../components/store/ProductGrid'
import '../components/store/store.css'

export default function Store() {
  return (
    <div className="store-page">

      <div className="store-header">
        <h1>Community Store</h1>

        <SearchBar
          initialValue=""
          onSearch={() => {}}
        />
      </div>

      <ProductFilter
        categories={[]}
        loading={false}
        selectedCategoryId={null}
        onSelect={() => {}}
      />

      <ProductGrid
        products={[]}
        loading={false}
        error={null}
      />

    </div>
  )
}

