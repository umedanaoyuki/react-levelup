
const style = {
  width: "100%",
  height: "200px",
  backgroudColor: "green"
};

  
export const ChildArea = ({open}) => {
  return (
    <>
      {open ? (<div style={style}><p>子コンポーネント</p></div>) : null}
    </>
  );
};