### screens

--> landing page (listing) : which shows all items (around 50+)
--> product page (details) : which shows information about the product (apart from the image and name, all other information can be same for all the products). info for items : description, pricing, rating, reviews
--> cart page : which shows all the items in your cart which you can increase and decrease quantity which shows change in total bill. should also ask for my address for checkout.
--> orders page : which shows all orders done till now - order contains items, item quantities, total amount

### features :

    - user can add a product to cart from landing page or product page
    - when i refresh the page,
        - It should show what all things were there in my cart last time i visited
        - It should show the address on the cart page and other details i added last time i visited
        - It should show the orders i have made till now

### actions

--- landing and product ---
=> getProducts (api -> products state)
=> openCartDrawer (boolean)
--- landing and product ---

--- cart ---
=> addToCart ( object )
=> deleteCartItem (id)
=> updateQuantity (id, quantity)
=> getSubTotal
=> getTotal
--- cart ---

--- orders ---
=> allOrders ()
=> placeOrder (array)
--- orders ---

> address for checkout and total bill change when the quantity is changed

### reducers

--- landing and product ---
=> products
=> openCartDrawer (boolean)
--- landing and product ---

--- cart ---
=> addToCart (id | object -> array) (array -> local storage)
=> deleteCartItem (id -> array) (array -> local storage)
=> updateQuantity (id ) (array -> local storage)
=> getSubTotal
=> getTotal
--- cart ---

--- orders ---
=> allOrders ()
=> placeOrder (obj[])
--- orders ---

### work Done

-> getProducts
-> addToCart
-> deleteCartItem
-> updateQuantity
-> showCart
-> getTotal
-> divide detail page into components - done
-> fetch data in detail page - done
-> Footer - done
-> Responsiveness of checkout (done)
-> (smooth animation in dropdown)
-> orders reducers
-> store into local storage
-> When nothing to show, render a beautiful 404 type page
-> Divide checkout section into Components
-> place order
-> feedback modal/message on placing order
-> orders page
-> orders page / place order (actual design)
-> placeholder for orders page
-> buy now working fix
--> Navbar
-> Review section
--> Home page hero section
-> Home page
--> second section
--> tailwind se promo section
-> Navbar
-> products section pulse fix
-> products section pulse fix
--> lorem ipsum img
-> logo fix
-> set md responsive

### remaining

--> compress tailwind
--> change hero img to png
--> replace hero icon to svg

### Kirua Todo

### Sidd Todo

### Vansh Todo
