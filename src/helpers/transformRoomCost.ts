export const transformRoomCost = (cost : number) => {

    const costToString: string = cost.toString().trim();
    let firstGroup = costToString.slice(costToString.length - 3);
    let secondGroup = costToString.slice(costToString.length - 6, costToString.length - 3);
    let thirdGroup = costToString.slice(costToString.length - 9, costToString.length - 6);

    return costToString.length >= 4 ?
        `$${thirdGroup.length >=1 ? thirdGroup+'.' : ''}${secondGroup.length >= 1 ? secondGroup+'.' : ''}${firstGroup}`
        :
        costToString;
}