!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},e=o.parcelRequire04be;null==e&&((e=function(o){if(o in n)return n[o].exports;if(o in s){var e=s[o];delete s[o];var t={id:o,exports:{}};return n[o]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,n){s[o]=n},o.parcelRequire04be=e);var t=e("kDZyQ"),a=document.querySelector("#top-books-list"),r=t.books.map((function(o){return o})).sort((function(o,n){return n.rating-o.rating})).splice(0,3),i=[];r.forEach((function(o){i.push('\n        <li style="background-image: url('.concat(o.image,');" class="books_item">\n            <div class="books_list_wrap">\n                <p class="books_list_rating_text">').concat(o.rating,'</p> \n                <svg width="23" height="23" class="books_rating_img">\n                    <use href="/symbol-defs.a8b2e413.svg#icon-star"></use>\n                </svg>\n            </div> \n            <div class="books_text_wrap">\n                <p class="books_name">').concat(o.bookName,'</p>\n                <p class="books_author">').concat(o.author,'</p>\n                <p class="books_year">').concat(o.year,"</p>\n            </div>\n        </li>"))})),a.innerHTML=i.join("");var c=document.querySelector("#new-books-list"),l=t.books.map((function(o){return o})).sort((function(o,n){return n.year-o.year})).splice(0,3),u=[];l.forEach((function(o){u.push('\n        <li style="background-image: url('.concat(o.image,');" class="books_item">\n            <div class="books_list_wrap">\n                <p class="books_list_rating_text">').concat(o.rating,'</p> \n                <svg width="23" height="23" class="books_rating_img">\n                    <use href="/symbol-defs.a8b2e413.svg#icon-star"></use>\n                </svg>\n            </div> \n            <div class="books_text_wrap">\n                <p class="books_name">').concat(o.bookName,'</p>\n                <p class="books_author">').concat(o.author,'</p>\n                <p class="books_year">').concat(o.year,"</p>\n            </div>\n        </li>"))})),c.innerHTML=u.join("")}();
//# sourceMappingURL=index.284fce86.js.map
