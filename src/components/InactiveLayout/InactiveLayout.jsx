import InactiveHeader from "../InactiveHeader/InactiveHeader"


const InactiveLayout = ({children}) => {
  return (
    <>
    <InactiveHeader/>
     <div>{children}</div>
    </>
   
  )
}

export default InactiveLayout