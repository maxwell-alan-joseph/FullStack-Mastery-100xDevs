const expenditure = [
  {id: 1, price: 103, category: "Food", itemName: "Pizza"}, 
  {id: 2, price: 601, category: "electronics", itemName: "HeadPhone"},
  {id: 3, price: 103, category: "clothing", itemName: "Shirt"},
  {id: 4, price: 106, category: "Food", itemName: "Fries"},
  {id: 5, price: 140, category: "clothing", itemName: "trousers"},
  {id: 6, price: 134, category: "electronics", itemName: "mouse-pad"},
  {id: 7, price: 150, category: "clothing", itemName: "Top"},
  {id: 8, price: 60, category: "Food", itemName: "Corn"},
  {id: 9, price: 105, category: "clothing", itemName: "jeans"},
  {id: 10, price: 20, category: "Food", itemName: "Bottle"}
]

function totalExpenditure(expenditure){
//creating an empty object to store expenses
  const completeExpenditure = {};
//looping through each of the expenditure 
  for (let spendings of expenditure){
    const category = spendings.category;
    const price = spendings.price;
//adding up prices by category 
    if (completeExpenditure[category]) {
      completeExpenditure[category] += price;
    }else{
      completeExpenditure[category] = price;       
    }
  }
//converting object to an array 
  const result = [];

  for (let category in completeExpenditure) {
    result.push({
      category: category, 
      totalSpent: completeExpenditure[category] 
    });
  }
  return result; 
}

console.log(totalExpenditure(expenditure));