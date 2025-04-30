import {
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id
  } from './data.js';
  
  console.log(add_item({ id: 1, title: 'Learn JavaScript' })); 
  console.log(add_item({ id: 2, title: 'Learn React' }));     
  console.log(add_item({ id: 1, title: 'Duplicate ID' }));   
  
  console.log(get_items()); 
  
  console.log(update_item_title_by_id(2, 'Master React'));    
  console.log(update_item_title_by_id(3, 'No such item'));    
  
  console.log(get_item_title_by_id(2)); 
  console.log(get_item_title_by_id(3)); 
  
  console.log(delete_item_by_id(1));    
  console.log(delete_item_by_id(3));    
  
  console.log(get_items()); 