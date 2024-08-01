# Documentation #

## Shop Application ##

This project is Next.js application for shop page that lits products based on categories. The application inculdes filtering, sorting, and pagination functionalities.

### Features: ###
Product listing by category
sorting by price, name, or date
price range filtering
Pagination
Breadcrumb navigation
Responsive design

### Technologies Used: ###
Next.js
React
Tailwind CSS
TypeScript
React Icons
Next/Image
Fetch API

### Deployment: ###
It can be deployed on vercel since this is the frontend, once the backend is ready they can all be move to a VPS

### File Structure: ###
public
    products.json
    /images
/src
    /app
        /(pages)
        /(auth)
            /sign-in
                page.tsx
            /sign-up
                page.tsx
        /admin
        /shop
            /[productId]
                page.tsx
            /cart
                /checkout
                    /order-details
                        page.tsx
                    page.tsx
                page.tsx
            /category
                /[category]
                    page.tsx
        /components
            /BlogSlider
                BlogSlider.tsx
            /CartPopup
                CartPopup.tsx
            /FeaturedProducts
                FeaturedProducts.tsx
            /Footer
                Footer.tsx
            /Header
                Header.tsx
            /HeroSlider
                HeroSlider.tsx
            /MainCategory
                MainCategory.tsx
            /NewArrivals
                NewArrivals.tsx
            /Promotion
                Promotion.tsx
            /Upperbanner
                UpperBanner.tsx
        /context
            CartContext.tsx
        globals.css
        layout.tsx
        page.tsx
README.md