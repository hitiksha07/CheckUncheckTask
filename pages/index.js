// import React, { useState } from 'react'

// function Firsttask() {
//     let first = [
//         {
//             id: 0,
//             value: 1990
//         },
//         {
//             id: 1,
//             value: 1991
//         },
//         {
//             id: 2,
//             value: 1992
//         },
//         {
//             id: 3,
//             value: 1993
//         },
//         {
//             id: 4,
//             value: 1994
//         }
//     ]
//     const [isCheckAll, setIsCheckAll] = useState(false);
//     const [isCheck, setIsCheck] = useState([]);
//     const [list, setList] = useState([...first]);

//     function check(e) {
//         setIsCheckAll(!isCheckAll);
//         setIsCheck(list.map(x => x.id));
//         if (isCheckAll) {
//             setIsCheck([]);
//         }
//     }

//     function all(e) {
//       let isCheck = [...isCheck, e.target.id];
//        if (!e.target.checked) {
//            setIsCheck(isCheck.filter(item => item !== id));
//         }
//         setIsCheck([...isCheck])

//     }
//     return (
//         <div className='container my-5 py-5'>
//             <table className='table table-striped'>
//                 <thead>
//                     <tr>
//                         <th>select</th>
//                         <th>years</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>
//                             <input type="checkbox" onChange={check} name="" id="" />
//                         </td>
//                         <td>
//                             <div className="row">
//                                 {
//                                     list?.map((x, i) => {
//                                         return <div className="col-auto" key={i}>
//                                             <input type="checkbox" name={x.value}
//                                                 id={x.id}
//                                                 onChange={all}
//                                                 checked={isCheck?.includes(x.id)} value={x.value} />
//                                             <label htmlFor="">{x.value}</label>
//                                         </div>
//                                     })
//                                 }
//                             </div>
//                         </td>
//                     </tr>

//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Firsttask
