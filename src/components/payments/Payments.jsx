import { Radio } from "@mui/material";
import { useState } from "react";
import { listMethodPayment } from "../../utils";

const Payments = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col">
      <div>
        {listMethodPayment &&
          listMethodPayment.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActive(index)}
              className="flex items-center gap-x-3 cursor-pointer">
              {<Radio checked={active === index}></Radio>}
              <div className="flex items-center gap-x-3 h-[64px]">
                <img src={item.url} width="32" height="32" alt="icon" />
                <span
                  className={`text-ctext transition-all ${active === index && "text-cblue"}`}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Payments;
