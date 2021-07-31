import React from "react";
import {
  Container,
  Tutorial,
  ListWrap,
  ListItem,
  InputToDoList,
  ListType,
  DoneButton,
  DeleteButton,
  Section,
  Img,
} from "./todoStyle";

export default function Todo({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Todo.Tutorial = function TodoTutorial({ children, ...restprops }) {
  return <Tutorial {...restprops}>{children}</Tutorial>;
};
Todo.ListWrap = function TodoListWrap({ children, ...restprops }) {
  return <ListWrap {...restprops}>{children}</ListWrap>;
};
Todo.ListItem = function TodoListItem({ children, ...restprops }) {
  return <ListItem {...restprops}>{children}</ListItem>;
};

Todo.InputToDoList = function TodoInputToDoList({ children, ...restprops }) {
  return <InputToDoList {...restprops}>{children}</InputToDoList>;
};

Todo.ListType = function TodoListType({ children, ...restprops }) {
  return (
    <ListType {...restprops}>
      {children}
      <DeleteButton>X</DeleteButton>
      {/* 엑스도 사진이나 아이콘 찾아다가 변경해서 좀더 시각적으로 바꿔보는게 좋을듯해보임 딱딱해보여서... */}
      <DoneButton>V</DoneButton>
      {/* 완료 버튼 그냥 체크표시로 바꾸고 싶음 만들어서 사용할지 아이콘을 찾아다 쓸지 고민해보기. */}
    </ListType>
  );
};

Todo.Section = function TodoSection({ children, ...restprops }) {
  return <Section {...restprops}>{children}</Section>;
};
Todo.Img = function TodoImg({ children, ...restprops }) {
  return <Img {...restprops}>{children}</Img>;
};

////////////////////////////////////////////////////////////////////////////////

Todo.Bucket = function TodoBucket({ children, ...restprops }) {
  return (
    <ListItem {...restprops}>
      {children}
      <Todo.ListType></Todo.ListType>
    </ListItem>
  );
};
