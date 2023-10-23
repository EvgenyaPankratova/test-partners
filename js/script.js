////////Скрытие/показ элементов//////////////

let titleList = document.querySelectorAll(".list-block");
let icon = document.querySelectorAll(".list-block-icon");

function showList(e) {
  //скрываем/показываем элементы 

  let childrenContainer = e.currentTarget.children[1];
  childrenContainer.hidden = !childrenContainer.hidden;

  //поворачиваем стрелку при закрытии
  e.currentTarget
    .querySelector(".list-block-icon")
    .classList.toggle("list-block-icon-rotate");
}

titleList.forEach((elem) => {
  elem.addEventListener("click", (e) => showList(e));
});

//модальное окно///
const modal = document.querySelector("dialog");
const modalBox = document.getElementById("modal-box");
const showModalBtn = document.getElementById("show-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

let isModalOpen = false;

showModalBtn.addEventListener("click", (e) => {
  modal.showModal();
  isModalOpen = true;
  e.stopPropagation();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
  isModalOpen = false;
});

document.addEventListener("click", (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close();
  }
});
