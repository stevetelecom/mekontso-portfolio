import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sets up Lenis smooth scrolling, keeps GSAP ScrollTrigger in sync with it,
// and exposes a ref (0..1) tracking overall scroll progress for the 3D scene.
export default function useLenis() {
  const progressRef = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = max > 0 ? Math.min(Math.max(e.scroll / max, 0), 1) : 0;
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.animatedScroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const refreshHandler = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", refreshHandler);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.removeEventListener("refresh", refreshHandler);
      lenis.destroy();
    };
  }, []);

  return progressRef;
}
