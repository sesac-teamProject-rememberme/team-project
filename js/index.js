const ta = gsap.timeline();
const tb = gsap.timeline();
const tc = gsap.timeline();




ScrollTrigger.create({
    trigger:".section1",// 스크롤 기준점
    animation:ta, // 타임라인
    start:"top top",
    end: "+=5000",
    scrub: 0.5,
    delay:3,
    // markers: true,
    pin: true,
})

ta.to(".dot1",{
    backgroundColor:"white",

}).to(".mainimg1",{
    scale: 1,
    opacity: 1,    
}).to(".section1_text4, .section1_text",{
    scale: 1,
    opacity: 1,

}).to(".section1_text4, .section1_text",{
    scale: 1,
    opacity: 0,
}).to(".dot1",{
    backgroundColor:"gray",
}).to(".dot2",{
    backgroundColor:"white",

}).to(".mainimg2",{
    scale: 1,
    opacity: 1, 
}).to(".section1_text5, .section1_text2",{
    scale: 1,
    opacity: 1,

}).to(".section1_text5, .section1_text2",{
    scale: 1,
    opacity: 0,    
}).to(".dot2",{
    backgroundColor:"gray",
}).to(".dot3",{
    backgroundColor:"white",
    
}).to(".mainimg3",{
    scale: 1,
    opacity: 1, 
}).to(".section1_text6, .section1_text3",{
    scale: 1,
    opacity: 1,  

}).to(".section1_text6, .section1_text3",{
    scale: 1,
    opacity: 0,  
}).to(".dot",{
    scale: 1,
    opacity: 0,     
       
});

ScrollTrigger.create({
trigger:".section2",// 스크롤 기준점
animation:tb, // 타임라인
start:"top top",
end: "+=5000",
// end: "bottom 10%",
scrub: 1,
// markers: true,
pin: true,
})

tb.to(".section2_text",{
    scale: 7,
}).to(".section2_text",{
    scale: 1,
    opacity: 0, 
}).to(".section2_text2",{
    scale: 2,
    opacity: 1, 
}).to(".section2_text2",{
    scale: 2,
    opacity: 0, 

}).to(".video, .section2",{
    opacity: 1,  
    backgroundColor: "white",  
}).to(".videotext",{
    delay: 1,
    scale: 2,
    opacity: 1,     
});



ScrollTrigger.create({
    trigger:".section8",// 스크롤 기준점
    animation:tc, // 타임라인
    start:"top top",
    end: "bottom 50%",
    scrub: true,
    // markers: true,
    pin: true,
    })
    tc.to(".section7_box",{
        scale: 1.2,
        opacity: 1,
    }).to(".section8_img",{
        scale: 1,
        opacity: 1,            
    });


    
    

    