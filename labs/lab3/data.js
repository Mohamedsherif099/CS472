let data = [];

export function get_items() {
  return data;
}

export function add_item(new_item) {
  // Check if the item with the same ID already exists
  if (data.find(item => item.id === new_item.id)) {
    return false;
  }
  data.push(new_item);
  return true;
}

export function update_item_title_by_id(id, new_title) {
  const item = data.find(item => item.id === id);
  if (item) {
    item.title = new_title;
    return true;
  }
  return false;
}

export function delete_item_by_id(id) {
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    return true;
  }
  return false;
}

export function get_item_title_by_id(id) {
  const item = data.find(item => item.id === id);
  return item ? item.title : undefined;
}