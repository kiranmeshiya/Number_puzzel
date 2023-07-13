

function btn(x) 
{
  var b1=document.getElementById('b1').value;
  var b2=document.getElementById('b2').value;
  var b3=document.getElementById('b3').value;
  var b4=document.getElementById('b4').value;
  var b5=document.getElementById('b5').value;
  var b6=document.getElementById('b6').value;
  var b7=document.getElementById('b7').value;
  var b8=document.getElementById('b8').value;
  var b9=document.getElementById('b9').value;

  if(b1==1 && b2==2 && b3==3 && b4==4 && b5==5 && b6==6 && b7==7 && b8==8 && b9==' ')
  {
    document.getElementById('b1').disabled = true;
    document.getElementById('b2').disabled = true;
    document.getElementById('b3').disabled = true;
    document.getElementById('b4').disabled = true;
    document.getElementById('b5').disabled = true;
    document.getElementById('b6').disabled = true;
    document.getElementById('b7').disabled = true;
    document.getElementById('b8').disabled = true;
    document.getElementById('b9').disabled = true;
    showConfirmBox();
  }

  else
  {

        // ========================== Condition For button - 1 =============================

        if(x==1)
        {
              if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }
              else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }   


        }

        // ========================== Condition For button - 2 =============================

        else if(x==2)
        {
                if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }
                else if(document.getElementById('b'+(+x-1)).value==" ")
                    {
                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

                else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }      

        }

        // ========================== Condition For button - 3 =============================

        else if(x==3)
        {
                
                if(document.getElementById('b'+(+x-1)).value==" ")
                    {
                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

                else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }      

        }

        // ========================== Condition For button - 4 =============================

        else if(x==4)
        {
                
                 if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }
                else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }      
                else if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

        }
        
        // ========================== Condition For button - 6 =============================
                      
        else if(x==6)
        {
                
                 if(document.getElementById('b'+(+x-1)).value==" ")
                    {

                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }
                else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }      
                else if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }
        }
        // ========================== Condition For button - 7 =============================

        else if(x==7)
        {

                if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }
        }

        // ========================== Condition For button - 8 =============================

        else if(x==8)
        {

                if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-1)).value==" ")
                    {
                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

        }

        // ========================== Condition For button - 9 =============================

        else if(x==9)
        {
                if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-1)).value==" ")
                    {
                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }
        } 

        // ========================== Condition For button - 5 =============================

        else
        {
                 if(document.getElementById('b'+(+x+1)).value==" ")
                    {

                      document.getElementById('b'+(+x+1)).value = document.getElementById('b'+x).value;
                      document.getElementById('b'+x).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-3)).value==" ")
                    {
                      document.getElementById('b'+(+x-3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }

                else if(document.getElementById('b'+(+x-1)).value==" ")
                    {
                      document.getElementById('b'+(+x-1)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }
                    else if(document.getElementById('b'+(+x+3)).value==" ")
                    {
                      document.getElementById('b'+(+x+3)).value = document.getElementById('b'+(+x)).value ;
                      document.getElementById('b'+(+x)).value = ' ';
                    }      

        }
  }
}
  
  function showConfirmBox() {
      document.getElementById("overlay").hidden = false;
    }

function isConfirm(answer) 
      {
        if (answer) 
          {
              location.reload();
          } 
        else 
          {
            closeConfirmBox();
          }
        
      }
function closeConfirmBox() {
        document.getElementById("overlay").hidden = true;
        
      }


