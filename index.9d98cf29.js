!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},a=e.parcelRequire04be;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequire04be=a),a.register("kDZyQ",(function(e,o){var t,a,r,n;t=e.exports,a="books",r=function(){return s},Object.defineProperty(t,a,{get:r,set:n,enumerable:!0,configurable:!0});var i=document.querySelector("#books_list"),s=[{image:"&quot;game-of-thrones.b4d417b9.jpeg&quot",bookName:"Game of Thrones",author:"Jorge R. R Martin",year:1996,rating:4.4},{image:"&quot;harry-potter.2b18bf2e.jpeg&quot",bookName:"Harry Potter and philosopher's stone",author:"J. K. Rowling",year:1997,rating:4.5},{image:"&quot;lord-of-the-rings.e24c3c67.jpeg&quot",bookName:"Lord of the rings",author:"J. R. R. Tolkien",year:1967,rating:4.5},{image:"&quot;hobbit.cac4f096.jpeg&quot",bookName:"The Hobbit",author:"J. R. R. Tolkien",year:1937,rating:4.3},{image:"&quot;at-the-west-front.b2d1c9ce.jpg&quot",bookName:"Nothing new on the east front",author:"Erich Maria Remarque",year:1929,rating:4.5},{image:"&quot;fahrenheit-451.a4f69e9b.jpg&quot",bookName:"Fahrenheit 451",author:"Ray Bradbury",year:1953,rating:4.7},{image:"&quot;little-prince.8d1addbb.jpg&quot",bookName:"The little prince",author:"Antoine de Saint-Exupéry",year:1943,rating:4.9},{image:"&quot;narnia.7a4db71f.jpg&quot",bookName:"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",author:"C.S. Lewis",year:1950,rating:4.3},{image:"&quot;harry-potter-2.57f49c7d.jpg&quot",bookName:"Harry Potter and the Chamber of Secrets",author:"J.K Rawling",year:1998,rating:4.4}],u=[];s.forEach((function(e){u.push('\n        <li style="background-image: url('.concat(e.image,');" class="books_item">\n            <div class="books_list_wrap">\n                <p class="books_list_rating_text">').concat(e.rating,'</p> \n                <svg width="23" height="23" class="books_rating_img">\n      <use\n        href="/symbol-defs.a8b2e413.svg#icon-star"\n        width="24"\n        height="24"\n      ></use>\n    </svg>\n\n\n            </div> \n            <div class="books_text_wrap">\n                <p class="books_name">').concat(e.bookName,'</p>\n                <p class="books_author">').concat(e.author,'</p>\n                <p class="books_year">').concat(e.year,"</p>\n            </div>\n        </li>"))})),i.innerHTML=u.join("")})),a("kDZyQ")}();
//# sourceMappingURL=index.9d98cf29.js.map
