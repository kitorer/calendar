import './dayContainer.css';
//create a text box where you can enter text
function daysInMonth () { // Use 1 for January, 2 for February, etc.
  const year = new Date().getYear();
  const month = new Date().getMonth() +1;
  return new Date(year, month, 0).getDate();
}

function Textbox(){
return(

    <header>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
      <textArea className = "containerClass">
        <insert></insert>
      </textArea>
    </header>

  )
}
export default Textbox;
