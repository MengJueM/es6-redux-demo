const ADD_NEW_ITEM = 'Add_New_Item';

function actionAddNewItem (text) {
    return {
        type: ADD_NEW_ITEM,
        payload: text
    }
}

module.export = { ADD_NEW_ITEM, actionAddNewItem };