//Add a new item when the user inputs somthing in the input field and submits
function addNewItem() {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newListItem = $('#shopping-list-entry').val();
    $(".shopping-list").append(getNewItemHtml(newListItem));
    $('#shopping-list-entry').val("");
  });
};

//invoke the Function on Ready
$(addNewItem)

/**
 * @description returns a string containing a new 
 * list item with itemName as the item parameter.
 * @param {String} itemName 
 */
function getNewItemHtml(itemName){
 return `
  <li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-contols">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div> 
  </li>`;
};

//Toggle the Stike through when checked and unchecked
function itemChecked() {
  $('ul').on('click', '.shopping-item-toggle', function(event){
    const checkedItem = $(event.currentTarget).parent().parent().children()[0];
    $(checkedItem).toggleClass('shopping-item__checked')
  });
};

//invoke the Function on Ready
$(itemChecked)

//Delete Item when Delete button Selected
function removeItem() {
  $('ul').on('click', '.shopping-item-delete', function(event){
    $(this).parent().parent().remove();
  });
};

//invoke the Function on Ready
$(removeItem)

