import React,{ Component } from 'react';
import './App.css';
import GoogleLogin from "react-google-login";
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			newItem:'',
			list:[]
		}
	}
	updateInput(key,value){
		this.setState({
			[key] :value
		});
	}

	addItem(){
		const newItem={
			id:1+Math.random(),
			value:this.state.newItem.slice()
		};

		const list=[...this.state.list];

		list.push(newItem);

		this.setState({
			list,newItem:""
		});
	}

	deleteItem(id){

		const updatedList=this.state.list.filter(item => item.id !== id);

		this.setState({list:updatedList});
	}
	resposeGoogle=(r)=>{
		console.log(r);
	}
	render(){
		return(
			<div className="App">
				<div>
					 <GoogleLogin
						 clientId="481793852233-6gl4pvfj7uf055nqnb2n52gd6p6hf5ve.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={this.resposeGoogle}
						onFailure={this.resposeGoogle}
						cookiePolicy={'single_host_origin'}></GoogleLogin>
				</div>
				<div>
					<br/>
					<input className="inp"
						type="text"
						placeholder="Add an item here..."
						value={this.state.newItem}
						onChange={(e) => this.updateInput("newItem",e.target.value)} 
					/>
					<button className="add"
						onClick={()=>this.addItem()}
					>
					Add
					</button>
					<br/>
					<ul>
						{this.state.list.map(item=>{
							return(
								<li key={item.id}>
									{item.value}
									<button
										onClick={()=>this.deleteItem(item.id)}

									>X
									</button>
								</li>
								)
						})}
					</ul>
				</div>
			</div>
		);
	};
}
export default App;