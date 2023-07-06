

const a=[];

function addValue()
{
  const p=a.length;
  let displayText='';
  for(let x=0;x<p;x++)
  {
    const html=`
    <div> ${a[x].name}</div>

    <div> ${a[x].dueDate}</div>
    
    <button class="del"
    onclick="a.splice(${x},1); addValue(); ">Delete</button>
    `;

     displayText+=html;
  }
  document.querySelector('.show').innerHTML=displayText;
}


function keyPressed(event)
{
  if(event.key ==='Enter')
  {
    addClicked();
  }
}

function addClicked()
{
  const name=document.querySelector('.ipBox').value;
  const dueDate=document.querySelector('.js-date').value;
  a.push(
    {
      name: name,
      dueDate:dueDate
    }

  );
  addValue();
  document.querySelector('.ipBox').value='';
  document.querySelector('.js-date').value='';

}
