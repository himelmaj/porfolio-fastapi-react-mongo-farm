import { useState, useEffect } from "react";

export function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrolled = window.scrollY > 100;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isScrolled && (
        <button
          onClick={handleClick}
          className="bg-blue-200 px-3 py-2 rounded-lg inline-block hover:bg-blue-400 hover:cursor-pointer text-zinc-950 font-bold text-center"
        >
          <span className="material-symbols-outlined">expand_less</span>
        </button>
      )}
    </div>
  );
}
