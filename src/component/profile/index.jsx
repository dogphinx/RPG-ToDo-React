import React, { ReactElement, ReactNode } from "react";
import {
  Container,
  Character,
  Img,
  Section,
  Inventory,
  ExpbarWrap,
  Expbar,
  Headline,
  Text,
  Item,
  RowItemWrap,
  ColumnItemWrap,
} from "./profileStyle";

export default function Profile({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

Profile.Character = function ProfileCharacter({ children, ...restprops }) {
  return <Character {...restprops}>{children}</Character>;
};
Profile.Img = function ProfileImg({ src, ...restprops }) {
  return (
    <Img
      {...restprops}
      src={
        src
          ? // ? `/images/users/${src}.png`
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOeZUJxihcHzr3oTjq_r9BKnCvQWFReVP6A&usqp=CAU`
          : "https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/cover.jpg"
      }
    />
  );
};
Profile.Section = function ProfileSection({ children, ...restprops }) {
  return <Section {...restprops}>{children}</Section>;
};

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

Profile.Inventory = function ProfileInventory({ children, ...restprops }) {
  return <Inventory {...restprops}>{children}</Inventory>;
};
Profile.Item = function ProfileItem({ children, ...restprops }) {
  return <Item {...restprops}>{children}</Item>;
};
Profile.RowItemWrap = function ProfileRowItemWrap({ children, ...restprops }) {
  return <RowItemWrap {...restprops}>{children}</RowItemWrap>;
};
Profile.ColumnItemWrap = function ProfileColumnItemWrap({
  children,
  ...restprops
}) {
  return <ColumnItemWrap {...restprops}>{children}</ColumnItemWrap>;
};
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

Profile.ExpbarWrap = function ProfileExpbarWrap({ children, ...restprops }) {
  return <ExpbarWrap {...restprops}>{children}</ExpbarWrap>;
};
Profile.Expbar = function ProfileExpbar({ children, ...restprops }) {
  return <Expbar {...restprops}>{children}</Expbar>;
};
Profile.Headline = function ProfileHeadline({ children, ...restprops }) {
  return <Headline {...restprops}>{children}</Headline>;
};
Profile.Text = function ProfileText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
