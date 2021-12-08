class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={username:"",
                    password:"",
                email:"", password2:""};
                    this.username=React.createRef();
                    this.passowrd=React.createRef();
    }
    
    
    render(){
        var header ={
            backgroundColor:"blue",
            padding:10,
            fontFamily:"Arial",
            marginTop: 0,
            marginLeft:0,
            color:"White",
            textAlign:"center",
            width:"100%",
            display:"table",
            position:"absolute"
        }
        var form={
            //display:"inline-block",
            marginLeft:"35%",
            marginTop:"15%",
            //border: "10px solid black",
            paddingRight: 150,
            paddingTop:50,
            paddingDown: 50,
            paddingLeft:150,
            position:"absolute",
            color:"crimson",
            backgroundColor:"#F0F8FF",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px black"
        }

        var main={
            marginTop:0, 
            backgroundColor:"black"
        }
        return(
            <div style={main}>
                <div style={header}><h1>Twitter</h1></div><br/>
                <div style={form}>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter Email: </label><br/><input type="text" name="email" defaultValue="Email-Id" onChange={this.handleChange}/><br/><br/>
                        <label>Enter your Username: </label><br/><input type="text" name="username" defaultValue="Username" ref= {this.username} onChange={this.handleChange}/><br/><br/>
                        <label>Set your Password: </label><br/><input type="text" name="password" defaultValue="Password" ref={this.password} onChange={this.handleChange}/><br/><br/>
                        <label>Repeat Password: </label><br/><input type="text" name="password2" defaultValue="Repeat Password" onChange={this.handleChange}/><br/><br/>
                        <input type = "submit" value = "Submit" />
                    </form>
                </div>
            </div>
        )
    handleSubmit=(event)=>
    {
        event.preventDefault();
        alert("Form submitted");
    }

    handleChange=(event)=>
    {
        var name1 = event.target.name
        var value1 = event.target.value
        if(name1 == "email")
        this.setState({email:value1})
        if(name1 == "username")
        this.setState({username:value1})
        if(name1 == "password")
        this.setState({passowrd:value1})
        if(name1 == "password2")
        this.setState({password2:value1})
    }

    }
}

ReactDOM.render(<Register/>,
    document.getElementById("root"))