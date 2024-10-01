let nameInputEl = document.getElementById("siteNameInput");
let urlInputEl = document.getElementById("siteUrlInput");

let errorNameMsgEl = document.getElementById("siteNameErrMsg");
let errorURLMsgEl = document.getElementById("siteUrlErrMsg");

let formEl = document.getElementById("bookmarkForm");

let secondContainerEl = document.getElementById("secondcontainerEl");



function creatingBookMarkconatiner() {
    let bookMarkContainerEl = document.createElement("div");
    bookMarkContainerEl.classList.add('input-cardcontainer');
    bookMarkContainerEl.style.marginLeft = "46px";
    bookMarkContainerEl.style.marginTop = "30px";
    bookMarkContainerEl.style.paddingTop = "8px"
    bookMarkContainerEl.style.paddingBottom = "8px"
    secondContainerEl.appendChild(bookMarkContainerEl);

    let unorderListEl = document.createElement("ul");
    unorderListEl.setAttribute("id", "bookmarksList");
    bookMarkContainerEl.appendChild(unorderListEl);

    let siteNameListEl = document.createElement("li");
    siteNameListEl.textContent = nameInputEl.value;
    siteNameListEl.classList.add("site-name-list");
    siteNameListEl.style.paddingBottom = "6px";
    siteNameListEl.type = "none";
    unorderListEl.appendChild(siteNameListEl);


    let siteURLListEl = document.createElement("a");
    siteURLListEl.textContent = urlInputEl.value;
    console.log(urlInputEl.value);
    siteURLListEl.setAttribute("href", urlInputEl.value);
    siteURLListEl.setAttribute("target", "_blank");
    unorderListEl.appendChild(siteURLListEl);
}




formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameInputEl.value === "" && urlInputEl.value === "") {
        errorNameMsgEl.textContent = "Required*";
        errorURLMsgEl.textContent = "Required*";
    } else if (urlInputEl.value === "") {
        errorURLMsgEl.textContent = "Required*";
    } else if (nameInputEl.value === "") {
        errorNameMsgEl.textContent = "Required*";
    } else {
        errorNameMsgEl.textContent = "";
        errorURLMsgEl.textContent = "";
        creatingBookMarkconatiner();

    }
});

nameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errorNameMsgEl.textContent = "Required*";
    } else {
        errorNameMsgEl.textContent = "";
    }
});

urlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorURLMsgEl.textContent = "Required*";
    } else {
        errorURLMsgEl.textContent = "";
    }


});