var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},e={},n=s.parcelRequire04be;null==n&&((n=function(s){if(s in o)return o[s].exports;if(s in e){var n=e[s];delete e[s];var a={id:s,exports:{}};return o[s]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(s,o){e[s]=o},s.parcelRequire04be=n);var a=n("f8OLf");const i=document.querySelector("#top-books-list"),r=a.books.map((s=>s)).sort(((s,o)=>o.rating-s.rating)).splice(0,3),t=[];r.forEach((s=>{t.push(`\n        <li style="background-image: url(${s.image});" class="books_item">\n            <div class="books_list_wrap">\n                <p class="books_list_rating_text">${s.rating}</p> \n                <svg width="23" height="23" class="books_rating_img">\n                    <use href="images/symbol-defs.svg#icon-star"></use>\n                </svg>\n            </div> \n            <div class="books_text_wrap">\n                <p class="books_name">${s.bookName}</p>\n                <p class="books_author">${s.author}</p>\n                <p class="books_year">${s.year}</p>\n            </div>\n        </li>`)})),i.innerHTML=t.join("");const l=document.querySelector("#new-books-list"),p=a.books.map((s=>s)).sort(((s,o)=>o.year-s.year)).splice(0,3),c=[];p.forEach((s=>{c.push(`\n        <li style="background-image: url(${s.image});" class="books_item">\n            <div class="books_list_wrap">\n                <p class="books_list_rating_text">${s.rating}</p> \n                <svg width="23" height="23" class="books_rating_img">\n                    <use href="/symbol-defs.a8b2e413.svg#icon-star"></use>\n                </svg>\n            </div> \n            <div class="books_text_wrap">\n                <p class="books_name">${s.bookName}</p>\n                <p class="books_author">${s.author}</p>\n                <p class="books_year">${s.year}</p>\n            </div>\n        </li>`)})),l.innerHTML=c.join("");
//# sourceMappingURL=index.2b545b0b.js.map
