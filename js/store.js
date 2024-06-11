export function updateStorage(){
    sessionStorage.setItem("store", JSON.stringify(store));
}

export function initStore() {
    const storage = sessionStorage.getItem("store");
    if (!storage) updateStorage();

    const { dateList, detailList, todayId, currentFunds, isFirstEdit} = 
        JSON.parse(storage);
    store.currentFunds = currentFunds;
    store.isFirstEdit = isFirstEdit;
    store.dateList = dateList;
    store.detailList = detailList;
    store.todayId = todayId;
}

export function addNewHistory(newHistory){
    try{

        if(store.detailList[todayId]){
            store.detailList[todayId] = store.detailList[todayId].push(newHistory)
        } else{
            store.detailList[todayId] = [newHistory];
        }
        store.currentFunds -= newHistory.amount;

        updateStorage();
        return true;
    } catch (error){
        alert(error);
        return false;
    }
}

export function removeHistory(dataId, itemId){
    try{

    } catch[

    ]
}
