// Product Data with online images and GHC prices
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Earbuds",
        price: 299.99,
        originalPrice: 499.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "mobile",
        rating: 4,
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Premium Laptop Backpack",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "laptop",
        rating: 5,
        badge: "New"
    },
    {
        id: 3,
        title: "Fast Charging Power Bank",
        price: 149.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "mobile",
        rating: 4,
        badge: "Sale"
    },
    {
        id: 4,
        title: "Gaming Laptop Pro",
        price: 5999.99,
        originalPrice: 7499.99,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "laptop",
        rating: 5,
        badge: "Hot"
    },
    {
        id: 5,
        title: "Tempered Glass Screen Protector",
        price: 49.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "mobile",
        rating: 3,
        badge: null
    },
    {
        id: 6,
        title: "Ultra-Thin Laptop Sleeve",
        price: 99.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "laptop",
        rating: 4,
        badge: null
    },
    {
        id: 7,
        title: "Multi-Port USB Hub",
        price: 129.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "laptop",
        rating: 4,
        badge: null
    },
    {
        id: 8,
        title: "Noise Cancelling Headphones",
        price: 499.99,
        originalPrice: 699.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "mobile",
        rating: 5,
        badge: "Limited"
    },
    // i will edit this later
    // {
    //     id: 8,
    //     title: "Noise Cancelling Headphones",
    //     price: 499.99,
    //     originalPrice: 699.99,
    //     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //     category: "mobile",
    //     rating: 5,
    //     badge: "Limited"
    // },
    // {
    //     id: 8,
    //     title: "Noise Cancelling Headphones",
    //     price: 499.99,
    //     originalPrice: 699.99,
    //     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //     category: "mobile",
    //     rating: 5,
    //     badge: "Limited"
    // }
];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const orderModal = document.getElementById('orderModal');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
let selectedProduct = null;

// Display Products
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card animate__animated animate__fadeInUp';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">GHC ${product.price.toFixed(2)}</span>
                    <span class="original-price">GHC ${product.originalPrice.toFixed(2)}</span>
                    <span class="discount">${discount}% OFF</span>
                </div>
                <div class="product-rating">
                    ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                </div>
                <button class="add-to-cart" onclick="showOrderModal(${product.id})">Contact to Order Now</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Filter Products by Category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Show Order Modal
function showOrderModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    orderModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close Modal
function closeModal() {
    orderModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Contact Via Method
function contactVia(method) {
    let message = `I want to order: ${selectedProduct.title} (GHC ${selectedProduct.price.toFixed(2)})`;
    
    switch(method) {
        case 'call':
            window.location.href = `tel:+233249959686`;
            break;
        case 'whatsapp':
            window.open(`https://wa.me/233249959686?text=${encodeURIComponent(message)}`, '_blank');
            // window.open(`https://wa.me/233241234567?text=${encodeURIComponent(message)}`, '_blank');
            break;
        case 'email':
            window.location.href = `mailto:blackweb914@gmail.com?subject=Order for ${selectedProduct.title}&body=${encodeURIComponent(message)}`;
            // window.location.href = `mailto:orders@anyagadgethub.com?subject=Order for ${selectedProduct.title}&body=${encodeURIComponent(message)}`;
            break;
    }
    
    closeModal();
}

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle hamburger icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == orderModal) {
        closeModal();
    }
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after 1.5 seconds
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
        
        // Add animate-on-scroll class to sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
        
        // Display all products initially
        displayProducts(products);
    }, 1500);
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('animate__fadeIn');
            backToTopBtn.classList.remove('animate__fadeOut');
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.classList.add('animate__fadeOut');
            backToTopBtn.classList.remove('animate__fadeIn');
            setTimeout(() => {
                backToTopBtn.style.display = 'none';
            }, 500);
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add repair booking functionality
function bookRepair(deviceType) {
    const message = `I'd like to book a repair for my ${deviceType}. Please contact me.`;
    const whatsappUrl = `https://wa.me/233244020836?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Update modal to handle repair inquiries
function contactVia(method) {
    if(method === 'call') {
        window.location.href = "tel:+233244020836";
    } else if(method === 'whatsapp') {
        window.open(`https://wa.me/233244020836?text=${encodeURIComponent(message)}`, '_blank');
    } else if(method === 'email') {
        window.location.href = `mailto:stormbizz@gmail.com?subject=Order for ${selectedProduct.title}&body=${encodeURIComponent(message)}`;
    }
}
