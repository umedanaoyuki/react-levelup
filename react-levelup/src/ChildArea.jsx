export const ChildArea = ({open}) => {
  return (
    <>
      {open ? (<div><p>子コンポーネント</p></div>): null}
    </>
  );
};