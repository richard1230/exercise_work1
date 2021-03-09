

// all actions
import {IGlobalProps} from "./Context";

const reducer = (state:IGlobalProps, action:any)=>{
    //(文本，图片)添加、编辑、改变(事件响应)，删除
    switch (action.type) {
        case 'updateElements': {
          const { payload } = action;
          return {...state, _elementContent: payload}
        }
        case 'addPic': {
            const { payload } = action;
            return {...state,_elementContent:[...state._elementContent,...payload]};
        }
        case 'addTxt':{
            const { payload } = action; //list需要新加数据
            return {...state,_elementContent:[...state._elementContent,...payload]};
        }
        case 'editPic':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        case 'editTxt':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        case 'txtChange':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        };
        case 'picChange':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        };
        case 'savePic':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        };
        case 'deleteEl':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        case 'deleteAll':{ //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        case 'makeBorderShow': { //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        case 'hideBorderShow': { //改变数据
            const { payload } = action;
            return {...state,...payload};
        }
        default:
            throw new Error();
    }
}





export default reducer