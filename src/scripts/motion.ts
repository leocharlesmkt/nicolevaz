import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const media = gsap.matchMedia();

media.add('(prefers-reduced-motion: no-preference)', () => {
  const mobile = window.matchMedia('(max-width: 700px)').matches;
  const elements = gsap.utils.toArray<HTMLElement>([
    '.intro > *',
    '.section-heading > *',
    '.service',
    '.about-photo',
    '.about > div:last-child > *',
    '.gallery figure',
    '.ritual-photo',
    '.ritual > div:last-child > *',
    '.booking > .container > .eyebrow',
    '.locations article',
    '.steps li',
    '.faq > div:first-child > *',
    '.faq-list details',
    '.final-cta > .container > *',
    '.footer-main > *',
  ].join(', '));

  const animations = new Map<HTMLElement, gsap.core.Tween>();

  for (const element of elements) {
    if (element.getBoundingClientRect().top < window.innerHeight) continue;
    const group = element.parentElement;
    const sequence = group?.matches('.services, .gallery, .locations, .steps');
    const index = group ? [...group.children].indexOf(element) : 0;
    const delay = sequence && !mobile ? (index % 3) * 0.09 : 0;

    element.classList.add('motion-entering');
    const tween = gsap.fromTo(element, {
      opacity: 0,
      y: element.matches('h2') ? 30 : 22,
    }, {
      opacity: 1,
      y: 0,
      duration: mobile ? 0.65 : 0.85,
      delay,
      ease: 'power3.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: element,
        start: 'clamp(top 94%)',
        once: true,
      },
      onComplete: () => element.classList.remove('motion-entering'),
    });
    animations.set(element, tween);
  }

  gsap.from('.hero-copy > :not(h1):not(.eyebrow), .hero-photo-caption', {
    y: 12,
    duration: 0.85,
    stagger: 0.07,
    ease: 'power3.out',
    clearProps: 'transform',
  });

  gsap.utils.toArray<SVGElement>('.service-icon svg, .intro-ornament svg, .about-seal svg').forEach(icon => {
    gsap.from(icon, {
      scale: 0.75,
      rotation: -10,
      duration: 0.9,
      ease: 'back.out(1.3)',
      transformOrigin: '50% 50%',
      clearProps: 'transform,transformOrigin',
      scrollTrigger: { trigger: icon, start: 'clamp(top 92%)', once: true },
    });
  });

  gsap.set('.scroll-progress', { display: 'block' });
  gsap.fromTo('.scroll-progress', { scaleX: 0 }, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
  });

  const showFocused = (event: FocusEvent) => {
    if (!(event.target instanceof Element)) return;
    for (const [element, tween] of animations) {
      if (element.contains(event.target)) {
        tween.progress(1);
        tween.scrollTrigger?.kill();
      }
    }
  };
  const refresh = () => ScrollTrigger.refresh();
  document.addEventListener('focusin', showFocused);
  document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', refresh));
  document.fonts.ready.then(refresh);

  return () => {
    document.removeEventListener('focusin', showFocused);
    document.querySelectorAll('details').forEach(detail => detail.removeEventListener('toggle', refresh));
    elements.forEach(element => element.classList.remove('motion-entering'));
  };
});
