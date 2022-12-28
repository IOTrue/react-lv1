import CustomButton from './CustomButton';

const TodoList = (props)=>{
    const { list, deleteListHandler, doneListHandler } = props
    const { id, title, desc, isDone } = list
    return(
        <li className={list.isDone ? "list-item done" : "list-item"}>
            <span className="item-name">{title}</span>
            <p className="item-desc">{desc}</p>
            <div className="item-btn">
                <CustomButton className="list-btn-del" onClick={()=>{deleteListHandler(id)}}>삭제하기</CustomButton>
                <CustomButton className="list-btn-done" onClick={()=>{doneListHandler(id)}}>
                    {isDone ? "취소" : "완료"}
                </CustomButton>
            </div>
        </li>
    )
};

export default TodoList
