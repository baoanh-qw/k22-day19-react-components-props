function formatPrice(price) {
  return `${new Intl.NumberFormat('vi-VN').format(price)}đ`
}

function Badge({ children, tone }) {
  const toneClasses = {
    rose: 'bg-rose-100 text-rose-700',
    slate: 'bg-slate-800 text-white',
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${toneClasses[tone]}`}>
      {children}
    </span>
  )
}

function ProductItem({ product, onAddToCart }) {
  const { name, price, image, inStock, discountPercent } = product
  const discountedPrice = Math.round(price * (1 - discountPercent / 100))

  return (
    <article className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:shadow-slate-200/60 ${!inStock ? 'opacity-65' : ''}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {discountPercent > 0 && <Badge tone="rose">Giảm giá {discountPercent}%</Badge>}
          {!inStock && <Badge tone="slate">Hết hàng</Badge>}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="min-h-12 font-semibold leading-6 text-slate-800">{name}</h3>
        <div className="mt-3 min-h-12">
          {discountPercent > 0 ? (
            <>
              <p className="text-lg font-bold text-indigo-700">{formatPrice(discountedPrice)}</p>
              <p className="mt-0.5 text-xs text-slate-400 line-through">{formatPrice(price)}</p>
            </>
          ) : (
            <p className="pt-2 text-lg font-bold text-slate-800">{formatPrice(price)}</p>
          )}
        </div>
        <button
          type="button"
          disabled={!inStock}
          onClick={() => onAddToCart(product, discountedPrice)}
          className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
        </button>
      </div>
    </article>
  )
}

function ProductList({ products }) {
  const handleAddToCart = (product, actualPrice) => {
    window.alert(`Đã thêm "${product.name}" vào giỏ với giá ${formatPrice(actualPrice)}.`)
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}

export default ProductList
