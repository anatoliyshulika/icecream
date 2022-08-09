var scrollToTopBtn=document.querySelector(".scrollToTopBtn"),rootElement=document.documentElement,handleScroll=function(){var o=rootElement.scrollHeight-rootElement.clientHeight;rootElement.scrollTop/o>.25?scrollToTopBtn.classList.add("isVisible"):scrollToTopBtn.classList.remove("isVisible")};document.addEventListener("scroll",handleScroll);
//# sourceMappingURL=index.43c2a8c8.js.map
