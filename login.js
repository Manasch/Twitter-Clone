const React = require("react")
const ReactDOM=require("react-dom")
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={username:"",
                    password:""};
                    this.username=React.createRef();
                    this.passowrd=React.createRef();
    }
    handleSubmit=(event)=>
    {
        event.preventDefault();
        this.state.username=this.username.current.value;
        this.state.password=this.passowrd.current.value;
    }
    handleChange=(event)=>
    {
        var name1 = event.target.name
        var value1 = event.target.value
        if(name1 == "username")
        this.setState({username:value1})
        if(name1 == "password")
        this.setState({passowrd:value1})
    }
    
    render(){
        // var header ={
        //     backgroundColor:"blue",
        //     padding:10,
        //     fontFamily:"Arial",
        //     marginTop: 0,
        //     marginLeft:0,
        //     color:"White",
        //     textAlign:"center",
        //     width:"100%",
        //     display:"table",
        //     position:"absolute"
        // }
        // var form={
        //     //display:"inline-block",
        //     marginLeft:"35%",
        //     marginTop:"15%",
        //     //border: "10px solid black",
        //     paddingRight: 150,
        //     paddingTop:50,
        //     paddingDown: 50,
        //     paddingLeft:150,
        //     position:"absolute",
        //     color:"crimson",
        //     backgroundColor:"rgb(238, 224, 241)",
        //     borderRadius: "10px",
        //     boxShadow: "5px 5px 10px black"
        // }

        // var main={
        //     marginTop:0, 
        //     backgroundColor:"black"
        // }
        return(
            <div  className="main">
                <div  className="header"><h1>Raven</h1></div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div  className="form">
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="myClass">
                        <label>Enter your Username: </label><br/><input type="text" defaultValue="Username" onChange= {this.handleChange}ref= {this.username}/><br/><br/>
                        <label>Enter your Password: </label><br/><input type="text" defaultValue="Password" onChange= {this.handleChange} ref={this.password}/><br/><br/>
                       <input type="button" className="button-74"value="submit"/>
                       </div>
                    </form>
                </div>
            </div>
        )
    }
}

// ReactDOM.render(<Register/>,
//     document.getElementById("root"))
export default Register