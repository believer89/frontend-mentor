import productImage from './assets/image-product-mobile.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import all the icons in Free Solid, Free Regular, and Brands styles */
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fas, far, fab)

function App() {

  return (
    <>
      {/* Parent container */}
      <div className = "min-h-screen bg-neutral-cream flex items-center justify-center font-sans px-4 py-8">
        {/* Card container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-sm md:max-w-xl md:flex md:flex-row">
          {/* product image section */}
          <div className="md:w-1/2">
            <img src={productImage} alt="Gabrielle Essence Eau De Parfum" className="w-full h-auto object-cover md:w-auto md:h-full" />
          </div>
          {/* product details section */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm tracking-[.25em] uppercase text-neutral-grey mb-3 font-medium ">Perfume</p>
              <h1 className="font-serif text-4xl leading-none text-neutral-black mb-4 font-bold ">Gabrielle Essence Eau De Parfum</h1>

              {/* Description */}
              <p className="text-body text-neutral-grey leading-relaxed mb-6 font-medium">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            </div>
            {/* Pricing Block */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Current Price */}
                <span className="font-serif text-4xl text-green-500 font-bold">$149.99</span>
                {/* Old Price */}
                <span className="text-body text-neutral-grey line-through">$169.99</span>
              </div>
            {/* add to cart button */}
              <button className="
                w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg 
                flex items-center justify-center hover:bg-green-700 hover:cursor-pointer transition duration-300
              ">
                {/* cart icon */}
                <svg className="w-5 h-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
