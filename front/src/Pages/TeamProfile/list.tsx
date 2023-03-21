import React, { useEffect, useMemo } from "react";
import { Avatar,ScrollArea,Text } from "@mantine/core";
import { Draggable, DropResult, DragDropContext, Droppable } from "react-beautiful-dnd";

interface ListCopyType {
  [key: string]: any;
}
// fake data generator
// const getItems = (count, prefix) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => {
//     const randomId = Math.floor(Math.random() * 1000);
//     return {
//       id: `item-${randomId}`,
//       prefix,
//       content: `item ${randomId}`
//     };
//   });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = [ "nonmembers","members",];

// const generateLists = () =>
//   lists.reduce(
//     (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
//     {}
//   );


const DraggableElement = ({ prefix, elements }: { prefix: any, elements: any; }) => (
  <div style={{
    padding: "10px",
    borderRadius: "6px",
    width: "300px",
    background: "red"
  }}>
    {/* <div style={{
      textTransform: "uppercase",
      marginBottom: "10px"
    }}>{prefix}</div> */}
    <Text>
      {prefix}
    </Text>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item: any, index: number) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);


const ListItem = ({ item, index }: { item: any, index: number; }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            //@ts-ignore
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}>

              <Avatar
                src={`https://avatars.dicebear.com/api/human/${item.id}.svg?background=%23f0f0f0`}
                radius={1000}
              />
              <span>{item.content}</span>
              
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};




const DragList = () => {

  const s = {
    "nonmembers": [
      { "id": "item-4", "prefix": "nonmembers", "content": "Rafael Rivas" },
    ],
    "members": [
      { "id": "item-1", "prefix": "members", "content": "Edgar Santiago" },
      { "id": "item-2", "prefix": "members", "content": "Ricardo Zertuche" },
      { "id": "item-3", "prefix": "members", "content": "Alejandro Cardenas" },
    ]
  };

  // const [elements, setElements] = React.useState(ss);
  const [elements, setElements] = React.useState(s);

  useEffect(() => {
    // setElements(generateLists());

  }, []);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    // const listCopy: MyListCopy = {};
    const listCopy: ListCopyType = { ...elements };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy as any);
  };



  return (
    <div >
      <ScrollArea h={300} style={{minWidth:'400px',background:'blue'}}>


      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{
          display: "flex",
          gridTemplateColumns: "1fr1fr1fr",
          gridGap: "8px",
          // gap: "8px",
        }}>
          {lists.map((listKey) => (
            <DraggableElement
            elements={elements[listKey]}
            key={listKey}
            prefix={listKey}
            />
            ))}
        </div>
      </DragDropContext>
            </ScrollArea>
    </div>
  );
};

export default DragList;
