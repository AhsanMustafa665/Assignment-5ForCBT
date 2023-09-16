const logoutBtn = () => {
  window.location = "/index.html";
};

const What = document.getElementById("what");
const When = document.getElementById("when");
const Duration = document.getElementById("duration");
const workContainer = document.getElementById("workContainer");

let allWork = [];
const addProBtn = () => {
  const what = What.value;
  const when = When.value;
  const dur = duration.value;
  const newWidth = {
    what,
    when,
    dur,
  };
  allWork.unshift(newWidth);
  displayProduct();
  What.value = "";
  When.value = "";
  Duration.value = "";
  allWork = [];
};

const displayProduct = () => {
  for (const work of allWork) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div style="width: 30rem;" class="d-flex justify-content-evenly border border-black mx-auto mt-4 fw-bold rounded-2">
    <div class="d-flex align-items-center">
     <i class="fa-solid fa-circle"></i>         
     <p class="pt-3 ps-2">${work.what}</p>
    </div>
     <p class="pt-3">${work.when}</p>
     <p class="pt-3">${work.dur}</p>
 </div>`;
    workContainer.appendChild(div);
  }
};
