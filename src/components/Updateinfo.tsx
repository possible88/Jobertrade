export{};
// import axios from "axios";
// import {User} from "../models/User";
// import { connect } from 'react-redux';
// import {setUserAction} from "../redux/action/setUserAction";
//
// const Updateinfo = (props: {user: User, setUserAction: (user: User) => void}) => {
//     const [first_name, setFirstname] = useState('');
//     const [last_name, setLastname] = useState('');
//     const [user_name, setUsername] = useState('');
//
//     useEffect(()=> {
//
//                 setFirstname(props.user.first_name);
//                 setLastname(props.user.last_name);
//                 setUsername(props.user.user_name);
//
//
//     },[props.user])
//
//     const infoSubmit =  async (e: SyntheticEvent) => {
//       e.preventDefault();
//
//       const {data} = await axios.put('users/info', {
//           first_name,
//           last_name,
//           user_name
//       })
//
//         props.setUserAction(new User(
//             data.id,
//             data.first_name,
//             data.last_name,
//             data.email,
//             data.user_name,
//             data.country,
//             data.profile_pic,
//             data.phone,
//         ));
//     }
//
//     return (
//         <form onSubmit={infoSubmit}>
//             <div style={{marginBottom: '20px', position: 'relative'}}>
//                 <b>Update Info</b>
//             </div>
//                 <div className="form-floating"><input
//                     type="text" className="bg-light form-control" id="floatingInput1" defaultValue={first_name}
//                     onChange={event => setFirstname(event.target.value)} placeholder="name@example.com"/><label htmlFor="floatingInput1">First Name</label>
//                 </div>
//                 <div className="form-floating"><input
//                     type="text" className="bg-light form-control" id="floatingInput1" defaultValue={last_name} onChange={event => setLastname(event.target.value)}
//                     placeholder="name@example.com"/><label htmlFor="floatingInput1">Last Name</label>
//                 </div>
//                 <div className="form-floating"><input
//                     type="text" className="bg-light form-control" id="floatingInput1" defaultValue={user_name} onChange={event => setUsername(event.target.value)}
//                     placeholder="name@example.com"/><label htmlFor="floatingInput1">Username</label>
//                 </div>
//             <div className="py-3 pb-4 border-bottom">
//                 <button type="submit" className="btn btn-primary mr-3">Save Changes</button>
//             </div>
//         </form>
//
//     );
// };
//
// const mapStateToProps = (state: { user: User }) => {
//     return {
//         user: state.user
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch<any>) => {
//     return{
//         setUserAction: (user: User) => dispatch(setUserAction(user))
//     }
// }
// export default connect (mapStateToProps, mapDispatchToProps)(Updateinfo);