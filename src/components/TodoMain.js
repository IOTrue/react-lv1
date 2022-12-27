import React, { useState } from "react";
import TodoList from './TodoList';
import DoneList from './DoneList';

const TodoMain = () => {
  const [lists, setLists] = useState([
    {id: 1, title: "리액트 기초 공부", desc: "리액트 기초 공부 후 과제 완성하기", done: 0},
    {id: 2, title: "리액트 심화 공부", desc: "리액트 심화 공부", done: 0},
    {id: 3, title: "자바스크립트 공부", desc: "자바스크립트 혼공스 완독하기", done: 0},
    {id: 4, title: "css Flex", desc: "css Flex 공부하기", done: 0},
  ])
  
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const addListHandler = (e)=> {
    const newList = {
      id: lists.length+1,
      title: title,
      desc: desc,
      done: 0,
    }
    setLists([...lists, newList])
    setTitle('') //제목 인풋 초기화
    setDesc('') //내용 인풋 초기화
    e.preventDefault()
  }
  const doneListHandler = (id, num)=> {
    const doneList = lists.map((list) => list.id === id ? {...list, done: num} : list)
    setLists(doneList)
  }
  const deleteListHandler = (id)=> {
    const delteList = lists.filter((list) => list.id !== id)
    setLists(delteList)
  }


  return (
    <div>
      <form action="#" onSubmit={addListHandler}>
          <nav className="nav">
              <div className="nav-box-1">
                  <div>
                    <label for="title">제목</label>
                    <input type="text" name="title" className="input-write" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                  </div>
                  <div>
                    <label for="desc">내용</label>
                    <input type="text" name="desc" className="input-write desc" value={desc} onChange={(e) => setDesc(e.target.value)} required/>
                  </div>
              </div>
              <div className="nav-box-2">
                  <button className="btn-add">추가하기</button>
              </div>
          </nav>
      </form>
      <section className="section">
        <article className="list-box">
          <span className="list-label">Working 🔥</span>
          <ul className="list-ul">
            {lists.map((list) => {
              return (
                list.done === 0
                  && <TodoList list={list} key={list.id} deleteListHandler={deleteListHandler} doneListHandler={doneListHandler}></TodoList>
              )
            })}
          </ul>
        </article>
        <article className="list-box">
          <span className="list-label">Done 🎉</span>
          <ul className="list-ul">
          {lists.map((list) => {
              return (
                list.done === 1
                && <DoneList list={list} key={list.id} deleteListHandler={deleteListHandler} doneListHandler={doneListHandler}></DoneList>
              )
            })}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default TodoMain;
