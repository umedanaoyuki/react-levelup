
import { memo } from "react"; 

const style = {
  width: "100%",
  height: "200px",
  backgroudColor: "green"
};

  
export const ChildArea = memo(({open}) => {

  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  


  return (
    <>
      {open ? (<div style={style}><p>子コンポーネント</p></div>) : null}
    </>
  );
});