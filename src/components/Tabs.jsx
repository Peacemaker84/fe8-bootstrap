import { display } from "@mui/system";
import React, { useState } from "react";
import {} from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const data = [
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse
    obcaecati repellendus. Accusantium eos rerum ut voluptatum illum quod in.
  </p>,
  <p>
    Corrupti quae praesentium consectetur quam magnam incidunt nemo sunt illo
    provident harum amet, veniam, quaerat doloremque veritatis, facilis nulla
    aut!
  </p>,
  <p>
    Rem possimus quia dolore sequi quasi accusamus dolor laborum deserunt
    voluptatum, molestias esse quo sint, vel sunt earum, molestiae minus.
  </p>,
  <p>
    Eligendi, eum unde commodi dicta magni aliquid provident ratione sequi
    voluptate delectus hic id aut tenetur modi voluptas sed exercitationem.
  </p>,
  <p>
    Adipisci provident minima voluptatibus possimus quidem magnam commodi ipsa
    assumenda, atque minus harum nam, illum quia. Magnam sed ea assumenda!
  </p>,
];

export default () => {
  const names = data.map((el, i) => `Tab ${i + 1}`);
  //   const [active, setActive] = useState(0);
  const [active, setActive] = useState(names[0]);

  const handler = (e) => {
    setActive(e.target.textContent);
  };

  //   первый вариант

  //   return (
  //     <>
  //       <h2>Вкладочки</h2>
  //       <div className="tabs-container">
  //         {/* p*5>lorem20 */}
  //         <div className="tabs-nav">
  //           {names.map((el, i) => (
  //             <button
  //               key={i}
  //               onClick={(e) => setActive(i)}
  //               className={active === i ? "active" : ""}
  //             >
  //               {el}
  //             </button>
  //           ))}
  //         </div>
  //         {data.map((el, i) => (
  //           <div
  //             className="tabs-data"
  //             style={{ display: active === i ? "block" : "none" }}
  //           >
  //             <h3> {names[i]}</h3>
  //             {el}
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
  // };

  // второй вариант

  return (
    <Container>
      <h2>Вкладочки</h2>
      <div className="tabs-container">
        {/* p*5>lorem20 */}
        <div className="tabs-nav">
          {names.map((el, i) => (
            <button
              key={i}
              onClick={handler}
              className={active === el ? "active" : ""}
            >
              {el}
            </button>
          ))}
        </div>
        {data.map((el, i) => (
          <div
            className="tabs-data"
            style={{ display: active === names[i] ? "block" : "none" }}
          >
            <h3> {names[i]}</h3>
            {el}
          </div>
        ))}
      </div>
    </Container>
  );
};
