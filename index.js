window.onload = function () {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

let aTags = document.querySelectorAll("#aside_nav a");
for (var i = 0; i < aTags.length; i++) {
  // 반복하면서 a 태그에 onclick event를 모두 연결하기
  aTags[i].onclick = function (e) {
    // a 태그의 기본적인 동작 중지하기
    e.preventDefault();

    // selected 클래스 모두 remove 하기
    let sectionList = document.querySelectorAll("main section");
    sectionList.forEach((el) => {
      el.classList.remove("selected");
    });

    // target 에만 selected 클래스 add 하기
    var target = document.querySelector(this.getAttribute("href"));

    target.classList.add("selected");

    // target으로 scroll 이동하기
    window.scrollTo({
      behavior: "smooth",
      top: target.offsetTop - 50,
    });
  };
}

let topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", function () {
  // selected 클래스 모두 remove 하기
  let sectionList = document.querySelectorAll("main section");
  sectionList.forEach((el) => {
    el.classList.remove("selected");
  });

  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
