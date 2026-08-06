
// ==================== PRODUCT DATA ====================
// Complete product database for search functionality
const products = [
    // Coffee & Beverages
    { id: 1, name: "Iced Vienna Creamy Latte", category: "drinks", price: 456.75, image: "IcedVienna.webp", description: "espresso, milk, mocha, and Vanilla Mascarpone sauce over ice" },
    { id: 2, name: "Caramel Java Chip Frappuccino", category: "drinks", price: 446.25, image: "Caramel.webp", description: "Rich in flavour coffee blended with milk, chocolate chips, caramel syrup and Ice" },
    { id: 3, name: "Cappuccino", category: "drinks", price: 299.00, image: "Cappucino.webp", description: "Classic Italian coffee drink with espresso and steamed milk foam" },
    { id: 4, name: "Cold Brew", category: "drinks", price: 350.00, image: "Cold Brew.webp", description: "Smooth and refreshing cold brewed coffee" },
    { id: 5, name: "Cold Coffee", category: "drinks", price: 320.25, image: "Cold Coffee.webp", description: "Chilled coffee with ice and cream" },
    { id: 6, name: "Masala Chai", category: "drinks", price: 150.00, image: "Masala Chai.webp", description: "Traditional Indian spiced tea" },
    { id: 7, name: "Green Tea", category: "drinks", price: 120.00, image: "Green Tea.webp", description: "Healthy and refreshing green tea" },
    { id: 8, name: "English Tea", category: "drinks", price: 130.00, image: "English Tea.webp", description: "Classic English breakfast tea" },
    { id: 9, name: "Chai Tea Latte", category: "drinks", price: 180.00, image: "Chai Tea Latte.webp", description: "Creamy and spiced tea latte" },
    { id: 10, name: "Elaichi Chai", category: "drinks", price: 160.00, image: "Elaichi Chai.webp", description: "Cardamom flavored Indian tea" },
    { id: 11, name: "Iced Shaken Espresso", category: "drinks", price: 280.00, image: "Iced Shaken.webp", description: "Shaken espresso with milk and ice" },
    { id: 12, name: "Iced Signature", category: "drinks", price: 320.00, image: "Iced Signature.webp", description: "Special signature iced beverage" },
    { id: 13, name: "Iced Barista", category: "drinks", price: 350.00, image: "IcedBarista.webp", description: "Barista's special iced coffee" },
    { id: 14, name: "Iced Ginger Bread", category: "drinks", price: 380.00, image: "IcedGingerBread.webp", description: "Gingerbread flavored iced coffee" },
    { id: 15, name: "Vienna Creamy Latte", category: "drinks", price: 400.00, image: "ViennaCreamy.webp", description: "Creamy Vienna style latte" },
    { id: 16, name: "Vienna Frappuccino", category: "drinks", price: 420.00, image: "ViennaFrap.webp", description: "Vienna style coffee frappe" },
    { id: 17, name: "Vietnamese Coffee", category: "drinks", price: 350.00, image: "Vietnamese.webp", description: "Traditional Vietnamese coffee with condensed milk" },
    { id: 18, name: "Filter Coffee", category: "drinks", price: 150.00, image: "Filter coffee.webp", description: "South Indian filter coffee" },
    { id: 19, name: "Classic Hot Coffee", category: "drinks", price: 250.00, image: "ClassicHot.webp", description: "Classic hot coffee with milk" },
    { id: 20, name: "Cold Ginger", category: "drinks", price: 180.00, image: "Cold Ginger.webp", description: "Cold ginger drink" },
    { id: 21, name: "Cranberry", category: "drinks", price: 200.00, image: "Cranberry.webp", description: "Cranberry juice drink" },
    { id: 22, name: "Mango Dragonfruit", category: "drinks", price: 351.75, image: "Mango Dragon.webp", description: "Tropical mango and dragonfruit flavors mixed with tangy lemonade" },
    { id: 23, name: "Pink Drink", category: "drinks", price: 280.00, image: "Pink Drink.webp", description: "Refreshing pink colored drink" },
    { id: 24, name: "Cold Brew Vanilla", category: "drinks", price: 380.00, image: "ColdBrew Vanilla.webp", description: "Cold brew with vanilla flavor" },
    { id: 25, name: "Barista Pride Latte", category: "drinks", price: 350.00, image: "BaristaPride.webp", description: "Creamy and hot Barista Pride Latte" },
    { id: 26, name: "Iced Barista Pride Latte", category: "drinks", price: 375.00, image: "IcedBarista.webp", description: "Iced Barista Pride Latte" },
    { id: 27, name: "Iced Gingerbread Latte", category: "drinks", price: 395.00, image: "IcedGingerBread.webp", description: "Sweet and delicately spicy gingerbread flavors with espresso and milk" },
    { id: 28, name: "Toffee Nut Crunch Latte", category: "drinks", price: 385.00, image: "ToffeeNutCrunch.webp", description: "Steamed milk, espresso, buttery toffee and toasted nuts" },
    { id: 29, name: "Crunchy Red Hat Mocha Latte", category: "drinks", price: 420.00, image: "CrunchyRed.webp", description: "Classic New York Cheesecake inspired latte with creamy satiny texture" },
    { id: 30, name: "Vienna Creamy Frappuccino", category: "drinks", price: 420.00, image: "ViennaFrap.webp", description: "Delightful blend of coffee, milk, mocha, and Vanilla Mascarpone sauce" },
    { id: 31, name: "Creme Brulee Frappuccino", category: "drinks", price: 395.00, image: "Creme.webp", description: "Decadent blend of coffee and milk infused with Crème Brulee flavors" },
    { id: 32, name: "Coffee Frappuccino", category: "drinks", price: 350.00, image: "CoffeeFrap.webp", description: "Coffee meets milk and ice in a blender" },
    { id: 33, name: "Green Tea Latte", category: "drinks", price: 220.00, image: "Green Tea.webp", description: "Smooth and creamy matcha lightly sweetened with steamed milk" },
    { id: 34, name: "English Breakfast Black Tea", category: "drinks", price: 130.00, image: "English Tea.webp", description: "Breakfast-style black tea of malty boldness and bright flavour" },
    { id: 35, name: "Emperor'S Clouds And Mist Green Tea", category: "drinks", price: 180.00, image: "Emperor.webp", description: "Curly silver-speckled green tea with lightly floral, toasty, and softly sweet finish" },
    { id: 36, name: "Strawberry Acai Refresher", category: "drinks", price: 295.00, image: "Cranberry.webp", description: "Sweet strawberry and antioxidant-rich acai berry blended with coconut milk and ice" },
    { id: 37, name: "Very Berry Hibiscus", category: "drinks", price: 275.00, image: "Cranberry.webp", description: "Hibiscus and mixed berries with real fruit juice and green coffee extract" },
    { id: 38, name: "Pineapple Coconut Refresher", category: "drinks", price: 285.00, image: "Mango Dragon.webp", description: "Tropical pineapple and coconut flavors with coconut milk" },
    { id: 39, name: "Peach Green Tea Lemonade", category: "drinks", price: 265.00, image: "Green Tea.webp", description: "Juicy peach flavors combined with green tea and tangy lemonade" },
    { id: 40, name: "Cold Brew Black", category: "drinks", price: 350.00, image: "Cold Brew.webp", description: "Kenya coffee freshly ground and steeped for 48 hours, served over ice unsweetened" },
    { id: 41, name: "Iced Shaken Strawberry Green Tea Lemonade", category: "drinks", price: 280.00, image: "Green Tea.webp", description: "Premium Teavana Green Tea shaken with strawberry sauce and tangy lemonade" },
    { id: 42, name: "Cold Brew with Ginger Ale", category: "drinks", price: 380.00, image: "Cold Brew.webp", description: "Double layered cold brew beverage with ginger ale" },
    { id: 43, name: "Cold Brew with Vanilla Sweet Cream", category: "drinks", price: 395.00, image: "ColdBrew Vanilla.webp", description: "Cold brew over ice topped with vanilla sweet cream" },
    { id: 44, name: "Toffee Nut Crunch Cold Brew", category: "drinks", price: 385.00, image: "ToffeeNutCrunch.webp", description: "Cold brew paired with buttery toffee nut foam topped with graham crackers" },
    { id: 45, name: "Cold brew malt", category: "drinks", price: 340.00, image: "malt.webp", description: "Cold Brew blended with vanilla ice cream and malt" },
    { id: 46, name: "Pistachio Java Chip Milkshake", category: "drinks", price: 365.00, image: "Pistachio.webp", description: "Luxurious pistachio flavours meet milk and ice" },
    { id: 47, name: "Mango Dragonfruit Refresher", category: "drinks", price: 295.00, image: "Mango Dragon.webp", description: "Vibrant lemonade, sweet mango and refreshing dragonfruit flavors hand-shaken with ice" },
    { id: 48, name: "Marshmallow Hot Chocolate", category: "drinks", price: 250.00, image: "Marshmallow.webp", description: "Decadent hot chocolate crowned with marshmallows" },
    { id: 49, name: "Iced Signature Chocolate", category: "drinks", price: 280.00, image: "Iced Signature.webp", description: "Four cocoas and chilled milk over ice topped with chocolate powder" },
    
    // Food Items
    { id: 25, name: "Margherita Pizza", category: "food", price: 399.00, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop&crop=face", description: "Classic thin crust pizza with fresh tomato sauce, mozzarella cheese, and basil leaves" },
    { id: 26, name: "Veggie Burger", category: "food", price: 299.00, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop&crop=face", description: "Plant-based patty with lettuce, tomato, onion, pickles, and special sauce in a brioche bun" },
    { id: 27, name: "Cheese Garlic Bread", category: "food", price: 199.00, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/07/cheese-garlic-bread-recipe-1.jpg", description: "Toasted bread with garlic butter and melted mozzarella cheese" },
    { id: 28, name: "Crispy French Fries", category: "food", price: 199.00, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg", description: "Golden crispy potato fries seasoned with sea salt and black pepper, served with ketchup and mayo" },
    { id: 29, name: "Tandoori Soya Chaap", category: "food", price: 250.00, image: "Tandoori Soya Chaap.webp", description: "Tandoori flavored soy chaap" },
    { id: 30, name: "Chilli Cheese Toast", category: "food", price: 180.00, image: "Chilli Cheese Toast.webp", description: "Spicy cheese toast with chili flakes" },
    { id: 31, name: "Veggie Wrap", category: "food", price: 279.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9K3xwyV3Od3JXZfFgNhwb2h8QnGxcT3QmaQ&s", description: "Whole wheat wrap filled with grilled vegetables, hummus, feta cheese, and fresh greens" },
    { id: 32, name: "Spaghetti Aglio e Olio", category: "food", price: 329.00, image: "https://images.services.kitchenstories.io/UY89c4f471NaK1C-BQ07FGZ_qVA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R131-final-photo-3-sg.jpg", description: "Simple pasta with garlic, olive oil, red pepper flakes, and parsley" },
    { id: 33, name: "Caprese Salad", category: "food", price: 269.00, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=400&fit=crop&crop=face", description: "Fresh mozzarella, tomatoes, basil leaves, olive oil, and balsamic glaze" },
    { id: 34, name: "Paneer Tikka Sandwich", category: "food", price: 259.00, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop&crop=face", description: "Grilled spiced paneer with mint chutney, onions, and bell peppers in multigrain bread" },
    { id: 35, name: "Vegetable Spring Rolls", category: "food", price: 229.00, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop&crop=face", description: "Crispy spring rolls filled with mixed vegetables, served with sweet chili sauce" },
    { id: 36, name: "Mediterranean Bowl", category: "food", price: 349.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&crop=face", description: "Quinoa, chickpeas, olives, feta, cucumber, and tahini dressing" },
    { id: 37, name: "Vegetable Lasagna", category: "food", price: 379.00, image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=400&fit=crop&crop=face", description: "Layers of pasta, vegetables, tomato sauce, and three types of cheese" },
    { id: 38, name: "Mushroom Risotto", category: "food", price: 349.00, image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg", description: "Creamy arborio rice with wild mushrooms, parmesan, and herbs" },
    { id: 39, name: "Veggie Quesadilla", category: "food", price: 289.00, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=400&fit=crop&crop=face", description: "Flour tortilla filled with cheese, bell peppers, corn, beans, and spices" },
    { id: 40, name: "Veg Club Sandwich", category: "food", price: 269.00, image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&h=400&fit=crop&crop=face", description: "Triple-decker sandwich with avocado, cucumber, tomato, cheese, and lettuce" },
    { id: 41, name: "Alfredo Pasta", category: "food", price: 379.75, image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg", description: "Creamy Alfredo pasta tossed in a rich, cheesy white sauce with subtle garlic and herbs" },
    { id: 42, name: "Tandoori Soya Chaap", category: "food", price: 250.00, image: "Tandoori Soya Chaap.webp", description: "Tandoori flavored soy chaap" },
    
    // Desserts
    { id: 31, name: "Chocolate Mousse", category: "desserts", price: 285.00, image: "https://laneandgreyfare.com/wp-content/uploads/2024/07/Easy-Chocolate-Mousse-Eggless-1.jpg", description: "Light and airy dark chocolate mousse with whipped cream topping" },
    { id: 32, name: "New York Cheesecake", category: "desserts", price: 425.00, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w-400&h-400&fit=crop", description: "Classic New York style cheesecake" },
    { id: 33, name: "Toffee Nut Crunch", category: "desserts", price: 350.00, image: "ToffeeNutCrunch.webp", description: "Delicious toffee nut dessert" },
    { id: 34, name: "Pistachio", category: "desserts", price: 380.00, image: "Pistachio.webp", description: "Pistachio flavored dessert" },
    { id: 35, name: "Toffee", category: "desserts", price: 300.00, image: "ToffeeNut.webp", description: "Chewy toffee candy" },
    { id: 36, name: "Marshmallow", category: "desserts", price: 150.00, image: "Marshmallow.webp", description: "Fluffy marshmallow treat" },
    { id: 37, name: "Creme", category: "desserts", price: 250.00, image: "Creme.webp", description: "Creamy custard dessert" },
    { id: 38, name: "Crunchy Red", category: "desserts", price: 280.00, image: "CrunchyRed.webp", description: "Crunchy red velvet dessert" },
    { id: 39, name: "Emperor", category: "desserts", price: 400.00, image: "Emperor.webp", description: "Emperor's special dessert" },
    { id: 40, name: "Classic Tiramisu", category: "desserts", price: 395.00, image: "https://xoxobella.com/wp-content/uploads/2024/10/Authentic-Italian-Tiramisu-featured.jpg", description: "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream" },
    { id: 41, name: "Chocolate Lava Cake", category: "desserts", price: 345.00, image: "https://eightforestlane.com/wp-content/uploads/2020/02/Chocolate-Lava-Cakes_SQ-1.jpg", description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream" },
    { id: 42, name: "Vanilla Crème Brûlée", category: "desserts", price: 365.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQII_r0fhSC0mMxFcS8sCnaDjrHRfPyDjtQ&s", description: "Rich custard base topped with caramelized sugar crust" },
    { id: 43, name: "French Macarons Box", category: "desserts", price: 485.00, image: "https://crumblynyc.com/wp-content/uploads/2024/05/macarons-1.webp", description: "Assorted flavors of delicate French macarons: vanilla, chocolate, raspberry, pistachio" },
    { id: 44, name: "Red Velvet Cupcake", category: "desserts", price: 185.00, image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop", description: "Moist red velvet cupcake topped with cream cheese frosting and red velvet crumbs" },
    { id: 45, name: "Mango Mousse Cake", category: "desserts", price: 375.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop", description: "Light and airy mango mousse layered with sponge cake and fresh mango chunks" },
    { id: 46, name: "Salted Caramel Brownie", category: "desserts", price: 255.00, image: "https://www.bakeandbacon.com/wp-content/uploads/2020/11/salted-caramel-brownie-6.jpg", description: "Fudgy chocolate brownie with sea salt caramel swirls and walnut pieces" },
    { id: 47, name: "Berry Pavlova", category: "desserts", price: 325.00, image: "https://www.seasonedkitchen.com/wp-content/uploads/pavlova-recipe-1-1.jpg", description: "Crisp meringue base topped with whipped cream and fresh mixed berries" },
    { id: 48, name: "Coconut Panna Cotta", category: "desserts", price: 295.00, image: "https://www.anasbakingchronicles.com/wp-content/uploads/2022/04/Coconut-Panna-Cotta-featured-image.jpg", description: "Silky coconut cream dessert with mango coulis and toasted coconut flakes" },
    { id: 49, name: "Strawberry Cheesecake", category: "desserts", price: 415.00, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop", description: "Creamy cheesecake with fresh strawberry topping and graham crust" },
    { id: 50, name: "Classic Apple Pie", category: "desserts", price: 335.00, image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=400&h=400&fit=crop", description: "Warm apple pie with cinnamon spices and flaky pastry crust" },
    { id: 51, name: "Carrot Cake", category: "desserts", price: 365.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop", description: "Moist carrot cake with cream cheese frosting and walnut pieces" },
];

// ==================== SEARCH FUNCTIONALITY ====================

// Initialize search when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("White Valley Cafe - Search functionality initialized");
    console.log("Total products loaded:", products.length);
    
    // Add toast styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Get search input element
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        console.log("Search input found:", searchInput);
        
        // Add event listeners for search
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keyup', handleSearch);
        searchInput.addEventListener('search', handleSearch);
        
        // Create search results dropdown
        createSearchResultsDropdown();
    } else {
        console.error("Search input not found!");
    }
});

// Create dropdown element for search results
function createSearchResultsDropdown() {
    const searchBox = document.querySelector('.search-box');
    if (!searchBox) return;
    
    // Remove existing dropdown if any
    const existingDropdown = document.querySelector('.search-results-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    // Create new dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'search-results-dropdown';
    dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
        border: 1px solid #ddd;
        margin-top: 5px;
    `;
    searchBox.appendChild(dropdown);
    
    console.log("Search results dropdown created");
}

// Main search handler
function handleSearch(event) {
    console.log("Search event triggered:", event.type);
    
    const searchInput = document.querySelector('.search-box input');
    const dropdown = document.querySelector('.search-results-dropdown');
    
    if (!searchInput) {
        console.error("Search input not found");
        return;
    }
    
    // Get search query and trim whitespace
    let query = searchInput.value.trim();
    console.log("Search query (after trim):", `"${query}"`);
    
    // Filter items on current page in real-time
    filterCurrentPageItems(query);
    
    // Hide dropdown (not used - we show cross-category results instead)
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Show dropdown on focus
function showDropdownOnFocus() {
    const searchInput = document.querySelector('.search-box input');
    const dropdown = document.querySelector('.search-results-dropdown');
    
    if (searchInput && dropdown && searchInput.value.trim().length > 0) {
        dropdown.style.display = 'block';
    }
}

// Filter items on current page in real-time as user types
function filterCurrentPageItems(query) {
    const searchTerm = query.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
    
    // Find the main content container (works for both Menu pages and home page)
    const rowContainer = document.querySelector('.row.g-3') || document.querySelector('.carousel .row') || document.querySelector('.container.my-5 .row');
    
    // Get container for search results
    let container = document.querySelector('.container.mt-3');
    
    // For home page, use a different container
    if (!container) {
        container = document.querySelector('.carousel');
    }
    
    if (searchTerm.length > 0) {
        // When searching, hide original cards and show only search results
        if (rowContainer) {
            rowContainer.style.display = 'none';
        }
        
        // Also hide carousel section on home page
        const carouselSection = document.querySelector('.carousel');
        if (carouselSection) {
            carouselSection.style.display = 'none';
        }
        
        // Show cross-category results
        showCrossCategoryResults(query);
    } else {
        // When search is cleared, show original content again
        if (rowContainer) {
            rowContainer.style.display = '';
        }
        
        // Show carousel again
        const carouselSection = document.querySelector('.carousel');
        if (carouselSection) {
            carouselSection.style.display = '';
        }
        
        // Remove cross-category results
        const existingResults = document.getElementById('cross-category-results');
        if (existingResults) {
            existingResults.remove();
        }
        
        // Remove the search heading
        const existingHeading = document.getElementById('search-results-heading');
        if (existingHeading) {
            existingHeading.remove();
        }
    }
    
    console.log("Current page filtered for:", searchTerm);
}

// Show cross-category search results when searching
function showCrossCategoryResults(query) {
    // Try to find container - works for both Menu pages and home page
    let container = document.querySelector('.container.mt-3');
    
    // For home page, use a different approach - insert after navbar
    if (!container) {
        const navbar = document.querySelector('nav');
        if (navbar) {
            container = navbar.nextElementSibling;
        }
    }
    
    if (!container) return;
    
    // Remove existing results if any
    const existingResults = document.getElementById('cross-category-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Get search results from database
    const results = searchProducts(query);
    
    // If no results found, show "No items found" message
    if (results.length === 0) {
        let heading = document.getElementById('search-results-heading');
        if (!heading) {
            heading = document.createElement('h5');
            heading.id = 'search-results-heading';
            heading.className = 'mb-3 mt-3';
            heading.style.padding = '20px';
            
            // Try to insert after container
            if (container.parentNode) {
                container.parentNode.insertBefore(heading, container.nextSibling);
            }
        }
        heading.textContent = `No items found`;
        heading.style.color = '#dc3545'; // Red color for no results
        heading.style.textAlign = 'center';
        return;
    }
    
    // Get product names already displayed on current page (visible cards only)
    const currentPageProducts = [];
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Only get items that are currently visible (not hidden by search)
        if (card.offsetParent !== null && card.style.display !== 'none') {
            const productTitle = card.querySelector('.product-title') || card.querySelector('.card-title');
            if (productTitle) {
                currentPageProducts.push(productTitle.textContent.trim().toLowerCase());
            }
        }
    });
    
    console.log("Current page products:", currentPageProducts);
    console.log("Search results:", results.map(r => r.name));
    
    // Filter out items that are already on the current page (case-insensitive)
    const filteredResults = results.filter(product => {
        const productNameLower = product.name.toLowerCase();
        return !currentPageProducts.some(pageProduct => 
            pageProduct.includes(productNameLower) || productNameLower.includes(pageProduct)
        );
    });
    
    console.log("Filtered results:", filteredResults.map(r => r.name));
    
    // If all results are already shown on current page, don't show duplicate
    if (filteredResults.length === 0) {
        // Just update the heading to show total count
        let heading = document.getElementById('search-results-heading');
        if (!heading) {
            heading = document.createElement('h5');
            heading.id = 'search-results-heading';
            heading.className = 'mb-3 mt-3';
            heading.style.color = '#007b43';
            heading.style.padding = '20px';
            container.parentNode.insertBefore(heading, container.nextSibling);
        }
        heading.textContent = `Search Results (${results.length} items found for "${query}")`;
        return;
    }
    
    // Create results container
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'cross-category-results';
    resultsDiv.className = 'row g-3 mt-2';
    resultsDiv.style.backgroundColor = 'bisque';
    resultsDiv.style.padding = '20px';
    resultsDiv.style.borderRadius = '10px';
    resultsDiv.style.marginTop = '20px';
    
    // Add heading with total count (just showing total, not breakdown)
    const heading = document.createElement('h5');
    heading.id = 'search-results-heading';
    heading.textContent = `Search Results (${results.length} items found for "${query}")`;
    heading.className = 'mb-3';
    heading.style.color = '#007b43'; // Green color for results found
    resultsDiv.appendChild(heading);
    
    // Add result cards
    results.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';
        col.innerHTML = `
            <div class="card m-2 p-3">
                <div class="d-flex align-items-center">
                    <img src="${product.image}" alt="${product.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
                    <div class="ms-3">
                        <p class="product-title">${product.name}</p>
                        <p class="product-desc" style="font-size: 0.8rem;">${product.description.substring(0, 50)}...</p>
                        <span class="price">₹ ${product.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <button class="btn btn-add" data-name="${product.name}" data-price="${product.price}">Add Item</button>
                </div>
            </div>
        `;
        resultsDiv.appendChild(col);
    });
    
    // Insert after the container
    const firstContent = container.querySelector('.tab-content');
    if (firstContent) {
        container.insertBefore(resultsDiv, firstContent);
    } else {
        container.appendChild(resultsDiv);
    }
    
    // Add click handlers for add to cart buttons
    addCartHandlers(resultsDiv);
    
    console.log("Cross-category results shown:", results.length);
}

// Add cart handlers for dynamically added items
function addCartHandlers(container) {
    container.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function() {
            let itemName = this.getAttribute('data-name');
            let itemPrice = parseFloat(this.getAttribute('data-price'));
            
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }
            
            localStorage.setItem("cart", JSON.stringify(cart));
            
            // Show success message
            showToast(itemName + ' added to cart!');
            
            // Update cart count if exists
            updateCartCount();
        });
    });
}

// Show toast notification
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #007b43;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Search algorithm - case-insensitive, partial matching
function searchProducts(query) {
    console.log("Searching for:", query);
    
    // Convert query to lowercase for case-insensitive search
    const searchTerm = query.toLowerCase().trim();
    
    // Validate search term
    if (searchTerm.length === 0) {
        console.log("Empty search term - returning empty results");
        return [];
    }
    
    console.log("Searching with term:", `"${searchTerm}"`);
    console.log("Products in database:", products.length);
    
    // Filter products using partial matching (includes, not just exact match)
    // Only search in PRODUCT NAME, not in description
    const results = products.filter(product => {
        // Search in product name only (partial match)
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        
        if (nameMatch) {
            console.log(`Match found: ${product.name}`);
        }
        
        return nameMatch;
    });
    
    console.log("Total matches:", results.length);
    return results;
}

// Display search results in dropdown
function displaySearchResults(results, dropdown) {
    console.log("Displaying", results.length, "results");
    
    // Clear previous results
    dropdown.innerHTML = '';
    
    // Limit results to 8 items for performance
    const displayResults = results.slice(0, 8);
    
    displayResults.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.style.cssText = `
            display: flex;
            align-items: center;
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.2s ease;
        `;
        
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" 
                 style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 12px;">
            <div style="flex: 1;">
                <div style="font-weight: bold; color: #333; font-size: 14px;">${product.name}</div>
                <div style="font-size: 12px; color: #666;">${product.description.substring(0, 50)}...</div>
                <div style="font-size: 13px; color: #007b43; font-weight: bold;">₹ ${product.price.toFixed(2)}</div>
            </div>
        `;
        
        // Add click event to navigate to product
        resultItem.addEventListener('click', () => {
            console.log("Product clicked:", product.name);
            navigateToProduct(product);
        });
        
        // Add hover effect
        resultItem.addEventListener('mouseenter', () => {
            resultItem.style.backgroundColor = '#f8f9fa';
        });
        resultItem.addEventListener('mouseleave', () => {
            resultItem.style.backgroundColor = 'white';
        });
        
        dropdown.appendChild(resultItem);
    });
    
    // Add "View all results" button if there are more results
    if (results.length > 8) {
        const viewAllButton = document.createElement('div');
        viewAllButton.className = 'view-all-results';
        viewAllButton.style.cssText = `
            padding: 12px;
            text-align: center;
            background-color: #f8f9fa;
            cursor: pointer;
            color: #007b43;
            font-weight: bold;
            border-radius: 0 0 10px 10px;
        `;
        viewAllButton.textContent = `View all ${results.length} results`;
        viewAllButton.addEventListener('click', () => {
            console.log("View all results clicked");
            window.location.href = 'Menu.html';
        });
        dropdown.appendChild(viewAllButton);
    }
    
    // Show dropdown
    dropdown.style.display = 'block';
    console.log("Search results dropdown displayed");
}

// Display no results message
function displayNoResults(dropdown, query) {
    console.log("No results found for:", query);
    
    dropdown.innerHTML = `
        <div style="padding: 20px; text-align: center; color: #666;">
            <i class="fas fa-search" style="font-size: 24px; margin-bottom: 10px; color: #ddd;"></i>
            <p style="margin: 0; font-size: 14px;">No products found for "<strong>${escapeHtml(query)}</strong>"</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">Try different keywords</p>
        </div>
    `;
    
    dropdown.style.display = 'block';
}

// Navigate to product
function navigateToProduct(product) {
    console.log("Navigating to product:", product.name);
    console.log("Product details:", product);
    
    // Store selected product in session storage for use on other pages
    try {
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        console.log("Product saved to session storage");
    } catch (e) {
        console.error("Error saving to session storage:", e);
    }
    
    // Navigate based on product category
    if (product.category === 'food') {
        window.location.href = 'Food.html';
    } else if (product.category === 'drinks') {
        window.location.href = 'Drinks.html';
    } else if (product.category === 'desserts') {
        window.location.href = 'Deserts.html';
    } else {
        // Default to Menu.html for other categories
        window.location.href = 'Menu.html';
    }
}

// Utility function to escape HTML (prevent XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close search dropdown when clicking outside
document.addEventListener('click', function(event) {
    const searchBox = document.querySelector('.search-box');
    const dropdown = document.querySelector('.search-results-dropdown');
    
    if (searchBox && dropdown && !searchBox.contains(event.target)) {
        dropdown.style.display = 'none';
        console.log("Search dropdown closed (clicked outside)");
    }
});
