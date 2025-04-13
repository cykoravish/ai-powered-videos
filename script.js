function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    
    if (mobileNav.style.transform === 'translateX(0%)') {
        // Close menu
        mobileNav.style.transform = 'translateX(100%)';
        mobileNav.style.opacity = '0';
        mobileOverlay.style.opacity = '0';
        
        // Hide overlay after animation completes
        setTimeout(() => {
            mobileOverlay.style.display = 'none';
        }, 300);
        
        // Reset hamburger icon
        line1.style.transform = 'rotate(0deg)';
        line2.style.transform = 'rotate(0deg)';
        line1.style.top = '12px';
        line2.style.top = '20px';
    } else {
        // Open menu
        mobileNav.style.transform = 'translateX(0%)';
        mobileNav.style.opacity = '1';
        mobileOverlay.style.display = 'block';
        
        // Show overlay with fade-in
        setTimeout(() => {
            mobileOverlay.style.opacity = '1';
        }, 10);
        
        // Transform hamburger to X icon
        line1.style.transform = 'rotate(45deg)';
        line2.style.transform = 'rotate(-45deg)';
        line1.style.top = '16px';
        line2.style.top = '16px';
    }
}

// Adjust navbar on window resize
window.addEventListener('resize', function() {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    
    if (window.innerWidth > 768 && mobileNav.style.transform === 'translateX(0%)') {
        // Reset mobile menu when switching to desktop
        mobileNav.style.transform = 'translateX(100%)';
        mobileNav.style.opacity = '0';
        mobileOverlay.style.display = 'none';
        mobileOverlay.style.opacity = '0';
        
        // Reset hamburger icon
        line1.style.transform = 'rotate(0deg)';
        line2.style.transform = 'rotate(0deg)';
        line1.style.top = '12px';
        line2.style.top = '20px';
    }
});

// Force the mobile menu button to be visible on small screens
window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        document.getElementById('mobile-menu-btn').style.display = 'flex';
    }
});