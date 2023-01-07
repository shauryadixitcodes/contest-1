/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  let newArray = [
    {id: 1 , name: "abc" , age: "1" , profession: "nothing" },
    {id: 2 , name: "def" , age: "2" , profession: "something"},
    {id: 3 , name: "ghi" , age: "3" , profession: "everything"},
  ]
  
  function PrintDeveloperswithMap() {
       arr.map((work) => {
        if(work.profession =="developer"){
            console.log(work)
        }
       });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((work) => {
        if(work.profession =="developer"){
            console.log(work)
        }
    });
  }
  
  function addData() {
    arr.push({ id: 4, name: "Shaurya", age: "19", profession: "learner" });
    console.log(arr);
  }
  
  function removeAdmin() {
    arr = arr.filter((work) => {
        work.profession != "admin"
    });
    console.log(arr);
  }
  
  function concatenateArray() {
    const addArray = arr.concat(newArray);
    console.log(addArray);
  }