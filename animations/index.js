import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const tl = gsap.timeline();

export const dropAnimation = () => {
  gsap.from(".dropDownConVisible", {
    duration: 1,
    opacity: 0,
    x: 70,
    ease: "power2.easeIn",
  });
};

export const navAnimation = () => {
  tl.from("nav", {
    duration: 0.3,
    y: -20,
    opacity: 0,
    ease: "power3.easeIn",
  });
};

export const homeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  tl.from(
    ".Home_firstCard__3Qc5k,.Home_secondCard__3ock8,.Home_thirdCard__2Ljqr  ",
    {
      duration: 0.7,
      y: 30,
      ease: "Power3.easeOut",
      opacity: 0,
      stagger: 0.5,
    }
  ).from(".Home_bruxells__3U_qQ, .Home_melanie__1Tw4d, .Home_problem__2PhDg", {
    duration: 5,
    y: 10,
    ease: "expo.out",
    opacity: 0,
    delay: 1.5,
    stagger: 0.8,
    scrollTrigger: {
      trigger: ".Home_containerHome__2tpjc",
      start: "top 100px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
  });
};

export const aboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.fromTo(
    ".about_firstCard__3l0-4",
    { opacity: 0 },
    { duration: 1, opacity: 1, ease: "slow.easeIn " }
  )
    .from(".about_firstImg__1fHJQ", {
      scale: 0,
      delay: 0.5,
      opacity: 0,
      ease: "slow.easeIn",
    })
    .from(".about_editorial__3tXob", {
      opacity: 0,
      y: 50,
      ease: "fadeIn.easeIn",
      delay: 1,
      duration: 0.5,
    });
  gsap.from(
    ".about_textGroup__1m7d1, .about_top__2aHYh, .about_bottom__FeOYd",
    {
      scrollTrigger: {
        trigger: ".about_firstCard__3l0-4",
        start: "top 50px",
        end: "bottom 0",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      ease: "power4.Out",
      delay: 1.2,
      skewY: 7,
      stagger: 0.2,
    }
  );
  gsap.from(".about_secondImg__9q5RU", {
    scrollTrigger: {
      trigger: ".about_directorTexts__1e0yY ",
      start: "top 120px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100,
    ease: "power4.Out",
    duration: 0.7,
  });
  gsap.from(".about_thirdImg__1uB5z", {
    scrollTrigger: {
      trigger: ".about_secondImg__9q5RU ",
      start: "bottom 200px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 100,
    ease: "power4.Out",
    duration: 0.4,
  });
  gsap.from(".about_editorialII__1XAzY", {
    opacity: 0,
    ease: "fadeIn.slow",
    duration: 1,
    scrollTrigger: ".about_thirdImg__1uB5z",
  });

  gsap.from(".about_fourthImg__3Bthf", {
    scrollTrigger: {
      trigger: ".about_thirdImg__1uB5z",
      start: "bottom 200px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100,
    ease: "power4.Out",
    duration: 0.5,
  });
  gsap.from(".about_fifthImgCon__1cVIk", {
    scrollTrigger: {
      trigger: ".about_fourthImg__3Bthf",
      start: "bottom 200px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: -100,
    ease: "power4.Out",
    duration: 1,
  });
  gsap.from(".about_sixthImgCon__2YB2B", {
    scrollTrigger: {
      trigger: ".about_fifthImgCon__1cVIk",
      start: "center 300px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100,
    ease: "power4.Out",
    duration: 0.5,
  });
  gsap.from(".about_seventhImgCon__1A7YN", {
    scrollTrigger: {
      trigger: ".about_sixthImgCon__2YB2B",
      start: "center 200px",
      end: "bottom 0",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 100,
    ease: "power4.Out",
    duration: 0.5,
  });

  gsap.from(".about_eightImg__1TbiV", {
    scrollTrigger: {
      trigger: ".about_seventhImgCon__1A7YN",
      start: "bottom 0",
      toggleActions: "play none none none",
    },
    scale: 0,
    opacity: 0,
    ease: "power3.easeIn",
    skewX: 5,
  });

  gsap.from(".about_editorialIII__29q54", {
    scrollTrigger: ".about_eightImg__1TbiV",
    opacity: 0,
    ease: " fadeIn.slow",
    stagger: 0.4,
    duration: 1,
  });

  gsap.from(
    ".about_ninthCard__-Ook6, .about_tenthCard__29Qo9, .about_eleventhCard__3eeZA, .about_nextProjectText__3I-8q",
    {
      scrollTrigger: {
        trigger: ".about_eightImg__1TbiV",
        start: "bottom 0",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0,
      skew: 5,
      ease: "fadeIn.easeIn",
      duration: 0.7,
      delay: 2.6,
      stagger: 0.3,
    }
  );
};

export const contactAnimation = () => {
  tl.from(".contact_contactText__1z869", {
    duration: 0.3,
    opacity: 0,
    y: 30,
    ease: "Power2.easeInOut",
  })
    .from(".contact_designer__TW0NP", {
      duration: 0.3,
      opacity: 0,
      y: 30,
      stagger: 0.5,
      ease: "Power3.easeInOut",
    })
    .to(".contact_lineBreak__5XLWG, .contact_image__3fX4Q ", {
      opacity: 1,
      ease: "FadeIn.easein",
      duration: 1,
    });
};

export const footerAnimation = () => {
  tl.from(".Layout_footer__2HGdY", {
    duration: 1,
    opacity: 0,
    ease: "power2.easeIn",
  });
};
