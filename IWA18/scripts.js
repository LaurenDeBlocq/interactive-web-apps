import { html, createOrderHtml } from "./view.js";
import { createOrderData, state } from "./data.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

/* handleDragStart should store which column the order starts in? */
const handleDragStart = (event) => {}

/* handleDragEnd should store which column the order ends in? */
const handleDragEnd = (event) => {}

/* handleHelpToggle should enable the opening and closing of the Help overlay */
const handleHelpToggle = (event) => {
    const item = document.querySelector('[data-help-overlay]')
    item.toggleAttribute("open")
}

/* handleAddToggle should enable the opening and closing of the Add Order overlay. When
closed without submitting, all info must be removed from the form so the next time the overlay
is opened, the form is empty */
const handleAddToggle = (event) => {
    html.add.overlay.toggleAttribute("open")
}

/* handleAddSubmit should take the info put into the order and create a new order?? 
Not 100% sure on this one... maybe it just must submit the form? But isn't there just a submit button?
Also if order is submitted, all info must be removed from the form */
const handleAddSubmit = (event) => {
    event.preventDefault()
    const item = createOrderData({title:html.add.title.value, table:html.add.table.value,column:'ordered'})/** idk what goes here yet, but the data from the form */
    state.orders[item.id] = item
    html.columns[item.column].appendChild(createOrderHtml(item))
    handleAddToggle()
}


/* I suppose this is to open and close the edit order overlay */
const handleEditToggle = (event) => {
    if (event.target.dataset.id){
    console.log(state);
    const currentOrderState = state.orders[event.target.dataset.id]
    console.log(currentOrderState);
    html.edit.id.value = currentOrderState.id
    html.edit.title.value = currentOrderState.title
    html.edit.table.value = currentOrderState.table

    html.edit.overlay.toggleAttribute("open")
}
}

/* Takes any changes to the order that are entered and updates the order to reflect */
const handleEditSubmit = (event) => {}

/* If an order is deleted this removes it from the system completely? */
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}