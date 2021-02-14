export const addAssignment = (value) => ({
  type: 'ADD_ELEMENT',
  value : value
 });

 export const delAssignment = (id) => ({
  type: 'DEL_ELEMENT',
  id : id
 });

 export const editAssignment = (id) => ({
  type: 'EDIT_ELEMENT',
  id : id
 });

 export const updateAssignment = (id, data) => ({
  type: 'UPDATE_ELEMENT',
  id : id,
  data : data
 });
