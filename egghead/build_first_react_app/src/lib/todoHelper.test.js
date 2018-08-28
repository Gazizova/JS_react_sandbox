import {addTodo} from './todoHelper'

test( 'add Todo chould add passed todo to the list' , () =>{
    const startTodos = [
        {id: 1, name: 'one', isComplete: true},
        {id: 2, name: 'two', isComplete: false},
    ]
    const newTodo = {id: 3, name: 'three', isComplete: false}
    const expected = [
        {id: 1, name: 'one', isComplete: true},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}

    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)

})