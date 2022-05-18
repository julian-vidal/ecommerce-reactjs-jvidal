import { useEffect, useState } from "react";

const HasStock = ({stock}) => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [iconClass, setIconClass] = useState("");

    useEffect(() => {
        if(stock == 0) {
            setIconClass("las la-times-circle text-danger me-1")
            setText1("Out");
            setText2("of stock");
        } else if (stock == 1) {
            setIconClass("las la-check-circle text-success me-1")
            setText1("Item");
            setText2("in stock");
        } else {
            setIconClass("las la-check-circle text-success me-1")
            setText1("Items");
            setText2("in stock");
        }
    } ,[stock])

  return (
    <>
        <i className={iconClass}></i> {stock >0 ? stock : ""} {text1} {text2}
    </>
  )
}

export default HasStock