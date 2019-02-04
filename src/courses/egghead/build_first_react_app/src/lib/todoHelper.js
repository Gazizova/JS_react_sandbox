export const addTodo = (list, item) => [...list, item];

//return list.concat(item)
// or
// let list2 = list.slice();
//   list2.push(item);
//   return list2;

export const generalId = () => Math.floor(Math.random() * 100000);

export const findById = (id, list) => list.find(item => item.id === id);

// export const toggleTodo = todo => ({ ...todo, isComplete: !todo.isComplete });
export const toggleTodo = todo => {
  var copyobj = Object.assign({}, todo);
  copyobj.isComplete = !copyobj.isComplete;
  return copyobj;
};

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ];
};

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id);
  return [...list.slice(0, removeIndex), ...list.slice(removeIndex + 1)];
};

export const filterTodos = (list, route) => {
  switch (route) {
    case "/active":
      return list.filter(item => !item.isComplete);
    case "/complete":
      return list.filter(item => item.isComplete);
    default:
      return list;
  }
};
