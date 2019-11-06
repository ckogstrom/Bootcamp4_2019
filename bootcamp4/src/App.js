import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: props.data
    };
  }

  filterUpdate = (value) => {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value.toLowerCase()});
  }

  selectedUpdate = (id) => {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id});
  }

  addBuilding = (newData) => {
    this.setState({data: newData})
  }

  deleteBuilding = (id) => {
    const newData = this.state.data.filter(building => building.id !== id)
    this.setState({data: newData})
  }



  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1 className = "title">UF Directory App</h1>
        </div>

        <Search 
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code    Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedBuilding = {this.state.selectedBuilding}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    deleteBuilding = {this.deleteBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data = {this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
            </div>
            <AddBuilding
              data = {this.state.data}
              addBuilding = {this.addBuilding.bind(this)}
            />
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
