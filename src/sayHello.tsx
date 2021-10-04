export interface IHello {
     email: string;
 }
export default function SayHello(props:IHello){
    const {email} = props;
    const myResponse = email && email.length > 0 ? `Hello ${email}` : "I don't know who YOU are!";
    return (<div>{myResponse}</div>);
}
