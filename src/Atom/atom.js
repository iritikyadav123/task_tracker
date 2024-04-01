 
import { atom, atomFamily, selector } from "recoil";

//  atom Component using for data management
export const  taskAtom = atom({
     key :  "taskAtom",
     default : []
})
export const assigneeAtom = atom({
    key : 'assigneeAtom',
    default : ""
})

export const priorityAtom  = atom({
    key : 'priorityAtom',
    default : 0
})
export const  dateAtom  = atom({
    key : 'dateAtom',
    default : null
})

 export const shortedAtom = atom({
    key : 'shortedAtom',
    default : 0
 })

 export const positionAtom = atom({
    key : 'positionAtom',
    default : 'pending'
 })


//using for appearing in edit Elemnt 

export  const taskChooseAtom = atom({
    key  : 'taskChooseAtom',
    default : ""
})

export const findEditTaskSelector = selector({
    key : 'findEditTaskSelector',
    get : ({get}) => {
        const data = get(taskAtom);
        const todoTitle = get(taskChooseAtom);
        let todo = {};
        data.filter(item => (
            item.title == todoTitle 
        )).map(item => (
             todo = item
        ))
        return todo;
    }
})

// using for appearanse for delete component

export const deleteAtom = atom({
    key : 'deleteAtom',
    default : false
})
