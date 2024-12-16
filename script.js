// const checkBoxList =document.querySelectorAll('.custom-checkbox')
// checkBoxList.forEach((checkbox) => {
//   checkbox.addEventListener('click', (e) => {
//     // console.log('checkbox Clicked')
//     checkbox.parentElement.classList.toggle('completed')
//   })
// })

const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allFieldsFilled = [...inputFields].every(function(input){
      return input.value
    })

    if(allFieldsFilled){
      checkbox.parentElement.classList.toggle('complete')
    }
  })
})