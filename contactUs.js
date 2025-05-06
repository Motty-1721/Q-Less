const form = document.getElementById("contactForm");
    const formContainer = document.getElementById("formContainer");
    const verificationContainer = document.getElementById("verificationContainer");
    const sendAnotherBtn = document.getElementById("sendAnotherBtn");
    
    // Handle form submission
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const phone = document.getElementById("phone").value.trim();
      
      // Validate phone number if provided
      if (phone) {
        const phonePattern = /^[0-9+\-\s]{10,}$/;
        if (!phonePattern.test(phone)) {
          alert("Please enter a valid phone number with at least 10 digits.");
          return;
        }
      }
      
      // Hide form and show verification message
      formContainer.classList.add("hidden");
      verificationContainer.classList.remove("hidden");
    });
    
    // Handle "Send Another Message" button click
    sendAnotherBtn.addEventListener("click", function() {
      // Reset form
      form.reset();
      
      // Hide verification message and show form again
      verificationContainer.classList.add("hidden");
      formContainer.classList.remove("hidden");
    });