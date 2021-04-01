import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const textAnimation = () => {
    gsap.registerPlugin(ScrollTrigger) //register scroll trigger plugin

    gsap.utils.toArray("#text-anim").forEach(anim => {
        gsap.from(anim, {
          scrollTrigger: {
            trigger: anim,
            start: "top bottom",
            toggleActions: "play none none none",
          },
          duration: 1,
          y: 100,
          opacity: 0,
          transformOrigin: "center center",
          ease: "Power3.easeOut",
        })
      })

      gsap.utils.toArray("#num-anim").forEach(anim => {
        gsap.from(anim, {
          scrollTrigger: {
            trigger: anim,
            start: "left right",
            toggleActions: "play none none none",
          },
          duration: 1,
          x: -100,
          opacity: 0,
          transformOrigin: "center center",
          ease: "Power3.easeOut",
        })
      })

      gsap.utils.toArray(".text-left").forEach(container => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
          },
        })
    
        let text = container.querySelectorAll(".line-anim")
    
        tl.from(text, 1, {
          opacity: 0,
          y: 100,
          delay: 0.2,
          ease: "Expo.easeOut",
          stagger: {
            amount: 1,
          },
        })
      })
 }

 export const landingAnimation = () => {
    let tl = gsap.timeline()

    let headText = document.querySelectorAll(".head-anim")
    let logo = document.querySelector("#logo-anim")
    let nav = document.querySelectorAll("#nav-anim")
    
    tl.from(logo, {
       duration: 0.8,
        opacity: 0,
        y: -100,
        ease: "Expo.easeOut",
        
      }).from(nav, {
        duration: 0.8,
        opacity: 0,
        y: -100,
        ease: "Expo.easeOut",
        
      }).from(headText, {
      duration: 0.8,
      opacity: 0,
      y: 100,
      ease: "Expo.easeOut",
      stagger: {
        amount: 0.3,
      }
    })

 }

 export const imageAnimation = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray(".reveal").forEach(container => {
        let image = container.querySelector(".image")
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
          },
        })
    
        tl.set(container, { autoAlpha: 1 })
      
       tl.from(image, {
          duration: 2,
           y: 100,
           ease: "Expo.easeOut"
       })
      })
  
  
  }

  export const dropinAnimation = () => {

    let dropDown = document.querySelector(".dropdown")

    gsap.from(dropDown, {
      duration: 1,
      y: -100,
      ease: "Power1.easeOut"
    })
  }

 
