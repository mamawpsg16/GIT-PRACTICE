const container = document.querySelector("#container");
const log = document.querySelector("#log");

function logChanges(records, observer) {
    console.log(records,'records');
  for (const record of records) {
    console.log(record,'record');
    if (record.type === "attributes") {
      const oldValue = record.oldValue;
      const newValue = container.getAttribute(record.attributeName);
      log.textContent = `Attribute changed: ${record.attributeName}\nOld value: ${oldValue}\nNew value: ${newValue}\n\n${log.textContent}`;
    }
  }
}

const observerOptions = {
  attributes: true,  // Observe attribute changes
  attributeFilter: ['class', 'data-role'],  // Only observe these specific attributes
  attributeOldValue: true  // Record the old value of the changed attribute
};

const observer = new MutationObserver(logChanges);
observer.observe(container, observerOptions);

// Buttons to trigger attribute changes
document.querySelector("#changeClass").addEventListener("click", () => {
    console.log(container.className,'container.className');
  container.className = container.className === "box" ? "container" : "box";
});

document.querySelector("#changeDataRole").addEventListener("click", () => {
    console.log(container.getAttribute("data-role"),'container.getAttribute("data-role")');
  container.setAttribute("data-role", container.getAttribute("data-role") === "main" ? "secondary" : "main");
});

console.log('ABC');