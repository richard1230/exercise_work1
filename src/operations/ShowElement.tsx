import React, {FormEvent, useContext, MouseEvent, useState,useEffect} from 'react'
import {AppContext, ContentType} from '../Context';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ShowElement:React.FC<any> = (props) =>{

    const { state: globalProps, dispatch } = useContext(AppContext);
    const { _elementContent: elementContent } = globalProps;

    //重新排序函数
    const reorder = (list:any, startIndex:number, endIndex:number) => {
        const result:ContentType[] = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };


    const onDragEnd = (result:any) =>{
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const newitems = reorder(
            elementContent,
            result.source.index,
            result.destination.index
        );
        dispatch(
            {
                type:"updateElements",
                payload:newitems
            }
        )
        //
    }
    //文字编辑
    const editTxt = (e: FormEvent<HTMLParagraphElement>,id:string) => {
        const txtItem = elementContent.find(e => (e.id === id))
        const newSate ={
            isDeleteShow:true,
            isTextEditShow:true,
            isPicEditShow:false,
            txtvalue:txtItem?.content,
            idstate:id,
        }
        dispatch({
            type: 'editTxt',
            payload: newSate
        })
    };

    //编辑图片
    const editPic = (e: FormEvent<HTMLImageElement>,id:string) => {
        const picItem = elementContent.find(e => e.id === id)
        const newSate ={
            isDeleteShow:true,
            isPicEditShow:true,
            isTextEditShow:false,
            picvalue:picItem?.content,
            idstate:id,
        }
        dispatch({
            type: 'editPic',
            payload: newSate
        })
    };

    //showborder
    const makeBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {
        const element = elementContent.find(e => e.id === id)
        if(element)
            element.isBorderShow = true
        dispatch({
            type: 'makeBorderShow',
            payload: elementContent
        })
    };

    //hideborder
    const hideBorderShow = (e:MouseEvent<HTMLDivElement>,id:string) => {
        const element = elementContent.find(e => e.id === id)
        if(element)
            element.isBorderShow = false
        dispatch({
            type: 'hideBorderShow',
            payload: elementContent
        })
    };

    const getElement = (el:ContentType)=>{
        if (el.type === "pic")
            return (
                <div key={el.id}
                     style={{ border: el.isBorderShow ? '1px solid' : '' }}
                     onMouseEnter={(e) => {
                         makeBorderShow(e, el.id)
                     }}
                     onMouseLeave={(e) => {
                         hideBorderShow(e, el.id)
                     }}>
                    <img
                        src={el.content}
                        onClick={(e) => {
                            editPic(e, el.id)
                        }}
                        alt="loading error"
                        className='img-responsive' />
                </div>)
        else if (el.type === "txt")
            return (
                <div key={el.id}
                     style={{ border: el.isBorderShow ? '1px solid' : '' }}
                     onMouseEnter={(e) => {
                         makeBorderShow(e, el.id)
                     }}
                     onMouseLeave={(e) => {
                         hideBorderShow(e, el.id)
                     }}>
                    <p onClick={(e) => {
                        editTxt(e, el.id)
                    }}>{el.content}</p>
                </div>)
    }

    return(
        <div className='col-xs-6 text-left' style={{border:'1px solid',display:'block'}}>
            <h3>简单编辑器</h3>
            {
                <DragDropContext  onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {
                            (provided:any )=>(
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    elementContent.map((el, index) => <Draggable key={el.id} draggableId={el.id} index={index}>
                                        {
                                            (provided:any)=>(
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {
                                                        getElement(el)
                                                    }
                                                </div>
                                            )
                                        }

                                    </Draggable>

                                    )
                                    }
                                </div>
                            )
                        }
                    </Droppable>
                </DragDropContext>

            }

        </div>

    )

}

export default ShowElement;