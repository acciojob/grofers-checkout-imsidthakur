const getSumBtn = document.createElement("button");
const table = document.getElementsByTagName('table')[0];
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 const  prices = document.querySelectorAll(".price");
 let sum = 0;
 

 prices.forEach((num) => {
	 sum += Number(num.textContent);
 })

 const row = document.createElement("tr");
 const col1 = document.createElement("td");
 col1.setAttribute("colspan",2);
 col1.setAttribute("id","ans");
 col1.textContent = sum;

 row.append(col1);
 table.append(row);

};

getSumBtn.addEventListener("click", getSum);

