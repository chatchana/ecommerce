import React, { Component } from 'react';
import { Grommet, Box, TextInput, Button } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import './App.css';
import { Search } from 'grommet-icons';

class App extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    } 
    
    this.productListRef = React.createRef();
  }

  handleSearch = () => { 
    this.productListRef.current.filterProduct();
  }

  render() {
    return (
      <Grommet plain full>
        <Box direction="column" fill>
          <AppBar />
          <Box
            direction="row"
            pad="medium"
            fill
          >
            <Box width="medium">
              <TextInput onChange={(e) => this.setState({query: e.target.value})}/>                
              <br/>
              <Button primary pad="small" margin="small" icon={<Search />} label="Search" onClick={this.handleSearch}/>
            </Box>
            <Box flex>
              <ProductList ref={this.productListRef} search={this.state.query} />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
