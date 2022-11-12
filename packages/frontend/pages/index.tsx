import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={[5, 10]}>
        <Heading as={"h1"}>Quant Interview Practice</Heading>
      </Box>
    </PageLayout>
  );
};

class Prompt_Box  
{  
 show()  
 {  
  var promptValue = prompt('Enter any value in below', '');  
  if (promptValue != null) {  
   document.getElementById("Status").innerHTML = "Prompt Box value ->" + promptValue;  
  } else  
  {  
   document.getElementById("Status").innerText = "You cancel Prompt Box";  
  }  
 }  
}  
window.onload = () =>  
 {  
  var bttn = < HTMLButtonElement > document.getElementById("Button1");  
  bttn.onclick = function()  
  {  
   var obj = new Prompt_Box();  
   obj.show();  
  }  
 };  
export default Home;
