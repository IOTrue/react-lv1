import CustomButton from './CustomButton';

const TodoList = (props)=>{
    return(
        <li className="list-item">
            <span className="item-name">{props.list?.title}</span>
            <p className="item-desc">{props.list?.desc}</p>
            <div className="item-btn">
                <CustomButton className="list-btn-del" onClick={()=>{props.deleteListHandler(props.list.id)}}>삭제하기</CustomButton>
                <CustomButton className="list-btn-done" onClick={()=>{props.doneListHandler(props.list.id, 1)}}>완료</CustomButton>
            </div>
        </li>
    )
};

export default TodoList
