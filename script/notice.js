const noticeClose = document.querySelector(".noticeclose");
const noticebanner = document.querySelector(".noticebanner");
const noticetoggle = document.querySelector(".noticetoggle");

noticeClose.onclick = function () {
  noticebanner.classList.toggle('showNotice');
  localStorage.setItem("noticeStatus", 1);
}
noticetoggle.onclick = function () {
    noticebanner.classList.toggle('showNotice');
    localStorage.setItem("noticeStatus", 0);
  }

/*-- Theme Notice Anfang */
const notice = document.querySelector(".notice-toggle");
const currentNotice = localStorage.getItem("noticeStatus");
if (currentNotice == "1") {
} else if (currentNotice == "0") {
noticebanner.classList.add('showNotice');
}
