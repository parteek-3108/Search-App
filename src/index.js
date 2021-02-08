import React from 'react';
import ReactDOM from 'react-dom';
import { employees } from './data/employees';
import SearchBar from './components/SearchBar/SearchBar';
import RenderEmployees from './components/RenderEmployees/RenderEmployees';
import './index.css';

class App extends React.Component {
    state = {
        employees
    }
    filterEmployees = (searchTerm) => {
        this.setState({
            employees : employees.filter((employee) => {
                return employee.name.toLowerCase().startsWith(searchTerm) || employee.location.toLowerCase().startsWith(searchTerm)
            })
        })
    }
	render() {
		return (
            <div className="app">
                <SearchBar search = { this.filterEmployees } />
                <RenderEmployees employees={ this.state.employees } />
            </div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
