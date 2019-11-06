import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            code: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            complete: false,
            warning:<p></p>
        }
    }

    clearEntries = () => {
        this.setState({
            code: "",
            name: "",
            address: "",
            latitude: "",
            longitude: "",
            complete: false,
            warning:<p></p>
        })
    }


    submitForm = () => {
        const{code, name, address, latitude, longitude} = this.state;
        const{data} = this.props;
        if(code === ""||name === ""||address ===""||latitude ===""||longitude ===""){
            this.setState({warning: <div className = "warning">Please Fill Out All Fields Before Submitting</div> })
        } else{
            const newId = Math.max(...data.map((x) => x.id)) + 1;
            const newBuilding = {
                newId,
                code,
                name,
                coordinates:{
                    latitude,
                    longitude
                },
                address
            }
            this.props.addBuilding([...data, newBuilding]);
            this.setState({warning: <p></p>})
            this.clearEntries()
        }
    }


    render(){
        return(
            <div className = "addFunction">
                <b>Add a Building to the Directory</b>
                <br/>
                <p className = "warning">{this.state.warning}</p>
                <form id = "new-building-form">
                    <p>Building Code:</p>
                    <input 
					    type="text"
					    placeholder="Enter your building code here" 
					    value = {this.state.code}
					    onChange = {x => this.setState({code: x.target.value})}
				    />
                    <p>Building Name:</p>
                    <input 
					    type="text"
					    placeholder="Enter your building name here" 
					    value = {this.state.name}
					    onChange = {x => this.setState({name: x.target.value})}
				    />
                    <p>Building Address:</p>
                    <input 
					    type="text"
					    placeholder="Enter your building's address here" 
					    value = {this.state.address}
					    onChange = {x => this.setState({address: x.target.value})}
				    />
                    <p>Building Longitude:</p>
                    <input 
					    type="text"
					    placeholder="Enter your building's longitude here" 
					    value = {this.state.longitude}
					    onChange = {x => this.setState({longitude: x.target.value})}
				    />
                    <p>Building Latitude:</p>
                    <input 
					    type="text"
					    placeholder="Enter your building's latitude here" 
					    value = {this.state.latitude}
					    onChange = {x => this.setState({latitude: x.target.value})}
				    />
                </form>
                <button onClick = {this.submitForm}>Add Building</button>
                <button onClick = {this.clearEntries}>Clear</button>
            </div>
        );
    }
}
export default AddBuilding;

