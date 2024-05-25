const practice = () => {
  const link = document.querySelector("a");

  link.textContent = "Mozilla Developer Network";

  link.href = "https://developer.mozilla.org";

  document.body.style.backgroundColor = "#DBDBDB";

  const section = document.querySelector("section");
  const para = document.createElement("p");
  para.textContent = "We hope you enjoyed the ride";

  section.appendChild(para);

  const text = document.createTextNode(
    "_the premier source for web development knowledge."
  );
  const linkPara = document.querySelector("p");
  linkPara.appendChild(text);

  // section.appendChild(linkPara);
};
// Select all The elements
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");

const addItemsToList = () => {
  const inputVal = input.value.trim();
  if (inputVal !== "") {
    const li = document.createElement("li");
    li.textContent = inputVal;
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    input.value = "";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    editBtn.addEventListener("click", () => {
      const newText = prompt(`Edit The lsit: ${inputVal}`);
      if (newText !== null) {
        li.textContent = newText;
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
      }
    });
  }
};

addBtn.addEventListener("click", addItemsToList);
