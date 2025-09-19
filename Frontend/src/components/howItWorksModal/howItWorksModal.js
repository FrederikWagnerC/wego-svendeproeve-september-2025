// Custom hook for how it works modal functionality
export const useHowItWorksModal = () => {
  const howItWorksModalHandler = () => {
    const modal = document.getElementById("howItWorksModal");

    if (modal) {
      if (modal.classList.contains("hidden")) {
        // Opening modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        
        // Add opening animations
        modal.classList.add("animate-in", "fade-in", "duration-300");
        modal.children[0]?.classList.add("animate-in", "slide-in-from-top-4", "duration-500", "ease-out");
        
      } else {
        // Closing modal with animation 
        modal.classList.add("animate-out", "fade-out", "duration-300");
        modal.children[0]?.classList.add("animate-out", "slide-out-to-top-4", "duration-300", "ease-in");
        
        setTimeout(() => {
          modal.classList.add("hidden");
          modal.classList.remove("flex", "animate-out", "fade-out", "duration-300");
          modal.children[0]?.classList.remove("animate-out", "slide-out-to-top-4", "duration-300", "ease-in", "animate-in", "slide-in-from-top-4", "duration-500", "ease-out");
          modal.classList.remove("animate-in", "fade-in");
        }, 400); 
      }
    }
  };

  return { howItWorksModalHandler };
};
